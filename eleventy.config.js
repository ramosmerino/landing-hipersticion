import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";
import faviconsPlugin from "eleventy-plugin-gen-favicons";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory("_input");
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["webp", "png"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
		sharpPngOptions: {
			quality: 80,
			dither: 0.4
		}
	});
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "es",
			title: "Hiperstición",
			subtitle: "Publicaciones y novedades de la editorial Hiperstición",
			base: "https://hipersticion.xyz/",
			author: {
				name: "Cronodemonio Doogu",
			}
		}
	});
	eleventyConfig.addPlugin(faviconsPlugin, {});
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
};