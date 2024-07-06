import {useContext} from 'react'
import "../../Pages/HomePage.css"
import "./HeroSection.css"
import NavBar from './NavBar'
import { switchContext } from '../../Pages/HomePage'
import Notebook from '../NoteBook/Notebook'
import Todo from '../Todo/Todo'

function HeroSection() {
  const {noteActive}=useContext(switchContext)

  return (
    <div className='hero-section'>
      <NavBar/>
      <div className="hero">
        {noteActive?<Notebook/>:<Todo/>}
      </div>
    </div>
  )
}

export default HeroSection