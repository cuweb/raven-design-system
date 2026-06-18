import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/StackedList/StackedList.tsx
var n = ({ children: n, as: r = "ul", cols: i = "2", header: a, noShadow: o = !1 }) => /* @__PURE__ */ t("div", {
	className: ["cu-stackedlist", o ? "cu-stackedlist--no-shadow" : void 0].filter(Boolean).join(" "),
	children: [a && /* @__PURE__ */ e("h2", {
		className: "cu-stackedlist__header",
		children: a
	}), /* @__PURE__ */ e(r, {
		className: `cu-stackedlist__list cu-stackedlist--cols-${i}`,
		children: n
	})]
});
//#endregion
export { n as StackedList };
