import "./Form.css"
import {useRef, useState} from "react"
import { Link ,useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import api from "../../api";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../../constants";

function Form({type,route}) {

    const navigate=useNavigate()

    const [loading,setLoading]=useState(false)

    const onHandleChange= async (e)=>{
        setLoading(true)
        const email=emailRef.current.value
        const password=passwordRef.current.value
        const name=nameRef.current.value
        e.preventDefault()
        try{
            if(type==="Login"){
                const res= await api.post(route,{
                    email,
                    password
                })
                localStorage.setItem(ACCESS_TOKEN,res.data.access)
                localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
                navigate("/")
            }else if(type==="Sign Up"){
                const res=await api.post(route,{name,email,password})
                navigate("/login")
            }
        }catch(error){
            alert(error)
        }finally{
            setLoading(false)
        }
    }

    const nameRef=useRef("")
    const passwordRef=useRef("")
    const emailRef=useRef("")

    const dispatch=useDispatch()

    const isUser=type==="Login"

    return <div className="container">
        <div className="left">
        <h2>{type}</h2>
        <form action="">
            {!isUser?<div className="form-content name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Your Handle?" ref={nameRef}/>
            </div>:""}
            <div className="form-content email">
                <label htmlFor="email">email:</label>
                <input type="email" id="email" placeholder="email" ref={emailRef}/>
            </div>
            <div className="form-content password">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" ref={passwordRef} id="password" name="password"/>
            </div>
            <button onClick={onHandleChange}>{type}</button>
            <div className="signup">
                {!isUser?<p>Already User? <Link to={"/login"}>Login</Link></p>:
                <p>New User?  <Link to={"/signup"}>Sign Up</Link></p>}
            </div>
        </form>
        </div>
        <div className="right">
            <img src="src\assets\pattern.png" alt="Hey User!" />
        </div>
    </div>
}
export default Form