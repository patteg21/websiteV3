import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export default function ProjectDisplay({title}){
    const[showInfo,setShowInfo] = useState(false)

    function changeStateInfoTrue(){
        setShowInfo(true)
    }

    function changeStateInfoFalse(){
        setShowInfo(false)
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
            <div className="ProjShow">
                <h1>{title}</h1>
            </div>
            {showInfo ? 
            <animated.div style={scrollUp} className="ProjDesc">
                <h1>{title}</h1>
            </animated.div>
            : <div></div>}
        </div>
    )
}