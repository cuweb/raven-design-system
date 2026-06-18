import { t as e } from "../_shared/useLinkContext-C6Tt2S8U.mjs";
import { t } from "../_shared/Icon-BxlTg0gG.mjs";
import { createContext as n, useContext as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/SocialIcons/SocialIconsContext.ts
var o = n({}), s = () => r(o), c = ({ icon: n, href: r, label: a }) => {
	let o = e(), { iconColor: c } = s();
	return /* @__PURE__ */ i("li", {
		className: "cu-social__item",
		"data-social": c ? n : void 0,
		children: /* @__PURE__ */ i(o, {
			className: "cu-social__link",
			href: r,
			"aria-label": a,
			children: /* @__PURE__ */ i(t, { name: n })
		})
	});
};
c.displayName = "SocialIcons.Item";
//#endregion
//#region src/components/SocialIcons/SocialIcons.tsx
var l = ({ children: e, prefix: t, iconColor: n }) => {
	let r = n ? `cu-social--${n}` : void 0;
	return /* @__PURE__ */ i(o.Provider, {
		value: { iconColor: n },
		children: /* @__PURE__ */ a("div", {
			className: ["cu-social", r].filter(Boolean).join(" "),
			children: [t && /* @__PURE__ */ i("p", {
				className: "cu-social__prefix",
				children: t
			}), /* @__PURE__ */ i("ul", {
				className: "cu-social__list",
				children: e
			})]
		})
	});
};
l.displayName = "SocialIcons";
var u = Object.assign(l, { Item: c });
//#endregion
export { u as SocialIcons };
