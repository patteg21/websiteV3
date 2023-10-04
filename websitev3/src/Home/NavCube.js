import React from "react";

export default function NavCube(){
    return(
        <div className="NavCube">
        <div className="Top-NavCube"></div>
            <div>
                <span style={{'--i': 0}}>
                    <h1>Home</h1>
                    <h1>Home</h1>
                </span>
                <span style={{'--i': 1}}>
                    <h1>About</h1>
                    <h1>About</h1>
                </span>
                <span style={{'--i': 2}}>
                    <h1>Resume</h1>
                    <h1>Resume</h1>
                </span>
                <span style={{'--i': 3}}>
                    <h1>Connect</h1>
                    <h1>Connect</h1>
                </span>
            </div>    
        </div>
    )
}