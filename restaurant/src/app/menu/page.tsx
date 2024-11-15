"use client";
import React from "react";
import "./page.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function Menu() {
    return (
        <div className="menu_main">
            <Navbar />
            <h1>
                MENU<br></br>&nbsp;&nbsp;PAGE
            </h1>
            <Footer />
        </div>
    );
}

export default Menu;
