import "react";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/ImageCover/ImageCover.tsx
var n = "https://cdn.carleton.ca/rds/assets/bg-images", r = ({ children: r, maxWidth: i = "alignfull", contentWidth: a, image: o, opacity: s = 90 }) => {
	let c = o ? `${n}/${o}.jpg` : void 0;
	return /* @__PURE__ */ t("section", {
		className: [
			"cu-layout cu-imagecover",
			c && "cu-imagecover--image",
			"has-global-padding",
			i,
			"is-layout-constrained"
		].filter(Boolean).join(" "),
		style: {
			...c && { "--cu-imagecover-bg": `url(${c})` },
			"--cu-imagecover-overlay": `rgba(255, 255, 255, ${s / 100})`
		},
		children: [/* @__PURE__ */ e("div", {
			className: `has-global-padding ${a ? "alignwide" : "aligncontent"}`,
			children: r
		}), /* @__PURE__ */ e("div", { className: "cu-imagecover__wave alignfull" })]
	});
};
//#endregion
export { r as ImageCover };
