import React from "react";
import "./EditPage.css";
import Navbar from "../Components/Home/NavBar";
import { useDispatch } from "react-redux";
import { useNavigate} from 'react-router-dom';
import api from "../api";


function EditPage() {

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const createNote=()=>{
    const {title,content}=useSelector((state)=>state.note.newNote)
    const note=useSelector((state)=>state.note.note)

    api.post("/api/notes/",{
      id:note.length,
      title:title,
      content:content
    }).then((res)=>{
      if(res.status===201) alert("Note created!")
      else alert("Failed to make note")
    }).catch((err)=>alert(err))
    getNotes()
  }

  return (
    <>
      <Navbar />
      <div className="edit">
        <div className="edit-input">
          <input
            type="text"
            placeholder="Title"
            onChange={(event) =>
              dispatch({ type: "NOTE-HANDLE-TITLE", title: event.target.value })
            }
          />
          <button className="button"
           onClick={() => {
            createNote()
            navigate("/")
          }}
          >
            Save
          </button>
          <button className="button" onClick={()=>dispatch({type:"NOTE-DISCARD"})}>Discard</button>
        </div>
        <div className="edit-textarea">
          <textarea
            name="content"
            id="content"
            placeholder="Note"
            onChange={(event) =>
              dispatch({
                type: "NOTE-HANDLE-CONTENT",
                content: event.target.value,
              })
            }
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default EditPage;
