import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";
import faviconsPlugin from "eleventy-plugin-gen-favicons";

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory("_input");
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["webp", "jpeg"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});
	eleventyConfig.addPlugin(faviconsPlugin, {});
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
};