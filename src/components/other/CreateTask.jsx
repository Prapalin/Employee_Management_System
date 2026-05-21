import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-zinc-800 mt-7 rounded'>
        <form className='flex flex-wrap items-start w-full justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='[color-scheme:dark] text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent placeholder:text-gray-600 border-[1px] border-gray-400 mb-4' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc'/>
                </div>
            </div>
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className='text-sm text-white w-full h-44 py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Add description'></textarea>
                <button className=' bg-blue-400 text-white w-full py-3 px-5 rounded text-lg mt-4 cursor-pointer hover:opacity-80 active:scale-95'>Create Task</button>
            </div>
            
            
        </form>
      </div>
  )
}

export default CreateTask
