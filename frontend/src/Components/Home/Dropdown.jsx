import React from "react";
import "./DropDown.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dev, logout, selfedit } from "../../assets/icons/logo";

function Dropdown() {

  const dispatch=useDispatch()

  return (
    <div className="drop-down">
      <Link to={"/edit"} className="link">
        <div className="link-component">
          <img src={selfedit} alt="edit" />
          <p>Edit Profile</p>
        </div>
      </Link>
      <Link to={"/login"} className="link">
      <div className='link-component' onClick={()=>dispatch({type:"USER-LOGOUT"})}>
                <img src={logout} alt="edit" />
                <p>Logout</p>
            </div>
      </Link>
      <br />
      <Link to={"/dev"} className="link">
        <div className="link-component">
          <img src={dev} alt="edit" />
          <p>Contact Devs</p>
        </div>
      </Link>
    </div>
  );
}

export default Dropdown;
