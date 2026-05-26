import { t as e } from "../_shared/useLinkContext-C6Tt2S8U.mjs";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/Badge/Badge.tsx
var n = ({ text: n, href: r, rounded: i = "md", color: a = "grey", ...o }) => {
	let s = e(), c = `cu-badge cu-badge--${a} cu-badge--radius-${i}`;
	return r ? /* @__PURE__ */ t(s, {
		href: r,
		className: c,
		...o,
		children: n
	}) : /* @__PURE__ */ t("span", {
		className: c,
		...o,
		children: n
	});
};
//#endregion
export { n as Badge };
