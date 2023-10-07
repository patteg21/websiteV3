import React from "react";
import ProjectDisplay from "./ProjectDisplay";

import Demeter from "./Demeter.png"
import RoleContainer from "./RoleContainer";

export default function ProjectContainer(){

    return(
        <div className="Projects-Container">
            <RoleContainer />
            <div className="Left-Projects grid grid-cols-4 gap-4">
                <ProjectDisplay title="Demeter" pathToImage={Demeter}/>
                <ProjectDisplay title="Stock Predicition Model"  pathToImage="./Demeter.png"/>
                <ProjectDisplay title="Coffe & Bean"  pathToImage="./Demeter.png"/>
                <ProjectDisplay title="Portfolio Website" pathToImage="./Demeter.png"/>
            </div>
        </div>
    )
}