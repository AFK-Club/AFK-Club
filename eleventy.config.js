
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

// export default function (eleventyConfig) {
// 	// eleventyConfig.setInputDirectory("src");
// 	// eleventyConfig.setOutputDirectory("dist");

// 	eleventyConfig.addWatchTarget("css/**/*.css");
// 	// Watch images for the image pipeline.
// 	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

// 	eleventyConfig.addPlugin(syntaxHighlight);
// };



export const config = {
	markdownTemplateEngine: 'njk',
	dataTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
	dir: {
		input: 'src',
		output: 'dist',
		includes: '_includes',
	}
};