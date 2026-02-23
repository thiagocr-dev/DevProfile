import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import "./layout.css"

function Screen() {
    return (
        <div className="wrapper">
            <Navbar/>

            <div className="container"> 
                <Sidebar />

            <main className="main">
                <Outlet />
            </main>
            </div>
        </div>
    )
}

export default Screen