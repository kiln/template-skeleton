import state from "./state";

import { layout, colors } from "../init";

export default function() {
	layout.update();
	colors.updateColorScale([0, 1])

	console.log("Example setting:", state.example_setting);
}
