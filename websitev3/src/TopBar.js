import React from "react";
import { Link } from "react-router-dom";

export default function TopBar(){

    return(
        <div className="TopBar">
            <ul>
                <Link className="NavLink" to="/"><li>Home</li></Link>
                <Link className="NavLink" to="/about"><li>About</li></Link>
                <Link className="NavLink" to="/resume"><li>Resume</li></Link>
            </ul>
        </div>
    )
}