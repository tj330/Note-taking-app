import React, { useEffect } from 'react'
import "./Todo.css"
import {addCircle} from "../../assets/icons/logo"
import TaskCard from './TaskCard'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import api from "../../api"

function Todo() {

   const dispatch=useDispatch()

  useEffect(()=>{
    getTodo()
  },[])

  const getTodo=()=>{
    api.get("/api/todo/")
    .then((res)=>res.data)
    .then((data)=>dispatch({type:"TODO-FETCH",content:data}))
    .catch((err)=>alert(err))
  }

  const deleteTodo=(id)=>{
    api.delete(`/api/todo/delete/${id}`)
    .then((res)=>{
      if(res.status===204) alert("Todo Deleted Sucessfully")
      else alert("Todo not deleted")
    }).catch((err)=>alert(err))

    getTodo()
  }

  const createTodo=()=>{
    const todo=useSelector((state)=>state.todo.inputState)
    api.post("/api/todo/",{todo})
    .then((res)=>{
      if(res.status===201) alert("Todo Added")
      else alert("Todo not Added")
    })
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
        {todoC.todo.map((element)=><TaskCard data={element} key={element.id} delete={deleteTodo}/>)}
      </div>
    </div>
  )
}

export default Todo