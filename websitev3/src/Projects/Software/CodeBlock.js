import React, { useEffect, useState } from "react";

export default function CodeBlock({language}){
    const [codeLang, setCodeLang] = useState(language)

    useEffect(()=>{
        setCodeLang(language)

    },[language])

    return(
        <div className="CodeBlock">
            <h1 className="text-left p-2">Code Dynamically</h1>
            <code className="CodeDisplay text-xs text-left">
            {'<div className="SoftwareDev p-5">'}<br />
            &nbsp;&nbsp;&nbsp;{'<h1 className="text-primary p-5 text-xl">The Full-Stack Experience</h1>'}<br />
            &nbsp;&nbsp;&nbsp;{`<h3 className="text-center text-lg">Utilizing ${codeLang}</h3>`}<br />
            &nbsp;&nbsp;&nbsp;{'<CodeBlock language={language}/>'}<br />
            {'</div>'}<br />
            </code>
        </div>
    )
}