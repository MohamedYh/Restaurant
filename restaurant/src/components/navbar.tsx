"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();

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
        </nav>
    );
}

export default Navbar;
