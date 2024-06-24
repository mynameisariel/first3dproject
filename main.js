import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Light
const light = new THREE.PointLight(0xffffff, 70, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 200);
camera.position.z = 10;
scene.add(camera);

// Renderer - need to render scene on screen using canvas
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);
