import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout=({children})=>{

    return(
        <>
           <Nav/>
        <Outlet/>
             <Footer/>
       
        </>
    );
}