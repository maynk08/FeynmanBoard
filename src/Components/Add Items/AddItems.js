import React, { createContext, useState } from 'react'
import './addItems.css'


const ourContext = createContext()
const AddItems = () => {

  const[title,setTitle] = useState("hello")
 
  const[topic,setTopic] = useState([])
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleClick = (e) => {
      setTopic((oldTopic)=>[...oldTopic,topic])
  }

  return (
  <>
  <div className="heading-container">
    <h2>Add Topic</h2>
  </div>

<div className="header">

  <label for="content">Topic Title</label>
  <input type="text" placeholder='Write title name' value= {title} onChange={handleChange}/>

  </div>

    <br /> <br />

<textarea id="content" name="content"
          rows="30" cols="50"></textarea>

          <br />
       <button onClick={handleClick}>Done</button>

       <ourContext.Provider value={topic}></ourContext.Provider>
  </>

  )
}

export {ourContext}
export default AddItems
