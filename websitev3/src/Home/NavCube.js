import React from "react";
import { Link } from "react-router-dom";

import HomeButton from "./HomeButton";

export default function NavCube({setSnackBarShow, snackBarShow}){
    return(
        <div className="NavCube">
        <div className="Top-NavCube"></div>
            <div>
            <span style={{'--i': 0}}>
                    <Link to="/">
                    <h1>Home</h1>
                    </Link>
                </span>
                <span style={{'--i': 1}}>
                    <Link to="/about">
                    <h1>About</h1>
                    </Link>
                </span>
                <span style={{'--i': 2}}>
                    <Link to="/resume">
                    <h1>Resume</h1>
                    </Link>
                </span>
                <span style={{'--i': 3}} className="HomeButton">
                    <HomeButton setSnackBarShow={setSnackBarShow} snackBarShow={snackBarShow}/>
                </span>
            </div>    
        </div>
    )
}