import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <div className='h-full w-[300px] flex-shrink-0 p-5 rounded-xl bg-sky-500'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>21 May 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Learn NextJs</h2>
        <p className='mt-3 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas natus, cumque minima dolores voluptatibus.</p>
      </div>
      <div className='h-full w-[300px] flex-shrink-0 p-5 rounded-xl bg-pink-700'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>21 May 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Learn NextJs</h2>
        <p className='mt-3 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas natus, cumque minima dolores voluptatibus.</p>
      </div>
      <div className='h-full w-[300px] flex-shrink-0 p-5 rounded-xl bg-green-500'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>21 May 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Learn NextJs</h2>
        <p className='mt-3 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas natus, cumque minima dolores voluptatibus.</p>
      </div>
      <div className='h-full w-[300px] flex-shrink-0 p-5 rounded-xl bg-orange-400'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>21 May 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Learn NextJs</h2>
        <p className='mt-3 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas natus, cumque minima dolores voluptatibus.</p>
      </div>
      
    </div>
  )
}

export default TaskList
