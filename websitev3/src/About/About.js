import React, { useState, useEffect } from "react";
// https://www.copycat.dev/blog/react-draggable/#:~:text=const%20Draggable%20%3D%20require(%20'react,Draggable%2F%3E%20component%20around%20it.
import Draggable, {DraggableCore} from "react-draggable";
// https://www.npmjs.com/package/react-resizable?activeTab=code
import { ResizableBox } from 'react-resizable';
import { useSpring, animated } from 'react-spring';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

import AboutHeader from "./AboutHeader";
import "./about.css"
import TitleArea from "./TitleArea";
import Footer from "../Footer";

export default function About(){

    const fadeInOut = useSpring({
        opacity: 1 ,
        display: 'block',
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(100%)' },
    });

    return(
        <animated.div style={fadeInOut} className="About">
           <TitleArea/>
           <div className="grid grid-cols-3 gap-4">
           </div>
            <Footer />
        </animated.div>
    )
}