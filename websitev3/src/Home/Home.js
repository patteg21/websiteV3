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
    const[snackBarShow,setSnackBarShow] = useState(false)

    const fadeInOut = useSpring({
        opacity: snackBarShow ? 1 : 0,
        display: snackBarShow ? 'block' : 'none',
        transform: snackBarShow ? 'translateX(0%)' : 'translateX(100%)',
      });

    return(
        <div className="Home">
            <HomeHeader />
            <div className="Intro-Section">
                <HomeButton setSnackBarShow={setSnackBarShow} snackBarShow={snackBarShow}/>
                <div className="Home-Welcome">
                    <h1 className="text-lg w-60">The Next Generation of <span className="text-primary text-lg">Software Development</span></h1>
                </div>
                <div className="Link-Area">
                    <p className="p-10 w-80">LinkedIn | Github | Resume</p>
                </div>
                {snackBarShow ? <animated.div style={fadeInOut} className="SnackBar bg-primary rounded-sm text-sm">Email Copied</animated.div>: null}
            </div>
        </div>
    )}