import React from "react";

import NavBar from "../components/Header.js/Header";
import Whatsapp from "@/components/Whatsapp/Whatsapp";



export default function Layout  ({children}){
    return(
        <>
        <NavBar  />
        <Whatsapp />
        <div>{children}</div>
        </>
    )
}