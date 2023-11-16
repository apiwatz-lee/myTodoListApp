import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ListTodo = ({task,id,changeStatusToEdit,handleDeleteTodo}) => {
  return (
    <div className='border border-sky-800 text-white text-opacity-80 w-64 rounded-md flex justify-between items-center py-1 px-3 shadow-xl'>
        <p className='w-full text-center font-bold text-sky-900'>{task}</p>
        <span className='flex gap-2'>
            <FaEdit onClick={()=>changeStatusToEdit(id)} className='transform transition duration-500 hover:scale-150'/>
            <AiOutlineDelete onClick={()=>handleDeleteTodo(id,task)} className='transform transition duration-500 hover:scale-150'/>
        </span>
    </div>
  )
}

export default ListTodo