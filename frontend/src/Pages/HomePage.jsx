import { createContext, useState } from "react"
import HeroSection from "../Components/Home/HeroSection"
import Sidebar from "../Components/Home/Sidebar"
import "./HomePage.css"

export const switchContext = createContext()

function HomePage() {

    const [noteActive, setNoteActive] = useState(true)

    return <div className="home-page">
        <switchContext.Provider value={{noteActive,setNoteActive}}>
            <Sidebar />
            <HeroSection />
        </switchContext.Provider>
    </div>
}
export default HomePage