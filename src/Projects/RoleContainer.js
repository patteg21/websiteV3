import React, { useEffect, useState } from "react";
import SpecificRole from "./SpecificRole";

import SoftwareDev from "./Software/SoftwareDev";
import PeopleRole from "./People/PeopleRole";
import DataRole from "./Data/DataRole";

export default function RoleContainer(){


    return(
    <div className="Role-Selection grid grid-cols-3 text-center">
        <SpecificRole classObject="Data-Role" 
            title="Data"
        
            component={<DataRole  
            />}
        
        />
        <SpecificRole classObject="Developer-Role"
        title="Software"
        component={<SoftwareDev />}

        />
        <SpecificRole classObject="BDR-Role"
        title="People"
        component={<PeopleRole />}
        />
    </div>
    )
};