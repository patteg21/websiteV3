import React, {useState} from "react";

export default function SpecificRole({classObject, title}){
    const [backgroundBlur, setBackgroundBlur] = useState("Background-Blur")
    const [hideText, setHideText] = useState(null)

    function handleMouseOver(){
        setBackgroundBlur(null)
        setHideText("Hide-Text")
    }

    function handleMouseOut(){
        setBackgroundBlur("Background-Blur")
        setHideText(null)
    }

    

    return(
        <div className={`${classObject}`} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>
            <h1 className={`${hideText}`}>{title}</h1>
            <div className={`Background-Role ${backgroundBlur}`}>
                <h1 className="p-5 text-xl">{title}</h1>
            </div>
        </div>
    )
}