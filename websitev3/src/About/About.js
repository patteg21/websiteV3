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
import TitleArea from "./DesiredTitle";
import SkillsArea from "./SkillsArea";
import Footer from "../Footer";

export default function About(){

    const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
    const data = {
      labels: xValues,
      datasets: [
        {
            label: "",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            borderColor: "rgba(0, 0, 255, 1)",
            borderWidth: 1,
            data: yValues,
        },
      ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          title: {
            display: true,
            text: "ML Stock Predicition Model", // Set your desired chart name here
            fontSize: 16,
          },
        },
      };

    const fadeInOut = useSpring({
        opacity: 1 ,
        display: 'block',
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(100%)' },
    });

    return(
        <animated.div style={fadeInOut} className="About">
            <div className="About-Grid">
                <TitleArea/>
                <SkillsArea />
                <div className="Data-Graph">
                    <Line data={data} options={options} />
                </div>
            </div>
            <Footer />
        </animated.div>
    )
}