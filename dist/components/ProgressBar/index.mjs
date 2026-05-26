import { jsx as e } from "react/jsx-runtime";
//#region src/components/ProgressBar/ProgressBar.tsx
var t = ({ value: t, max: n = 100, label: r }) => {
	let i = n > 0 ? Math.min(Math.round(t / n * 100), 100) : 0;
	return /* @__PURE__ */ e("div", {
		className: "cu-progressbar",
		role: "progressbar",
		"aria-label": r,
		"aria-valuenow": i,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ e("div", {
			className: "cu-progressbar__fill",
			style: { width: `${i}%` }
		})
	});
};
//#endregion
export { t as ProgressBar };
