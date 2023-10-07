import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";


export default function ProjectDisplay({title, pathToImage, languages, technologies, githubLink}){
    const[showInfo,setShowInfo] = useState(false)
    const[blurEffect, setBlurEffect] = useState(null)

    function changeStateInfoTrue(){
        setShowInfo(true)
        setBlurEffect("Blur-Effect")
    }

    function changeStateInfoFalse(){
        setShowInfo(false)
        setBlurEffect(null)
    }

    const scrollUp = useSpring({
        maxHeight: showInfo ? '100%' : '0%',
        opacity: showInfo ? 1 : 0,
        display: showInfo ? 'block' : 'none',
        config: {
            duration: 500, // Set the duration of the animation in milliseconds (e.g., 500ms)
            ...config.default, // You can use other properties from the config object if needed
          },
    });

    return(
        <div className="ProjectDisplay" onMouseOver={changeStateInfoTrue} onMouseOut={changeStateInfoFalse}>
            <div className={`ProjShow ${title} ${blurEffect}`} >
                <img className="Project-Img" src={pathToImage}/>
            </div>
            {showInfo ? 
            <a href="https://www.google.com/"><animated.div style={scrollUp} className="ProjDesc">
                <h1 className="text-lg">{title}</h1>
                <p className="text-sm">Languages: {languages}</p>
                <p className="text-xs p-5">Stack: {technologies}</p>
            </animated.div></a>
            : <div></div>}
        </div>
    )
}