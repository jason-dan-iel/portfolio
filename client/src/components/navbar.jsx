import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return(
        <nav className="z-999 fixed navbar px-20 w-screen text-xl text-white bg-[#133661] mobile:px-0">
            <ul className="flex justify-between items-center p-1  mobile:flex mobile:justify-center mobile:items-center">
                <section className="mobile:hidden">
                <NavLink to="/" className="" ><img src="/vite.svg" alt="" className="h-16 w-16"/></NavLink>

                </section>
                <section className=" mobile:flex mobile:justify-center mobile:items-center">
                    <ul className="flex items-center mobile:justify-between mobile:text-xs mobile:h-16 mobile:px-1">
                        <li><NavLink to="/" className="px-4 mobile:px-2" >Home</NavLink> </li>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}

export default Navbar