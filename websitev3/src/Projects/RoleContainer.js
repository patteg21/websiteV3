import React from "react";

export default function RoleContainer(){

    return(
    <div className="Role-Selection grid grid-cols-3 text-center">
        <div className="Data-Role">
            <h1>Data Analyst</h1>
            <div className="Background-Role">
                This is in the background
            </div>
        </div>
        <div className="Developer-Role">
            <h1>Software Developer</h1>
            <div className="Background-Role">
                This is in the background
            </div>
        </div>
        <div className="BDR-Role">
            <h1>Business Development</h1>
            <div className="Background-Role">
                This is in the background
            </div>
        </div>
    </div>
    )
};