import React from 'react'
import { Link } from 'react-router-dom'

const Todolist = ({listItems}) => {

    return (
        listItems.map((newitem)=>{
            return(
                <div className="container w-50 mx-auto mb-2 p-3 " style={{ background: 'red', }}>
                <Link to={`/detail/${newitem.id}`}>{newitem.id}</Link>
                <Link to={`/detail/${newitem.title}`}>{newitem.title}</Link>
                <Link to={`/detail/${newitem.desc}`}>{newitem.desc}</Link>
               
            </div>
            )
    } )
    )
}

export default Todolist