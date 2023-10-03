import React, { useEffect } from 'react';
import * as THREE from 'three'; // Import Three.js library

export default function Cube() {
  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: 'rgb(142, 5, 194)',
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    //edges
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 'black' }); // Color of the edges
    const edgesMesh = new THREE.LineSegments(edgesGeometry, lineMaterial);
    scene.add(edgesMesh);

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
  
        // Update the vertices of the edges based on the current vertices of the cube
        edgesGeometry.dispose(); // Dispose the existing edges geometry
        edgesMesh.geometry = new THREE.EdgesGeometry(cube.geometry); // Create new edges geometry
        edgesMesh.geometry.computeBoundingBox(); // Compute bounding box to ensure correct position of edges
  
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
  
        renderer.render(scene, camera);
    }

    animate(); // Start the animation loop

    // Clean up Three.js scene when the component unmounts
    return () => {
      renderer.domElement.remove(); // Remove the canvas element
      // Perform any additional cleanup or resource disposal here
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div id="threejs-container" className='Cube'>
      {/* The canvas element where the Three.js scene will be rendered */}
    </div>
  );
}


