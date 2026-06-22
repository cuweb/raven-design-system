import "react";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/PageHeader/PageHeader.tsx
var n = ({ children: n, as: r = "h1", preHeader: i, header: a, postHeader: o, content: s, metaData: c, size: l = "lg", isWhite: u = !1, isCenter: d = !1, noUnderline: f = !1, pronoun: p }) => {
	let m = s && s.length > 320 ? `${s.substring(0, 320)}...` : s;
	return /* @__PURE__ */ t("header", {
		className: [
			"cu-pageheader",
			`cu-pageheader--${l}`,
			u ? "cu-pageheader--white" : "",
			d ? "cu-pageheader--center" : ""
		].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ t(r, {
				className: ["cu-pageheader__heading", f ? "" : "cu-pageheader__heading--underline"].filter(Boolean).join(" "),
				children: [
					i && /* @__PURE__ */ e("span", {
						className: "cu-pageheader__pre",
						children: i
					}),
					a,
					p && /* @__PURE__ */ t("span", {
						className: "cu-pageheader__pronoun",
						children: [
							"(",
							p,
							")"
						]
					}),
					o && /* @__PURE__ */ e("span", {
						className: "cu-pageheader__post",
						children: o
					})
				]
			}),
			c && /* @__PURE__ */ e("div", {
				className: "cu-pageheader__meta",
				children: c
			}),
			m && /* @__PURE__ */ e("p", {
				className: "cu-pageheader__content",
				children: m
			}),
			n
		]
	});
};
//#endregion
export { n as t };
