# Brillouin Zone (BZ) visualizer

This repository contains:

1. Javascript library for a BZ visualizer:
   - core from https://github.com/materialscloud-org/tools-seekpath;
   - adapted to be compatible with a modern tooling library: Vite;
   - demo page included for development;
2. corresponding Jupyter widget, built using the `anywidget` library.

## Javascript development

A demo page is included for development & to demonstrate usage. Start it by

```
npm install
npm run dev
```

## Building the library

To build the BZ visualizer as a library that can be used in other javascript projects, use

```
npm run build
npm pack
```

This will create a `.tgz` file that can thn be installed by the external application via

```
npm install /path/to/library-x.y.z.tgz
```

And the usage is similar to the demo page.

## Jupyter widget

To build the javascript code necessary for the jupyter widget, use

```
npm run build-widget
```

This generate the bundled javascript files in `jupyter_widget/dist` that is then used by the `anywidget` code.

See `widget-test.ipynb` on how to use the widget.
