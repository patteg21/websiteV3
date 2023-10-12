import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";
import Draggable, {DraggableCore} from "react-draggable";

import DonutModel from "./imgs/DonutFinalBlender.glb"
import LightSaber from "./imgs/lightsaber.glb"
import NarutoMask from "./imgs/naruto_mask.glb"


export default function Donut(){

    console.log(DonutModel)

    return(
        <Draggable className="">
            <div className="Donut-Container Draggable" id="Donut-Container">
                <Canvas>
                    <ambientLight intensity={0.8} />
                    <spotLight position={[0, 0, 0]} angle={0.10} penumbra={0.1} />
                    <pointLight position={[2, 2, 1]} />
                    <Suspense fallback={null}>
                        <GltfModel modelPath={DonutModel}/>
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </Draggable>
    )
}