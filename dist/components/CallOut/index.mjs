import { t as e } from "../_shared/PageHeader-B4JoWbfe.mjs";
import { r as t } from "../_shared/propClasses-BbEv--Kn.mjs";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/CallOut/CallOut.tsx
var i = ({ children: i, title: a, as: o = "h2", justify: s = "center", maxWidth: c = "aligncontent" }) => /* @__PURE__ */ r("div", {
	className: [
		"cu-callout",
		`cu-callout--${s}`,
		c ? t[c] : ""
	].filter(Boolean).join(" "),
	children: [/* @__PURE__ */ n(e, {
		as: o,
		header: a,
		size: "md",
		isCenter: s === "center",
		noUnderline: !1
	}), i]
});
//#endregion
export { i as CallOut };
