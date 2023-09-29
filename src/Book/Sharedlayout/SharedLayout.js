import { Outlet } from "react-router-dom";
import Footer from "../Footer/FooterBooks";
import Navbar from "../Header/Navbar";

const SharedLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>        
        </>
    )
}
export default SharedLayout;