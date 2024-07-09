import React from "react";
import "./EditPage.css";
import Navbar from "../Components/Home/NavBar";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate} from 'react-router-dom';
import api from "../../api";

function EditPage() {

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {title,content}=useSelector((state)=>state.note.newNote)

  const createNote=()=>{
    api.post("notes",{
        title,
        content
      }).then((res)=>console.log(res))
      .then(()=>navigate("/"))
      .catch((err)=>console.log(err))
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
