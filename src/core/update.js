import state from "./state";

import { layout } from "../init";

export default function() {
	layout.update();

	console.log("Example setting:", state.example_setting);
}
