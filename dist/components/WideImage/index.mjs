import { t as e } from "../_shared/Button-BDzzWhqG.mjs";
import { t } from "../_shared/PageHeader-B4JoWbfe.mjs";
import { r as n } from "../_shared/propClasses-BbEv--Kn.mjs";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/WideImage/WideImageSignup.tsx
var a = ({ buttonText: t = "Subscribe" }) => /* @__PURE__ */ i("div", {
	className: "cu-wideimage__signup",
	children: [/* @__PURE__ */ i("div", {
		className: "cu-wideimage__signup-row",
		children: [
			/* @__PURE__ */ r("label", {
				htmlFor: "cu-wideimage-email",
				className: "sr-only",
				children: "Enter your email address"
			}),
			/* @__PURE__ */ r("input", {
				type: "email",
				id: "cu-wideimage-email",
				name: "email",
				required: !0,
				placeholder: "Enter your email address",
				className: "cu-wideimage__signup-input"
			}),
			/* @__PURE__ */ r(e, { title: t })
		]
	}), /* @__PURE__ */ i("div", {
		className: "cu-wideimage__signup-optin",
		children: [/* @__PURE__ */ r("input", {
			type: "checkbox",
			id: "cu-wideimage-optin",
			name: "optin",
			value: "yes",
			className: "cu-wideimage__signup-checkbox"
		}), /* @__PURE__ */ i("label", {
			htmlFor: "cu-wideimage-optin",
			className: "cu-wideimage__signup-label",
			children: [
				"I agree to receive email from Carleton University. Read our",
				" ",
				/* @__PURE__ */ r("a", {
					href: "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/",
					target: "_blank",
					rel: "noreferrer",
					children: "Privacy Statement"
				}),
				"."
			]
		})]
	})]
});
a.displayName = "WideImage.Signup";
//#endregion
//#region src/components/WideImage/WideImage.tsx
var o = ({ children: e, title: a, content: o, image: s, headerType: c = "h2", opacity: l = 70, focalPointX: u = 50, focalPointY: d = 50, isType: f = "light", maxWidth: p = "aligncontent" }) => /* @__PURE__ */ r("div", {
	className: [
		"cu-wideimage",
		`cu-wideimage--${f}`,
		n[p]
	].filter(Boolean).join(" "),
	style: f === "image" && s ? {
		backgroundImage: `url(${s})`,
		backgroundPosition: `${u}% ${d}%`,
		"--cu-wideimage-overlay": `rgba(0, 0, 0, ${l / 100})`
	} : {},
	children: /* @__PURE__ */ i("div", {
		className: "cu-wideimage__content",
		children: [/* @__PURE__ */ r(t, {
			header: a,
			as: c,
			size: c === "h1" ? "lg" : "md",
			content: o,
			isWhite: f !== "light",
			isCenter: !0,
			noUnderline: !0
		}), e]
	})
});
o.displayName = "WideImage";
var s = Object.assign(o, { Signup: a });
//#endregion
export { s as WideImage };
