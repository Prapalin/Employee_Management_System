import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-75 shrink-0 p-5 rounded-xl bg-pink-700'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='mt-3 tracking-tight'>{data.taskDescription}</p>
        <div className='mt-4'>
            <button className='bg-blue-600 px-2 py-1 rounded text-sm hover:opacity-80 active:scale-95 cursor-pointer'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
