import { t as e } from "../_shared/useLinkContext-C6Tt2S8U.mjs";
import { t } from "../_shared/propClasses-BbEv--Kn.mjs";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ImageGrid/ImageGrid.Image.tsx
var a = ({ imageUrl: t, focalPointX: a = 50, focalPointY: o = 50, colSpan: s = "1", rowSpan: c = "1", aspectRatio: l = "landscape", title: u, content: d, link: f }) => {
	let p = e(), m = [
		"cu-imagegrid__item",
		`cu-imagegrid__item--${l}`,
		s !== "1" && `cu-imagegrid__item--col-${s}`,
		c !== "1" && `cu-imagegrid__item--row-${c}`
	].filter(Boolean).join(" "), h = {
		backgroundImage: `url(${t})`,
		backgroundPosition: `${a}% ${o}%`
	}, g = u || d;
	return /* @__PURE__ */ r("div", {
		className: m,
		style: h,
		"aria-hidden": g ? void 0 : "true",
		children: g && /* @__PURE__ */ r("div", {
			className: `cu-imagegrid__overlay${f ? " cu-imagegrid__overlay--linked" : ""}`,
			children: f ? /* @__PURE__ */ i(p, {
				href: f,
				className: "cu-imagegrid__overlay-link",
				children: [u && /* @__PURE__ */ r("p", {
					className: "cu-imagegrid__overlay-title",
					children: u
				}), d && /* @__PURE__ */ r("p", {
					className: "cu-imagegrid__overlay-content",
					children: d
				})]
			}) : /* @__PURE__ */ i(n, { children: [u && /* @__PURE__ */ r("p", {
				className: "cu-imagegrid__overlay-title",
				children: u
			}), d && /* @__PURE__ */ r("p", {
				className: "cu-imagegrid__overlay-content",
				children: d
			})] })
		})
	});
};
a.displayName = "ImageGrid.Image";
//#endregion
//#region src/components/ImageGrid/ImageGrid.tsx
var o = ({ children: e, cols: n = "3", maxWidth: i = "aligncontent", gap: a = "sm" }) => /* @__PURE__ */ r("div", {
	className: [
		"cu-layout cu-imagegrid",
		`cu-imagegrid--${t[n]}`,
		`cu-imagegrid--gap-${a}`,
		i
	].filter(Boolean).join(" "),
	children: e
}), s = Object.assign(o, { Image: a });
o.displayName = "ImageGrid";
//#endregion
export { s as ImageGrid, a as ImageGridImage, o as ImageGridWrapper };
