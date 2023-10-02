import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';

import reactImg from "./imgs/react.png"
import tailwindImg from "./imgs/tailwind.png"
import djangoImg from "./imgs/django.png"
import expressImg from "./imgs/express.png"
import nodeImg from "./imgs/node.png"
import flaskImg from "./imgs/flask.png"
import mongodbImg from "./imgs/mongodb.png"


export default function HomeHeader({index, setIndex}){
    
    const colors = ["#60dbfb","#01b9d8","#015a33","#f1c40e","#68a063","white","#95c38c"]
    const words = ['React', 'Tailwind', 'Django','Express', 'Node','Flask','MongoDB']
    const icons = [<img src={reactImg}/>,<img src={tailwindImg}/>,<img src={djangoImg}/>,<img src={expressImg}/>,<img src={nodeImg}/>,<img src={flaskImg}/>,<img src={mongodbImg}/>]


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

        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);
    
        return () => clearInterval(interval); 
    }, []);



    return(
        <div className="HomeHeader">
            <h1 className="Home-Header" >
                <animated.span style={imgProps} className="animate-image">{icons[index]}</animated.span>
                {' '}Unlock the potential of{' '}
                <animated.span style={props}>{words[index]}</animated.span>
            </h1>
        </div>
    )
}