import React, { useState } from 'react'

const Parent = () => {
    const [data,setData]=useState('')
    const handleData =(data)=>{
        setData(data)
    }
  return (
    <div>
    </div>
  )
}

export default Parent
