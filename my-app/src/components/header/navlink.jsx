import Link from "next/link";
import React from "react";

function Navlink({name,url}){

        const props = true 
        const isValid = props == null? "yes" : "no"

        
        //undefined
        //null
        //NaN

        return(
            
            <li className="text-black">
                <Link href={url}>{name}</Link>
            </li>
            
        )
}


export default Navlink

