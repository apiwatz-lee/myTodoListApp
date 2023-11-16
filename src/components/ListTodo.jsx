import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ListTodo = ({task,id,changeStatusToEdit,handleDeleteTodo,toggleCompletedTodo,todo}) => {

  return (
    <div className='border border-sky-800 text-white text-opacity-80 w-64 rounded-md flex justify-between items-center py-1 px-3 shadow-xl'>
        <input type="checkbox" checked={todo.isCompleted} onChange={()=>toggleCompletedTodo(id)} />
        <p className={`w-full text-center font-bold text-sky-900 ${todo.isCompleted ? 'line-through opacity-50' : null}`}>{task}</p>
        <span className='flex gap-2'>
            <FaEdit onClick={()=>changeStatusToEdit(id)} className='transform transition duration-500 hover:scale-150'/>
            <AiOutlineDelete onClick={()=>handleDeleteTodo(id,task)} className='transform transition duration-500 hover:scale-150'/>
        </span>
    </div>
  )
}

export default ListTodo