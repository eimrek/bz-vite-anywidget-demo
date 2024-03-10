import pathlib
import anywidget
import traitlets

bundler_output_dir = pathlib.Path(__file__).parent / "dist"

class BzWidget(anywidget.AnyWidget):
    _esm = bundler_output_dir / "widget.js"
    _css = bundler_output_dir / "style.css"
    seekpathData = traitlets.Dict({}).tag(sync=True)
    