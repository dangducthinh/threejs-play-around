import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer, model;

function initImportExternalModel() {
    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd3d3d3);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increase intensity
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    directionalLight1.position.set(4, 4, 4).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    directionalLight2.position.set(4, 4, 0).normalize();
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    directionalLight3.position.set(4, 4, -4).normalize();
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    directionalLight4.position.set(0, 0, 4).normalize();
    scene.add(directionalLight4);

    const directionalLight5 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    directionalLight5.position.set(-4, 0, 4).normalize();
    scene.add(directionalLight5);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(10, 35, 30);
    spotLight.castShadow = true;
    scene.add(spotLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Create a renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the GLTF model
    const loader = new GLTFLoader().setPath('model/');
    loader.load('scene.glb', function (gltf) {
        model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5); // Adjust the scale as needed
        model.position.set(0, 0, 0); // Adjust the position as needed
        scene.add(model);
        animate();
    }, undefined, function (error) {
        console.error('An error happened', error);
    });

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the model
    if (model) {
        model.rotation.y += 0.005
    }

    renderer.render(scene, camera);
}


export default initImportExternalModel