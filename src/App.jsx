import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

import EditTodo from './components/EditTodo';
import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([])
  const [alert,setAlert] = useState(null)

  
  const handleAddToDo = (title) => {
    setTodos([...todos,{id:uuidv4(),task:title,isEditing:false,isCompleted:false}])
    setAlert({title:`Add ${title} successfully`,status:"success"})
  }

  const changeStatusToEdit = (editId) => {
    setTodos(todos.map((todo)=> todo.id === editId ? {...todo,isEditing:!todo.isEditing}:todo ))
  }

  const handleUpdateTodo = (editTitle,editId,task) => {
    setTodos(todos.map((todo)=>todo.id === editId ?  {...todo,task:editTitle,isEditing:!todo.isEditing}:todo))
    setAlert({title:`Edit ${task} to ${editTitle} successfully`,status:"success"})
  }

  const handleDeleteTodo = (deleteId,deleteTask) => {
    setTodos(todos.filter((todo)=>todo.id !== deleteId))
    setAlert({title:`Delete ${deleteTask} successfully`,status:"error"})
  }

  const toggleCompletedTodo = (toggleId) => {
    const changeStatusToCompleted = todos.map((todo)=>todo.id === toggleId ? {...todo,isCompleted:!todo.isCompleted}:todo)
    setTodos(changeStatusToCompleted)
    const findTask = changeStatusToCompleted.find((item)=>item.id === toggleId) 
    findTask.isCompleted ? setAlert({title:`Congratulation`}):setAlert({title:`Keep it up`})
  }
  
 
  useEffect(()=>{
    setTimeout(()=>{
      setAlert(null)
    },1000)
  },[alert])


  return (
    <main className='border border-transparent min-h-screen bg-mountain flex flex-col items-center'>

      <div className="text-3xl font-bold text-center my-5 text-white relative h-[80px] w-[270px]">
         <h1 className='mt-2'>To Do List</h1> 
         <p className='text-center flex justify-center mt-3 absolute'>
        {alert  ? 
                <span className={`w-64 text-sm ${alert.status === "error" ? 'bg-rose-500 text-white rounded-md':'bg-teal-700 text-white rounded-md'}`}>
                    {alert.title}
                </span> 
              : 
                null}
      </p>
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
                          toggleCompletedTodo={toggleCompletedTodo}
                          todo={todo}
                          />
                  )
          })}
         
      </section>

    </main>
  )
}

export default App
