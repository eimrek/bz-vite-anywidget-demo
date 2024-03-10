import { createBZVisualizer } from "./bzvisualizer/create-bzvisualizer.js";

import jsondata1 from "./example_data/mc3d-10.json";

export function render({ model, el }) {
  let container = document.createElement("div");
  container.id = "bz-container";
  container.style.width = "200px";
  container.style.height = "200px";

  el.appendChild(container);
  createBZVisualizer("bz-container", jsondata1);
}
