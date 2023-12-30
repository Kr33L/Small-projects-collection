import { atom } from "nanostores";

export const darkColor = atom("#262626");
export const lightColor = atom("#ffffff");
export const darkMode = atom(false);

export function updateModeCircle() {
	const toggleButtonCircle = document.querySelector(
		"#mode-circle"
	) as HTMLElement;

	toggleButtonCircle.classList.toggle(darkMode.get() ? "dark" : "light");
}

export function updateHtmlTheme() {
	const themeColorMetaTag = document.head.querySelector(
		'meta[name="theme-color"]'
	) as HTMLMetaElement;

	if (themeColorMetaTag) {
		document.documentElement.classList.toggle("dark", darkMode.get());
		themeColorMetaTag.content = darkMode.get()
			? darkColor.get()
			: lightColor.get();
	}
}
