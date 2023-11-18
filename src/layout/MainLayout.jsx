import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    return (
        <div className="px-5">
            <Navbar />
            <Outlet />

        </div>
    );
};

export default MainLayout;