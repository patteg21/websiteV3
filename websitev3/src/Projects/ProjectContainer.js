import React from "react";
import ProjectDisplay from "./ProjectDisplay";



export default function ProjectContainer(){

    return(
        <div className="Projects-Container">
            <div className="Left-Projects grid grid-cols-2 gap-4">
                <ProjectDisplay title="Demeter"/>
                <ProjectDisplay title="Stock Predicition Model"/>
                <ProjectDisplay title="Coffe & Bean"/>
                <ProjectDisplay title="Portfolio Website"/>
            </div>
        </div>
    )
}