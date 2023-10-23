import React from "react";
// https://www.copycat.dev/blog/react-draggable/#:~:text=const%20Draggable%20%3D%20require(%20'react,Draggable%2F%3E%20component%20around%20it.
import Draggable, {DraggableCore} from "react-draggable";
// https://www.npmjs.com/package/react-resizable?activeTab=code
import { useSpring, animated } from 'react-spring';


export default function PersonalInterests(){

    return(
            <div className="PersonalInterests p-5 text-center">
                <h1 className="text-primary">Interests</h1>
                <div className="grid grid-cols-2 gap-2">
                    <ul className="text-lg" >Professional
                        <li className="text-sm">Data Utilization</li>
                        <li className="text-sm">Machine Learning</li>
                        <li className="text-sm">Secure Coding</li>
                        <li className="text-sm">UX/UI</li>
                    </ul>
                    <ul className="text-lg">Personal
                        <li className="text-sm">Rowing {"("}Crew{")"}</li>
                        <li className="text-sm">Chess</li>
                        <li className="text-sm">Blender - 3D Modeling</li>
                        <li className="text-sm">Video Games</li>
                    </ul>
                </div>
            </div>
    )
}