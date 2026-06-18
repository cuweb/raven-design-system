import { t as e } from "../_shared/PageHeader-B4JoWbfe.mjs";
import { n as t, r as n } from "../_shared/propClasses-BbEv--Kn.mjs";
import { useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/FullBanner/FullBannerVideo.tsx
var s = () => /* @__PURE__ */ o("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false",
	children: [/* @__PURE__ */ a("rect", {
		x: "2",
		y: "1",
		width: "3.5",
		height: "12",
		rx: "1"
	}), /* @__PURE__ */ a("rect", {
		x: "8.5",
		y: "1",
		width: "3.5",
		height: "12",
		rx: "1"
	})]
}), c = () => /* @__PURE__ */ a("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false",
	children: /* @__PURE__ */ a("path", { d: "M2.5 1.5 L12.5 7 L2.5 12.5 Z" })
}), l = ({ src: e }) => {
	let t = r(null), [n, l] = i(!0);
	return /* @__PURE__ */ o("div", {
		className: "cu-fullbanner__video-wrap",
		children: [/* @__PURE__ */ a("video", {
			ref: t,
			className: "cu-fullbanner__video",
			autoPlay: !0,
			muted: !0,
			loop: !0,
			playsInline: !0,
			"aria-hidden": "true",
			children: /* @__PURE__ */ a("source", { src: e })
		}), /* @__PURE__ */ a("button", {
			type: "button",
			className: "cu-fullbanner__video-toggle",
			onClick: () => {
				let e = t.current;
				e && (n ? e.pause() : e.play(), l(!n));
			},
			"aria-label": n ? "Pause background video" : "Play background video",
			children: a(n ? s : c, {})
		})]
	});
};
l.displayName = "FullBanner.Video";
//#endregion
//#region src/components/FullBanner/FullBanner.tsx
var u = {
	lg: "cu-fullbanner__inner--lg",
	xl: "cu-fullbanner__inner--xl"
}, d = ({ children: r, title: i, content: s, headerType: c = "h2", image: l, imageAlt: d = "", media: f, opacity: p = 70, focalPointX: m = 50, focalPointY: h = 50, maxWidth: g = "alignwide", contentBox: _ = "xl", justify: v = "start" }) => {
	let y = ["cu-fullbanner", n[g]].filter(Boolean).join(" "), b = { "--cu-fullbanner-overlay": `rgba(0, 0, 0, ${p / 100})` }, x = { objectPosition: `${m}% ${h}%` };
	return /* @__PURE__ */ o("div", {
		className: y,
		children: [!!(l || f) && /* @__PURE__ */ o("div", {
			className: "cu-fullbanner__media",
			children: [
				l && /* @__PURE__ */ a("img", {
					src: l,
					alt: d,
					className: "cu-fullbanner__img",
					style: x
				}),
				f,
				/* @__PURE__ */ a("div", {
					className: "cu-fullbanner__overlay",
					style: b,
					"aria-hidden": "true"
				})
			]
		}), /* @__PURE__ */ a("div", {
			className: "cu-fullbanner__wrap",
			children: /* @__PURE__ */ a("div", {
				className: `cu-fullbanner__inner ${u[_]} cu-fullbanner__inner--${t[v]}`,
				children: /* @__PURE__ */ o("div", {
					className: "cu-fullbanner__box",
					children: [/* @__PURE__ */ a(e, {
						header: i,
						as: c,
						size: c === "h1" ? "lg" : "md",
						content: s,
						isWhite: !0,
						noUnderline: !0
					}), r]
				})
			})
		})]
	});
};
d.displayName = "FullBanner";
var f = Object.assign(d, { Video: l });
//#endregion
export { f as FullBanner };
