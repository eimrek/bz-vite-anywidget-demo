import { createBZVisualizer } from "./bzvisualizer/main.js";

function render({ model, el }) {
  let getSeekpathData = () => model.get("seekpathData");

  let container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "400px";
  container.style.margin = "0 auto";

  el.appendChild(container);

  let mainBZVisualizer = createBZVisualizer(container, getSeekpathData());

  model.on("change:seekpathData", () => {
    mainBZVisualizer.loadBZ(getSeekpathData());
  });
}

export default { render };
