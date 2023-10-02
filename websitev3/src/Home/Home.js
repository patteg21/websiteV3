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
        </div>
    )}