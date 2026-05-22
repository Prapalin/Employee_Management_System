import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full w-75 shrink-0 p-5 rounded-xl bg-yellow-500'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='mt-3 tracking-tight'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded cursor-pointer hover:opacity-80 active:scale-95'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded cursor-pointer hover:opacity-80 active:scale-95'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
