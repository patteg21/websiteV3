import React, { useState, useEffect } from "react";

import Map from "./Map";


// https://www.copycat.dev/blog/react-draggable/#:~:text=const%20Draggable%20%3D%20require(%20'react,Draggable%2F%3E%20component%20around%20it.
import Draggable, {DraggableCore} from "react-draggable";

// https://www.npmjs.com/package/react-resizable?activeTab=code
import { ResizableBox } from 'react-resizable';


import background from "./blackhole2.png"

import "./about.css"

export default function About(){

    return(
        <div className="About">
            <Map />
        </div>
    )
}