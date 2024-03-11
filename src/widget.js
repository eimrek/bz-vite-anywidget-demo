import {
  createBZVisualizer,
  generateRandomString,
} from "./bzvisualizer/main.js";

export function render({ model, el }) {
  let getSeekpathData = () => model.get("seekpathData");

  let container = document.createElement("div");
  container.id = `bz-container-${generateRandomString(6)}`;
  container.style.width = "100%";
  container.style.height = "400px";
  container.style.margin = "0 auto";

  el.appendChild(container);
  let [mainBZVisualizer, canvasId, infoId] = createBZVisualizer(
    container.id,
    getSeekpathData()
  );
  model.on("change:seekpathData", () => {
    mainBZVisualizer.loadBZ(canvasId, infoId, getSeekpathData());
  });
}
