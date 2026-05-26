import { jsx as e } from "react/jsx-runtime";
//#region src/components/Avatar/Avatar.tsx
var t = (e, t) => e && t ? `${e[0]}${t[0]}` : e ? e[0] : t ? t[0] : "CU", n = ({ firstName: n, lastName: r, src: i, alt: a, size: o = "md", isCircle: s = !1, onClick: c }) => {
	let l = r ? `${n} ${r}` : n, u = `cu-avatar cu-avatar--${o} ${s ? "cu-avatar--circle" : "cu-avatar--square"}`, d = i ? /* @__PURE__ */ e("img", {
		className: "cu-avatar__image",
		src: i,
		alt: "",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ e("span", {
		className: "cu-avatar__initials",
		"aria-hidden": "true",
		children: t(n, r)
	});
	return c ? /* @__PURE__ */ e("button", {
		type: "button",
		className: u,
		onClick: c,
		"aria-label": a ?? l,
		children: d
	}) : /* @__PURE__ */ e("div", {
		className: u,
		role: "img",
		"aria-label": a ?? l,
		children: d
	});
};
//#endregion
export { n as Avatar };
