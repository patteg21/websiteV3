import React from "react";
import { useSpring, animated } from "react-spring";
import Footer from "../Footer";
import ProjectContainer from "./ProjectContainer"
import ProjectDisplay from "./ProjectDisplay";
import RoleContainer from "./RoleContainer";

import "./projects.css"

export default function Projects(){

    const fadeInOutMain = useSpring({
        opacity: 1 ,
        display: 'block',
        transform: 'translateY(0%)', 
        from: {opacity:0, transform: 'translateY(100%)' },
    });

    return(
        <animated.div className="Projects" style={fadeInOutMain}>
            <h1 className="text-center text-xl p-2">Explore More</h1>
            <div className="Projects-Container">
                <RoleContainer />
                <ProjectContainer />
            </div>
            <Footer />
        </animated.div>
    )
}