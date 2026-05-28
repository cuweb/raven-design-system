import { t as e } from "./Icon-BxlTg0gG.mjs";
import "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/Button/Button.tsx
var r = ({ color: r = "red", title: i, icon: a, type: o = "button", isSmall: s, isFull: c, isDisabled: l, isOutline: u, ariaLabel: d, ...f }) => /* @__PURE__ */ n("button", {
	type: o,
	"aria-label": d,
	className: `cu-button ${l ? "cu-button--disabled" : `cu-button--${r}`} ${u && !l ? "cu-button--outline" : ""} ${s ? "cu-button--small" : ""} ${c ? "cu-button--full" : ""}`.trim(),
	disabled: l,
	...f,
	children: [a && /* @__PURE__ */ t(e, {
		className: "cu-icon",
		name: a,
		size: s ? 16 : 20
	}), i]
});
//#endregion
export { r as t };
