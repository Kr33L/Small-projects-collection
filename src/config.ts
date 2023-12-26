// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Karol Codes";
export const SITE_DESCRIPTION =
	"Welcome to my personal website! I'm a web developer - focused on efficiency, and simplicity.";
export const MY_NAME = "Karol Olechno";
export const TWITTER_HANDLE = "";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
