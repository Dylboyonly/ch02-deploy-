import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Navigation";



export default function BaseLayout(){

    return(
        <>
        <NavigationBar />
        <Outlet />
        </>
    )
}