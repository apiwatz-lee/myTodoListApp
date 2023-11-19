import React from 'react'
import { useState } from 'react'

const EditTodo = ({task,handleUpdateTodo,id,setAlert}) => {
    
    const [title,setTitle] = useState(task)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === "") return setAlert({title:"Please type some text",status:"error"})
        handleUpdateTodo(title,id,task)
    }

    return (
        <div className='border border-sky-900 w-64 rounded-md' key={id}>
            <form className='flex justify-between items-center py-1 px-3' onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    className='rounded-md outline-none py-1 px-3 w-48 h-8 text-sky-900 placeholder:text-sky-200 placeholder:text-opacity-50 bg-transparent font-bold placeholder:font-normal' 
                    placeholder='Edit your task ?'
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}} /> 
                <button 
                    type="submit" 
                    className='mr-1 px-1 rounded-md w-10 border border-sky-900 text-sky-900 font-bold hover:bg-sky-900 hover:text-white duration-1000'
                    >Edit</button>

            </form>
        </div>
  )
}

export default EditTodo