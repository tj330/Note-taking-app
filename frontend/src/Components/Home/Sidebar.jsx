import { useContext, useState } from "react";
import { checklist, note, show, hide } from "../../assets/icons/logo";
import "../../Pages/HomePage.css";
import "./Sidebar.css"
import { switchContext } from "../../Pages/HomePage";

function Sidebar() {
  const { noteActive, setNoteActive } = useContext(switchContext);
  const [sideActive,setSideActive]=useState(false)

  return (
    <div className="side-bar">
      <div className="side-bar-btn" onClick={()=>setSideActive(!sideActive)}>
        <img src={sideActive?hide:show} alt="show or hide" />
      </div>
      <div className="sidebar-hero">
          <label htmlFor="notebook">
          <div className={`button ${noteActive ? "active" : ""}`}>
            <img src={note} alt="Notebook" />
            {sideActive?"NoteBook":""}
            </div>
          </label>
          <input
            type="radio"
            name="page"
            value="notebook"
            id="notebook"
            onClick={() => {
              setNoteActive(true);
            }}
          />
        <label htmlFor="todo">
        <div className={`button ${!noteActive ? "active" : ""}`}>
            <img src={checklist} alt="Checklist" />
            {sideActive?"Todo":""}</div>
          </label>
          <input
            type="radio"
            name="page"
            value="todo"
            id="todo"
            onClick={() => {
              setNoteActive(false);
            }}
          />
      </div>
    </div>
  );
}

export default Sidebar;
