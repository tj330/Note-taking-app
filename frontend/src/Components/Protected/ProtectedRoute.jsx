import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProtectedRoute=({children})=>{
    const [isAuthorized,setAuthorized]=useState(null)
    const token=useSelector(state=>state.user.token)

    useEffect(()=>{
        auth().catch(()=>setAuthorized(false))
    },[])

    const auth=async()=>{
        if(!token) return setAuthorized(false)

        setAuthorized(true)
    }

    if(isAuthorized===null) return <div>Loading...</div>

    return isAuthorized? children:<Navigate to={"/login"}/>
}

export default ProtectedRoute