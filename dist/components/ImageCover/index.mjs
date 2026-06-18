import { r as e } from "../_shared/propClasses-BbEv--Kn.mjs";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ImageCover/ImageCover.tsx
var r = ({ children: r, image: i, opacity: a = 85, focalPointX: o = 50, focalPointY: s = 50, maxWidth: c = "aligncontent" }) => /* @__PURE__ */ n("section", {
	className: ["cu-imagecover", e[c]].filter(Boolean).join(" "),
	style: {
		...i && { "--cu-imagecover-bg": `url(${i})` },
		"--cu-imagecover-focal-x": `${o}%`,
		"--cu-imagecover-focal-y": `${s}%`,
		"--cu-imagecover-overlay": `rgba(255, 255, 255, ${a / 100})`
	},
	children: [
		/* @__PURE__ */ t("div", {
			className: "cu-imagecover__wave",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ t("div", {
			className: "cu-imagecover__overlay",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ t("div", {
			className: "cu-imagecover__content",
			children: r
		})
	]
});
//#endregion
export { r as ImageCover };
