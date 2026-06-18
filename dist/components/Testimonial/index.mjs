import { t as e } from "../_shared/Quote-B6GFYJwG.mjs";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/Testimonial/Testimonial.tsx
var r = ({ quote: r, cite: i, imageUrl: a, imageZoom: o = 0, focalPointX: s = 50, focalPointY: c = 50, reverse: l = !1 }) => /* @__PURE__ */ n("div", {
	className: ["cu-testimonial", l ? "cu-testimonial--reverse" : void 0].filter(Boolean).join(" "),
	children: [/* @__PURE__ */ t("div", {
		className: "cu-testimonial__image",
		style: {
			backgroundImage: `url(${a})`,
			backgroundPosition: `${s}% ${c}%`,
			transform: `scale(${1 + o * .1})`
		},
		"aria-hidden": "true"
	}), /* @__PURE__ */ t("div", {
		className: "cu-testimonial__content",
		children: /* @__PURE__ */ t(e, {
			cite: i,
			children: /* @__PURE__ */ t("p", { children: r })
		})
	})]
});
//#endregion
export { r as Testimonial };
