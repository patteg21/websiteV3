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

    const inputData = [2,4,6,8,4,12,8,16,20,24]

    const xValues = [5,10,15,20,25,30,35,40,45,50];
    const yValues = [2,4,6,8,10,12,14,16,18,20];
    const data = {
      labels: xValues,
      datasets: [
        {
            label: "",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            borderColor: "rgba(0, 0, 255, 1)",
            borderWidth: 2,
            data: inputData,
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
           <TitleArea/>
           <div className="grid grid-cols-3 gap-4">
              <div className="Data-Graph">
                <Line data={data} options={options} />
              </div>
           </div>
            <Footer />
        </animated.div>
    )
}