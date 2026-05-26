import "react";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/Figure/Figure.tsx
var n = ({ children: n, caption: r, size: i = "full", align: a = "none" }) => {
	let o = a === "left" ? "alignleft" : a === "right" ? "alignright" : "";
	return /* @__PURE__ */ e("figure", {
		className: [
			"cu-figure",
			`cu-figure--${i}`,
			a === "none" ? "" : `cu-figure--${a}`,
			o
		].filter(Boolean).join(" "),
		children: /* @__PURE__ */ t("div", {
			className: "cu-figure__inner",
			children: [n, r && /* @__PURE__ */ e("figcaption", {
				className: "cu-figure__caption",
				children: r
			})]
		})
	});
};
//#endregion
export { n as Figure };
