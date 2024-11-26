"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useSelector } from "react-redux";
import About1Img from "../../../public/about1.png";
import About2Img from "../../../public/about2.png";
import About3Img from "../../../public/about3.png";
import { themes_color, themes_text_color } from "../page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MenuData } from "../../../public/Menu/data";
import "./page.css";
import { ElementsShuffler, priceFormat } from "@/global_functions";
import { BiCartAdd } from "react-icons/bi";
import Delivery from "@/components/delivery";
import { Pagination } from "@mui/material";
import PaginationCmp from "@/components/pagination";
import { GoogleMap, Marker } from "@react-google-maps/api";

interface MealObjectInterface {
    name: string;
    price: number;
    rating: number;
    image: string;
    discount: string;
}

function About() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);

    return (
        <div
            style={{
                backgroundColor: themes_color[theme_index],
                color: themes_text_color[theme_index],
            }}
            className="about_main"
        >
            <div>
                <Navbar />
                <div className="title_container">
                    <h1>
                        ABOUT<br></br>&nbsp;&nbsp;PAGE
                    </h1>
                </div>
                <div className="history">
                    <h1>Story & Background</h1>
                    <p>
                        "Established in <p className="highlighted">2015</p>,
                        Freshy was born out of a love for traditional{" "}
                        <p className="highlighted">Moroccan</p> cuisine and a
                        desire to share it with the world. Located in the heart
                        of <p className="highlighted">Marrakesh</p> our
                        restaurant combines centuries-old recipes with a modern
                        twist."
                    </p>
                </div>
                <div className="about">
                    <div className="txtabout">
                        <h3>About</h3>
                        <h2>Why Freshy?</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            <br></br>
                            <br></br>
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            <br />
                            <br />
                            <br></br>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard
                        </p>
                        <button className="order_now">Learn More</button>
                    </div>
                    <div className="imgs_about">
                        <img src={About1Img.src} alt="" />
                        <img src={About2Img.src} alt="" />
                        <img src={About3Img.src} alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default About;
