import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = ({data}) => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
      <div className='text-black font-semibold mb-2 flex justify-between bg-yellow-500 py-2 px-4'>
        <h1 className='text-lg font-medium w-1/5'>Employee</h1>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
      <div id='AllTask'>
        {userData.map((elem,idx)=>{
        return <div key={idx} className='text-white mb-2 flex justify-between rounded border-blue-400 border-2 py-2 px-4'>
                <h1 className='text-lg font-medium w-1/5'>{elem.firstName}</h1>
                <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskNumbers.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskNumbers.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-emerald-500'>{elem.taskNumbers.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
              </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
