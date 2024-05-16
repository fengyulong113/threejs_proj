import * as THREE from 'three'
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Texture
 */
const texture = new THREE.TextureLoader().load("./wall.jpg");
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ 
    // color: 0xff0000,
    map: texture,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const bgTexture = new THREE.CubeTextureLoader()
  .setPath("./bg/")
  .load(["04.jpg", "01.jpg", "05.jpg", "02.jpg", "06.jpg", "03.jpg"]);

scene.background = bgTexture;

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/**
 * Control
 */
const controls = new ArcballControls(camera, canvas, scene);

controls.addEventListener( 'change', function () {
    renderer.render( scene, camera );
} );
controls.update();



/**
 * Animate
 */
// function animate() {
// 	requestAnimationFrame( animate );

// 	mesh.rotation.x += 0.01;
// 	mesh.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }
// animate();