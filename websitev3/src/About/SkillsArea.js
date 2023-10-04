import React from "react";

export default function SkillsArea(){

    return(
        <div className="SkillsArea grid grid-cols-2 gap-4">
            <ul className="">
                <li>Python</li>
                <li>JavaScript</li>
                <li>C++</li>
            </ul>
            <ul className="">
                <li>MongoDB</li>
                <li>SQL</li>
                <li>MySQL</li>
            </ul>
            <ul className="">
                <li>Django</li>
                <li>Flask</li>
                <li>Express</li>
                <li>Node.js</li>
            </ul>
            <ul className="">
                <li>React</li>
                <li>Three.js</li>
                <li>Tailwind</li>
                <li>Blender</li>
            </ul>
        </div>
    )
}