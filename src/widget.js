import { createBZVisualizer } from "./bzvisualizer/main.js";

import jsondata1 from "./example_data/mc3d-10.json";

export function render({ model, el }) {
  let container = document.createElement("div");
  container.id = "bz-container";
  container.style.width = "400px";
  container.style.height = "400px";

  el.appendChild(container);
  createBZVisualizer("bz-container", jsondata1);
}
