import React, { useState } from 'react'

const Header = ({data}) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold '>username👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium cursor-pointer hover:opacity-80 active:scale-95 text-white rounded-sm px-5 py-2'>Log out</button>
    </div>
  )
}

export default Header
