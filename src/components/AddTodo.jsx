import React from 'react'
import { useState } from 'react'

const AddTodo = ({handleAddToDo,setAlert}) => {

    const [title,setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "") return setAlert({title:"Please type some text",status:"error"})
        handleAddToDo(title)
        setTitle('')
    }

    return (
        <form className='text-center' onSubmit={handleSubmit}>
            
            <label htmlFor="todo-input"/>
            
            <input 
            type="text" 
            className='border border-gray-300 border-opacity-50 p-1 rounded-md mx-2 outline-none text-center bg-transparent text-sky-900 placeholder:text-sky-900 placeholder:font-normal placeholder:text-opacity-50 font-bold' 
            placeholder='List your tasks here'
            onChange={(e)=>{setTitle(e.target.value)}} 
            value={title}
            />   
            
            <button 
            className='border border-sky-900 w-20 rounded-md p-1 font-bold text-sky-900 hover:text-white hover:bg-sky-900 duration-1000 hover:outline-none'
            type="submit"
            >Add</button>

        </form>
  )
}

export default AddTodo