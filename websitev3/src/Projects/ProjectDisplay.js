import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

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
        transform: showInfo ? 'translateY(0%)' : 'translateY(100%)',
    });

    return(
        <div className="ProjectDisplay" onMouseOver={changeStateInfoTrue} onMouseOut={changeStateInfoFalse}>
            <div className="ProjShow">
                <h1>{title}</h1>
            </div>
            {showInfo ? 
            <animated.div style={scrollUp} className="ProjDesc">
                <h1>Yo</h1>
            </animated.div>
            : <div></div>}
        </div>
    )
}