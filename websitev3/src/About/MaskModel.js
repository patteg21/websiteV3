import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";
import Draggable, {DraggableCore} from "react-draggable";

import DonutModel from "./imgs/DonutFinalBlender.glb"
import LightSaber from "./imgs/lightsaber.glb"
import NarutoMask from "./imgs/naruto_mask.glb"


export default function Donut(){

    return(
        <Draggable className="">
            <div className="Donut-Container Draggable" id="Donut-Container">
                <Canvas>
                    <ambientLight intensity={2} />
                    <spotLight position={[1, 1, 1]} angle={0.10} penumbra={0.1} />
                    <pointLight position={[0, 0, 0]} />
                    <Suspense fallback={null}>
                        <GltfModel modelPath={LightSaber} scale={.1}/>
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </Draggable>
    )
}