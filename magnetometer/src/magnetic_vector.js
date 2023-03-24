import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const redConeGeometry = new THREE.ConeGeometry( 1, 3, 16 );
redConeGeometry.translate(0, 1.5, 0);
redConeGeometry.rotateX(Math.PI/2);
const redMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const redCone = new THREE.Mesh( redConeGeometry, redMaterial );

const whiteConeGeometry = new THREE.ConeGeometry( 1, 3, 16 );
whiteConeGeometry.translate(0, 1.5, 0);
whiteConeGeometry.rotateX(-Math.PI/2);
const whiteMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff });
const whiteCone = new THREE.Mesh( whiteConeGeometry, whiteMaterial );

const blueBoxGeometry = new THREE.BoxGeometry(1,1,1);
const blueMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff });
const blueBox = new THREE.Mesh( blueBoxGeometry, blueMaterial );
scene.add( blueBox );

const needle = new THREE.Group();
needle.add( redCone );
needle.add( whiteCone );

scene.add( needle );

camera.position.z = 5;

let lookX = 0;
let lookXincrement = 0.1;
let lookY = 0;
let lookYincrement = 0.02;
let lookZ = 0;
let lookZincrement = 0.01;

function animate() {
  requestAnimationFrame( animate );

  if (lookX > 3.0) {
    lookXincrement = -0.1;
  } else if (lookX < -3.0) {
    lookXincrement = +0.1;
  }
  lookX += lookXincrement;

  if (lookY > 3.0) {
    lookYincrement = -0.02;
  } else if (lookY < -3.0) {
    lookYincrement = +0.02;
  }
  lookY += lookYincrement;

  if (lookZ > 3.0) {
    lookZincrement = -0.01;
  } else if (lookZ < -3.0) {
    lookZincrement = +0.01;
  }
  lookZ += lookZincrement;

  blueBox.position.x = lookX;
  blueBox.position.y = lookY;
  blueBox.position.z = 0;

  needle.lookAt(lookX, lookY, 0);

  renderer.render( scene, camera );
}
animate();
