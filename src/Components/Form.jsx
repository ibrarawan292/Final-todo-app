import React, { useState } from "react";

const Form = () => {

 const [title, setTitle] = useState('')
 const [desc, setDesc] = useState('')

 

 const handletitle = (e) =>{
    setTitle(e.target.value)
 }

 const handledesc = (e) =>{
    setDesc(e.target.value)
 }

 const handleSubmit = (e) => {
     e.preventDefault()
     
 }

 const [todo, setTodo] = useState([])

 const handleSave = () =>{
     const newItem = {
         title: title,
         desc: desc
     }
     setTodo([...todo, newItem])
 }
 

    return (
        <div className="container ">
            <form className="w-50 mx-auto mt-5 mb-5" onSubmit={(event) => handleSubmit(event)}>
                <div class="row mb-3">
                    <label htmlFor="title" class="col-sm-4 col-form-label">Title</label>
                    <div class="col-sm-8">
                        <input type="text" onChange={(event) => handletitle(event)} class="form-control" id="title" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label htmlFor="description" class="col-sm-4 col-form-label">Description</label>
                    <div class="col-sm-8">
                        <input type="text" onChange={(event) => handledesc(event)} class="form-control" id="description" />
                    </div>
                </div>
                <button type="submit" onClick={handleSave} class="btn btn-primary w-100">Add</button>
            </form>

            {
                todo.map(newItem =>{
                    return(
                        <>
                         <div className="container w-50 mx-auto mb-2 p-3 " style={{ background:'red',}}>
                          <h1> {newItem.title}</h1>
                           <p>{newItem.desc}</p>
                         </div>
                        </>
                    )
    
                })
                
                
            }
            
        </div>

    )
}

export default Form