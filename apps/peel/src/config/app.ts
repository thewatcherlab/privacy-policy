import type { AppInfo } from "@privacy-policy/ui/app.ts";

export const app: AppInfo = {
	name: "Peel",
	fullName: "Peel: Coffee Bag Journal",
	tagline: "Coffee Bag Journal",
	platform: "iPhone",
	description: "Support for Peel: Coffee Bag Journal. Snap a coffee bag, get a sticker, build your collection.",
	email: "peel@thewatcherlab.com",
	glyph: "peel",
	accent: "#d97706",
	accentSoft: "#fef3c7",
};

export const faqs: { q: string; a: string }[] = [
	{
		q: "My bags don't show up on my other device.",
		a: "Peel syncs through iCloud. On both devices, make sure you're signed in to the same Apple Account and that iCloud is turned on for Peel in Settings → your name → iCloud. Syncing can take a minute.",
	},
	{
		q: "I bought Peel Pro but it's locked.",
		a: "In Peel, open Collector → Peel Pro and tap Restore Purchase. Make sure you're signed in to the same Apple Account you bought it with.",
	},
	{
		q: "The sticker cut out the wrong thing.",
		a: "Photograph the bag on a plain surface with the whole bag in frame. You can also trim the sticker before saving it.",
	},
	{
		q: "How do I delete my data?",
		a: "Delete a bag in the app to remove it from every synced device. To remove everything from iCloud, go to Settings → your name → iCloud → Manage Account Storage → Peel.",
	},
];
