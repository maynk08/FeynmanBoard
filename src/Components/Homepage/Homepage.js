import React from 'react'
import "./Homepage.css"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {

  const [val,setVal] = useState("")
   const  navigate = useNavigate()

  const handleChange = (e) => {
    setVal(e.target.value)
    //console.log(val)
  }

  const handleClick = (e) =>{
    if(val==""){
      alert('Enter Username')
    }

    else{
      navigate('/dashboard')
    }
  }

  return (
    <>
    <div className='container'>
        <input type="text" placeholder='Username' value = {val} onChange={handleChange}/> <br /> <br />

        <button onClick={handleClick}>Enter</button>
    </div>
    
</>
  )
}

export default Homepage