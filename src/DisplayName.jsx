import React, { useState } from 'react'

const DisplayName = () => {
    const [studentName,setStudentName]=useState("Prithivi")
  return (
    <div><h1>{studentName}</h1></div>
  )
}

export default DisplayName