import oxfmt from "@kekkon-nexus/config/oxfmt";
import oxlint from "@kekkon-nexus/config/oxlint";
import { defineConfig } from "vite-plus";

export default defineConfig({
	fmt: {
		...oxfmt,
	},
	lint: {
		extends: [oxlint],
	},
	staged: {
		"*": "vp check --no-error-on-unmatched-pattern",
	},
});
