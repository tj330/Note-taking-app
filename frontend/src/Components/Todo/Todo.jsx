import React, { useEffect } from 'react'
import "./Todo.css"
import {addCircle} from "../../assets/icons/logo"
import TaskCard from './TaskCard'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import api from '../../../api'

function Todo() {

   const todo=useSelector((state)=>state.todo.inputState)
   const dispatch=useDispatch()

  useEffect(()=>{
    getTodo()
  },[])

  const getTodo=()=>{
    api.get("todo")
      .then((res)=>res.data.data)
      .then((data)=>dispatch({type:"TODO-FETCH",content:data}))
  }

  const deleteTodo=(id)=>{
    api.delete(`todo/delete/${id}`)
    .then(()=>getTodo())
    .catch((err)=>console.log(err))
  }

  const createTodo=()=>{
    api.post("todo",{
      task:todo
    })
    .then(()=>getTodo())
    .catch((err)=>alert(err))

    getTodo()
  }
  const todoC=useSelector((state)=>state.todo)

  return (
    <div className='todo'>
      <div className="todo-input">
        <input type="text" placeholder='Any Todoo?' onChange={(event)=>dispatch({type:"TODO-HANDLE",value:event.target.value})} value={todoC.inputState} required/>
        <button onClick={createTodo}><img src={addCircle} alt="add" /></button>
      </div>
      <div className='todo-elements'>
        {todoC.todo.map((element)=><TaskCard data={element} key={element._id} delete={deleteTodo}/>)}
      </div>
    </div>
  )
}

export default Todo