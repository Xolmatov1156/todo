import React, { useState } from 'react'
import UpdateBtn from '../../assets/images/update.svg'
import DeleteBtn from '../../assets/images/delete.svg'

export default function Todo() {
  const [todos, setTodos] = useState([])
  const FormSubmit = (e) => {
      e.preventDefault()
      const data = {
          id:todos.length + 1,
          title:e.target.todo.value,
          isComplated:false,
      }
      setTodos([...todos, data])
      e.target.reset()
  } 
  return (
    <>
      <div className='w-[650px] border-[2px] border-violet-500 mx-auto mt-[100px] py-5 rounded-lg'>
        <h1 className='text-center text-[28px] font-normal text-violet-500 tracking-wide'>Todo</h1>
      <form onSubmit={FormSubmit} className='w-[600px] mx-auto mt-[50px] gap-5 flex'>
        <input type="text" placeholder='Enter your todo' required name='todo' autoComplete='off' className='outline-none border-[1px] border-slate-500 w-[79%] p-[10px] rounded-md hover:bg-violet-400 hover:placeholder:text-white hover:text-white'/>
        <button className='bg-violet-600 w-[20%] py-[10px] rounded-md text-white hover:text-slate-500 hover:bg-white hover:border-[1px] hover:border-slate-500'>Add</button>
        </form>
        <div className='w-[600px] mx-auto flex justify-between mt-[50px]'>
          <button className='w-[150px] py-3 bg-violet-500 text-white rounded-md text-[14px]'>All (0)</button>
          <button className='w-[150px] py-3 bg-violet-500 text-white rounded-md text-[14px]'>Complated (0)</button>
          <button className='w-[150px] py-3 bg-violet-500 text-white rounded-md text-[14px]'>Uncomplated (0)</button>
        </div>
      <ul className='w-[600px] mx-auto flex flex-col gap-5 mt-[50px]'>
            {todos.map(item => (
                <li className='w-full bg-violet-500 text-white rounded-md p-[10px] flex justify-between'>{item.title}
                <div className='flex items-center gap-3'>
                <input type="checkbox"/>
                <button><img src={UpdateBtn} alt="update" className='text-white'/></button>
                <button><img src={DeleteBtn} alt="delete" className='text-white'/></button>
                </div>
                </li>
            ))}
        </ul>
      </div>
        
      </>
  )
}   

