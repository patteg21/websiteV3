import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import * as THREE from 'three'; // Import Three.js library




export default function Donut(){

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    
        let loadedModel;
        const glftLoader = new GLTFLoader();
        glftLoader.load('./Donut.gltf', (gltfScene) => {
          loadedModel = gltfScene;
          // console.log(loadedModel);
    
          gltfScene.scene.rotation.y = Math.PI / 8;
          gltfScene.scene.position.y = 3;
          gltfScene.scene.scale.set(10, 10, 10);
          test.scene.add(gltfScene.scene);
        });

        const animate = () => {
            if (loadedModel) {
              loadedModel.scene.rotation.x += 0.01;
              loadedModel.scene.rotation.y += 0.01;
              loadedModel.scene.rotation.z += 0.01;
            }
            requestAnimationFrame(animate);
          };
          animate();
    }, []);

    return(
        <div className="Donut-Container" id="Donut-Container">
            YO
        </div>
    )
}