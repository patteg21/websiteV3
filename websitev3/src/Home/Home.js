import React, { useState, useEffect, useRef } from "react";
// https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'

import { useSpring, animated } from 'react-spring';

import "./home.css"
import HomeHeader from "./HomeHeader";
import HomeButton from "./HomeButton";
import Cube from "./Cube";

export default function Home(){
    const [index, setIndex] = useState(0)
    const[snackBarShow,setSnackBarShow] = useState(false)

    const fadeInOut = useSpring({
        opacity: snackBarShow ? 1 : 0,
        display: snackBarShow ? 'block' : 'none',
        transform: snackBarShow ? 'translateX(0%)' : 'translateX(100%)',
    });


    return(
        <div className="Home">
            <HomeHeader index={index} setIndex={setIndex}/>
            <div className="Intro-Section">
                <HomeButton setSnackBarShow={setSnackBarShow} snackBarShow={snackBarShow}/>
                <div className="Home-Welcome">
                    <h1 className="text-lg w-60">The Next Generation of <span className="text-primary text-lg">Software Development</span></h1>
                </div>
                <div className="Link-Area">
                    <p className="p-10 w-80"><a href="https://www.linkedin.com/in/gareth-patterson-6694441ab/">LinkedIn</a> 
                    {' '}|{' '}<a href="https://github.com/patteg21">Github</a>{' '}|{' '}
                    <a className="ResumeClick" href= "/Gareth-Patterson.pdf" download="Gareth-Patterson.pdf">Resume</a></p>
                </div>
                {snackBarShow ? <animated.div style={fadeInOut} className="SnackBar bg-primary rounded-sm text-sm">Email Copied</animated.div>: null}
            </div>
            <Cube />
        </div>
    )}