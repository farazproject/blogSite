import Image from "next/image";
import React from "react";
import logo from '../../../public/logo.png';
import Navlink from "./navlink.jsx";


function Header(){

    const navLinks = [
        { name: 'Home', url: '/home' },
        { name: 'Cart', url: '/shopping-cart' },
        { name: 'Contact', url: '/contact'},
    ]

    return(

        <div className=" bg-white w-full p-2 flex justify-between items-center">
            <Image src={logo} height={100} width={100} objectFit="contain"/> 
            <div className="flex gap-[15px] items-center">
                <ul className="flex gap-[6px]">
                    
                    {
                        navLinks.map((nav, index) =>{
                            return(
                                <Navlink key={index} name={nav.name} url={nav.url}/>
                            )
                        })
                    }

                    { /* 
                        <NavLink name = {"Home"}/>
                        <NavLink name = {"Home"}/>
                        <NavLink name = {"Home"}/>
                        <NavLink name = {"Home"}/>
                    */}
                </ul>

                <button className="px-4 py-2 rounded-xl bg-black text-white">Sign In</button>
                <button className="px-4 py-2 rounded-xl bg-black text-white">Sign Up</button>
            
            </div>          
        </div>
    )
}

export default Header 