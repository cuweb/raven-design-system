import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/WideWave/WideWave.tsx
var n = ({ children: n, maxWidth: r = "alignfull", contentWidth: i, color: a = "black" }) => /* @__PURE__ */ t("section", {
	className: [
		"cu-layout cu-widewave",
		"cu-widewave--" + a,
		"has-global-padding",
		r,
		"is-layout-constrained"
	].filter(Boolean).join(" "),
	"data-color-scheme": "dark",
	children: [/* @__PURE__ */ e("div", { className: "cu-widewave__wave alignfull" }), /* @__PURE__ */ e("div", {
		className: `has-global-padding ${i ? "alignwide" : "aligncontent"}`,
		children: n
	})]
});
//#endregion
export { n as WideWave };
