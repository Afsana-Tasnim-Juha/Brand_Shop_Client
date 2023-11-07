import { Outlet } from "react-router-dom";
import NavBar from "./Components/Shared/NavBar";
import Banner from "./Components/Shared/Banner";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>

            <div className="max-w-6xl mx-auto">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;