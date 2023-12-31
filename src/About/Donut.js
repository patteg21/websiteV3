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
        <Draggable className="text-center">
            <div className="Donut-Container Draggable mx-auto" id="Donut-Container">
                <Canvas>
                    <ambientLight intensity={0.9} />
                    <spotLight position={[10, 10, 10]} angle={0.10} penumbra={0.1} />
                    <pointLight position={[1, 2, 1]} />
                    <Suspense fallback={null}>
                        <GltfModel modelPath={DonutModel} scale={1.6}/>
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </Draggable>
    )
}