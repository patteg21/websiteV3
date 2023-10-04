import React from "react";

import HomeButton from "./HomeButton";

import Draggable, {DraggableCore} from "react-draggable";

export default function NavCube({setSnackBarShow, snackBarShow}){
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
                    <HomeButton setSnackBarShow={setSnackBarShow} snackBarShow={snackBarShow}/>
                </span>
            </div>    
        </div>
    )
}