import React from "react";
import { useSpring, animated } from "react-spring";
import Footer from "../Footer";
import ProjectContainer from "./ProjectContainer"
import ProjectDisplay from "./ProjectDisplay";
import RoleContainer from "./RoleContainer";

import "./projects.css"

import Demeter from "./imgs/Demeter.png"

export default function Projects(){

    const fadeInOutMain = useSpring({
        opacity: 1 ,
        display: 'block',
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(100%)' },
    });

    return(
        <animated.div className="Projects p-10" style={fadeInOutMain}>
            <div className="Projects-Container">
                <RoleContainer />
                <ProjectContainer />
            </div>
            <Footer />
        </animated.div>
    )
}