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
                    <h1 className="text-lg">Skills</h1>
                    <ul className="text-left">
                        <li className="p-5">Languages:
                            <p> Python | JavaScript | TypeScript | C++ </p>
                        </li>     
                        <li className="p-5">Frameworks:
                            <p>Django | Flask | Express | React | Tailwind</p>
                        </li>
                        <li className="p-5">Databases:
                            <p>MongoDB | SQL | MySQL</p>
                        </li>   
                    </ul>
                </div>

            </div>
        </div>
    )
}