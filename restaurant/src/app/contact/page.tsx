"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
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

interface MealObjectInterface {
    name: string;
    price: number;
    rating: number;
    image: string;
    discount: string;
}

function Contact() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);

    return (
        <div
            style={{
                backgroundColor: themes_color[theme_index],
                color: themes_text_color[theme_index],
            }}
            className="contact_main"
        >
            <div>
                <Navbar />
                <div className="title_container">
                    <h1>
                        CONTACT&nbsp;&<br></br>BOOKING
                    </h1>
                </div>
                <div className="main_information">
                    <div className="box">
                        <MapOutlinedIcon />
                        <h2>Address Line</h2>
                        <p>Calgary, Alberta, Avenue North-east street</p>
                    </div>
                    <div className="box">
                        <PhoneInTalkOutlinedIcon />
                        <h2>Phone Number</h2>
                        <p>+999 999 999 999</p>
                    </div>
                    <div className="box">
                        <MailOutlinedIcon />
                        <h2>Address E-mail</h2>
                        <p>
                            restaurant@<br></br>example.com
                        </p>
                    </div>
                </div>
                <Delivery />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
