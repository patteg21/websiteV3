import React from "react";

export default function NavCube(){
    return(
        <div className="NavCube">
        <div className="Top-NavCube"></div>
            <div>
                <span style={{'--i': 0}}></span>
                <span style={{'--i': 1}}></span>
                <span style={{'--i': 2}}></span>
                <span style={{'--i': 3}}></span>
            </div>    
        </div>
    )
}