"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useSelector } from "react-redux";
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
                <Footer />
            </div>
        </div>
    );
}

export default About;
