import './style.css'

import {createBZVisualizer} from "./src/create-bzvisualizer.js"

import jsondata1 from "./src/example_data/mc3d-10.json";
import jsondata2 from "./src/example_data/mc3d-10016.json";

createBZVisualizer("bzvis-1", jsondata1)

createBZVisualizer("bzvis-2", jsondata2)