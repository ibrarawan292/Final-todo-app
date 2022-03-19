
import React from 'react'
import { useParams } from 'react-router-dom'
import { todos } from '../Data/todos'




const Details = () => {

  const {title} = useParams()

  //  const todo = todos.find(todo => todo.title === title)

  
  return (
    <div className='container'>
      <h1>{title}</h1>
      {/* <p>{desc}</p>
      <p>{todo.author}</p> */}
     
    
     
    </div>
  )
}

export default Details