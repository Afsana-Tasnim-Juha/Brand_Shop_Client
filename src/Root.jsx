import { Outlet } from "react-router-dom";
import NavBar from "./Components/Shared/NavBar";
import Banner from "./Components/Shared/Banner";


const Root = () => {
    return (
        <div>

            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;