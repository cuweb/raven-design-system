import { t as e } from "../_shared/PageHeader-B4JoWbfe.mjs";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/Timeline/TimelineItem.tsx
var r = ({ title: r, as: i = "h2", children: a, date: o }) => /* @__PURE__ */ n("div", {
	className: "cu-timeline__item",
	children: [/* @__PURE__ */ t("div", {
		className: "cu-timeline__date",
		children: /* @__PURE__ */ t("p", { children: o })
	}), /* @__PURE__ */ n("div", {
		className: "cu-timeline__content",
		children: [/* @__PURE__ */ t(e, {
			as: i,
			header: r,
			size: "sm",
			noUnderline: !0
		}), a]
	})]
}), i = ({ children: e }) => /* @__PURE__ */ t("div", {
	className: "cu-timeline",
	children: e
}), a = Object.assign(i, { Item: r });
i.displayName = "Timeline";
//#endregion
export { a as Timeline };
