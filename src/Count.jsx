import React, { useState } from 'react'

const Count = () => {
    
    const [count,setCount]=useState(0)
  return (
    <div>
    <h2>{count}</h2>
    <button onClick={()=>{
      const newCount=count+1;
      setCount(newCount)
    }}>Click me</button>
        </div>
  )
}

export default Count