import { createBZVisualizer } from "./bzvisualizer/main.js";

import jsondata1 from "./example_data/mc3d-10.json";

export function render({ model, el }) {
  let getSeekpathData = () => model.get("seekpathData");

  let container = document.createElement("div");
  container.id = "bz-container";
  container.style.width = "100%";
  container.style.height = "400px";
  container.style.margin = "0 auto";

  el.appendChild(container);
  let [mainBZVisualizer, canvasId, infoId] = createBZVisualizer(
    "bz-container",
    getSeekpathData()
  );
  model.on("change:seekpathData", () => {
    mainBZVisualizer.loadBZ(canvasId, infoId, getSeekpathData());
  });
}
