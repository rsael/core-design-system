/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
// eslint-disable-next-line no-undef
module.exports = {
	clearMocks: true,
	collectCoverage: true,
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "jsx" , "ts", "tsx", "json"],
	moduleNameMapper: {
		"^.+.(svg)$": "jest-transform-stub",
	},
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
	},
};
