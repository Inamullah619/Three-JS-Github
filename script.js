// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Set the renderer size to full screen
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a box geometry and a material
const geometry = new THREE.BoxGeometry(1, 2, 3); // Box with width 1, height 2, depth 3
const material = new THREE.MeshNormalMaterial(); // A simple material that colors the box based on normals

// Create a mesh from geometry and material and add it to the scene
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Set the camera position so it looks at the center
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the box on its axes
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  // Render the scene and camera
  renderer.render(scene, camera);
}

// Start the animation
animate();

// Adjust the canvas size if the window is resized
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
