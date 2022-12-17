import React, { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import * as THREE from 'three';

function AnimatedComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Create a new Three.js renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer to the DOM
    containerRef.current.appendChild(renderer.domElement);

    // Create a new Three.js geometry for the cube
    const geometry = new THREE.BoxGeometry(1.75, 1.75, 1.75);

    // Create a new Three.js material for each face of the cube
    const materials = [
      new THREE.MeshBasicMaterial({ color: '#87CEFA' }), 
      new THREE.MeshBasicMaterial({ color: '#20B2AA' }), 
      new THREE.MeshBasicMaterial({ color: '#DDA0DD' }), 
      new THREE.MeshBasicMaterial({ color: '#FFC0CB' }), 
      new THREE.MeshBasicMaterial({ color: '#90EE90' }), 
      new THREE.MeshBasicMaterial({ color: '#AFEEEE' }), 
    ];

    // Create a new Three.js mesh for the cube using the materials array
    const cube = new THREE.Mesh(geometry, materials);

    // Add the cube to the scene
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animate the cube
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div ref={containerRef} style={{ position: 'relative', left: '-30%', width: '50%', height: '50%'}}/>;
}

export default AnimatedComponent;

