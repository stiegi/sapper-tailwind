const preprocess = require('svelte-preprocess')
const image = require('svelte-image');

const imageOptions = {
	optimizeAll: true, // optimize all images discovered in img tags
  
	// Case insensitive. Only files whose extension exist in this array will be
	// processed by the <img> tag (assuming `optimizeAll` above is true). Empty
	// the array to allow all extensions to be processed. However, only jpegs and
	// pngs are explicitly supported.
	imgTagExtensions: ['jpg', 'jpeg', 'png'],
  
	// Same as the above, except that this array applies to the Image Component.
	// If the images passed to your image component are unknown, it might be a
	// good idea to populate this array.
	componentExtensions: [],
  
	inlineBelow: 10000, // inline all images in img tags below 10kb
  
	compressionLevel: 8, // png quality level
  
	quality: 70, // jpeg/webp quality level
  
	tagName: "Image", // default component name
  
	sizes: [400, 800, 1200], // array of sizes for srcset in pixels
  
	// array of screen size breakpoints at which sizes above will be applied
	breakpoints: [375, 768, 1024],
  
	outputDir: "g/",
  
	// should be ./static for Sapper and ./public for plain Svelte projects
	publicDir: "./static/",
  
	placeholder: "trace", // or "blur",
  
	// WebP options [sharp docs](https://sharp.pixelplumbing.com/en/stable/api-output/#webp)
	webpOptions: {
	  quality: 75,
	  lossless: false,
	  force: true
	},
  
	webp: true,
  
	// Potrace options for SVG placeholder
	trace: {
	  background: "#fff",
	  color: "#002fa7",
	  threshold: 120
	},
  
	// Wheter to download and optimize remote images loaded from a url
	optimizeRemote: true,
  };

module.exports = {
	preprocess: preprocess({
		postcss: true,
	},
	image(imageOptions)),
}
