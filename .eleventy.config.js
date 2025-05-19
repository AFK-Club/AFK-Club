
import { VentoPlugin } from 'eleventy-plugin-vento';

export default function (eleventyConfig) {
	eleventyConfig.addWatchTarget("css/**/*.css");
	// Watch images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

	eleventyConfig.addPlugin(VentoPlugin);
};

export const config = {
		markdownTemplateEngine: 'vto',
	dataTemplateEngine: 'vto',
	htmlTemplateEngine: 'vto',
	dir: {
		input: 'src',
		output: 'dist',
	},
};