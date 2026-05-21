import { c as e, i as t, l as n, n as r, r as i, s as a, t as o } from "../_shared/Status-Dxbxt0iQ.mjs";
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/_lib/getRoundingMethod.js
function s(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/differenceInMilliseconds.js
function c(t, n) {
	return e(t) - +e(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/differenceInMinutes.js
function l(e, t, r) {
	let i = c(e, t) / n;
	return s(r?.roundingMethod)(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/isAfter.js
function u(t, n) {
	return +e(t) > +e(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/isBefore.js
function d(t, n) {
	return +e(t) < +e(n);
}
//#endregion
//#region src/components/Status/hoursStatus.ts
var f = (e) => t(e, "h:mm a"), p = (e, t, n = /* @__PURE__ */ new Date()) => {
	let r = new Date(n);
	r.setHours(0, 0, 0, 0);
	let o = i(e, "HH:mm", r), s = i(t, "HH:mm", r);
	return d(n, o) ? {
		variant: "error",
		label: `Opens at ${f(o)}`
	} : u(n, s) || n.getTime() === s.getTime() ? {
		variant: "error",
		label: `Opens tomorrow at ${f(a(o, 1))}`
	} : l(s, n) <= 60 ? {
		variant: "warning",
		label: `Closes at ${f(s)}`
	} : {
		variant: "success",
		label: `Open until ${f(s)}`
	};
};
//#endregion
export { o as Status, r as defaultStatusTypes, p as formatHoursStatus };
