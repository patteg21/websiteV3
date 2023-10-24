import React, {useState} from "react"; 
import "./data.css"
import RadarChart from "./RadarChart";

import CheckImg from "./check.png"

export default function DataRole(){


    return(
        <div className="DataRole">
            <h1 className="text-center text-xl p-5 text-primary">Data & Machine Learning</h1>
            <div className="grid grid-cols-3">
                <RadarChart />
                <div></div>
                <div className="text-center">
                    <ul className="list-none text-center">
                        <li className="flex items-center p-2">Predictive Models <img className="checkImg" src={CheckImg}/></li>
                        <li className="flex items-center p-2">Data Engineering <img className="checkImg" src={CheckImg}/></li>
                        <li className="flex items-center p-2">Data Analysis <img className="checkImg" src={CheckImg}/></li>
                        <li className="flex items-center p-2">Search Engines <img className="checkImg" src={CheckImg}/></li>
                        <li className="flex items-center p-2">Data Processing<img className="checkImg" src={CheckImg}/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}