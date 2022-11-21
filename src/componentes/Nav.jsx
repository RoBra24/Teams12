import React from "react";
import { ListNav } from "./ListNav";



export const Nav = () => {
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" href="index.html">InstaYA</a>
                <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
                
                <ListNav/>
            </nav>
       </>
    )
}