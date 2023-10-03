import React, { useEffect } from 'react';
import * as THREE from 'three'; // Import Three.js library


export default function Cube({x, y, z, insideText}) {
  useEffect(() => {

    var vertexShader = `
    varying vec3 vPos;
    void main()	{
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
`   ;
    var fragmentShader = `

        varying vec3 vPos;
        uniform vec3 size;
        uniform float thickness;
        uniform float smoothness;
        uniform vec3 bordercolor; 
        uniform vec3 bgcolor;
    
        void main() {
                
            float a = smoothstep(thickness, thickness + smoothness, length(abs(vPos.xy) - size.xy));
            a *= smoothstep(thickness, thickness + smoothness, length(abs(vPos.yz) - size.yz));
            a *= smoothstep(thickness, thickness + smoothness, length(abs(vPos.xz) - size.xz));
        
            vec3 finalColor = mix(bordercolor, bgcolor, a);
            
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    // Three.js setup
    const scene = new THREE.Scene();


    const containerWidth = 800; // Example width of your container in pixels
    const containerHeight = 600; 
    const aspectRatio = containerWidth / containerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(-4, 5, 5);
    camera.lookAt(0, 0, 0);



    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    light.castShadow = true; 
    scene.add(light);

    const targetDiv = document.getElementById('threejs-container')

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
    renderer.setSize(targetDiv.offsetWidth, targetDiv.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    targetDiv.appendChild(renderer.domElement);



    // const geometry = new THREE.BoxGeometry(1, 1, 1);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );

    const material = new THREE.ShaderMaterial({
        uniforms: {
          size: {
            value: new THREE.Vector3(geometry.parameters.width, geometry.parameters.height, geometry.parameters.depth).multiplyScalar(0.5)
          },
          thickness: {
              value: 0.01
          },
          smoothness: {
              value: 0.05
          }
        },
        
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });


    const red = 142 / 255;
    const green = 5 / 255;
    const blue = 194 / 255;

    const borderColor = new THREE.Color(red, green, blue);

    const bgRed = 0 / 255;
    const bgGreen = 0 / 255;
    const bgBlue = 0 / 255;

    const bgColor = new THREE.Color(bgRed, bgGreen, bgBlue);

    material.uniforms.bordercolor = { value: borderColor };
    material.uniforms.bgcolor = { value: bgColor };


    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -10);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    camera.position.z = 5;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
  

        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
  
        renderer.render(scene, camera);
    }

    animate(); // Start the animation loop

    return () => {
      renderer.domElement.remove(); // Remove the canvas element
      // Perform any additional cleanup or resource disposal here
    };
  }, []);

  return (
    <div id="threejs-container" className='Cube'>
      {/* The canvas element where the Three.js scene will be rendered */}
    </div>
  );
}


