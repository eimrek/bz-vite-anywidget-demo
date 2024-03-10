import pathlib
import anywidget
import traitlets

# bundler yields dist/{index.js,styles.css}
bundler_output_dir = pathlib.Path(__file__).parent / "dist"

class TestWidget(anywidget.AnyWidget):
    _esm = bundler_output_dir / "widget.js"
    _css = bundler_output_dir / "style.css"
