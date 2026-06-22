import { jsx as e } from "react/jsx-runtime";
//#region src/components/Section/Section.tsx
var t = ({ children: t, as: n = "section", bgType: r, maxWidth: i = "aligncontent", contentWidth: a, isHero: o }) => /* @__PURE__ */ e(n, {
	className: [
		"cu-layout cu-section",
		o && "cu-section--hero",
		r && `cu-section--${r}`,
		r && "has-global-padding",
		i,
		"is-layout-constrained"
	].filter(Boolean).join(" "),
	"data-color-scheme": r === "black" ? "dark" : void 0,
	children: a === void 0 ? t : /* @__PURE__ */ e("div", {
		className: `has-global-padding ${a ? "alignwide" : "aligncontent"}`,
		children: t
	})
});
//#endregion
export { t as Section };
