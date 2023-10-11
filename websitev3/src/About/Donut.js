import React, { useEffect } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default function Donut(){

    useEffect(()=>{
        let Mesh;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const targetDiv = document.body

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(targetDiv.offsetWidth, targetDiv.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        targetDiv.appendChild(renderer.domElement);


        const donutLoader = new GLTFLoader();

        donutLoader.load( './DonutFinalBlender.gltf', function ( gltf ) {
            scene.add(gltf.scene);


        }, undefined, function ( error ) {
            console.log("ERRROROROROROROROR")
            console.error( error );

        } );

        function animate() {
            requestAnimationFrame(animate);
            if (Mesh && Mesh.rotation) {
                Mesh.rotation.y -= 0.005;
            }
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            renderer.domElement.remove();
        };
    }, []);


    return(
        <div className="Donut-Container" id="Donut-Container">
            YO
        </div>
    )
}