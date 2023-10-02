import React from "react";
import { Link } from "react-router-dom";

import Arrow from "./down-arrow.svg"

export default function TopBar(){

    return(
        <div className="TopBar">
            <ul>
                <Link className="NavLink" to="/"><li>Home<img src={Arrow}></img></li></Link>
                <Link className="NavLink" to="/about"><li>About<img src={Arrow}></img></li></Link>
                <Link className="NavLink" to="/resume"><li>Resume<img src={Arrow}></img></li></Link>
            </ul>
        </div>
    )
}