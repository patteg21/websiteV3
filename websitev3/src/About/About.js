import React from "react";
// https://www.copycat.dev/blog/react-draggable/#:~:text=const%20Draggable%20%3D%20require(%20'react,Draggable%2F%3E%20component%20around%20it.
import Draggable, {DraggableCore} from "react-draggable";
// https://www.npmjs.com/package/react-resizable?activeTab=code
import { ResizableBox } from 'react-resizable';
import { useSpring, animated } from 'react-spring';


import AboutHeader from "./AboutHeader";
import "./about.css"
import TitleArea from "./TitleArea";
import Footer from "../Footer";
import PersonalInterests from "./PersonalInterests";
import Donut from "./Donut";

export default function About(){

    const fadeInOut = useSpring({
        opacity: 1 ,
        display: 'block',
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(100%)' },
    });

    return(
        <animated.div style={fadeInOut} className="About">
            <TitleArea/>
            <p className="text-center text-xs">{'('}ps. you can move the sections{')'}</p>
            <div className="grid grid-cols-3 gap-4">
                    <PersonalInterests />
                    <div className="p-5">
                        <h1>Why Software?</h1>
                    </div>
                    <div className="p-5">
                        Education
                        <div>
                            <h1>The FlatIron School <span>August 2023 - Current</span></h1>
                            <p>Software Engineering</p>

                        </div>
                        <div>
                            <h1>Rutgers University <span className="text-right">September 2019 - May 2022</span></h1>
                            <p>Political Science / History</p>  
                        </div>
                    </div>
                    {/* <Donut /> */}
            </div>

            <Footer />
        </animated.div>
    )
}