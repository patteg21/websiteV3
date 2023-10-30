import React, { useEffect, useState } from "react";

export default function CodeBlock({language}){
    const [codeLang, setCodeLang] = useState(language)

    useEffect(()=>{
        setCodeLang(language)

    },[language])

    return(
        <div className="CodeBlock rounded">
            <h1 className="text-left p-2 bg-primary rounded">Code Dynamically</h1>
            <code className="CodeDisplay text-xs text-left text-primary">
            {'<div className="SoftwareDev p-5">'}<br />
            &nbsp;&nbsp;&nbsp;{'<h1 className="text-primary text-xl">The Full-Stack Experience</h1>'}<br />
            &nbsp;&nbsp;&nbsp;{`<h3 className="text-center text-lg">Utilizing ${codeLang}</h3>`}<br />
            &nbsp;&nbsp;&nbsp;{'<CodeBlock language={language}/>'}<br />
            &nbsp;&nbsp;&nbsp;{'<SoftwareSkills />'}<br />
            {'</div>'}<br />
            </code>
        </div>
    )
}