import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/Section/Section.tsx
var t = ({ children: t, as: n = "section", isGrey: r, maxWidth: i = "aligncontent", contentWidth: a }) => /* @__PURE__ */ e(n, {
	className: `cu-section cu-section--${r ? "grey has-global-padding" : "white"} ${i} is-layout-constrained`,
	children: a === void 0 ? t : /* @__PURE__ */ e("div", {
		className: `has-global-padding ${a ? "alignwide" : "aligncontent"}`,
		children: t
	})
});
//#endregion
export { t as Section };
