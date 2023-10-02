import React, { useState, useEffect, useRef } from "react";
// https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'
// https://www.npmjs.com/package/dotted-map?activeTab=readme
import DottedMap from 'dotted-map';
import { useSpring, animated } from 'react-spring';

import "./home.css"
import HomeHeader from "./HomeHeader";
import HomeButton from "./HomeButton";


export default function Home(){


    return(
        <div className="Home">
            <HomeHeader />
            <div className="Intro-Section">
                <HomeButton />
                <div className="Home-Welcome">
                    <h1 className="text-lg w-60">The Next Generation of <span className="text-primary text-lg">Software Development</span></h1>
                </div>
                <div className="Link-Area">
                    <p className="p-10 w-80">LinkedIn | Github | Resume</p>
                </div>
            </div>
        </div>
    )}