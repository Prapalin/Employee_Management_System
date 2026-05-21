import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Email",email);
        console.log("Password",password);
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-blue-400 p-20 bg-zinc-900'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            required className='w-80 bg-transparent outline-none border-2 text-base placeholder:text-gray-400 border-blue-400 py-3 px-4 rounded-full' type="email" placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required className='w-80 bg-transparent outline-none border-2 text-base placeholder:text-gray-400 mt-3 border-blue-400 py-3 px-4 rounded-full' type="password" placeholder='Enter password'/>
            <button className='w-80 text-white mt-12 outline-none border-none text-xl font-bold placeholder:text-white bg-blue-400 py-3 px-4 rounded-full cursor-pointer hover:opacity-80 active:scale-95'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
