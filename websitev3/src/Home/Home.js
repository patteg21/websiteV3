import React, { useState, useEffect } from "react";
// https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'
// https://www.npmjs.com/package/dotted-map?activeTab=readme
import DottedMap from 'dotted-map';
import { useSpring, animated } from 'react-spring';

import "./home.css"
import HomeHeader from "./HomeHeader";



export default function Home(){



    function handleConnectClick(){
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            confettiRadius: 3,
            confettiNumber: 400,
            confettiColors: [
                'rgb(142, 5, 194)', 'rgb(142, 5, 194)', '#DDA0DD', '#8F00FF', '#DA70D6', '#BA55D3',
              ],
        })
        console.log('Confetti animation completed!')
    }


    // jsConfetti.addConfetti({
    //     emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    //  })


    return(
        <div className="Home">
            {/* <HomeHeader /> */}
            <div className="Intro-Section">
                <div className="Home-Welcome">
                    <h1 className="text-12">The Next Generation of <span className="text-primary text-16">Software</span></h1>
                </div>
                <div className="Get-Connected">
                    <h1 className="bg-primary" onClick={handleConnectClick}>Connect</h1>
                </div>
            </div>
        </div>
    )}