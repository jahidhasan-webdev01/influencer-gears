import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import { Toaster } from "react-hot-toast";

const Layout = () => {

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;