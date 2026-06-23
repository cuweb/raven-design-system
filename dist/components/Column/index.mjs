import { t as e } from "../_shared/propClasses-BbEv--Kn.mjs";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/Column/ColumnContent.tsx
var n = ({ children: e, isFirst: n = !1 }) => /* @__PURE__ */ t("div", {
	className: `cu-column__content ${n ? "is-first" : ""}`,
	children: e
});
n.displayName = "Column.Content";
//#endregion
//#region src/components/Column/Column.tsx
var r = ({ children: n, cols: r = "2", maxWidth: i = "aligncontent" }) => /* @__PURE__ */ t("div", {
	className: [`cu-layout cu-column cu-column--${e[r]}`, i].filter(Boolean).join(" "),
	children: n
}), i = Object.assign(r, { Content: n });
r.displayName = "Column";
//#endregion
export { i as Column };
