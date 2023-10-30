import React from "react";

import NavCube from "./NavCube";

export default function CubeContainer(setSnackBarShow, snackBarShow){

    return(
    <div className="Cube-Holder text-center">
        <NavCube setSnackBarShow={setSnackBarShow} snackBarShow={snackBarShow}/>
    </div> 
    )
}