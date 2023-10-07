import React from "react";
import SpecificRole from "./SpecificRole";

import SoftwareDev from "./SoftwareDev";

export default function RoleContainer(){

    return(
    <div className="Role-Selection grid grid-cols-3 text-center">
        <SpecificRole classObject="Data-Role" 
        title="Data Analyst"

        />
        <SpecificRole classObject="Developer-Role"
        title="Software Developer"
        component={<SoftwareDev />}

        />
        <SpecificRole classObject="BDR-Role"
        title="Business Development"

        />
    </div>
    )
};