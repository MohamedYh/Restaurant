"use client";
import React from "react";
import "./page.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { themes_color, themes_text_color } from "../page";
import { MenuData } from "../../../public/Menu/data";

function Menu() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);

    return (
        <div
            style={{
                backgroundColor: themes_color[1],
                color: themes_text_color[1],
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
                        <div id="pizza" className="menu_child">
                            <h2>Pizza</h2>
                            <div>
                                {MenuData.pizza.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                                k
                            </div>
                        </div>
                        <div className="preview_image">
                            <img src="" alt="" />
                        </div>
                        <div id="sandwiches" className="menu_child">
                            <h2>Sandwiches</h2>
                            <div>
                                {MenuData.sandwiches.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="preview_image">
                            <img src="" alt="" />
                        </div>
                        <div id="juices" className="menu_child">
                            <h2>Juices</h2>
                            <div>
                                {MenuData.juices.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div id="desserts" className="menu_child">
                            <h2>Desserts</h2>
                            <div>
                                {MenuData.desserts.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="right_menu_container">
                        <div className="preview_image_container">
                            <img src="" alt="" />
                        </div>
                        <div id="burgers" className="menu_child">
                            <h2>Burgers</h2>
                            <div>
                                {MenuData.burgers.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="preview_image">
                            <img src="" alt="" />
                        </div>
                        <div id="salads" className="menu_child">
                            <h2>Salads</h2>
                            <div>
                                {MenuData.salads.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div id="french_fries" className="menu_child">
                            <h2>French Fries</h2>
                            <div>
                                {MenuData.french_fries.map((v, i) => {
                                    return (
                                        <div>
                                            <p>{v.name}</p>
                                            <p>${v.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
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
