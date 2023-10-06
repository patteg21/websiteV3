import React from "react";
import ProjectDisplay from "./ProjectDisplay";

import Demeter from "./Demeter.png"

export default function ProjectContainer(){

    return(
        <div className="Projects-Container">
            <div className="Role-Selection grid grid-cols-3 text-center">
                <div className="Data-Role">
                    Data-Analyst
                </div>
                <div className="Developer-Role">
                    Software Developer
                </div>
                <div className="BDR-Role">
                    Business Development
                </div>
            </div>
            <div className="Left-Projects grid grid-cols-4 gap-4">
                <ProjectDisplay title="Demeter" pathToImage={Demeter}/>
                <ProjectDisplay title="Stock Predicition Model"  pathToImage="./Demeter.png"/>
                <ProjectDisplay title="Coffe & Bean"  pathToImage="./Demeter.png"/>
                <ProjectDisplay title="Portfolio Website" pathToImage="./Demeter.png"/>
            </div>
        </div>
    )
}