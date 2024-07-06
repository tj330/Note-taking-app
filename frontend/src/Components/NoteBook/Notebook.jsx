import "./Notebook.css";
import Card from "./Card";
import { useSelector,useDispatch} from "react-redux";
import { edit } from "../../assets/icons/logo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../../api";

function Notebook() {

  const colors=["#ffcf99","#74a892","#809bce","#879e82","#adc178"]
  const index=Math.floor((Math.random()*5)+1)

  const note = useSelector((state) => state.note.notes);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    getNotes()
  },[])

  const getNotes=()=>{
    api.get("/api/notes/")
    .then((res)=>res.data)
    .then((data)=>dispatch({type:"NOTE-FETCH",content:data}))
    .catch((err)=>alert(err))
  }

  const deleteNote=(id)=>{
    api.delete(`/api/notes/delete/${id}/`)
    .then((res)=>{
      if(res.status===204) alert("Note Deleted")
      else alert("Failed to delete note")
    })
    .catch((err)=>alert(err))
    getNotes()
  }


  return (
    <>
      <div className="notebook">
        {note?.map((note) => (
          <Card details={note} key={note.id} color={colors[index]} delete={deleteNote}/>
        ))}
      </div>
      <button className="notebook-add" onClick={()=>navigate("/edit")}>
      <img src={edit} alt="edit" />
      <p>Add Note</p>
      </button>
    </>
  );
}

export default Notebook;
