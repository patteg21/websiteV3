import React from "react";
import CodeIcon from "./code.png"

export default function SoftwareSkills(){

    return(

    <div className="grid-cols-2 grid">
        <ul className="text-left">
            <li className="text-sm"><span className="font-bold">Frontend</span> JavaScript  |  React.js  |  Tailwind </li>
            <li className="text-sm"><span className="font-bold">Backend</span> Python  |  Django  |  Flask  |  Node.js | Express</li>
            <li className="text-sm"><span className="font-bold">Data</span> MongoDB  |  MySQL |  SQL  | Pandas </li>
            <li className="text-sm"><span className="font-bold">Cloud</span> AWS | Azure </li>
        </ul>
        <div className="text-center">
            <img className="w-1/4 text-center mx-auto" alt="" src={CodeIcon}/>
        </div>
    </div>
    )
}