import "react";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/PageHeader/PageHeader.tsx
var n = ({ children: n, as: r = "h1", preHeader: i, header: a, content: o, metaData: s, size: c = "lg", isWhite: l = !1, isCenter: u = !1, noUnderline: d = !1, pronoun: f }) => {
	let p = o && o.length > 320 ? `${o.substring(0, 320)}...` : o;
	return /* @__PURE__ */ t("header", {
		className: [
			"cu-pageheader",
			`cu-pageheader--${c}`,
			l ? "cu-pageheader--white" : "",
			u ? "cu-pageheader--center" : ""
		].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ t(r, {
				className: ["cu-pageheader__heading", d ? "" : "cu-pageheader__heading--underline"].filter(Boolean).join(" "),
				children: [
					i && /* @__PURE__ */ e("span", {
						className: "cu-pageheader__pre",
						children: i
					}),
					a,
					f && /* @__PURE__ */ t("span", {
						className: "cu-pageheader__pronoun",
						children: [
							"(",
							f,
							")"
						]
					})
				]
			}),
			s && /* @__PURE__ */ e("div", {
				className: "cu-pageheader__meta",
				children: s
			}),
			p && /* @__PURE__ */ e("p", {
				className: "cu-pageheader__content",
				children: p
			}),
			n
		]
	});
};
//#endregion
export { n as t };
