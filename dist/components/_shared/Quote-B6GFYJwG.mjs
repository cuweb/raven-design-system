import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/Quote/Quote.tsx
var n = ({ children: n, cite: r, graphic: i = "border", isCenter: a }) => /* @__PURE__ */ t("blockquote", {
	className: [
		"cu-quote",
		`cu-quote--${i}`,
		a ? "cu-quote--center" : void 0
	].filter(Boolean).join(" "),
	children: [n, r && /* @__PURE__ */ e("cite", {
		className: "cu-quote__cite",
		children: r
	})]
});
//#endregion
export { n as t };
