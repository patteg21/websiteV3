import React, {useState} from "react"; 
import { Bar } from 'react-chartjs-2';
import { useSpring, animated, config } from "react-spring";

export default function DataRole(){


    return(
        <div className="DataRole">
            <h1 className="m-5 text-xl">Data</h1>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h1 className="text-xl">Data ToolKit</h1>
                    <ul className="text-left">
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>MatPlotLib</li>
                        <li>SciKit</li>
                        <li>TensorFlow</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl" >Data + Design</h1>
                    <p></p>
                </div>
                <div></div>
            </div>
        </div>
    )
}