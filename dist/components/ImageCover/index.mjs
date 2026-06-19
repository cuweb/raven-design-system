import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/ImageCover/ImageCover.tsx
var n = ({ children: n, image: r, opacity: i = 85, focalPointX: a = 50, focalPointY: o = 50, maxWidth: s = "aligncontent", contentWidth: c }) => /* @__PURE__ */ t("section", {
	className: ["cu-imagecover", s].filter(Boolean).join(" "),
	style: {
		...r && { "--cu-imagecover-bg": `url(${r})` },
		"--cu-imagecover-focal-x": `${a}%`,
		"--cu-imagecover-focal-y": `${o}%`,
		"--cu-imagecover-overlay": `rgba(255, 255, 255, ${i / 100})`
	},
	children: [
		/* @__PURE__ */ e("div", {
			className: "cu-imagecover__wave",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ e("div", {
			className: "cu-imagecover__overlay",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ e("div", {
			className: "cu-imagecover__content is-layout-constrained has-global-padding",
			children: c === void 0 ? n : /* @__PURE__ */ e("div", {
				className: `cu-imagecover__inner ${c ? "alignwide" : "aligncontent"}`,
				children: n
			})
		})
	]
});
//#endregion
export { n as ImageCover };
