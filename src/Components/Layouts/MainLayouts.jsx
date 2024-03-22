import { Outlet } from "react-router-dom";

import Nav from "../Nav";
import Footer from "../Footer";


const MainLayouts = () => {
    return (
        <div className="">
            <div className="h-16">
                <Nav></Nav>

            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;