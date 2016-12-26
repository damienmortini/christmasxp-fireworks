import {
  Mesh,
  MeshNormalMaterial,
  Object3D
} from "three";

import Ticker from "dlib/utils/Ticker.js";

import Firework from "./Firework.js";

const COLORS = [
  "#ff4700",
  "#c700e0",
  "#665dff",
  "#0c00ff",
  "#ffffff",
];

export default class Fireworks extends Object3D {
  constructor() {
    super();

    this.fireworks = [];

    for (let i = 0; i < 50; i++) {
      let firework = new Firework({
        color: COLORS[i % COLORS.length]
      });
      this.fireworks.push(firework);
      this.add(firework);
    }

    Ticker.add(this.update.bind(this));

    this.reset();
  }

  reset() {
    for (let firework of this.fireworks) {
      firework.position.set(
        Math.random() * 10 - 5,
        -3,
        0
      );
      firework.reset();
      setTimeout(() => {
        firework.reset();
        firework.launch();
      }, 1000 + 3000 * Math.random());
    }
  }

  update() {
    for (let firework of this.fireworks) {
      firework.update();
    }
  }
}
