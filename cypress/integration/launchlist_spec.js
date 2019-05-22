import { launchlist } from "@flourish/cypress";

describe("Launchlist", () => {
	it("Check data with all things", () => {
		cy.data("template.yml").then((data) => {
			var data_layout = {};
			var options = {};
			launchlist(options, data_layout);
		})
		
		
	})
});