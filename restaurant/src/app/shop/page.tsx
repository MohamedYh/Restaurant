"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { themes_color, themes_text_color } from "../page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./page.css";

function Shop() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);

    return (
        <div
            style={{
                backgroundColor: themes_color[theme_index],
                color: themes_text_color[theme_index],
            }}
            className="menu_main"
        >
            <div>
                <Navbar />
                <div className="title_container">
                    <h1>
                        SHOP<br></br>&nbsp;&nbsp;PAGE
                    </h1>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Shop;
