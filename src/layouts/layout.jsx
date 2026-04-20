import { Outlet, useLocation } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import "./layout.css"

function Screen() {
    const location = useLocation()
    const isLoginPage = location.pathname === '/login'

    return (
        <div className="wrapper">
            {!isLoginPage && <Navbar/>}

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