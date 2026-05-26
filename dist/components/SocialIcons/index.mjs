import { t as e } from "../_shared/useLinkContext-C6Tt2S8U.mjs";
import { t } from "../_shared/Icon-BxlTg0gG.mjs";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/SocialIcons/SocialIconsItem.tsx
var i = ({ icon: r, href: i, label: a }) => /* @__PURE__ */ n("li", {
	className: "cu-social__item",
	children: /* @__PURE__ */ n(e(), {
		className: "cu-social__link",
		href: i,
		"aria-label": a,
		children: /* @__PURE__ */ n(t, { name: r })
	})
});
i.displayName = "SocialIcons.Item";
//#endregion
//#region src/components/SocialIcons/SocialIcons.tsx
var a = ({ children: e, prefix: t }) => /* @__PURE__ */ r("div", {
	className: "cu-social",
	children: [t && /* @__PURE__ */ n("p", {
		className: "cu-social__prefix",
		children: t
	}), /* @__PURE__ */ n("ul", {
		className: "cu-social__list",
		children: e
	})]
});
a.displayName = "SocialIcons";
var o = Object.assign(a, { Item: i });
//#endregion
export { o as SocialIcons };
