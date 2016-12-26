import {
  PerspectiveCamera,
  Mesh,
  BoxGeometry,
  MeshNormalMaterial,
  Scene as THREEScene
} from "three";

import THREETrackballController from "dlib/three/THREETrackballController.js";

import Fireworks from "./fireworks/Fireworks.js";

export default class Scene extends THREEScene {
  constructor({canvas}) {
    super();

    this.camera = new PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);

    // this.controls = new THREETrackballController(this.camera, {
    //   distance: 5,
    //   domElement: canvas
    // });

    let fireworks = new Fireworks();
    this.add(fireworks);

    // canvas.addEventListener("click", () => {
    //   fireworks.reset();
    // });
  }

  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    // this.controls.update();
  }
}
