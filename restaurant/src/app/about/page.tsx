"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import StarIcon from "@mui/icons-material/Star";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useSelector } from "react-redux";
import About1Img from "../../../public/about1.png";
import About2Img from "../../../public/about2.png";
import Box from "@mui/material/Box";
import About3Img from "../../../public/about3.png";
import { themes_color, themes_text_color } from "../page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MenuData } from "../../../public/Menu/data";
import "./page.css";
import { ElementsShuffler, priceFormat } from "@/global_functions";
import { BiCartAdd } from "react-icons/bi";
import Delivery from "@/components/delivery";
import { Pagination, Rating } from "@mui/material";
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
    const comments = [
        `"An absolute gem! From the moment we walked in, we were captivated by the warm ambiance and incredible aromas. The [signature dish] was a revelation—perfectly balanced flavors and beautifully presented. The staff made us feel like family. Can’t wait to come back!"– [John]"`,
        `"The best dining experience we’ve had in years! The atmosphere is cozy and inviting, and the food is absolutely divine. We loved the [specific dish]—it was bursting with authentic flavors. Highly recommend to anyone looking for a memorable meal!"– [Alex]`,
        `"Incredible food, exceptional service, and a beautiful setting! The attention to detail in every dish is amazing, and the staff went above and beyond to make our evening special. This is our new favorite spot!"– [Marwan]`,
        `"From the moment we arrived, we felt like VIPs. The team was attentive without being overbearing, and the food was pure perfection. The [specific dessert] was the highlight of the evening—a must-try for anyone visiting!"– [Sara]`,
        `"I’m blown away by how fresh and flavorful everything was! The [specific dish] reminded me of my travels to [relevant country or region]. A true taste of tradition with a modern twist. I'll be bringing all my friends here!"– [Ahmed]`,
        `"An absolute gem! From the moment we walked in, we were captivated by the warm ambiance and incredible aromas. The [signature dish] was a revelation—perfectly balanced flavors and beautifully presented. The staff made us feel like family. Can’t wait to come back!"– [John]"`,
    ];

    const ratings = [5, 4.5, 4, 5, 4.5, 5];

    const [commentIndex, setCommentIndex] = useState(0);
    const slider = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            if (slider.current) {
                console.log(commentIndex, comments.length);
                if (commentIndex != comments.length - 1) {
                    slider.current.style.transition = `1s`;
                    slider.current.style.transform = `translateX(-${
                        70 * (commentIndex + 1)
                    }vw)`;
                    setCommentIndex(commentIndex + 1);
                } else {
                    slider.current.style.transition = `0s`;
                    slider.current.style.transform = `translateX(0)`;
                    setCommentIndex(0);
                }
            }
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [commentIndex, slider]);

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
                <div className="comments_container">
                    <h1>Client's Comments</h1>
                    <div className="p_slider">
                        <div className="slider" ref={slider}>
                            {comments.map((v, i) => {
                                return (
                                    <div className="comment">
                                        <p>{v}</p>
                                        <Rating
                                            name="half-rating"
                                            defaultValue={ratings[i]}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default About;
