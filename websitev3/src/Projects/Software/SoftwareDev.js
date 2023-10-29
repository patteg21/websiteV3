import React, { useEffect, useState } from "react";
import CodeBlock from "./CodeBlock";
import "./software.css"

export default function SoftwareDev(){
   const [language, setLanguage] = useState(null)

   useEffect(() => {
    const programmingLanguages = ["Python", "JavaScript", "C++"];
    let num = 0;

    const intervalId = setInterval(() => {
        setLanguage(programmingLanguages[num]);
        num += 1;
        if (num >= programmingLanguages.length) {
            num = 0;
        }
    }, 2000);
    return () => clearInterval(intervalId);
}, []);

    return(
        <div className="SoftwareDev p-5">
            <h1 className="text-primary p-5 text-xl">The Full-Stack Experience</h1>
            <h3 className="text-center text-lg">Utilizing {language}</h3>
            <CodeBlock language={language}/>
        </div>
    )
}