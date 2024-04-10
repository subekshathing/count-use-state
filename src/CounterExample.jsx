import React, { useState } from 'react'

const CounterExample = () => {
    const[count, setCount]=useState(0)
  return (
    <div>
        <h2>{count}</h2>
<button onClick={()=>{
    setCount(count+1)

}}>Increase</button>
<button onClick={()=>{
    setCount(count-1)
    
}}>Decrease</button>
<button onClick={()=>{
    setCount(0)
    
}}>Reset</button>
    </div>
  )
}

export default CounterExample