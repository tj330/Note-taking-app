import React, { useState } from 'react'
import "./TaskCard.css"
import { deleteicon } from '../../assets/icons/logo'

function TaskCard(props) {
  const [isComplete,setComplete]=useState(false)

  return (
    <div className={`task-card ${isComplete?"complete":""}`} onClick={()=>setComplete(!isComplete)}>
        <div className="content">
        <p >{props.data.todo}</p>
        </div>
        <button onClick={()=>props.delete(props.id)}><img src={deleteicon} alt="" /></button>
    </div>
  )
}

export default TaskCard