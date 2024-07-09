import React from "react";
import "./DropDown.css";

import { useDispatch } from "react-redux";
import { dev, logout, selfedit } from "../../assets/icons/logo";
import { useNavigate } from "react-router-dom";

function Dropdown() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <div className="drop-down">
      <button  className="link" disabled onClick={()=>navigate("/edit")}>
        <div className="link-component">
          <img src={selfedit} alt="edit" />
          <p>Edit Profile</p>
        </div>
      </button>
      <button  className="link" onClick={()=>{
        dispatch({type:"USER-LOGOUT"})
        navigate("/login")
        }}>
      <div className='link-component' >
                <img src={logout} alt="edit" />
                <p>Logout</p>
            </div>
      </button>
      <br />
      <button  className="link" onClick={()=>navigate("/dev")} disabled>
        <div className="link-component">
          <img src={dev} alt="edit" />
          <p>Contact Devs</p>
        </div>
      </button>
    </div>
  );
}

export default Dropdown;
