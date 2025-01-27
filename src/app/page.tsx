"use client";
import styles from "./page.module.css";
import {HiArrowLongRight} from "react-icons/hi2";
import Burger from "../../public/Menu/Images/shop/burger.png";
import ChefImg from "../../public/chef.png";
import {MenuData} from "../../public/Menu/data.js";
import Pizza from "../../public/Menu/Images/shop/pizza.png";
import Salad from "../../public/Menu/Images/shop/salad.png";
import ReserveSeatImg from "../../public/reserve_seat.png";
import About1Img from "../../public/about1.png";
import About2Img from "../../public/about2.png";
import {themes_color, themes_text_color} from "@/generalData";
import About3Img from "../../public/about3.png";
import "./style.css";
import {useEffect, useState} from "react";
import {BiCartAdd} from "react-icons/bi";
import Navbar from "@/components/navbar";
import {useSelector} from "react-redux";
import {RootState, AppDispatch} from "../redux/store";
import Footer from "@/components/footer";
import {priceFormat} from "@/global_functions";


export default function Home() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);
    const [offerStatus, setOfferStatus] = useState(true);
    const [timeLeft, setTimeLeft] = useState([6, 23, 59, 59]);

    const DecreaseTime = (
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    ) => {
        console.log(seconds, "hds");
        if (seconds != 0) {
            seconds -= 1;
        } else {
            seconds = 59;
            if (minutes != 0) {
                minutes -= 1;
            } else {
                minutes = 59;
                if (hours != 0) {
                    hours -= 1;
                } else {
                    hours = 23;
                    if (days != 0) {
                        days -= 1;
                    } else {
                        setOfferStatus(true);
                    }
                }
            }
        }
        return [days, hours, minutes, seconds];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("h");
            setTimeLeft(
                DecreaseTime(timeLeft[0], timeLeft[1], timeLeft[2], timeLeft[3])
            );
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [timeLeft]);

    useEffect(() => {
        console.log(ReserveSeatImg.src);
    }, []);

    return (
        <div
            style={{
                backgroundColor: themes_color[theme_index],
                color: themes_text_color[theme_index],
            }}
            className="main_container"
        >
            <div className={styles.page + " " + "app"}>
                <Navbar/>
                <h1 className="header1">
                    Finally, the dish you have been<br></br>waiting for on your
                    table
                </h1>
                <p className="paragraph1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                    <br/>
                    commonly used to demonstrate the visual form of a document{" "}
                </p>
                <button className="order_now">Order Now</button>
                <div className="top3">
                    <img src={Burger.src} alt="food"/>
                    <div className="main_image_container">
                        <img src={Pizza.src} alt="food"/>
                    </div>
                    <img src={Salad.src} alt="food"/>
                </div>
                <h1 className="header1">Top List Is Back</h1>
                <p className="paragraph2">
                    All our best meals in one delicious snap
                </p>
                <div className="toplist">
                    {[0, 1, 2, 3, 4].map((i) => {
                        var dt: any = {};
                        switch (i) {
                            case 0:
                                dt = MenuData.burgers[0];
                                break;

                            case 1:
                                dt = MenuData.pizza[0];
                                break;

                            case 2:
                                dt = MenuData.salads[0];
                                break;

                            case 3:
                                dt = MenuData.desserts[0];
                                break;

                            case 4:
                                dt = MenuData.burgers[3];
                                break;
                        }

                        return (
                            <div
                                key={i}
                                className={
                                    dt.discount != "No"
                                        ? `fdbox dsc`
                                        : "fdbox"
                                }
                            >
                                <img
                                    src={`./Menu/Images/shop/${dt.image}`}
                                />
                                {dt.discount != "No" && (
                                    <div className="disc">
                                        {dt.discount + "%"}
                                    </div>
                                )}
                                <p id="price">
                                    {"$" + priceFormat(dt.price.toString())}
                                </p>
                                <p id="fdname">{dt.name}</p>
                                <p id="rating">{dt.rating}</p>
                                <button>
                                    <BiCartAdd/> <p>Add To Cart</p>
                                </button>
                            </div>
                        );
                    })}
                </div>
                {offerStatus ? (
                    <div className="offer">
                        <div className="prt1">
                            <h1>
                                50% off Big
                                <br/>
                                Hamburger{" "}
                            </h1>
                            <div className="timeleft">
                                <div className="time_card">
                                    <p>{timeLeft[0]}</p>
                                    <div className="line"></div>
                                    <p>Days</p>
                                </div>
                                <div className="time_card">
                                    <p>
                                        {timeLeft[1].toString().length == 1
                                            ? "0" + timeLeft[1]
                                            : timeLeft[1]}
                                    </p>
                                    <div className="line"></div>
                                    <p>Hrs</p>
                                </div>
                                <div className="time_card">
                                    <p>
                                        {timeLeft[2].toString().length == 1
                                            ? "0" + timeLeft[2]
                                            : timeLeft[2]}
                                    </p>
                                    <div className="line"></div>
                                    <p>Mins</p>
                                </div>
                                <div className="time_card">
                                    <p>
                                        {timeLeft[3].toString().length == 1
                                            ? "0" + timeLeft[3]
                                            : timeLeft[3]}
                                    </p>
                                    <div className="line"></div>
                                    <p>Secs</p>
                                </div>
                            </div>
                            <button className="order_now">Order Now</button>
                        </div>
                        <div className="prt2">
                            <div className="discount">
                                {MenuData.burgers[0].discount + "%"}
                            </div>
                            <img
                                src={`./Menu/Images/shop/${MenuData.burgers[0].image}`}
                                alt=""
                            />
                        </div>
                    </div>
                ) : null}
                <div className="prvx">
                    <img src={ChefImg.src} alt=""/>
                    <h1>
                        Transform
                        <br/>
                        every meal into
                        <br/>a masterpiece
                    </h1>
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
                            <br/>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            <br/>
                            <br/>
                            <br></br>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard
                        </p>
                        <button className="order_now">Learn More</button>
                    </div>
                    <div className="imgs_about">
                        <img src={About1Img.src} alt=""/>
                        <img src={About2Img.src} alt=""/>
                        <img src={About3Img.src} alt=""/>
                    </div>
                </div>
                <div className="reserve">
                    <img src={ReserveSeatImg.src} alt=""/>
                    <div>
                        <h2>Reserve Your Seat</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing
                            <br></br>and typesetting industry. <br></br>Ipsum
                            has been the industry's standard
                        </p>
                        <div className="boo`k_now">
                            <h2>Book Now</h2>
                            <HiArrowLongRight/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
