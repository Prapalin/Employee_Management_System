import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold'>Prapalin👋</span></h1>
      <button className='bg-red-600 text-lg font-medium cursor-pointer hover:opacity-80 active:scale-95 text-white rounded-sm px-5 py-2'>Log out</button>
    </div>
  )
}

export default Header
