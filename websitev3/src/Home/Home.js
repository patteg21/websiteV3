import React, { useState, useEffect, useRef } from "react";
// https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'

import { useSpring, animated } from 'react-spring';

import "./home.css"
import Cube from "./Cube";
import NavCube from "./NavCube";
import Footer from "../Footer";

export default function Home(){
    const[snackBarShow,setSnackBarShow] = useState(false)

    const fadeInOutMain = useSpring({
        opacity: 1 ,
        display: 'block',
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(100%)' },
    });


    const fadeInOut = useSpring({
        opacity: snackBarShow ? 1 : 0,
        display: snackBarShow ? 'block' : 'none',
        transform: snackBarShow ? 'translateX(0%)' : 'translateX(100%)',
    });


    return(
        <animated.div style={fadeInOutMain} className="Home">
            <Cube />
        <div className="Name-Header">
            <h1>Gareth Patterson</h1>
            <p className="text-sm">Full-Stack Developer | Machine Learning Enthusiast</p>
        </div>
            <div className="Intro-Section">
                <div className="Home-Welcome">
                    <h1 className="text-lg w-60">The Next Generation of <span className="text-primary text-lg">Software Development</span></h1>
                </div>
                <div className="Cube-Holder text-center">
                    <NavCube setSnackBarShow={setSnackBarShow} snackBarShow={snackBarShow}/>
                </div> 
                <div className="Link-Area">
                    <p className="p-10 w-80"><a href="https://www.linkedin.com/in/gareth-patterson-6694441ab/">LinkedIn</a> 
                    {' '}|{' '}<a href="https://github.com/patteg21">Github</a>{' '}|{' '}
                    <a className="ResumeClick" href= "/Gareth-Patterson.pdf" download="Gareth-Patterson.pdf">Resume</a></p>
                </div>
                {snackBarShow ? <animated.div style={fadeInOut} className="SnackBar bg-primary rounded-sm text-sm">Email Copied</animated.div>: null}
            </div>
            <Footer />
        </animated.div>
    )}