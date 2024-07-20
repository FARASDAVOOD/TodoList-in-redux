import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../features/formSlice'

const TodoUpdate = ({id,value}) => {
  
    const dispatch =useDispatch()

  const [value1,setValue1]=useState(value)

  const handleSubmit = (e) => {
    e.preventDefault()
dispatch(update({value1,id}))

  }
  return (
    <div style={{margin:"20px"}}>
       <form onSubmit={handleSubmit} >
      <input placeholder="Enter the update" value={value1} onChange={(e)=>setValue1(e.target.value)}/>
     <button>update</button>
      </form>
    </div>
  )
}

export default TodoUpdate
