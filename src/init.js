import initLayout from "@flourish/layout";
import initColors from "@flourish/colors";

import state from "./core/state";

var layout = initLayout(state.layout);
var colors = initColors(state.colors);

export { layout, colors };
