import React from "react";

export default function SoftwareDev(){

    return(
        <div>
            <h1 className="m-5 text-xl">Software</h1>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h1>Experience</h1>
                    <ul>
                        <li className="p-5">Endava
                        <ul className="text-left">
                            <li className="p-2 text-sm">
                                Served as a full-stack developer on team of five tasked with creating
                                a LLM interface for Logistic Warehouse
                            </li>
                            <li className="p-2 text-sm">
                                Engineered and implemented a space optimization algorithm to maximize
                                spacial usage in storage
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="p-5 text-xl text-primary">Skills</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
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
                </div>

            </div>
        </div>
    )
}