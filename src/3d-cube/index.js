import * as THREE from 'three'

function initCube() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Create an array of materials, one for each face
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
        new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan
    ];

    // Create a mesh with the geometry and the array of materials
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 4;

    const animate = () => {
        cube.rotation.x -= 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

}

export default initCube;