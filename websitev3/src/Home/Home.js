import React, { useState, useEffect } from "react";
// https://www.npmjs.com/package/dotted-map?activeTab=readme
import DottedMap from 'dotted-map';
import { useSpring, animated } from 'react-spring';

import "./home.css"
import HomeHeader from "./HomeHeader";


export default function Home(){

    return(
        <div className="Home">
            <HomeHeader />
            <div className="Intro-Section">
                <div className="Home-Welcome">
                    <h1 className="text-12">The Next Generation of <span className="text-primary text-16">Software</span></h1>
                </div>
                <div className="Get-Connected">
                    <h1 className="bg-primary">Connect</h1>
                </div>
            </div>
        </div>
    )}