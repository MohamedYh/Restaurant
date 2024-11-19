"use client";
import React from "react";
import Motor from "../../public/delivery_motor.png";
import "./delivery_page.css";

function Delivery() {
    return (
        <div className="delivery_container">
            <img src={Motor.src} alt="" />
            <p>
                Fast <p>Delivery</p> Less Than 30 Minutes
            </p>
        </div>
    );
}

export default Delivery;
