import React from 'react'
import "./Card.css"
import {deleteicon} from "../../assets/icons/logo"
import { useDispatch } from 'react-redux'

function Card(props) {

  const dispatch=useDispatch()

  return (
    <div className='card' style={{backgroundColor:`${props.color}`}}>
      <div>
      <h2>{props.details.title}</h2>
      <p>{props.details.content.slice(0,80)}...</p>
      </div>
         <div className='menu'>
            <button onClick={()=>props.delete(props.details.id)}><img src={deleteicon} alt="delete" /></button>
         </div>
    </div>
  )
}

export default Card