"use client";
import React from "react";
import "./page.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { themes_color, themes_text_color } from "../page";

function Menu() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);

    return (
        <div
            style={{
                backgroundColor: themes_color[theme_index],
                color: themes_text_color[theme_index],
            }}
            className="menu_main"
        >
            <Navbar />
            <div className="title_container">
                <h1>
                    MENU<br></br>&nbsp;&nbsp;PAGE
                </h1>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
