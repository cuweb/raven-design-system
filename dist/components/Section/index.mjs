import { r as e } from "../_shared/propClasses-BbEv--Kn.mjs";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/Section/Section.tsx
var n = ({ children: n, as: r = "section", isGrey: i, maxWidth: a = "aligncontent" }) => /* @__PURE__ */ t(r, {
	className: `cu-section cu-section--${i ? "grey has-global-padding" : "white"} ${a ? e[a] : ""} is-layout-constrained`,
	children: n
});
//#endregion
export { n as Section };
