import React from "react";
// https://www.copycat.dev/blog/react-draggable/#:~:text=const%20Draggable%20%3D%20require(%20'react,Draggable%2F%3E%20component%20around%20it.
import Draggable, {DraggableCore} from "react-draggable";
// https://www.npmjs.com/package/react-resizable?activeTab=code
import { useSpring, animated } from 'react-spring';


export default function PersonalInterests(){
    return(
        <Draggable>
            <div className="PersonalInterests p-5 Draggable">
                <h1 className="text-left c-primary">Interests</h1>
                <div className="grid grid-cols-2 gap-2">

                </div>
            </div>
        </Draggable>
    )
}