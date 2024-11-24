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
                    <div style={{ height: "fit-content" }} className="box">
                        <MapOutlinedIcon />
                        <h2>Address Line</h2>
                        <p>Calgary, Alberta, Avenue North-east street</p>
                    </div>
                    <div
                        style={{
                            height: "auto",
                        }}
                        className="box"
                    >
                        <PhoneInTalkOutlinedIcon />
                        <h2>Phone Number</h2>
                        <p>+999 999 999 999</p>
                    </div>
                    <div
                        style={{
                            height: "auto",
                        }}
                        className="box"
                    >
                        <MailOutlinedIcon />
                        <h2>Address E-mail</h2>
                        <p>
                            restaurant@<br></br>example.com
                        </p>
                    </div>
                </div>
                <div className="contact">
                    <div className="place">
                        <h1>Get In Touch</h1>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2202.8845806399595!2d-7.990259684865787!3d31.625294540355256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1732486501741!5m2!1sen!2s"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="form_container">
                        <h1>Fill Up The Form</h1>
                        <form action="">
                            <div className="inputx">
                                <i></i>
                                <input placeholder="Your Name" type="text" />
                            </div>
                            <div className="inputx">
                                <i></i>
                                <input
                                    placeholder="Your Email"
                                    type="email"
                                    pattern="^[a-z][a-z0-9_.]*@(gmail|yahoo).com$/gm"
                                />
                            </div>
                            <div className="inputx">
                                <i></i>
                                <textarea
                                    id="message"
                                    placeholder="Enter Your Message Here"
                                />
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
                <Delivery />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
