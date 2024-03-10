import "./style.css";

import { createBZVisualizer } from "./bzvisualizer/create-bzvisualizer.js";

import { render } from "./widget.js";

import jsondata1 from "./example_data/mc3d-10.json";
import jsondata2 from "./example_data/mc3d-10016.json";

createBZVisualizer("bzvis-1", jsondata1);

createBZVisualizer("bzvis-2", jsondata2);

render({ el: document.getElementById("widget-render-test") });
