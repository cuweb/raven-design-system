import { useEffect as e, useRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/Embed/Embed.YouTube.tsx
var r = ({ title: e, url: t }) => {
	let r = "";
	if (t) {
		let e = t.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
		r = `https://www.youtube.com/embed/${e ? e[1] : null}`;
	}
	return /* @__PURE__ */ n("iframe", {
		title: e,
		src: r,
		className: "cu-embed-iframe",
		allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
		allowFullScreen: !0
	});
};
r.displayName = "Embed.YouTube";
//#endregion
//#region src/components/Embed/Embed.Vimeo.tsx
var i = ({ title: e, url: t }) => {
	let r = "";
	if (t) {
		let e = t.split("/");
		r = `https://player.vimeo.com/video/${e[e.length - 1]}`;
	}
	return /* @__PURE__ */ n("iframe", {
		title: e,
		src: r,
		className: "cu-embed-iframe",
		allow: "autoplay; fullscreen; picture-in-picture",
		allowFullScreen: !0
	});
};
i.displayName = "Embed.Vimeo";
//#endregion
//#region src/components/Embed/Embed.Kaltura.tsx
var a = ({ title: e, url: t }) => {
	let r = "", i = "";
	if (t) {
		let e = t.split("/");
		i = e[e.length - 1], r = `https://mediaspace.carleton.ca/embed/secure/iframe/entryId/${i}/uiConfId/36153741/st/0`;
	}
	return /* @__PURE__ */ n("iframe", {
		id: `kmsembed-${i}`,
		title: e,
		src: r,
		className: "cu-embed-iframe",
		allowFullScreen: !0,
		allow: "autoplay *; fullscreen *; encrypted-media *",
		referrerPolicy: "no-referrer-when-downgrade",
		sandbox: "allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
	});
};
a.displayName = "Embed.Kaltura";
//#endregion
//#region src/components/Embed/Embed.PowerBi.tsx
var o = ({ title: e, url: t }) => /* @__PURE__ */ n("iframe", {
	title: e,
	src: t,
	className: "cu-embed-iframe",
	allowFullScreen: !0
});
o.displayName = "Embed.PowerBi";
//#endregion
//#region src/components/Embed/Embed.TED.tsx
var s = ({ title: e, url: t }) => {
	let r = "";
	if (t) {
		let e = t.split("/");
		r = `https://embed.ted.com/talks/lang/en/${e[e.length - 1]}`;
	}
	return /* @__PURE__ */ n("iframe", {
		title: e,
		src: r,
		className: "cu-embed-iframe",
		allowFullScreen: !0
	});
};
s.displayName = "Embed.TED";
//#endregion
//#region src/components/Embed/Embed.SoundCloud.tsx
var c = ({ title: e, url: t }) => /* @__PURE__ */ n("iframe", {
	title: e,
	src: `https://w.soundcloud.com/player/?url=${t}&color=ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true`,
	className: "cu-embed-iframe",
	allow: "encrypted-media",
	allowFullScreen: !0
});
c.displayName = "Embed.SoundCloud";
//#endregion
//#region src/components/Embed/Embed.Audioboom.tsx
var l = ({ title: e, url: t }) => {
	let r = "";
	if (t) {
		let e = t.match(/\/posts\/(\d+)/);
		r = `https://audioboom.com/posts/${e ? e[1] : null}/embed/v4`;
	}
	return /* @__PURE__ */ n("iframe", {
		title: e,
		src: r,
		className: "cu-embed-iframe",
		allow: "autoplay",
		allowFullScreen: !0
	});
};
l.displayName = "Embed.Audioboom";
//#endregion
//#region src/components/Embed/Embed.tsx
var u = ({ children: e, maxWidth: t = "aligncontent" }) => /* @__PURE__ */ n("div", {
	className: ["cu-embed cu-layout", t].filter(Boolean).join(" "),
	children: /* @__PURE__ */ n("div", {
		className: `cu-embed__container ${t}`,
		children: e
	})
}), d = Object.assign(u, {
	YouTube: r,
	Vimeo: i,
	Kaltura: a,
	PowerBi: o,
	TED: s,
	SoundCloud: c,
	Audioboom: l
});
u.displayName = "Embed";
//#endregion
//#region src/components/Embed/EmbedHubSpot.tsx
var f = ({ formId: r, portalId: i }) => {
	let a = t(null);
	return e(() => {
		if (document.querySelector("script[src=\"https://js.hsforms.net/forms/embed/v2.js\"]")) window.hbspt && window.hbspt.forms.create({
			portalId: i,
			formId: r,
			target: `#hs-form-container-${r}`
		});
		else {
			let e = document.createElement("script");
			return e.src = "https://js.hsforms.net/forms/embed/v2.js", e.async = !0, document.body.appendChild(e), e.onload = () => {
				window.hbspt && window.hbspt.forms.create({
					portalId: i,
					formId: r,
					target: `#hs-form-container-${r}`
				});
			}, e.onerror = () => {
				console.error("Failed to load HubSpot forms script.");
			}, () => {
				document.body.contains(e) && document.body.removeChild(e);
			};
		}
	}, [r, i]), /* @__PURE__ */ n("div", {
		id: `hs-form-container-${r}`,
		ref: a
	});
};
f.displayName = "EmbedHubSpot";
//#endregion
export { d as Embed, f as EmbedHubSpot, u as EmbedWrapper };
