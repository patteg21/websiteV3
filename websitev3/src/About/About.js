import React, { useState, useEffect } from "react";

// https://www.copycat.dev/blog/react-draggable/#:~:text=const%20Draggable%20%3D%20require(%20'react,Draggable%2F%3E%20component%20around%20it.
import Draggable, {DraggableCore} from "react-draggable";

// https://www.npmjs.com/package/react-resizable?activeTab=code
import { ResizableBox } from 'react-resizable';



import "./about.css"

export default function About(){
    
    return(
        <div className="About">
            <Draggable>
            <ResizableBox>
                <div className="Draggable About-Header">
                    <h1>About</h1>
                </div>
            </ResizableBox>
            </Draggable>

        </div>
    )
}