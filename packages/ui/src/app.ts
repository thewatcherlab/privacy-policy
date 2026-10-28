/**
 * What every app site needs to know about its app. Each app keeps its own copy in
 * src/config/app.ts, so change it there when the app changes.
 */
export interface AppInfo {
	/** Short name, used in the header, titles and the footer wordmark. */
	name: string;
	/** The App Store name, like "Halo: Budget, Bills & Goals". */
	fullName: string;
	/** The part after the colon, shown under the name on the support page. */
	tagline: string;
	platform: string;
	description: string;
	email: string;
	/** Which mark the header and favicon draw. */
	glyph: "peel" | "halo";
	/** The app's color, used by the logo, focus rings and selection. */
	accent: string;
	/** A pale tint of the accent, for soft backgrounds. */
	accentSoft: string;
}
