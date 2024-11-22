"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
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

function Shop() {
    const theme_index = useSelector((state: RootState) => state.slice.theme);
    const keysAr: Array<string> = Object.keys(MenuData);
    const [section, setSection] = useState(2);
    const meals_list: Array<any> = keysAr.map((v, i) => {
        return MenuData[v as keyof Object];
    });

    const [mapedMeals, setMapedMeals] = useState<Array<MealObjectInterface>>(
        meals_list.reduce((a, b) => [...a, ...b])
    );

    useEffect(() => {
        setMapedMeals(ElementsShuffler(mapedMeals));
    }, [mapedMeals]);

    return (
        <div
            style={{
                backgroundColor: themes_color[theme_index],
                color: themes_text_color[theme_index],
            }}
            className="shop_main"
        >
            <div>
                <Navbar />
                <div className="title_container">
                    <h1>
                        SHOP<br></br>&nbsp;&nbsp;PAGE
                    </h1>
                </div>
                <div className="meals_container">
                    {mapedMeals
                        .slice(
                            12 * (section - 1),
                            Math.min(12 * section, mapedMeals.length)
                        )
                        .map((x, i) => {
                            return (
                                <div className="fdbox">
                                    <img src={`/Menu/Images/shop/${x.image}`} />
                                    {x.discount != "No" && (
                                        <div className="disc">
                                            {x.discount + "%"}
                                        </div>
                                    )}
                                    <p id="price">
                                        {"$" + priceFormat(x.price.toString())}
                                    </p>
                                    <p id="fdname">{x.name}</p>
                                    <p id="rating">{x.rating}</p>
                                    <button>
                                        <BiCartAdd /> <p>Add To Cart</p>
                                    </button>
                                </div>
                            );
                        })}
                </div>
                <PaginationCmp
                    currentPage={section}
                    totalPages={Math.ceil(mapedMeals.length / 12)}
                    onPageChange={function (page: number): void {
                        setSection(page);
                    }}
                />
                <Delivery />
                <Footer />
            </div>
        </div>
    );
}

export default Shop;
