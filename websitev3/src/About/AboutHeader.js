import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';

import reactImg from "./imgs/react.png"
import tailwindImg from "./imgs/tailwind.png"
import djangoImg from "./imgs/django.png"
import expressImg from "./imgs/express.png"
import nodeImg from "./imgs/node.png"
import flaskImg from "./imgs/flask.png"
import mongodbImg from "./imgs/mongodb.png"
import threeImg from "./imgs/Three.png"


export default function AboutHeader(){
    const [index, setIndex] = useState(0)
    const colors = ["#60dbfb","#01b9d8","#015a33","#f1c40e","#68a063","black","#95c38c","#433d83"]
    const colorsBackground = [
        "RGB(96, 219, 251, .3)",
        "RGB(1, 185, 216, .3)",
        "RGB(1, 90, 51, .3)",
        "RGB(241, 196, 14, .3)",
        "RGB(104, 160, 99, .3)",
        "RGB(255, 255, 255, .3)",
        "RGB(149, 195, 140, .3)",
        "RGB(67, 61, 131, .3)"
      ];
    const words = ['React', 'Tailwind', 'Django','Express', 'Node','Flask','MongoDB',"Three.js"]
    const icons = [<img src={reactImg}/>,<img src={tailwindImg}/>,<img src={djangoImg}/>,<img src={expressImg}/>,<img src={nodeImg}/>,<img src={flaskImg}/>,<img src={mongodbImg}/>, <img src={threeImg}/>]


    const props = useSpring({
        color: colors[index],
        opacity: 1,
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(-30%)'  },
        reset: true,
    });

    const imgProps = useSpring({
        color: colors[index],
        opacity: 1,
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(-30%)' },
        reset: true,
    });

    useEffect(() => {
        const element = document.getElementsByClassName("About") 
        element[0].style.background = `radial-gradient(circle, white, ${colorsBackground[index]})`

        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          element[0].style.background = `radial-gradient(circle, white, ${colorsBackground[index]})`
          element[0].style.backgroundClip = 'content-box'
        }, 2000);

    
        return () => clearInterval(interval); 
    }, [index]);



    return(
        <div className="HomeHeader">
            <h2 className="Home-Header">
                <animated.span style={imgProps} className="animate-image">{icons[index]}</animated.span>
                {' '}Unlocking the potential of{' '}
                <animated.span style={props}>{words[index]}</animated.span>
            </h2>
        </div>
    )
}