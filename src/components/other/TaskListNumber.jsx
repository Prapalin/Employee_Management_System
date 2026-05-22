import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='text-white flex mt-10 screen justify-between gap-5'>
      <div className='py-6 px-9 rounded-xl w-[45%]  bg-cyan-500'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-6 px-9 rounded-xl w-[45%]  bg-emerald-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='py-6 px-9 rounded-xl w-[45%]  bg-yellow-500'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Accepted task</h3>
      </div>
      <div className='py-6 px-9 rounded-xl w-[45%] bg-red-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
