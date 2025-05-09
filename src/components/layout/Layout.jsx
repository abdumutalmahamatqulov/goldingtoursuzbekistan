import { Outlet } from "react-router-dom";
import SidebarLayout from "../header/SidebarLayout";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <SidebarLayout />
        </div>
    );
};

export default Layout;