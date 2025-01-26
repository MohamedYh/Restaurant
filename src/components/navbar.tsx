"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { dark, light, RootState } from "@/redux/store";

function Navbar() {
    const router = useRouter();
    const theme_index = useSelector((state: RootState) => state.slice.theme);

    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(theme_index == 0 ? dark() : light());
    };
    return (
        <nav className="main_navbar">
            <h1>Freshy</h1>
            <ul>
                <li onClick={() => router.push("/")}>Home</li>
                <li onClick={() => router.push("/menu")}>Menu</li>
                <li onClick={() => router.push("/shop")}>Shop</li>
                <li onClick={() => router.push("/about")}>About</li>
                <li onClick={() => router.push("/contact")}>Contact Us</li>
            </ul>
            <div
                style={{
                    backgroundColor: theme_index == 0 ? "#cccccc" : "#414141",
                }}
                onClick={changeTheme}
                className="theme_container"
            >
                <DarkModeIcon
                    style={{
                        color: theme_index == 0 ? "rgb(73, 73, 73)" : "#E8E2D7",
                    }}
                />
            </div>
        </nav>
    );
}

export default Navbar;
