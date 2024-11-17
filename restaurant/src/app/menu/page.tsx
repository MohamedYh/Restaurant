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
            <div>
                <Navbar />
                <div className="title_container">
                    <h1>
                        MENU<br></br>&nbsp;&nbsp;PAGE
                    </h1>
                </div>
                <div className="menu_containers_parent">
                    <div className="left_menu_container">
                        <div className="menu_child"></div>
                        <div className="menu_child"></div>
                        <div className="menu_child"></div>
                        <div className="preview_image">
                            <img src="" alt="" />
                        </div>
                        <div className="menu_child"></div>
                        <div className="menu_child"></div>
                    </div>
                    <div className="right_menu_container">
                        <div className="preview_image_container">
                            <img src="" alt="" />
                        </div>
                        <div className="preview_image_container">
                            <img src="" alt="" />
                        </div>
                        <div className="preview_image">
                            <img src="" alt="" />
                        </div>
                        <div className="menu_child"></div>
                        <div className="menu_child"></div>
                        <div className="preview_image">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Menu;
