import type { AppInfo } from "@privacy-policy/ui/app.ts";

export const app: AppInfo = {
	name: "Halo",
	fullName: "Halo: Budget, Bills & Goals",
	tagline: "Budget, Bills & Goals",
	platform: "iPhone",
	description:
		"Support for Halo: Budget, Bills & Goals. Track bills and spending, set budgets and savings goals, and get reminded before a payment is due.",
	email: "halomoney@thewatcherlab.com",
	glyph: "halo",
	accent: "#10b981",
	accentSoft: "#ecfdf5",
};

export const faqs: { q: string; a: string }[] = [
	{
		q: "My data doesn't show up on my other device.",
		a: "Halo syncs accounts, transactions, budgets, goals and bills through iCloud; invoices and Hour tracker entries stay on the device where you made them. On both devices, make sure you're signed in to the same Apple Account and that iCloud is turned on for Halo in Settings → your name → iCloud. Syncing can take a minute.",
	},
	{
		q: "I bought Halo Pro but it's locked.",
		a: "Open any Pro feature in Halo to bring up Halo Pro, then tap Restore purchases. Make sure you're signed in to the same Apple Account you bought it with.",
	},
	{
		q: "Advisor isn't answering my questions.",
		a: "Advisor runs on your iPhone with Apple Intelligence, so it needs a supported iPhone with Apple Intelligence turned on in Settings → Apple Intelligence & Siri. Right after you turn it on, the model can take a while to download. Until it's ready, Advisor answers with a simpler built-in guide.",
	},
	{
		q: "I'm not getting bill reminders.",
		a: "Check that notifications are allowed for Halo in Settings → Notifications → Halo, and that reminders are turned on in Halo's Settings → Bill reminders and on the bill itself.",
	},
	{
		q: "A scanned receipt has the wrong items or total.",
		a: "Photograph the receipt flat, in good light, with the whole receipt in frame. You can fix any item or amount before you log or split it.",
	},
	{
		q: "How do I delete my data?",
		a: "In Halo, go to Settings → Delete all data to erase everything on that device, including the synced data on your other devices. To remove the iCloud copy as well, go to Settings → your name → iCloud → Manage Account Storage → Halo.",
	},
];
