import React from "react";
import ProjectDisplay from "./ProjectDisplay";

import Demeter from "./imgs/Demeter.png"
import Stock from "./imgs/stock.png"
import Coffee from "./imgs/coffee.png"
import CVIcon from "./imgs/cv.png"
import RoleContainer from "./RoleContainer";

export default function ProjectContainer(){

    return(
    <div className="Left-Projects grid grid-cols-4 gap-4">           
        <ProjectDisplay 
        title="Demeter" 
        pathToImage={Demeter}
        languages="Python | JavaScript"
        technologies="Django | Azure LLM | SQLite"
        githubLink=""

        />
        <ProjectDisplay 
        title="Stock Predicition-Model" 
        pathToImage={Stock}
        languages="Python | JavaScript"
        technologies="MongoDB | Express | Node | Flask | React | Tailwind | TensorFlow"
        githubLink=""

        />
        <ProjectDisplay 
        title="Coffee & Bean"  
        pathToImage={Coffee}
        languages="JavaScript"
        technologies="MongoDB | Express | Node | React | MUI"
        githubLink=""

        />
        <ProjectDisplay 
        title="Portfolio Website" 
        pathToImage={CVIcon}
        languages="JavaScript"
        technologies="Firebase | React | Tailwind | Three.js | Blender"
        githubLink=""
        />
    </div>
    )
}