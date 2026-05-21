import { jsx as e } from "react/jsx-runtime";
import { iconMap as t } from "@cuweb/rds-icons";
//#region src/components/Icon/Icon.tsx
var n = ({ name: n, size: r = "1em", title: i, ...a }) => {
	let o = t[n];
	return o ? /* @__PURE__ */ e(o, {
		width: r,
		height: r,
		focusable: !1,
		...i ? {
			role: "img",
			"aria-label": i
		} : { "aria-hidden": !0 },
		...a,
		children: i ? /* @__PURE__ */ e("title", { children: i }) : null
	}) : null;
};
//#endregion
export { n as t };
