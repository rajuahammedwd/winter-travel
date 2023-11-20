import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="px-5">
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default MainLayout;