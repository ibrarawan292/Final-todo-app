import React from 'react'
import { Link } from 'react-router-dom'

const Todolist = ({listItems}) => {

    return (
        listItems.map((newItem)=>{
            return(
                <div className="container w-50 mx-auto mb-2 p-3 " style={{ background: 'red', }}>
                {/* <Link to={`/detail/${newitem.id}`}>{newitem.id}</Link> */}
                <Link to={`/detail/${newItem.title}`}><h1>{newItem.title}</h1></Link>
                <Link to={`/detail/${newItem.desc}`}><p>{newItem.desc}</p></Link>
               
               
            </div>
            )
    } )
    )
}

export default Todolist