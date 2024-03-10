import { BZVisualizer } from "./orig/BZVisualizer";
export { BZVisualizer };

import "./style.css";

function generateRandomString(length) {
  let result = "";
  while (result.length < length) {
    result += Math.random().toString(36).substring(2);
  }
  return result.substring(0, length);
}

/**
 * Creates the Brillouin zone visualizer in the specified container
 *
 * NOTE: the specified container should have a width and height defined!
 *
 * @param {*} containerId - id of the html container element (e.g. a div)
 * @param {*} seekpathData - data object generated by seekpath
 */
export function createBZVisualizer(containerId, seekpathData) {
  let container = document.getElementById(containerId);

  // the bz visualizer expects two divs which it will populate:
  // one for "canvas" and one for "info"
  let id = generateRandomString(6);
  let canvasId = `canvas-${id}`;
  let infoId = `info-${id}`;
  container.innerHTML = `
    <div class='bz-main-container'>
        <div id='${canvasId}' class='bz-canvas3d'></div>
        <div id='${infoId}'></div>
    </div>
    `;
  let mainBZVisualizer = new BZVisualizer();
  mainBZVisualizer.loadBZ(canvasId, infoId, seekpathData);

  window.addEventListener("resize", mainBZVisualizer.resizeRenderer);
  return [mainBZVisualizer, canvasId, infoId];
}
