import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

import EditTodo from './components/EditTodo';
import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([])
  const [alert,setAlert] = useState({})
  
  const handleAddToDo = (title) => {
    setTodos([...todos,{id:uuidv4(),task:title,isEditing:false,completed:false}])
    setAlert({title:`Add ${title} successfully`,status:"success"})
  }

  const changeStatusToEdit = (editId) => {
    setTodos(todos.map((todo)=> todo.id === editId ? {...todo,isEditing:true}:todo ))
  }

  const handleUpdateTodo = (editTitle,editId,task) => {
    setTodos(todos.map((todo)=>todo.id === editId ?  {...todo,task:editTitle,isEditing:!todo.isEditing}:todo))
    setAlert({title:`Edit From ${task} to ${editTitle} successfully`,status:"success"})
  }

  const handleDeleteTodo = (deleteId,deleteTask) => {
    setTodos(todos.filter((todo)=>todo.id !== deleteId))
    setAlert({title:`Delete ${deleteTask} successfully`,status:"error"})
  }

  console.log('alert', alert)

  useEffect(()=>{
    setTimeout(()=>{
      setAlert(null)
    },1000)
  },[alert])

  return (
    <main className='border border-transparent min-h-screen bg-mountain'>

      <h1 className="text-3xl font-bold text-center mt-5 text-white">
         To Do List 
      </h1>

      <div className='text-center flex justify-center my-3'>
        {alert  ? 
                  <p className={`w-64 ${alert.status === "error" ? 'bg-rose-500 text-white rounded-md':'bg-teal-900 text-white rounded-md'}`}>
                      {alert.title}
                  </p> 
                : 
                  null}
      </div>
   
      <AddTodo handleAddToDo={handleAddToDo} setAlert={setAlert}/>

      <section className='flex flex-col items-center justify-center mt-5 gap-2'>
          {todos.map((todo)=>{
            return ( 
                      todo.isEditing
                      ? 
                        <EditTodo 
                          task={todo.task} 
                          id={todo.id}
                          key={todo.id} 
                          handleUpdateTodo={handleUpdateTodo} 
                          setAlert={setAlert}
                          />
                      :
                        <ListTodo 
                          task={todo.task} 
                          key={todo.id} 
                          id={todo.id}
                          changeStatusToEdit={changeStatusToEdit}
                          handleDeleteTodo={handleDeleteTodo}
                          />
                  )
          })}
         
      </section>

    </main>
  )
}

export default App
