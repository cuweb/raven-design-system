import { Children as e, cloneElement as t, createContext as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { iconMap as m } from "@cuweb/rds-icons";
import { flushSync as h } from "react-dom";
//#region src/components/Article/Article.tsx
var g = ({ children: e, content: t }) => t ? /* @__PURE__ */ f("article", { dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ f("article", { children: e }), _ = ({ children: e, isSticky: t, topSpace: n = 0 }) => /* @__PURE__ */ f("aside", {
	className: "relative cu-aside cu-prose",
	children: t ? /* @__PURE__ */ f("div", {
		className: "sticky",
		style: { top: `${n}px` },
		children: e
	}) : e
}), v = ({ children: e, className: t }) => /* @__PURE__ */ f("body", {
	className: t || "",
	children: e
}), y = ({ children: e, as: t = "main", hasPadding: n = !0, className: r = "" }) => /* @__PURE__ */ f(t, {
	className: `${n ? "cu-main cu-main--padding" : "cu-main"} ${r}`,
	children: /* @__PURE__ */ f("div", {
		className: "alignfull has-global-padding is-layout-constrained entry-content",
		children: e
	})
}), b = ({ children: e, isFirst: t = !1 }) => /* @__PURE__ */ f("div", {
	className: `cu-column__content ${t ? "is-first" : ""}`,
	children: e
});
b.displayName = "Column.Content";
//#endregion
//#region src/utils/propClasses.tsx
var x = {
	aligncontent: "aligncontent",
	alignwide: "alignwide",
	alignfull: "alignfull"
}, S = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	"1/3": "one-third",
	"2/3": "two-thirds"
}, ee = {
	start: "start",
	end: "end",
	center: "center"
}, C = ({ children: e, cols: t = "2", maxWidth: n = "aligncontent" }) => /* @__PURE__ */ f("div", {
	className: [`cu-layout cu-column cu-column--${S[t]}`, n].filter(Boolean).join(" "),
	children: e
}), te = Object.assign(C, { Content: b });
C.displayName = "Column";
//#endregion
//#region src/components/Section/Section.tsx
var ne = ({ children: e, as: t = "section", bgType: n, maxWidth: r = "aligncontent", contentWidth: i, isHero: a }) => /* @__PURE__ */ f(t, {
	className: [
		"cu-layout cu-section",
		a && "cu-section--hero",
		n && `cu-section--${n}`,
		n && "has-global-padding",
		r,
		"is-layout-constrained"
	].filter(Boolean).join(" "),
	"data-color-scheme": n === "black" ? "dark" : void 0,
	children: i === void 0 ? e : /* @__PURE__ */ f("div", {
		className: `has-global-padding ${i ? "alignwide" : "aligncontent"}`,
		children: e
	})
}), re = (e, t) => e && t ? `${e[0]}${t[0]}` : e ? e[0] : t ? t[0] : "CU", w = ({ firstName: e, lastName: t, src: n, alt: r, size: i = "md", isCircle: a = !1, onClick: o }) => {
	let s = t ? `${e} ${t}` : e, c = `cu-avatar cu-avatar--${i} ${a ? "cu-avatar--circle" : "cu-avatar--square"}`, l = n ? /* @__PURE__ */ f("img", {
		className: "cu-avatar__image",
		src: n,
		alt: "",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ f("span", {
		className: "cu-avatar__initials",
		"aria-hidden": "true",
		children: re(e, t)
	});
	return o ? /* @__PURE__ */ f("button", {
		type: "button",
		className: c,
		onClick: o,
		"aria-label": r ?? s,
		children: l
	}) : /* @__PURE__ */ f("div", {
		className: c,
		role: "img",
		"aria-label": r ?? s,
		children: l
	});
}, ie = n((e) => /* @__PURE__ */ f("a", { ...e })), T = () => a(ie), ae = ({ text: e, href: t, rounded: n = "md", color: r = "grey", ...i }) => {
	let a = T(), o = `cu-badge cu-badge--${r} cu-badge--radius-${n}`;
	return t ? /* @__PURE__ */ f(a, {
		href: t,
		className: o,
		...i,
		children: e
	}) : /* @__PURE__ */ f("span", {
		className: o,
		...i,
		children: e
	});
}, oe = (e, t, n, r) => {
	let i = {};
	return e !== void 0 && (i.top = `${e}px`), t !== void 0 && (i.right = `${t}px`), n !== void 0 && (i.bottom = `${n}px`), r !== void 0 && (i.left = `${r}px`), i;
}, se = ({ children: e, isAbsolute: t = !1, top: n = 0, right: r, bottom: i, left: a = 0 }) => /* @__PURE__ */ f("div", {
	className: "cu-badge-group",
	style: t ? {
		position: "absolute",
		...oe(n, r, i, a)
	} : {},
	children: e
}), E = ({ name: e, size: t = "1em", title: n, ...r }) => {
	let i = m[e];
	return i ? /* @__PURE__ */ f(i, {
		width: t,
		height: t,
		focusable: !1,
		...n ? {
			role: "img",
			"aria-label": n
		} : { "aria-hidden": !0 },
		...r,
		children: n ? /* @__PURE__ */ f("title", { children: n }) : null
	}) : null;
}, D = ({ color: e = "red", title: t, icon: n, type: r = "button", isSmall: i, isFull: a, isDisabled: o, isOutline: s, ariaLabel: c, ...l }) => /* @__PURE__ */ p("button", {
	type: r,
	"aria-label": c,
	className: `cu-button ${o ? "cu-button--disabled" : `cu-button--${e}`} ${s && !o ? "cu-button--outline" : ""} ${i ? "cu-button--small" : ""} ${a ? "cu-button--full" : ""}`.trim(),
	disabled: o,
	...l,
	children: [n && /* @__PURE__ */ f(E, {
		className: "cu-icon",
		name: n,
		size: i ? 16 : 20
	}), t]
}), ce = ({ children: e, align: t = "start" }) => /* @__PURE__ */ f("div", {
	className: `cu-buttongroup cu-buttongroup--justify-${t}`,
	children: e
}), O = ({ children: e, as: t = "h1", preHeader: n, header: r, postHeader: i, content: a, metaData: o, size: s = "lg", isWhite: c = !1, isCenter: l = !1, noUnderline: u = !1, pronoun: d }) => {
	let m = a && a.length > 320 ? `${a.substring(0, 320)}...` : a;
	return /* @__PURE__ */ p("header", {
		className: [
			"cu-pageheader",
			`cu-pageheader--${s}`,
			c ? "cu-pageheader--white" : "",
			l ? "cu-pageheader--center" : ""
		].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ p(t, {
				className: ["cu-pageheader__heading", u ? "" : "cu-pageheader__heading--underline"].filter(Boolean).join(" "),
				children: [
					n && /* @__PURE__ */ f("span", {
						className: "cu-pageheader__pre",
						children: n
					}),
					r,
					d && /* @__PURE__ */ p("span", {
						className: "cu-pageheader__pronoun",
						children: [
							"(",
							d,
							")"
						]
					}),
					i && /* @__PURE__ */ f("span", {
						className: "cu-pageheader__post",
						children: i
					})
				]
			}),
			o && /* @__PURE__ */ f("div", {
				className: "cu-pageheader__meta",
				children: o
			}),
			m && /* @__PURE__ */ f("p", {
				className: "cu-pageheader__content",
				children: m
			}),
			e
		]
	});
}, le = ({ children: e, title: t, as: n = "h2", justify: r = "center", maxWidth: i = "aligncontent" }) => /* @__PURE__ */ p("div", {
	className: [
		"cu-callout",
		`cu-callout--${r}`,
		i ? x[i] : ""
	].filter(Boolean).join(" "),
	children: [/* @__PURE__ */ f(O, {
		as: n,
		header: t,
		size: "md",
		isCenter: r === "center",
		noUnderline: !1
	}), e]
}), ue = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__body",
	children: e
});
ue.displayName = "Card.Body";
//#endregion
//#region src/components/Card/CardContent.tsx
var de = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__content",
	children: e
});
de.displayName = "Card.Content";
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js
var fe = 365.2425, pe = 6048e5, me = 864e5, he = 6e4, ge = 36e5, _e = 1e3, ve = 3600 * 24;
ve * 7, ve * fe / 12 * 3;
var ye = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function k(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && ye in e ? e[ye](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function A(e, t) {
	return k(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addDays.js
function be(e, t, n) {
	let r = A(e, n?.in);
	return isNaN(t) ? k(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var xe = {};
function j() {
	return xe;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeek.js
function M(e, t) {
	let n = j(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = A(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeek.js
function N(e, t) {
	return M(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeekYear.js
function Se(e, t) {
	let n = A(e, t?.in), r = n.getFullYear(), i = k(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = N(i), o = k(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = N(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function P(e) {
	let t = A(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js
function Ce(e, ...t) {
	let n = k.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js
function F(e, t) {
	let n = A(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js
function we(e, t, n) {
	let [r, i] = Ce(n?.in, e, t), a = F(r), o = F(i), s = +a - P(a), c = +o - P(o);
	return Math.round((s - c) / me);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function Te(e, t) {
	let n = Se(e, t), r = k(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameDay.js
function Ee(e, t, n) {
	let [r, i] = Ce(n?.in, e, t);
	return +F(r) == +F(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function De(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function Oe(e) {
	return !(!De(e) && typeof e != "number" || isNaN(+A(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js
function ke(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInMilliseconds.js
function Ae(e, t) {
	return A(e) - +A(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInMinutes.js
function je(e, t, n) {
	let r = Ae(e, t) / he;
	return ke(n?.roundingMethod)(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function Me(e, t) {
	let n = A(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Ne = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, Pe = (e, t, n) => {
	let r, i = Ne[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Fe(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Ie = {
	date: Fe({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Fe({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Fe({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Le = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Re = (e, t, n, r) => Le[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function I(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var ze = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: I({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: I({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: I({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: I({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: I({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function L(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ve(s, (e) => e.test(o)) : Be(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Be(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Ve(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function He(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US.js
var Ue = {
	code: "en-US",
	formatDistance: Pe,
	formatLong: Ie,
	formatRelative: Re,
	localize: ze,
	match: {
		ordinalNumber: He({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: L({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: L({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: L({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: L({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: L({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDayOfYear.js
function We(e, t) {
	let n = A(e, t?.in);
	return we(n, Me(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function Ge(e, t) {
	let n = A(e, t?.in), r = N(n) - +Te(n);
	return Math.round(r / pe) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function Ke(e, t) {
	let n = A(e, t?.in), r = n.getFullYear(), i = j(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = k(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = M(o, t), c = k(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = M(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function qe(e, t) {
	let n = j(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Ke(e, t), a = k(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), M(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function Je(e, t) {
	let n = A(e, t?.in), r = M(n, t) - +qe(n, t);
	return Math.round(r / pe) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/addLeadingZeros.js
function R(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/lightFormatters.js
var z = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return R(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : R(n + 1, 2);
	},
	d(e, t) {
		return R(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return R(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return R(e.getHours(), t.length);
	},
	m(e, t) {
		return R(e.getMinutes(), t.length);
	},
	s(e, t) {
		return R(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return R(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, B = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Ye = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return z.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Ke(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? R(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : R(a, t.length);
	},
	R: function(e, t) {
		return R(Se(e), t.length);
	},
	u: function(e, t) {
		return R(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return R(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return R(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return z.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return R(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = Je(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : R(i, t.length);
	},
	I: function(e, t, n) {
		let r = Ge(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : R(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : z.d(e, t);
	},
	D: function(e, t, n) {
		let r = We(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : R(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return R(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return R(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return R(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? B.noon : r === 0 ? B.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? B.evening : r >= 12 ? B.afternoon : r >= 4 ? B.morning : B.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return z.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : z.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : R(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : R(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : z.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : z.s(e, t);
	},
	S: function(e, t) {
		return z.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Ze(r);
			case "XXXX":
			case "XX": return V(r);
			default: return V(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Ze(r);
			case "xxxx":
			case "xx": return V(r);
			default: return V(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Xe(r, ":");
			default: return "GMT" + V(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Xe(r, ":");
			default: return "GMT" + V(r, ":");
		}
	},
	t: function(e, t, n) {
		return R(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return R(+e, t.length);
	}
};
function Xe(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + R(a, 2);
}
function Ze(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + R(Math.abs(e) / 60, 2) : V(e, t);
}
function V(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = R(Math.trunc(r / 60), 2), a = R(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var Qe = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, $e = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, et = {
	p: $e,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Qe(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default:
				a = t.dateTime({ width: "full" });
				break;
		}
		return a.replace("{{date}}", Qe(r, t)).replace("{{time}}", $e(i, t));
	}
}, tt = /^D+$/, nt = /^Y+$/, rt = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function it(e) {
	return tt.test(e);
}
function at(e) {
	return nt.test(e);
}
function ot(e, t, n) {
	let r = st(e, t, n);
	if (console.warn(r), rt.includes(e)) throw RangeError(r);
}
function st(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var ct = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, lt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ut = /^'([^]*?)'?$/, dt = /''/g, ft = /[a-zA-Z]/;
function H(e, t, n) {
	let r = j(), i = n?.locale ?? r.locale ?? Ue, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = A(e, n?.in);
	if (!Oe(s)) throw RangeError("Invalid time value");
	let c = t.match(lt).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = et[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(ct).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: pt(e)
		};
		if (Ye[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(ft)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && at(a) || !n?.useAdditionalDayOfYearTokens && it(a)) && ot(a, t, String(e));
		let o = Ye[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function pt(e) {
	let t = e.match(ut);
	return t ? t[1].replace(dt, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDate.js
function mt(e, t) {
	return A(e, t?.in).getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDefaultOptions.js
function ht() {
	return Object.assign({}, j());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISODay.js
function gt(e, t) {
	let n = A(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isAfter.js
function _t(e, t) {
	return +A(e) > +A(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isBefore.js
function vt(e, t) {
	return +A(e) < +A(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/transpose.js
function yt(e, t) {
	let n = bt(t) ? new t(0) : k(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function bt(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/Setter.js
var xt = 10, St = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Ct = class extends St {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, wt = class extends St {
	priority = xt;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => k(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : k(e, yt(e, this.context));
	}
}, U = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Ct(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Tt = class extends U {
	priority = 140;
	parse(e, t, n) {
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
			case "GGGGG": return n.era(e, { width: "narrow" });
			default: return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
		}
	}
	set(e, t, n) {
		return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
}, W = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
}, G = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/utils.js
function K(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function q(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function J(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * ge + a * he + o * _e),
		rest: t.slice(n[0].length)
	};
}
function Et(e) {
	return q(W.anyDigitsSigned, e);
}
function Y(e, t) {
	switch (e) {
		case 1: return q(W.singleDigit, t);
		case 2: return q(W.twoDigits, t);
		case 3: return q(W.threeDigits, t);
		case 4: return q(W.fourDigits, t);
		default: return q(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Dt(e, t) {
	switch (e) {
		case 1: return q(W.singleDigitSigned, t);
		case 2: return q(W.twoDigitsSigned, t);
		case 3: return q(W.threeDigitsSigned, t);
		case 4: return q(W.fourDigitsSigned, t);
		default: return q(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function X(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Ot(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function kt(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var At = class extends U {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "yy"
		});
		switch (t) {
			case "y": return K(Y(4, e), r);
			case "yo": return K(n.ordinalNumber(e, { unit: "year" }), r);
			default: return K(Y(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Ot(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, jt = class extends U {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return K(Y(4, e), r);
			case "Yo": return K(n.ordinalNumber(e, { unit: "year" }), r);
			default: return K(Y(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Ke(e, r);
		if (n.isTwoDigitYear) {
			let t = Ot(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), M(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), M(e, r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
}, Mt = class extends U {
	priority = 130;
	parse(e, t) {
		return Dt(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = k(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, Nt = class extends U {
	priority = 130;
	parse(e, t) {
		return Dt(t === "u" ? 4 : t.length, e);
	}
	set(e, t, n) {
		return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Pt = class extends U {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Y(t.length, e);
			case "Qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "QQQ": return n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "formatting"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Ft = class extends U {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Y(t.length, e);
			case "qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "qqq": return n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "standalone"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, It = class extends U {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "M": return K(q(W.month, e), r);
			case "MM": return K(Y(2, e), r);
			case "Mo": return K(n.ordinalNumber(e, { unit: "month" }), r);
			case "MMM": return n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(e, {
				width: "wide",
				context: "formatting"
			}) || n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Lt = class extends U {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return K(q(W.month, e), r);
			case "LL": return K(Y(2, e), r);
			case "Lo": return K(n.ordinalNumber(e, { unit: "month" }), r);
			case "LLL": return n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(e, {
				width: "wide",
				context: "standalone"
			}) || n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setWeek.js
function Rt(e, t, n) {
	let r = A(e, n?.in), i = Je(r, n) - t;
	return r.setDate(r.getDate() - i * 7), A(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var zt = class extends U {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return q(W.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return M(Rt(e, n, r), r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setISOWeek.js
function Bt(e, t, n) {
	let r = A(e, n?.in), i = Ge(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Vt = class extends U {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return q(W.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return N(Bt(e, n));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, Ht = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Ut = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Wt = class extends U {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return q(W.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		let n = kt(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Ut[r] : t >= 1 && t <= Ht[r];
	}
	set(e, t, n) {
		return e.setDate(n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Gt = class extends U {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return q(W.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return kt(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
	}
	set(e, t, n) {
		return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setDay.js
function Kt(e, t, n) {
	let r = j(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = A(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return be(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var qt = class extends U {
	priority = 90;
	parse(e, t, n) {
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Kt(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Jt = class extends U {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return K(Y(t.length, e), i);
			case "eo": return K(n.ordinalNumber(e, { unit: "day" }), i);
			case "eee": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Kt(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
}, Yt = class extends U {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return K(Y(t.length, e), i);
			case "co": return K(n.ordinalNumber(e, { unit: "day" }), i);
			case "ccc": return n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.day(e, {
				width: "wide",
				context: "standalone"
			}) || n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Kt(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setISODay.js
function Xt(e, t, n) {
	let r = A(e, n?.in);
	return be(r, t - gt(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Zt = class extends U {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Y(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return K(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return K(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return K(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return K(n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 7;
	}
	set(e, t, n) {
		return e = Xt(e, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
}, Qt = class extends U {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "a":
			case "aa":
			case "aaa": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(X(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, $t = class extends U {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "b":
			case "bb":
			case "bbb": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(X(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, en = class extends U {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(X(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, tn = class extends U {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return q(W.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 12;
	}
	set(e, t, n) {
		let r = e.getHours() >= 12;
		return r && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !r && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
}, nn = class extends U {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return q(W.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 23;
	}
	set(e, t, n) {
		return e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
}, rn = class extends U {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return q(W.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
}, an = class extends U {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return q(W.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 24;
	}
	set(e, t, n) {
		let r = n <= 24 ? n % 24 : n;
		return e.setHours(r, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
}, on = class extends U {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return q(W.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, sn = class extends U {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return q(W.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Y(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, cn = class extends U {
	priority = 30;
	parse(e, t) {
		return K(Y(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, ln = class extends U {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return J(G.basicOptionalMinutes, e);
			case "XX": return J(G.basic, e);
			case "XXXX": return J(G.basicOptionalSeconds, e);
			case "XXXXX": return J(G.extendedOptionalSeconds, e);
			default: return J(G.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : k(e, e.getTime() - P(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, un = class extends U {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return J(G.basicOptionalMinutes, e);
			case "xx": return J(G.basic, e);
			case "xxxx": return J(G.basicOptionalSeconds, e);
			case "xxxxx": return J(G.extendedOptionalSeconds, e);
			default: return J(G.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : k(e, e.getTime() - P(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, dn = class extends U {
	priority = 40;
	parse(e) {
		return Et(e);
	}
	set(e, t, n) {
		return [k(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, fn = class extends U {
	priority = 20;
	parse(e) {
		return Et(e);
	}
	set(e, t, n) {
		return [k(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, pn = {
	G: new Tt(),
	y: new At(),
	Y: new jt(),
	R: new Mt(),
	u: new Nt(),
	Q: new Pt(),
	q: new Ft(),
	M: new It(),
	L: new Lt(),
	w: new zt(),
	I: new Vt(),
	d: new Wt(),
	D: new Gt(),
	E: new qt(),
	e: new Jt(),
	c: new Yt(),
	i: new Zt(),
	a: new Qt(),
	b: new $t(),
	B: new en(),
	h: new tn(),
	H: new nn(),
	K: new rn(),
	k: new an(),
	m: new on(),
	s: new sn(),
	S: new cn(),
	X: new ln(),
	x: new un(),
	t: new dn(),
	T: new fn()
}, mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gn = /^'([^]*?)'?$/, _n = /''/g, vn = /\S/, yn = /[a-zA-Z]/;
function Z(e, t, n, r) {
	let i = () => k(r?.in || n, NaN), a = ht(), o = r?.locale ?? a.locale ?? Ue, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : A(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new wt(r?.in, n)], d = t.match(hn).map((e) => {
		let t = e[0];
		if (t in et) {
			let n = et[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(mn), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && at(n) && ot(n, t, e), !r?.useAdditionalDayOfYearTokens && it(n) && ot(n, t, e);
		let a = n[0], s = pn[a];
		if (s) {
			let { incompatibleTokens: t } = s;
			if (Array.isArray(t)) {
				let e = f.find((e) => t.includes(e.token) || e.token === a);
				if (e) throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${n}\` at the same time`);
			} else if (s.incompatibleTokens === "*" && f.length > 0) throw RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
			f.push({
				token: a,
				fullToken: n
			});
			let r = s.run(e, n, o.match, l);
			if (!r) return i();
			u.push(r.setter), e = r.rest;
		} else {
			if (a.match(yn)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = bn(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && vn.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = A(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function bn(e) {
	return e.match(gn)[1].replace(_n, "'");
}
//#endregion
//#region src/components/Card/CardDateThumb.tsx
var xn = ({ startDate: e, endDate: t }) => {
	let n = Z(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), r = Z(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), i = H(n, "MMM"), a = mt(n);
	return /* @__PURE__ */ f("div", {
		className: "cu-card__date-thumb",
		"aria-hidden": "true",
		children: Ee(n, r) ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-month",
			children: i
		}), /* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-day",
			children: a
		})] }) : /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-month",
			children: "Multi"
		}), /* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-day",
			children: "Day"
		})] })
	});
};
xn.displayName = "Card.DateThumb";
//#endregion
//#region src/components/Card/CardExcerpt.tsx
var Sn = ({ text: e, hasMore: t, truncateOnMobile: n }) => /* @__PURE__ */ p("p", {
	className: `cu-card__excerpt${n ? " cu-card__excerpt--truncate-mobile" : ""}`,
	children: [e && e.length > 170 ? `${e.substring(0, 150)}...` : e, t && /* @__PURE__ */ f("span", {
		className: "cu-card__excerpt-more",
		children: " More"
	})]
});
Sn.displayName = "Card.Excerpt";
//#endregion
//#region src/components/Card/CardEventMeta.tsx
var Cn = 18, wn = (e) => e.replace(" ", "T"), Tn = (e) => e.split(" ")[0], En = (e) => `${e.getHours() % 12 || 12}:${H(e, "mm")} ${H(e, "a")}`, Dn = ({ startDateTime: e, endDateTime: t, onCampus: n, onCampusBuilding: r, onCampusRoomNumber: i, eventAddress: a }) => {
	let o = Z(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), s = Z(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), c = Ee(o, s), l = H(o, "MMMM"), u = mt(o), m = H(s, "MMMM"), h = mt(s), g = En(o), _ = En(s), v = n ? `${i} ${r}` : a;
	return /* @__PURE__ */ p("ul", {
		className: "cu-card__meta cu-card__meta--has-icons",
		children: [/* @__PURE__ */ f("li", { children: c ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(E, {
			name: "clock",
			size: Cn,
			title: "When"
		}), /* @__PURE__ */ p("time", {
			dateTime: `${wn(e)}/${wn(t)}`,
			children: [
				g,
				" — ",
				_
			]
		})] }) : /* @__PURE__ */ p(d, { children: [
			/* @__PURE__ */ f(E, {
				name: "calendar-days",
				size: Cn,
				title: "When"
			}),
			/* @__PURE__ */ p("time", {
				dateTime: Tn(e),
				children: [
					l,
					" ",
					u
				]
			}),
			" — ",
			/* @__PURE__ */ p("time", {
				dateTime: Tn(t),
				children: [
					m,
					" ",
					h
				]
			})
		] }) }), /* @__PURE__ */ p("li", { children: [/* @__PURE__ */ f(E, {
			name: "location-dot",
			size: Cn,
			title: "Where"
		}), v] })]
	});
};
Dn.displayName = "Card.EventMeta";
//#endregion
//#region src/components/Card/CardFigure.tsx
var On = ({ children: e, isRound: t, isSmall: n, isSquare: r, isIcon: i }) => /* @__PURE__ */ f("figure", {
	className: [
		"cu-card__figure",
		t && "cu-card__figure--round",
		n && "cu-card__figure--small",
		r && "cu-card__figure--square",
		i && "cu-card__figure--icon"
	].filter(Boolean).join(" "),
	children: e
});
On.displayName = "Card.Figure";
//#endregion
//#region src/components/Card/CardFooter.tsx
var kn = ({ children: e }) => /* @__PURE__ */ f("footer", {
	className: "cu-card__footer",
	children: e
});
kn.displayName = "Card.Footer";
//#endregion
//#region src/components/Card/CardHeader.tsx
var An = ({ title: e = "No title available", link: t, extraText: n, as: r = "h2", date: i, datePrefix: a, readTime: o, position: s = "bottom" }) => {
	let c = T(), l = r, u = i ? new Date(i).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric"
	}) : null;
	return /* @__PURE__ */ p("header", {
		className: "cu-card__header",
		children: [
			(i && s === "top" || o && s === "top") && /* @__PURE__ */ p("div", {
				className: "cu-card__header-meta",
				children: [i && /* @__PURE__ */ p("time", {
					className: "cu-card__header-time",
					children: [a && `${a} `, u]
				}), o && /* @__PURE__ */ p("p", {
					className: `cu-card__header-readtime${i ? " cu-card__header-readtime--with-divider" : ""}`,
					children: [o, " minute read"]
				})]
			}),
			n && !i && /* @__PURE__ */ f("div", {
				className: "cu-card__header-extra",
				children: /* @__PURE__ */ f("p", { children: n })
			}),
			/* @__PURE__ */ f(l, {
				className: "cu-card__header-title",
				children: t ? /* @__PURE__ */ f(c, {
					href: t,
					children: e
				}) : e
			}),
			(i && s === "bottom" || o && s === "bottom") && /* @__PURE__ */ p("div", {
				className: "cu-card__header-meta",
				children: [i && /* @__PURE__ */ p("time", {
					className: "cu-card__header-time",
					children: [a && `${a} `, u]
				}), o && /* @__PURE__ */ p("p", {
					className: `cu-card__header-readtime${i ? " cu-card__header-readtime--with-divider" : ""}`,
					children: [o, " minute read"]
				})]
			})
		]
	});
};
An.displayName = "Card.Header";
//#endregion
//#region src/components/Card/CardImageThumb.tsx
var jn = ({ children: e, isSquare: t }) => /* @__PURE__ */ f("figure", {
	className: `cu-card__image-thumb${t ? " cu-card__image-thumb--square" : ""}`,
	children: e
});
jn.displayName = "Card.ImageThumb";
//#endregion
//#region src/components/Card/CardInitials.tsx
var Mn = ({ initials: e }) => /* @__PURE__ */ p("figure", {
	className: "cu-card__initials",
	children: [/* @__PURE__ */ f("img", {
		src: "https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",
		alt: "",
		width: 200,
		height: 200
	}), /* @__PURE__ */ f("span", {
		className: "cu-card__initials-label",
		children: e
	})]
});
Mn.displayName = "Card.Initials";
//#endregion
//#region src/components/Card/CardPeopleMeta.tsx
var Nn = ({ jobTitle: e, children: t, phone: n }) => /* @__PURE__ */ p("ul", {
	className: "cu-card__meta",
	children: [
		e && /* @__PURE__ */ f("li", {
			className: "cu-card__people-meta-job",
			children: e
		}),
		t && /* @__PURE__ */ f("li", { children: /* @__PURE__ */ f("strong", {
			className: "cu-card__people-meta-email",
			children: t
		}) }),
		n && /* @__PURE__ */ f("li", { children: n })
	]
});
Nn.displayName = "Card.PeopleMeta";
//#endregion
//#region src/components/Card/CardStats.tsx
var Pn = ({ stat: e, desc: t, reverse: n }) => {
	let r = `cu-card__stats${n ? " cu-card__stats--reverse" : ""}`, i = t && t.length > 80 ? `${t.substring(0, 80)}...` : t, a = e && e.length > 60 ? `${e.substring(0, 60)}...` : e;
	return /* @__PURE__ */ p("div", {
		className: r,
		children: [/* @__PURE__ */ f("p", {
			className: "cu-card__stats-desc",
			children: i
		}), /* @__PURE__ */ f("p", {
			className: "cu-card__stats-stat",
			children: a
		})]
	});
};
Pn.displayName = "Card.Stats";
//#endregion
//#region src/components/Status/types.ts
var Fn = {
	hours: {
		ariaPrefix: "Hours",
		labels: {
			success: "Open",
			warning: "Closing soon",
			error: "Closed"
		}
	},
	availability: {
		ariaPrefix: "Availability",
		labels: {
			success: "Available",
			warning: "Limited availability",
			error: "Unavailable"
		}
	},
	system: {
		ariaPrefix: "System status",
		labels: {
			success: "Operational",
			warning: "Degraded",
			error: "Outage",
			info: "Maintenance"
		}
	}
}, In = ({ children: e, variant: t = "success", type: n, label: r, context: i = "standalone" }) => {
	let a = n ? Fn[n] : void 0, o = a?.labels?.[t], s = e ?? r ?? o ?? void 0;
	if (n !== void 0 && s === void 0) return null;
	let c = a && s !== void 0 && typeof s != "object" ? `${a.ariaPrefix}: ${s}` : void 0;
	return /* @__PURE__ */ p("span", {
		className: `cu-status cu-status--${t} cu-status--${i}`,
		"aria-label": c,
		children: [/* @__PURE__ */ f("span", {
			className: "cu-status__dot",
			"aria-hidden": "true"
		}), s]
	});
};
In.displayName = "Status";
//#endregion
//#region src/components/Card/CardStatus.tsx
var Ln = (e) => /* @__PURE__ */ f("div", {
	className: "cu-card__status",
	children: /* @__PURE__ */ f(In, {
		...e,
		context: "in-card"
	})
});
Ln.displayName = "Card.Status";
//#endregion
//#region src/utils/video/providers.ts
var Rn = [
	{
		name: "youtube",
		matches: (e) => /(?:youtube\.com|youtu\.be)/i.test(e),
		parseId: (e) => {
			let t = e.match(/youtu\.be\/([\w-]{11})/i);
			if (t) return t[1];
			let n = e.match(/[?&]v=([\w-]{11})/i);
			if (n) return n[1];
			let r = e.match(/youtube\.com\/embed\/([\w-]{11})/i);
			return r ? r[1] : null;
		},
		buildEmbedUrl: (e) => `https://www.youtube.com/embed/${e}?autoplay=1&rel=0`,
		buildThumbnailUrl: (e) => `https://i.ytimg.com/vi/${e}/maxresdefault.jpg`,
		buildOEmbedUrl: (e) => `https://www.youtube.com/oembed?url=${encodeURIComponent(e)}&format=json`
	},
	{
		name: "vimeo",
		matches: (e) => /vimeo\.com/i.test(e),
		parseId: (e) => {
			let t = e.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
			return t ? t[1] : null;
		},
		buildEmbedUrl: (e) => `https://player.vimeo.com/video/${e}?autoplay=1`,
		buildOEmbedUrl: (e) => `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(e)}`
	},
	{
		name: "ted",
		matches: (e) => /ted\.com\/talks/i.test(e),
		parseId: (e) => {
			let t = e.match(/ted\.com\/talks\/([\w_]+)/i);
			return t ? t[1] : null;
		},
		buildEmbedUrl: (e) => `https://embed.ted.com/talks/${e}`,
		buildOEmbedUrl: (e) => `https://www.ted.com/services/v1/oembed.json?url=${encodeURIComponent(e)}`
	}
], zn = (e) => {
	for (let t of Rn) if (t.matches(e)) return t;
	return null;
}, Bn = (e) => Rn.find((t) => t.name === e) ?? null, Vn = Rn.map((e) => e.name), Hn = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), Wn = async (e, t) => {
	let n = zn(e);
	if (!n) throw Error(`Unsupported video URL: ${e}`);
	let r = n.parseId(e);
	if (!r) throw Error(`Could not parse video ID from URL: ${e}`);
	if (n.name === "youtube" && n.buildThumbnailUrl) return {
		provider: "youtube",
		thumbnail: n.buildThumbnailUrl(r)
	};
	if (!n.buildOEmbedUrl) throw Error(`Provider ${n.name} has no oEmbed endpoint`);
	let i = await fetch(n.buildOEmbedUrl(e), { signal: t });
	if (!i.ok) throw Error(`oEmbed request failed: ${i.status} ${i.statusText}`);
	let a = await i.json();
	return {
		provider: n.name,
		thumbnail: a.thumbnail_url,
		title: a.title,
		author: a.author_name,
		duration: a.duration
	};
}, Gn = (e, t) => {
	if (!e) return {
		data: null,
		loading: !1,
		error: null
	};
	let n = Hn.get(e);
	return n ? {
		data: n,
		loading: !1,
		error: null
	} : {
		data: null,
		loading: !t,
		error: null
	};
}, Kn = (e, t) => {
	let n = !!t?.skipNetwork, [r, i] = u(() => Gn(e, n)), [a, s] = u(e), [c, l] = u(n);
	return (e !== a || n !== c) && (s(e), l(n), i(Gn(e, n))), o(() => {
		if (!e || Hn.has(e) || n) return;
		let t = new AbortController(), r = Un.get(e);
		return r || (r = Wn(e, t.signal), Un.set(e, r), r.finally(() => Un.delete(e)).catch(() => {})), r.then((n) => {
			t.signal.aborted || (Hn.set(e, n), i({
				data: n,
				loading: !1,
				error: null
			}));
		}).catch((e) => {
			t.signal.aborted || e instanceof Error && e.name === "AbortError" || i({
				data: null,
				loading: !1,
				error: e instanceof Error ? e : Error(String(e))
			});
		}), () => {
			t.abort();
		};
	}, [e, n]), r;
}, qn = [
	"maxresdefault",
	"sddefault",
	"hqdefault",
	"default"
], Jn = (e, t) => `https://i.ytimg.com/vi/${e}/${t}.jpg`, Yn = ({ url: e, thumbnail: t, title: n, provider: r, skipNetwork: i, onPlay: a }) => {
	let [o, s] = u(!1), [c, l] = u(0), d = zn(e), m = r ?? d?.name, h = d?.parseId(e) ?? null, g = d && h ? d.buildEmbedUrl(h) : null, _ = m === "youtube", v = Kn(!t && !_ ? e : void 0, { skipNetwork: i }), y = _ && h ? Jn(h, qn[c] ?? "default") : null, b = t ?? y ?? v.data?.thumbnail ?? void 0, x = _ && h && !t ? qn.slice(1).map((e) => Jn(h, e)).join(",") : void 0, S = () => {
		!_ || t || c < qn.length - 1 && l((e) => e + 1);
	}, ee = (e) => {
		g && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1 || (e.preventDefault(), s(!0), a?.()));
	}, C = [
		"cu-card__figure",
		"cu-card__figure--video",
		o && "cu-card__figure--playing"
	].filter(Boolean).join(" "), te = n ? `Play video: ${n}` : "Play video";
	return /* @__PURE__ */ f("figure", {
		className: C,
		"data-rds-video-card": !0,
		"data-embed-url": g ?? void 0,
		"data-provider": m,
		children: o && g ? /* @__PURE__ */ f("iframe", {
			className: "cu-card__figure-iframe",
			src: g,
			title: n ?? "Video player",
			allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
			allowFullScreen: !0
		}) : /* @__PURE__ */ p("a", {
			className: "cu-card__figure-link",
			href: e,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": te,
			onClick: ee,
			children: [b ? /* @__PURE__ */ f("img", {
				className: "cu-card__figure-poster",
				src: b,
				alt: "",
				loading: "lazy",
				"data-fallbacks": x,
				onError: S
			}) : v.loading ? /* @__PURE__ */ f("span", {
				className: "cu-card__figure-skeleton",
				"aria-hidden": "true"
			}) : /* @__PURE__ */ f("span", {
				className: "cu-card__figure-placeholder",
				"aria-hidden": "true"
			}), /* @__PURE__ */ f("span", {
				className: "cu-card__figure-play",
				"aria-hidden": "true",
				children: /* @__PURE__ */ p("svg", {
					viewBox: "0 0 68 48",
					focusable: "false",
					children: [/* @__PURE__ */ f("path", {
						className: "cu-card__figure-play-bg",
						d: "M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
					}), /* @__PURE__ */ f("path", {
						className: "cu-card__figure-play-arrow",
						d: "M 45,24 27,14 27,34"
					})]
				})
			})]
		})
	});
};
Yn.displayName = "Card.VideoFigure";
//#endregion
//#region src/utils/motion/useReducedMotion.ts
var Xn = "(prefers-reduced-motion: reduce)", Zn = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(Xn).matches, Qn = () => {
	let [e, t] = u(Zn);
	return o(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(Xn), n = (e) => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, $n = 120, er = 600, tr = "--cu-card-stagger", nr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new Map(), ir = (e, t) => {
	let n = `${e}|${t}`, r = rr.get(n);
	if (r) return r;
	let i = new IntersectionObserver((e) => {
		let t = 0;
		e.forEach((e) => {
			let n = nr.get(e.target);
			if (n) if (e.isIntersecting) {
				let r = Math.min(t * $n, er);
				e.target.style.setProperty(tr, `${r}ms`), n.onVisible(), n.once && i.unobserve(e.target), t++;
			} else n.once || n.onHidden();
		});
	}, {
		threshold: e,
		rootMargin: t
	});
	return rr.set(n, i), i;
}, ar = (e = {}) => {
	let { threshold: t = 0, rootMargin: n = "0px 0px 200px 0px", once: r = !0, disabled: i = !1 } = e, a = Qn(), s = l(null), [c, d] = u(!1), f = a || i || c;
	return o(() => {
		if (a || i) return;
		let e = s.current;
		if (!e || typeof IntersectionObserver > "u") return;
		let o = ir(t, n);
		return nr.set(e, {
			onVisible: () => d(!0),
			onHidden: () => d(!1),
			once: r
		}), o.observe(e), () => {
			o.unobserve(e), nr.delete(e);
		};
	}, [
		t,
		n,
		r,
		i,
		a
	]), {
		ref: s,
		isVisible: f
	};
}, or = ({ children: e, isGrey: t, hasWave: n, isCenter: r, isCenterDesktop: i, noHover: a, noImage: o, leftBorder: s, revealOnScroll: c = !0, className: l }) => {
	let { ref: u, isVisible: d } = ar({ disabled: !c });
	return /* @__PURE__ */ p("div", {
		ref: u,
		className: `${[
			"cu-card",
			t && "cu-card--grey",
			r && "cu-card--center",
			i && "cu-card--center-desktop",
			a && "cu-card--no-hover",
			o && "cu-card--no-image",
			s && "cu-card--border-left",
			n && t && "cu-card--has-wave"
		].filter(Boolean).join(" ")} ${l || ""}`,
		"data-cu-reveal": c ? "" : void 0,
		"data-revealed": d ? "true" : "false",
		children: [e, n && t && /* @__PURE__ */ p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			className: "cu-card__wave",
			fill: "none",
			viewBox: "0 0 1280 312",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ f("path", {
				fill: "#fff",
				d: "M26.412 315.608c-.602-.268-6.655-2.412-13.524-4.769a1943.84 1943.84 0 0 1-14.682-5.144l-2.276-.858v-5.358c0-4.876.086-5.358.773-5.09 1.674.643 21.38 5.84 34.646 9.109 14.682 3.59 28.935 6.858 45.936 10.449l9.874 2.089H57.322c-16.4 0-30.31-.16-30.91-.428ZM460.019 315.233c42.974-10.074 75.602-19.88 132.443-39.867 76.16-26.791 152.063-57.709 222.385-90.663 16.7-7.823 21.336-10.074 44.262-21.273 85.004-41.688 134.719-64.193 195.291-88.413 66.55-26.577 145.2-53.584 194.27-66.765C1258.5 5.626 1281.34 0 1282.24 0c.17 0 .34 27.596.34 61.3v61.299l-2.23.375c-84.7 13.718-165.93 35.955-310.736 84.931-46.494 15.753-65.427 22.076-96.166 32.15-9.102 3-24.814 8.198-34.989 11.574-107.543 35.954-153.008 50.422-196.626 62.639l-6.74 1.876-89.126-.054c-78.135-.054-88.782-.161-85.948-.857ZM729.628 312.875c33.229-10.985 69.248-23.523 127.506-44.207 118.705-42.223 164.596-57.709 217.446-73.302 2.62-.75 8.29-2.465 12.67-3.751 56.19-16.772 126.94-33.597 184.17-43.671 5.07-.91 9.66-1.768 10.22-1.875l.94-.161v170.236l-281.28-.054H719.968l9.66-3.215ZM246.864 313.411c-65.041-2.251-143.047-12.11-208.432-26.256-18.375-3.965-41.73-9.538-42.202-10.074-.171-.214-.257-21.38-.214-47.046l.129-46.618 6.654 3.697c57.313 32.043 118.491 56.531 197.699 79.143 40.313 11.521 83.459 18.058 138.669 21.059 15.584.857 65.685.857 81.14 0 33.744-1.876 61.306-4.93 88.396-9.806 6.396-1.126 11.634-1.929 11.722-1.929.255.375-20.48 7.769-30.999 11.038-28.592 8.948-59.288 15.646-91.873 20.147-26.36 3.59-50.015 5.627-78.35 6.698-15.584.59-55.209.59-72.339-.053Z"
			}), /* @__PURE__ */ f("path", {
				fill: "#fff",
				d: "M-3.066 295.067 32.06 304.1v9.033H-3.066v-18.066Z"
			})]
		})]
	});
}, sr = Object.assign(or, {
	Figure: On,
	VideoFigure: Yn,
	DateThumb: xn,
	ImageThumb: jn,
	Initials: Mn,
	Header: An,
	Body: ue,
	Content: de,
	Footer: kn,
	Excerpt: Sn,
	EventMeta: Dn,
	PeopleMeta: Nn,
	Stats: Pn,
	Status: Ln
});
or.displayName = "Card";
//#endregion
//#region src/components/Figure/Figure.tsx
var cr = ({ children: e, caption: t, size: n = "full", align: r = "none" }) => {
	let i = r === "left" ? "alignleft" : r === "right" ? "alignright" : "";
	return /* @__PURE__ */ f("figure", {
		className: [
			"cu-figure",
			`cu-figure--${n}`,
			r === "none" ? "" : `cu-figure--${r}`,
			i
		].filter(Boolean).join(" "),
		children: /* @__PURE__ */ p("div", {
			className: "cu-figure__inner",
			children: [e, t && /* @__PURE__ */ f("figcaption", {
				className: "cu-figure__caption",
				children: t
			})]
		})
	});
}, lr = ({ children: e, cite: t, graphic: n = "border", isCenter: r }) => /* @__PURE__ */ p("blockquote", {
	className: [
		"cu-quote",
		`cu-quote--${n}`,
		r ? "cu-quote--center" : void 0
	].filter(Boolean).join(" "),
	children: [e, t && /* @__PURE__ */ f("cite", {
		className: "cu-quote__cite",
		children: t
	})]
}), ur = ({ children: e, as: t = "ul", cols: n = "2", header: r, noShadow: i = !1 }) => /* @__PURE__ */ p("div", {
	className: ["cu-layout cu-stackedlist", i ? "cu-stackedlist--no-shadow" : void 0].filter(Boolean).join(" "),
	children: [r && /* @__PURE__ */ f("h2", {
		className: "cu-stackedlist__header",
		children: r
	}), /* @__PURE__ */ f(t, {
		className: `cu-stackedlist__list cu-stackedlist--cols-${n}`,
		children: e
	})]
}), dr = ({ quote: e, cite: t, imageUrl: n, imageZoom: r = 0, focalPointX: i = 50, focalPointY: a = 50, reverse: o = !1 }) => /* @__PURE__ */ p("div", {
	className: ["cu-testimonial", o ? "cu-testimonial--reverse" : void 0].filter(Boolean).join(" "),
	children: [/* @__PURE__ */ f("div", {
		className: "cu-testimonial__image",
		style: {
			backgroundImage: `url(${n})`,
			backgroundPosition: `${i}% ${a}%`,
			transform: `scale(${1 + r * .1})`
		},
		"aria-hidden": "true"
	}), /* @__PURE__ */ f("div", {
		className: "cu-testimonial__content",
		children: /* @__PURE__ */ f(lr, {
			cite: t,
			children: /* @__PURE__ */ f("p", { children: e })
		})
	})]
}), fr = ({ title: e, as: t = "h2", children: n, date: r }) => /* @__PURE__ */ p("div", {
	className: "cu-timeline__item",
	children: [/* @__PURE__ */ f("div", {
		className: "cu-timeline__date",
		children: /* @__PURE__ */ f("p", { children: r })
	}), /* @__PURE__ */ p("div", {
		className: "cu-timeline__content",
		children: [/* @__PURE__ */ f(O, {
			as: t,
			header: e,
			size: "sm",
			noUnderline: !0
		}), n]
	})]
}), pr = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-timeline",
	children: e
}), mr = Object.assign(pr, { Item: fr });
pr.displayName = "Timeline";
//#endregion
//#region src/components/Embed/Embed.YouTube.tsx
var hr = ({ title: e, url: t }) => {
	let n = "";
	if (t) {
		let e = t.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
		n = `https://www.youtube.com/embed/${e ? e[1] : null}`;
	}
	return /* @__PURE__ */ f("iframe", {
		title: e,
		src: n,
		className: "cu-embed-iframe",
		allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
		allowFullScreen: !0
	});
};
hr.displayName = "Embed.YouTube";
//#endregion
//#region src/components/Embed/Embed.Vimeo.tsx
var gr = ({ title: e, url: t }) => {
	let n = "";
	if (t) {
		let e = t.split("/");
		n = `https://player.vimeo.com/video/${e[e.length - 1]}`;
	}
	return /* @__PURE__ */ f("iframe", {
		title: e,
		src: n,
		className: "cu-embed-iframe",
		allow: "autoplay; fullscreen; picture-in-picture",
		allowFullScreen: !0
	});
};
gr.displayName = "Embed.Vimeo";
//#endregion
//#region src/components/Embed/Embed.Kaltura.tsx
var _r = ({ title: e, url: t }) => {
	let n = "", r = "";
	if (t) {
		let e = t.split("/");
		r = e[e.length - 1], n = `https://mediaspace.carleton.ca/embed/secure/iframe/entryId/${r}/uiConfId/36153741/st/0`;
	}
	return /* @__PURE__ */ f("iframe", {
		id: `kmsembed-${r}`,
		title: e,
		src: n,
		className: "cu-embed-iframe",
		allowFullScreen: !0,
		allow: "autoplay *; fullscreen *; encrypted-media *",
		referrerPolicy: "no-referrer-when-downgrade",
		sandbox: "allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
	});
};
_r.displayName = "Embed.Kaltura";
//#endregion
//#region src/components/Embed/Embed.PowerBi.tsx
var vr = ({ title: e, url: t }) => /* @__PURE__ */ f("iframe", {
	title: e,
	src: t,
	className: "cu-embed-iframe",
	allowFullScreen: !0
});
vr.displayName = "Embed.PowerBi";
//#endregion
//#region src/components/Embed/Embed.TED.tsx
var yr = ({ title: e, url: t }) => {
	let n = "";
	if (t) {
		let e = t.split("/");
		n = `https://embed.ted.com/talks/lang/en/${e[e.length - 1]}`;
	}
	return /* @__PURE__ */ f("iframe", {
		title: e,
		src: n,
		className: "cu-embed-iframe",
		allowFullScreen: !0
	});
};
yr.displayName = "Embed.TED";
//#endregion
//#region src/components/Embed/Embed.SoundCloud.tsx
var br = ({ title: e, url: t }) => /* @__PURE__ */ f("iframe", {
	title: e,
	src: `https://w.soundcloud.com/player/?url=${t}&color=ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true`,
	className: "cu-embed-iframe",
	allow: "encrypted-media",
	allowFullScreen: !0
});
br.displayName = "Embed.SoundCloud";
//#endregion
//#region src/components/Embed/Embed.Audioboom.tsx
var xr = ({ title: e, url: t }) => {
	let n = "";
	if (t) {
		let e = t.match(/\/posts\/(\d+)/);
		n = `https://audioboom.com/posts/${e ? e[1] : null}/embed/v4`;
	}
	return /* @__PURE__ */ f("iframe", {
		title: e,
		src: n,
		className: "cu-embed-iframe",
		allow: "autoplay",
		allowFullScreen: !0
	});
};
xr.displayName = "Embed.Audioboom";
//#endregion
//#region src/components/Embed/Embed.tsx
var Sr = ({ children: e, maxWidth: t = "aligncontent" }) => /* @__PURE__ */ f("div", {
	className: ["cu-embed cu-layout", t].filter(Boolean).join(" "),
	children: /* @__PURE__ */ f("div", {
		className: `cu-embed__container ${t}`,
		children: e
	})
}), Cr = Object.assign(Sr, {
	YouTube: hr,
	Vimeo: gr,
	Kaltura: _r,
	PowerBi: vr,
	TED: yr,
	SoundCloud: br,
	Audioboom: xr
});
Sr.displayName = "Embed";
//#endregion
//#region src/components/Embed/EmbedHubSpot.tsx
var wr = ({ formId: e, portalId: t }) => {
	let n = l(null);
	return o(() => {
		if (document.querySelector("script[src=\"https://js.hsforms.net/forms/embed/v2.js\"]")) window.hbspt && window.hbspt.forms.create({
			portalId: t,
			formId: e,
			target: `#hs-form-container-${e}`
		});
		else {
			let n = document.createElement("script");
			return n.src = "https://js.hsforms.net/forms/embed/v2.js", n.async = !0, document.body.appendChild(n), n.onload = () => {
				window.hbspt && window.hbspt.forms.create({
					portalId: t,
					formId: e,
					target: `#hs-form-container-${e}`
				});
			}, n.onerror = () => {
				console.error("Failed to load HubSpot forms script.");
			}, () => {
				document.body.contains(n) && document.body.removeChild(n);
			};
		}
	}, [e, t]), /* @__PURE__ */ f("div", {
		id: `hs-form-container-${e}`,
		ref: n
	});
};
wr.displayName = "EmbedHubSpot";
//#endregion
//#region src/components/FullBanner/FullBannerVideo.tsx
var Tr = () => /* @__PURE__ */ p("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false",
	children: [/* @__PURE__ */ f("rect", {
		x: "2",
		y: "1",
		width: "3.5",
		height: "12",
		rx: "1"
	}), /* @__PURE__ */ f("rect", {
		x: "8.5",
		y: "1",
		width: "3.5",
		height: "12",
		rx: "1"
	})]
}), Er = () => /* @__PURE__ */ f("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false",
	children: /* @__PURE__ */ f("path", { d: "M2.5 1.5 L12.5 7 L2.5 12.5 Z" })
}), Dr = ({ src: e }) => {
	let t = l(null), [n, r] = u(!0);
	return /* @__PURE__ */ p("div", {
		className: "cu-fullbanner__video-wrap",
		children: [/* @__PURE__ */ f("video", {
			ref: t,
			className: "cu-fullbanner__video",
			autoPlay: !0,
			muted: !0,
			loop: !0,
			playsInline: !0,
			"aria-hidden": "true",
			children: /* @__PURE__ */ f("source", { src: e })
		}), /* @__PURE__ */ f("button", {
			type: "button",
			className: "cu-fullbanner__video-toggle",
			onClick: () => {
				let e = t.current;
				e && (n ? e.pause() : e.play(), r(!n));
			},
			"aria-label": n ? "Pause background video" : "Play background video",
			children: f(n ? Tr : Er, {})
		})]
	});
};
Dr.displayName = "FullBanner.Video";
//#endregion
//#region src/components/FullBanner/FullBanner.tsx
var Or = {
	lg: "cu-fullbanner__inner--lg",
	xl: "cu-fullbanner__inner--xl"
}, kr = ({ children: e, title: t, content: n, headerType: r = "h2", image: i, imageAlt: a = "", media: o, opacity: s = 70, focalPointX: c = 50, focalPointY: l = 50, maxWidth: u = "alignwide", contentBox: d = "xl", justify: m = "start" }) => {
	let h = ["cu-layout cu-fullbanner", x[u]].filter(Boolean).join(" "), g = { "--cu-fullbanner-overlay": `rgba(0, 0, 0, ${s / 100})` }, _ = { objectPosition: `${c}% ${l}%` };
	return /* @__PURE__ */ p("div", {
		className: h,
		children: [!!(i || o) && /* @__PURE__ */ p("div", {
			className: "cu-fullbanner__media",
			children: [
				i && /* @__PURE__ */ f("img", {
					src: i,
					alt: a,
					className: "cu-fullbanner__img",
					style: _
				}),
				o,
				/* @__PURE__ */ f("div", {
					className: "cu-fullbanner__overlay",
					style: g,
					"aria-hidden": "true"
				})
			]
		}), /* @__PURE__ */ f("div", {
			className: "cu-fullbanner__wrap",
			children: /* @__PURE__ */ f("div", {
				className: `cu-fullbanner__inner ${Or[d]} cu-fullbanner__inner--${ee[m]}`,
				children: /* @__PURE__ */ p("div", {
					className: "cu-fullbanner__box",
					children: [/* @__PURE__ */ f(O, {
						header: t,
						as: r,
						size: "md",
						content: n,
						isWhite: !0,
						noUnderline: !0
					}), e]
				})
			})
		})]
	});
};
kr.displayName = "FullBanner";
var Ar = Object.assign(kr, { Video: Dr }), jr = "https://cdn.carleton.ca/rds/assets/bg-images", Mr = ({ children: e, maxWidth: t = "alignfull", contentWidth: n, image: r, opacity: i = 90 }) => {
	let a = r ? `${jr}/${r}.jpg` : void 0;
	return /* @__PURE__ */ p("section", {
		className: [
			"cu-layout cu-imagecover",
			a && "cu-imagecover--image",
			"has-global-padding",
			t,
			"is-layout-constrained"
		].filter(Boolean).join(" "),
		style: {
			...a && { "--cu-imagecover-bg": `url(${a})` },
			"--cu-imagecover-overlay": `rgba(255, 255, 255, ${i / 100})`
		},
		children: [/* @__PURE__ */ f("div", {
			className: `has-global-padding ${n ? "alignwide" : "aligncontent"}`,
			children: e
		}), /* @__PURE__ */ f("div", { className: "cu-imagecover__wave alignfull" })]
	});
}, Nr = ({ imageUrl: e, focalPointX: t = 50, focalPointY: n = 50, colSpan: r = "1", rowSpan: i = "1", aspectRatio: a = "landscape", title: o, content: s, link: c }) => {
	let l = T(), u = [
		"cu-imagegrid__item",
		`cu-imagegrid__item--${a}`,
		r !== "1" && `cu-imagegrid__item--col-${r}`,
		i !== "1" && `cu-imagegrid__item--row-${i}`
	].filter(Boolean).join(" "), m = {
		backgroundImage: `url(${e})`,
		backgroundPosition: `${t}% ${n}%`
	}, h = o || s;
	return /* @__PURE__ */ f("div", {
		className: u,
		style: m,
		"aria-hidden": h ? void 0 : "true",
		children: h && /* @__PURE__ */ f("div", {
			className: `cu-imagegrid__overlay${c ? " cu-imagegrid__overlay--linked" : ""}`,
			children: c ? /* @__PURE__ */ p(l, {
				href: c,
				className: "cu-imagegrid__overlay-link",
				children: [o && /* @__PURE__ */ f("p", {
					className: "cu-imagegrid__overlay-title",
					children: o
				}), s && /* @__PURE__ */ f("p", {
					className: "cu-imagegrid__overlay-content",
					children: s
				})]
			}) : /* @__PURE__ */ p(d, { children: [o && /* @__PURE__ */ f("p", {
				className: "cu-imagegrid__overlay-title",
				children: o
			}), s && /* @__PURE__ */ f("p", {
				className: "cu-imagegrid__overlay-content",
				children: s
			})] })
		})
	});
};
Nr.displayName = "ImageGrid.Image";
//#endregion
//#region src/components/ImageGrid/ImageGrid.tsx
var Pr = ({ children: e, cols: t = "3", maxWidth: n = "aligncontent", gap: r = "sm" }) => /* @__PURE__ */ f("div", {
	className: [
		"cu-layout cu-imagegrid",
		`cu-imagegrid--${S[t]}`,
		`cu-imagegrid--gap-${r}`,
		n
	].filter(Boolean).join(" "),
	children: e
}), Fr = Object.assign(Pr, { Image: Nr });
Pr.displayName = "ImageGrid";
//#endregion
//#region src/components/WideImage/WideImageSignup.tsx
var Ir = ({ buttonText: e = "Subscribe" }) => /* @__PURE__ */ p("div", {
	className: "cu-wideimage__signup",
	children: [/* @__PURE__ */ p("div", {
		className: "cu-wideimage__signup-row",
		children: [
			/* @__PURE__ */ f("label", {
				htmlFor: "cu-wideimage-email",
				className: "sr-only",
				children: "Enter your email address"
			}),
			/* @__PURE__ */ f("input", {
				type: "email",
				id: "cu-wideimage-email",
				name: "email",
				required: !0,
				placeholder: "Enter your email address",
				className: "cu-wideimage__signup-input"
			}),
			/* @__PURE__ */ f(D, { title: e })
		]
	}), /* @__PURE__ */ p("div", {
		className: "cu-wideimage__signup-optin",
		children: [/* @__PURE__ */ f("input", {
			type: "checkbox",
			id: "cu-wideimage-optin",
			name: "optin",
			value: "yes",
			className: "cu-wideimage__signup-checkbox"
		}), /* @__PURE__ */ p("label", {
			htmlFor: "cu-wideimage-optin",
			className: "cu-wideimage__signup-label",
			children: [
				"I agree to receive email from Carleton University. Read our",
				" ",
				/* @__PURE__ */ f("a", {
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
Ir.displayName = "WideImage.Signup";
//#endregion
//#region src/components/WideImage/WideImage.tsx
var Lr = ({ children: e, title: t, content: n, image: r, headerType: i = "h2", opacity: a = 70, focalPointX: o = 50, focalPointY: s = 50, isType: c = "light", maxWidth: l = "aligncontent" }) => /* @__PURE__ */ f("div", {
	className: [
		"cu-wideimage",
		`cu-wideimage--${c}`,
		x[l]
	].filter(Boolean).join(" "),
	style: c === "image" && r ? {
		backgroundImage: `url(${r})`,
		backgroundPosition: `${o}% ${s}%`,
		"--cu-wideimage-overlay": `rgba(0, 0, 0, ${a / 100})`
	} : {},
	children: /* @__PURE__ */ p("div", {
		className: "cu-wideimage__content",
		children: [/* @__PURE__ */ f(O, {
			header: t,
			as: i,
			size: i === "h1" ? "lg" : "md",
			content: n,
			isWhite: c !== "light",
			isCenter: !0,
			noUnderline: !0
		}), e]
	})
});
Lr.displayName = "WideImage";
var Rr = Object.assign(Lr, { Signup: Ir }), zr = ({ children: e, maxWidth: t = "alignfull", contentWidth: n, color: r = "black" }) => /* @__PURE__ */ p("section", {
	className: [
		"cu-layout cu-widewave",
		"cu-widewave--" + r,
		"has-global-padding",
		t,
		"is-layout-constrained"
	].filter(Boolean).join(" "),
	"data-color-scheme": "dark",
	children: [/* @__PURE__ */ f("div", { className: "cu-widewave__wave alignfull" }), /* @__PURE__ */ f("div", {
		className: `has-global-padding ${n ? "alignwide" : "aligncontent"}`,
		children: e
	})]
}), Br = ({ deptName: e, buildingName: t, officeNumber: n, phone: r, email: i, buttons: a }) => {
	let o = T();
	return /* @__PURE__ */ f("aside", {
		className: "cu-department-bar",
		children: /* @__PURE__ */ p("div", {
			className: "cu-department-bar__inner",
			children: [/* @__PURE__ */ p("div", {
				className: "cu-department-bar__info",
				children: [e && /* @__PURE__ */ f("h2", {
					className: "cu-department-bar__name",
					children: e
				}), /* @__PURE__ */ p("ul", {
					className: "cu-department-bar__meta",
					children: [
						t && /* @__PURE__ */ p("li", {
							className: "cu-department-bar__meta-item",
							children: [n && `${n} `, t]
						}),
						r && /* @__PURE__ */ f("li", {
							className: "cu-department-bar__meta-item",
							children: r
						}),
						i && /* @__PURE__ */ f("li", {
							className: "cu-department-bar__meta-item",
							children: /* @__PURE__ */ f(o, {
								href: `mailto:${i}`,
								className: "cu-department-bar__email",
								children: i
							})
						})
					]
				})]
			}), a && a.length > 0 && /* @__PURE__ */ f("div", {
				className: "cu-department-bar__actions",
				children: /* @__PURE__ */ f(ce, {
					align: "end",
					children: a.map((e, t) => /* @__PURE__ */ f(D, {
						title: e.title,
						color: t === 0 ? "red" : "dark-grey"
					}, e.id))
				})
			})]
		})
	});
}, Vr = "https://cdn.carleton.ca/rds/assets", Hr = "/_assets", Ur = !1, Wr = globalThis.process?.env?.NODE_ENV === "development", Q = Ur || Wr ? Hr : Vr, Gr = {
	bgArise1: `${Q}/bg-images/arise-1.jpg`,
	bgArise2: `${Q}/bg-images/arise-2.jpg`,
	bgLeeds: `${Q}/bg-images/leeds.jpg`,
	bgLibrary: `${Q}/bg-images/library.jpg`,
	bgNicol: `${Q}/bg-images/nicol.jpg`,
	bgSoutham: `${Q}/bg-images/southam.jpg`,
	bgSplashAthletics: `${Q}/bg-images/splash-athletics.png`,
	bgTory: `${Q}/bg-images/tory.jpg`,
	campusAerial01: `${Q}/banners/campus-aerial-01.jpg`,
	campusRiver01: `${Q}/banners/campus-river-01.jpg`,
	cuLogoBlackLeftHorizontal: `${Q}/cu-logos/cu-logo-black-left-horizontal.svg`,
	cuLogoBlackLeftHorizontalOutlined: `${Q}/cu-logos/cu-logo-black-left-horizontal-outlined.svg`,
	cuLogoBlackRightHorizontal: `${Q}/cu-logos/cu-logo-black-right-horizontal.svg`,
	cuLogoBlackRightHorizontalOutlined: `${Q}/cu-logos/cu-logo-black-right-horizontal-outlined.svg`,
	cuLogoBlackVertical: `${Q}/cu-logos/cu-logo-black-vertical.svg`,
	cuLogoBlackVerticalOutlined: `${Q}/cu-logos/cu-logo-black-vertical-outlined.svg`,
	cuLogoCarleton360: `${Q}/cu-logos/cu-logo-carleton360.svg`,
	cuLogoColorLeftHorizontal: `${Q}/cu-logos/cu-logo-color-left-horiztonal.svg`,
	cuLogoColorLeftHorizontalOutlined: `${Q}/cu-logos/cu-logo-color-left-horizontal-outlined.svg`,
	cuLogoColorRightHorizontal: `${Q}/cu-logos/cu-logo-color-right-horiztonal.svg`,
	cuLogoColorRightHorizontalOutlined: `${Q}/cu-logos/cu-logo-color-right-horizontal-outlined.svg`,
	cuLogoColorVertical: `${Q}/cu-logos/cu-logo-color-vertical.svg`,
	cuLogoColorVerticalOutlined: `${Q}/cu-logos/cu-logo-color-vertical-outlined.svg`,
	cuRavensLogoWhite: `${Q}/graphics/cu-ravens-logo-white.svg`,
	cuShieldBlack: `${Q}/cu-logos/cu-shield-black.svg`,
	cuShieldBlackOutlined: `${Q}/cu-logos/cu-shield-black-outlined.svg`,
	cuShieldColor: `${Q}/cu-logos/cu-shield-color.svg`,
	cuShieldColorOutlined: `${Q}/cu-logos/cu-shield-color-outlined.svg`,
	cuWavesFooterRed: `${Q}/graphics/cu-waves-footer-red.svg`,
	cuWavesHardEdgeBlack: `${Q}/graphics/cu-waves-hard-edge-black.svg`,
	cuWavesHardEdgeRed: `${Q}/graphics/cu-waves-hard-edge-red.svg`,
	cuWavesRepeatingBottomRed: `${Q}/graphics/cu-waves-repeating-bottom-red.svg`,
	favicon16: `${Q}/favicons/favicon-16x16.png`,
	favicon32: `${Q}/favicons/favicon-32x32.png`,
	favicon48: `${Q}/favicons/favicon-48x48.png`,
	faviconAndroidChrome192: `${Q}/favicons/android-chrome-192x192.png`,
	faviconAndroidChrome512: `${Q}/favicons/android-chrome-512x512.png`,
	faviconAppleTouch: `${Q}/favicons/apple-touch-icon.png`,
	faviconIco: `${Q}/favicons/favicon.ico`,
	faviconMstile150: `${Q}/favicons/mstile-150x150.png`,
	faviconSafariPinnedTab: `${Q}/favicons/safari-pinned-tab.svg`,
	fontawesomeLight: `${Q}/graphics/fontawesome-light.svg`,
	greyBg: `${Q}/graphics/grey-bg.jpg`,
	iconXSolid: `${Q}/icons/x-solid.svg`,
	lexicalAlignCenter: `${Q}/lexical-icons/align-center-light.svg`,
	lexicalAlignJustify: `${Q}/lexical-icons/align-justify-light.svg`,
	lexicalAlignLeft: `${Q}/lexical-icons/align-left-light.svg`,
	lexicalAlignRight: `${Q}/lexical-icons/align-right-light.svg`,
	lexicalBold: `${Q}/lexical-icons/bold-light.svg`,
	lexicalChevronDown: `${Q}/lexical-icons/chevron-down-light.svg`,
	lexicalH2: `${Q}/lexical-icons/h2-light.svg`,
	lexicalH3: `${Q}/lexical-icons/h3-light.svg`,
	lexicalH4: `${Q}/lexical-icons/h4-light.svg`,
	lexicalImage: `${Q}/lexical-icons/image-regular.svg`,
	lexicalItalic: `${Q}/lexical-icons/italic-light.svg`,
	lexicalLink: `${Q}/lexical-icons/link-light.svg`,
	lexicalListOl: `${Q}/lexical-icons/list-ol-light.svg`,
	lexicalListUl: `${Q}/lexical-icons/list-ul-light.svg`,
	lexicalMessageQuote: `${Q}/lexical-icons/message-quote-light.svg`,
	lexicalParagraph: `${Q}/lexical-icons/paragraph-light.svg`,
	lexicalPencil: `${Q}/lexical-icons/pencil-light.svg`,
	lexicalRotateLeft: `${Q}/lexical-icons/rotate-left-light.svg`,
	lexicalRotateRight: `${Q}/lexical-icons/rotate-right-light.svg`,
	lexicalUnderline: `${Q}/lexical-icons/underline-light.svg`,
	quoteRed10: `${Q}/graphics/quote-red-10.svg`,
	quoteWhite: `${Q}/graphics/quote-white.svg`,
	ravensLogo: `${Q}/ravens-logos/ravens-logo.svg`,
	ravensLogoWordmark: `${Q}/ravens-logos/ravens-logo-wordmark.svg`
}, Kr = ({ logoSrc: e = Gr.cuLogoColorVerticalOutlined, logoAlt: t = "Logo of Carleton University", privacyHref: n = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: r = "https://carleton.ca/accessibility/", copyrightHref: i = "https://library.carleton.ca/copyright-carleton" }) => {
	let a = T(), o = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ p("footer", {
		className: "cu-footer cu-footer--basic",
		"aria-labelledby": "cu-footer-heading",
		children: [/* @__PURE__ */ f("h2", {
			id: "cu-footer-heading",
			className: "sr-only",
			children: "Footer"
		}), /* @__PURE__ */ p("div", {
			className: "cu-footer__logo-links",
			children: [/* @__PURE__ */ f("img", {
				className: "cu-footer__logo",
				src: e,
				alt: t
			}), /* @__PURE__ */ p("ul", {
				className: "cu-footer__meta",
				children: [
					/* @__PURE__ */ f("li", {
						className: "cu-footer__meta-item",
						children: /* @__PURE__ */ f(a, {
							href: n,
							className: "cu-footer__meta-link",
							children: "Privacy Policy"
						})
					}),
					/* @__PURE__ */ f("li", {
						className: "cu-footer__meta-item",
						children: /* @__PURE__ */ f(a, {
							href: r,
							className: "cu-footer__meta-link",
							children: "Accessibility"
						})
					}),
					/* @__PURE__ */ f("li", {
						className: "cu-footer__meta-item",
						children: /* @__PURE__ */ p(a, {
							href: i,
							className: "cu-footer__meta-link",
							children: ["© Copyright ", o]
						})
					})
				]
			})]
		})]
	});
}, qr = "Carleton University acknowledges the location of its campus on the traditional, unceded territories of the Algonquin Anishinàbeg nation", Jr = {
	phone: "613-520-2600",
	phoneHref: "tel:+1-613-520-2600",
	contactHref: "https://carleton.ca/about/contact/",
	address: "1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada"
}, Yr = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/carletonuniversity",
		icon: "facebook"
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/carleton_u",
		icon: "instagram"
	},
	{
		name: "X (Twitter)",
		href: "https://twitter.com/@Carleton_U",
		icon: "x-twitter"
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/user/carletonuvideos",
		icon: "youtube"
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/school/carleton-university",
		icon: "linkedin"
	}
], Xr = [
	[{
		heading: "Admissions",
		links: [
			{
				name: "Undergraduate",
				href: "https://admissions.carleton.ca/"
			},
			{
				name: "Graduate",
				href: "https://graduate.carleton.ca/"
			},
			{
				name: "International",
				href: "https://admissions.carleton.ca/applicant-type/international-applicants/"
			},
			{
				name: "Professional Development",
				href: "https://carleton.ca/future-edge/"
			},
			{
				name: "Financial Aid",
				href: "https://carleton.ca/awards/"
			},
			{
				name: "Campus Tours",
				href: "https://admissions.carleton.ca/campustours/"
			},
			{
				name: "Initiatives",
				href: "https://carleton.ca/cie/"
			}
		]
	}],
	[{
		heading: "Academics",
		links: [
			{
				name: "Schedules & Dates",
				href: "https://carleton.ca/academics/schedules-dates/"
			},
			{
				name: "Brightspace",
				href: "https://brightspace.carleton.ca/"
			},
			{
				name: "Library",
				href: "https://library.carleton.ca/"
			},
			{
				name: "Support Services",
				href: "https://carleton.ca/academics/support/"
			},
			{
				name: "Calendars",
				href: "https://calendar.carleton.ca/"
			},
			{
				name: "Carleton Online",
				href: "https://carleton.ca/online/"
			},
			{
				name: "Future Learning Lab",
				href: "https://carleton.ca/tls/future-learning-lab/"
			}
		]
	}],
	[{
		heading: "Students",
		links: [
			{
				name: "Career Services",
				href: "https://carleton.ca/career/"
			},
			{
				name: "Dept & Faculties",
				href: "https://carleton.ca/academics/"
			},
			{
				name: "Student Email",
				href: "https://carleton.ca/ccs/all-services/email/carleton-student-email/"
			},
			{
				name: "Housing",
				href: "https://housing.carleton.ca/"
			},
			{
				name: "Registrar's Office",
				href: "https://carleton.ca/registrar/"
			},
			{
				name: "Registration",
				href: "https://carleton.ca/registrar/registration/"
			},
			{
				name: "ITS Help Centre",
				href: "https://carleton.ca/its/help-centre/"
			}
		]
	}],
	[{
		heading: "Campus",
		links: [
			{
				name: "Campus Map",
				href: "https://carleton.ca/campus/map/"
			},
			{
				name: "Directions",
				href: "https://carleton.ca/campus/directions/"
			},
			{
				name: "Events",
				href: "https://events.carleton.ca/"
			},
			{
				name: "Parking",
				href: "https://carleton.ca/parking/"
			},
			{
				name: "Safety",
				href: "https://carleton.ca/safety/"
			},
			{
				name: "Dining Services",
				href: "https://dining.carleton.ca/"
			},
			{
				name: "Clubs & Societies",
				href: "https://www.cusaclubs.ca/"
			}
		]
	}],
	[{
		heading: "Ravens",
		links: [
			{
				name: "Giving to Carleton",
				href: "https://futurefunder.carleton.ca/"
			},
			{
				name: "Athletics & Recreation",
				href: "https://athletics.carleton.ca/"
			},
			{
				name: "GoRavens Varsity",
				href: "https://goravens.ca/"
			}
		],
		media: {
			src: Gr.ravensLogo,
			alt: "Carleton Ravens",
			href: "https://goravens.carleton.ca",
			width: 64
		}
	}]
], Zr = {
	standard: Xr,
	athletics: [
		[{
			heading: "Fitness",
			links: [
				{
					name: "Fitness Centre",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/fitness-centre/"
				},
				{
					name: "Group Fitness Programs",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/"
				},
				{
					name: "Drop-in Group Fitness",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/cu-fit/"
				},
				{
					name: "Instructional Programs",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/instructional/"
				},
				{
					name: "Pilates",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/pilates-memberships/"
				},
				{
					name: "Senior Ravens",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/senior-ravens/"
				},
				{
					name: "Personal Training",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/personal-training-pt/"
				}
			]
		}],
		[{
			heading: "Aquatics",
			links: [
				{
					name: "Pool Information",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/"
				},
				{
					name: "Pool Schedule",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/pool-schedule/"
				},
				{
					name: "Children's Aquatics",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/childrens-program/"
				},
				{
					name: "Adult Programs",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/aquatics-adult-programs/"
				},
				{
					name: "Lifesaving & Leadership",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/lifesaving-certification-and-first-aid-programs/"
				},
				{
					name: "First Aid & CPR",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/lifesaving-certification-and-first-aid-programs/"
				}
			]
		}],
		[{
			heading: "Facilities",
			links: [
				{
					name: "Discover Our Facilities",
					href: "https://athleticsupgrade.carleton.ca/students/facilities/"
				},
				{
					name: "Facility Rentals",
					href: "https://rec.carleton.ca/Facility"
				},
				{
					name: "Policies & Procedures",
					href: "https://athleticsupgrade.carleton.ca/students/facilities/"
				}
			]
		}, {
			heading: "About Us",
			links: [
				{
					name: "Memberships",
					href: "https://athleticsupgrade.carleton.ca/community/fitness/memberships-passes/"
				},
				{
					name: "Inclusive Programs",
					href: "https://athleticsupgrade.carleton.ca/community/adaptive/"
				},
				{
					name: "Job Opportunities",
					href: "https://athleticsupgrade.carleton.ca/community/employment-opportunities/"
				}
			]
		}],
		[{
			heading: "Camps",
			links: [
				{
					name: "Summer Camps",
					href: "https://athleticsupgrade.carleton.ca/community/camps-and-childrens-programs/summer-camps/"
				},
				{
					name: "Holiday Camps",
					href: "https://athleticsupgrade.carleton.ca/community/camps-and-childrens-programs/holiday-camps/"
				},
				{
					name: "March Break Camps",
					href: "https://athleticsupgrade.carleton.ca/community/camps-and-childrens-programs/march-break-camps/"
				},
				{
					name: "Lifesaving Camps",
					href: "https://athleticsupgrade.carleton.ca/community/aquatics/summer-aquatic-camps/"
				},
				{
					name: "Junior Ravens",
					href: "https://athleticsupgrade.carleton.ca/community/camps-and-childrens-programs/junior-ravens-programs/"
				}
			]
		}, {
			heading: "Adult Leagues",
			links: [{
				name: "Browse All Leagues",
				href: "https://athleticsupgrade.carleton.ca/community/leagues/"
			}]
		}],
		[{
			heading: "Students",
			links: [
				{
					name: "Your Student Membership",
					href: "https://athleticsupgrade.carleton.ca/students/student-member/"
				},
				{
					name: "Drop-in (Campus Rec)",
					href: "https://athleticsupgrade.carleton.ca/students/campus-rec/"
				},
				{
					name: "Intramurals",
					href: "https://athleticsupgrade.carleton.ca/students/leagues-intramurals/intramurals/"
				}
			]
		}, {
			heading: "Carleton University",
			links: [
				{
					name: "Visit Carleton.ca",
					href: "https://carleton.ca"
				},
				{
					name: "About Carleton",
					href: "https://carleton.ca/about/"
				},
				{
					name: "Undergraduate Admissions",
					href: "https://admissions.carleton.ca/"
				}
			]
		}]
	],
	futureFunder: Xr
}, Qr = ({ type: e = "standard", acknowledgment: t = qr, contact: n = Jr, social: r = Yr, logoSrc: i = Gr.cuLogoColorVerticalOutlined, logoAlt: a = "Logo of Carleton University", privacyHref: o = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: s = "https://carleton.ca/accessibility/", copyrightHref: c = "https://library.carleton.ca/copyright-carleton" }) => {
	let l = T(), u = Zr[e], d = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ p("footer", {
		className: `cu-footer cu-footer--${e}`,
		"aria-labelledby": "cu-footer-heading",
		children: [/* @__PURE__ */ f("h2", {
			id: "cu-footer-heading",
			className: "sr-only",
			children: "Footer"
		}), /* @__PURE__ */ p("div", {
			className: "cu-footer__inner",
			children: [
				/* @__PURE__ */ f("div", {
					className: "cu-footer__acknowledgment",
					children: /* @__PURE__ */ f("p", { children: t })
				}),
				/* @__PURE__ */ f("div", {
					className: "cu-footer__columns",
					children: u.map((e, t) => /* @__PURE__ */ f("div", {
						className: "cu-footer__column",
						children: e.map((e, t) => /* @__PURE__ */ p("div", {
							className: "cu-footer__column-group",
							children: [
								/* @__PURE__ */ f("h3", {
									className: "cu-footer__column-heading",
									children: e.heading
								}),
								/* @__PURE__ */ f("ul", {
									className: "cu-footer__column-list",
									children: e.links.map((e, t) => /* @__PURE__ */ f("li", {
										className: "cu-footer__column-item",
										children: /* @__PURE__ */ f(l, {
											href: e.href,
											className: "cu-footer__column-link",
											children: e.name
										})
									}, t))
								}),
								e.media && (e.media.href ? /* @__PURE__ */ f(l, {
									href: e.media.href,
									className: "cu-footer__column-media",
									style: { width: e.media.width },
									children: /* @__PURE__ */ f("img", {
										src: e.media.src,
										alt: e.media.alt
									})
								}) : /* @__PURE__ */ f("img", {
									className: "cu-footer__column-media",
									src: e.media.src,
									alt: e.media.alt,
									style: { width: e.media.width }
								}))
							]
						}, t))
					}, t))
				}),
				/* @__PURE__ */ p("div", {
					className: "cu-footer__contact",
					children: [
						/* @__PURE__ */ p("p", {
							className: "cu-footer__contact-lead",
							children: [
								"Contact us by",
								" ",
								n.phoneHref && /* @__PURE__ */ f(l, {
									href: n.phoneHref,
									className: "cu-footer__contact-link",
									children: "phone"
								}),
								n.phoneHref && n.contactHref && " or ",
								n.contactHref && /* @__PURE__ */ f(l, {
									href: n.contactHref,
									className: "cu-footer__contact-link",
									children: "email"
								})
							]
						}),
						/* @__PURE__ */ f("p", {
							className: "cu-footer__contact-address",
							children: n.address
						}),
						/* @__PURE__ */ f("ul", {
							className: "cu-footer__social",
							children: r.map((e) => /* @__PURE__ */ f("li", {
								className: "cu-footer__social-item",
								children: /* @__PURE__ */ p(l, {
									href: e.href,
									className: "cu-footer__social-link",
									children: [/* @__PURE__ */ f("span", {
										className: "sr-only",
										children: e.name
									}), /* @__PURE__ */ f(E, {
										name: e.icon,
										size: 24
									})]
								})
							}, e.name))
						})
					]
				}),
				/* @__PURE__ */ p("div", {
					className: "cu-footer__logo-links",
					children: [/* @__PURE__ */ f("img", {
						className: "cu-footer__logo",
						src: i,
						alt: a
					}), /* @__PURE__ */ p("ul", {
						className: "cu-footer__meta",
						children: [
							/* @__PURE__ */ f("li", {
								className: "cu-footer__meta-item",
								children: /* @__PURE__ */ f(l, {
									href: o,
									className: "cu-footer__meta-link",
									children: "Privacy Policy"
								})
							}),
							/* @__PURE__ */ f("li", {
								className: "cu-footer__meta-item",
								children: /* @__PURE__ */ f(l, {
									href: s,
									className: "cu-footer__meta-link",
									children: "Accessibility"
								})
							}),
							/* @__PURE__ */ f("li", {
								className: "cu-footer__meta-item",
								children: /* @__PURE__ */ p(l, {
									href: c,
									className: "cu-footer__meta-link",
									children: ["© Copyright ", d]
								})
							})
						]
					})]
				})
			]
		})]
	});
}, $r = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__top",
	children: e
});
$r.displayName = "Nav.Top";
//#endregion
//#region src/components/Nav/NavBottom.tsx
var ei = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__bottom",
	children: /* @__PURE__ */ f("div", {
		className: "cu-nav__bottom-inner",
		children: e
	})
});
ei.displayName = "Nav.Bottom";
//#endregion
//#region src/components/Nav/NavLogo.tsx
var ti = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg", ni = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-shield-color.svg", ri = ({ title: e, link: t }) => {
	let n = T();
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__logo",
		children: [/* @__PURE__ */ p("a", {
			href: "https://carleton.ca",
			className: "cu-nav__logomark",
			children: [/* @__PURE__ */ f("img", {
				className: `cu-nav__logomark-full${e ? " cu-nav__logomark-full--sm-hidden" : ""}`,
				src: ti,
				width: 148,
				height: 40,
				alt: "Carleton University"
			}), e && /* @__PURE__ */ f("img", {
				className: "cu-nav__logomark-shield",
				src: ni,
				width: 30,
				height: 38,
				alt: "Carleton University"
			})]
		}), e && t && /* @__PURE__ */ f(n, {
			href: t,
			className: "cu-nav__site-title",
			children: e
		})]
	});
};
ri.displayName = "Nav.Logo";
//#endregion
//#region src/components/Nav/NavSubMenu.tsx
var ii = ({ items: e, isOpen: t, variant: n = "desktop" }) => {
	let [r, i] = u(null), a = T();
	return t ? /* @__PURE__ */ f("ul", {
		className: `cu-nav__submenu${n === "mobile" ? " cu-nav__submenu--mobile" : ""}`,
		children: e.map((e) => /* @__PURE__ */ f("li", {
			className: "cu-nav__submenu-item",
			children: e.submenu?.length ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ p("div", {
				className: "cu-nav__submenu-row",
				children: [/* @__PURE__ */ f(a, {
					href: e.href ?? "#",
					className: "cu-nav__submenu-link",
					children: e.title
				}), /* @__PURE__ */ f("button", {
					className: "cu-nav__submenu-expand",
					onClick: () => i((t) => t === e.title ? null : e.title),
					"aria-expanded": r === e.title,
					"aria-label": `${r === e.title ? "Collapse" : "Expand"} ${e.title}`,
					children: /* @__PURE__ */ f("span", {
						className: `cu-nav__arrow${r === e.title ? " cu-nav__arrow--open" : ""}`,
						"aria-hidden": "true"
					})
				})]
			}), r === e.title && /* @__PURE__ */ f("ul", {
				className: "cu-nav__submenu cu-nav__submenu--nested",
				children: e.submenu.map((e) => /* @__PURE__ */ f("li", {
					className: "cu-nav__submenu-item",
					children: /* @__PURE__ */ f(a, {
						href: e.href ?? "#",
						className: "cu-nav__submenu-link",
						children: e.title
					})
				}, e.title))
			})] }) : /* @__PURE__ */ f(a, {
				href: e.href ?? "#",
				className: "cu-nav__submenu-link",
				children: e.title
			})
		}, e.title))
	}) : null;
}, ai = ({ item: e, isOpen: t, onToggle: n, variant: r = "desktop" }) => {
	let i = T(), a = !!e.submenu?.length, o = r === "mobile", s = o ? ["cu-nav__submenu-link", a && t && "cu-nav__submenu-link--open"].filter(Boolean).join(" ") : ["cu-nav__link", a && t && "cu-nav__link--open"].filter(Boolean).join(" ");
	return /* @__PURE__ */ p("li", {
		className: o ? "cu-nav__submenu-item" : "cu-nav__item",
		children: [a ? /* @__PURE__ */ p("button", {
			className: s,
			onClick: n,
			"aria-expanded": t,
			children: [e.title, /* @__PURE__ */ f("span", {
				className: `cu-nav__arrow${t ? " cu-nav__arrow--open" : ""}`,
				"aria-hidden": "true"
			})]
		}) : /* @__PURE__ */ f(i, {
			href: e.href ?? "#",
			className: s,
			children: e.title
		}), a && /* @__PURE__ */ f(ii, {
			items: e.submenu ?? [],
			isOpen: t,
			variant: r
		})]
	});
}, oi = "(max-width: 599.98px)", si = () => {
	let [e, t] = u(!1);
	return o(() => {
		let e = window.matchMedia(oi), n = () => t(e.matches);
		return n(), e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, ci = () => {}, li = ({ menu: e }) => {
	let [t, n] = u(null), [r, a] = u(!1), [d, m] = u(null), g = si(), _ = l(null), v = l(null), y = l(null), b = c(() => e.map((e) => e.title).join(""), [e]), x = i(() => {
		if (g) return;
		let t = _.current, r = v.current, i = y.current;
		if (!t || !r || !i) return;
		let o = Array.from(r.children);
		if (o.length !== e.length) return;
		let s = t.getBoundingClientRect().width, c = r.getBoundingClientRect().left, l = (e) => e.getBoundingClientRect().right - c, u = o[o.length - 1];
		if (u && l(u) <= s) {
			n(e.length), a(!1);
			return;
		}
		let d = i.getBoundingClientRect().width, f = parseFloat(getComputedStyle(t).columnGap) || 0, p = s - d - f, m = 0;
		for (let e of o) if (l(e) <= p) m++;
		else break;
		n(m);
	}, [e.length, g]);
	s(() => {
		x();
	}, [b, x]), o(() => {
		if (!_.current) return;
		let e = new ResizeObserver(() => h(() => x()));
		return e.observe(_.current), () => e.disconnect();
	}, [x]), o(() => {
		if (!(!g || !r)) return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = "";
		};
	}, [g, r]), o(() => {
		let e = (e) => {
			_.current && !_.current.contains(e.target) && (a(!1), m(null));
		}, t = (e) => {
			e.key === "Escape" && (a(!1), m(null));
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, []);
	let S = (e) => {
		a(!1), m((t) => t === e ? null : e);
	}, ee = (e) => {
		m((t) => t === e ? null : e);
	}, C = g ? 0 : t ?? e.length, te = e.slice(0, C), ne = e.slice(C), re = ne.length > 0, w = !re;
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__menu",
		ref: _,
		children: [
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list cu-nav__list--measure",
				ref: v,
				"aria-hidden": "true",
				children: e.map((e) => /* @__PURE__ */ f(ai, {
					item: e,
					isOpen: !1,
					onToggle: ci
				}, e.title))
			}),
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list",
				children: te.map((e) => /* @__PURE__ */ f(ai, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => S(e.title)
				}, e.title))
			}),
			/* @__PURE__ */ p("button", {
				ref: y,
				className: `cu-nav__browse${w ? " cu-nav__browse--ghost" : ""}`,
				onClick: () => {
					w || (m(null), a((e) => !e));
				},
				"aria-expanded": w ? void 0 : r,
				"aria-haspopup": w ? void 0 : "true",
				"aria-hidden": w || void 0,
				tabIndex: w ? -1 : void 0,
				children: [/* @__PURE__ */ f("span", {
					className: "cu-nav__browse-label",
					children: "Browse"
				}), /* @__PURE__ */ f("span", {
					className: `cu-nav__arrow${r && !w ? " cu-nav__arrow--open" : ""}`,
					"aria-hidden": "true"
				})]
			}),
			r && re && /* @__PURE__ */ f("ul", {
				className: "cu-nav__browse-dropdown",
				children: ne.map((e) => /* @__PURE__ */ f(ai, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => ee(e.title),
					variant: "mobile"
				}, e.title))
			})
		]
	});
};
li.displayName = "Nav.Menu";
//#endregion
//#region src/components/Nav/NavButtons.tsx
var ui = ({ buttons: e, isSearch: t, onClickSearch: n }) => {
	let r = T();
	return !t && !e?.length ? null : /* @__PURE__ */ p("div", {
		className: "cu-nav__buttons",
		children: [t && /* @__PURE__ */ f("button", {
			className: "cu-nav__search-btn",
			onClick: n,
			"aria-label": "Search",
			children: /* @__PURE__ */ f(E, {
				name: "magnifying-glass",
				size: 20,
				"aria-hidden": "true"
			})
		}), e?.map((e) => /* @__PURE__ */ f(r, {
			href: e.href,
			className: `cu-nav__cta-link${e.variant === "dark" ? " cu-nav__cta-link--dark" : ""}`,
			children: e.title
		}, e.title))]
	});
};
ui.displayName = "Nav.Buttons";
//#endregion
//#region src/components/Nav/Nav.tsx
var di = (n) => {
	let i = e.toArray(n), a = i.findIndex((e) => r(e) && e.type === $r), o = i.findIndex((e) => r(e) && e.type === ei);
	if (a === -1 || o === -1) return n;
	let s = i[a], c = i[o], l = e.toArray(s.props.children), u = l.findIndex((e) => r(e) && e.type === ui);
	if (u === -1) return n;
	let d = l[u];
	return i[a] = t(s, void 0, ...l.filter((e, t) => t !== u)), i[o] = t(c, void 0, ...e.toArray(c.props.children), d), i;
}, fi = ({ children: e }) => {
	let t = si(), n = l(null);
	return o(() => {
		let e = n.current;
		if (!e) return;
		let r = window.scrollY, i = !1, a = () => {
			let n = window.scrollY;
			if (n > r && !i) {
				let r = e.getBoundingClientRect().top, a = e.querySelector(".cu-nav__bottom"), o = (() => {
					if (a) return a.getBoundingClientRect().top - r;
					if (t) {
						let t = e.querySelector(".cu-nav__logo");
						if (t) return t.getBoundingClientRect().bottom - r;
					}
					return e.offsetHeight;
				})();
				n > o && (i = !0, e.style.top = `-${o}px`);
			} else n < r && i && (i = !1, e.style.top = "0px");
			r = n;
		};
		return window.addEventListener("scroll", a, { passive: !0 }), () => {
			window.removeEventListener("scroll", a), e.style.top = "";
		};
	}, [t]), /* @__PURE__ */ f("header", {
		ref: n,
		className: "cu-nav",
		children: /* @__PURE__ */ f("nav", {
			className: "cu-nav__inner",
			"aria-label": "Site navigation",
			children: t ? di(e) : e
		})
	});
};
fi.displayName = "Nav";
var pi = Object.assign(fi, {
	Top: $r,
	Bottom: ei,
	Logo: ri,
	Menu: li,
	Buttons: ui
}), mi = ({ value: e, max: t = 100, label: n }) => {
	let r = t > 0 ? Math.min(Math.round(e / t * 100), 100) : 0;
	return /* @__PURE__ */ f("div", {
		className: "cu-progressbar",
		role: "progressbar",
		"aria-label": n,
		"aria-valuenow": r,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ f("div", {
			className: "cu-progressbar__fill",
			style: { width: `${r}%` }
		})
	});
}, $ = (e) => H(e, "h:mm a"), hi = (e, t, n = /* @__PURE__ */ new Date()) => {
	let r = new Date(n);
	r.setHours(0, 0, 0, 0);
	let i = Z(e, "HH:mm", r), a = Z(t, "HH:mm", r);
	return vt(n, i) ? {
		variant: "error",
		label: `Opens at ${$(i)}`
	} : _t(n, a) || n.getTime() === a.getTime() ? {
		variant: "error",
		label: `Opens tomorrow at ${$(be(i, 1))}`
	} : je(a, n) <= 60 ? {
		variant: "warning",
		label: `Closes at ${$(a)}`
	} : {
		variant: "success",
		label: `Open until ${$(a)}`
	};
}, gi = (e) => {
	if (typeof document > "u") return !1;
	let t = document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`));
	if (!t) return !0;
	let n = t.split("=")[1];
	return new Date(n).getTime() <= Date.now();
}, _i = (e, t = 365) => {
	if (typeof document > "u") return;
	let n = /* @__PURE__ */ new Date();
	n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3), document.cookie = `${e}=true; expires=${n.toUTCString()}; path=/`;
}, vi = ({ cookieName: e = "cookieConsent", message: t = "This site uses cookies to offer you a better browsing experience. Find out more on", policyHref: n = "https://carleton.ca/privacy/privacy-notices/website-privacy-notice/", policyLabel: r = "how we use cookies and how you can change your settings.", buttonLabel: i = "Ok, got it!" }) => {
	let a = T(), [o, s] = u(() => gi(e));
	return o ? /* @__PURE__ */ f("div", {
		className: "cu-cookie-banner",
		role: "dialog",
		"aria-live": "polite",
		"aria-label": "Cookie notice",
		children: /* @__PURE__ */ p("div", {
			className: "cu-cookie-banner__content",
			children: [/* @__PURE__ */ p("p", {
				className: "cu-cookie-banner__message",
				children: [
					t,
					" ",
					/* @__PURE__ */ f(a, {
						href: n,
						className: "cu-cookie-banner__link",
						children: r
					})
				]
			}), /* @__PURE__ */ f("div", {
				className: "cu-cookie-banner__action",
				children: /* @__PURE__ */ f(D, {
					onClick: () => {
						_i(e), s(!1);
					},
					title: i
				})
			})]
		})
	}) : null;
}, yi = ({ component: e, children: t }) => /* @__PURE__ */ f(ie.Provider, {
	value: e,
	children: t
}), bi = n({}), xi = () => a(bi), Si = ({ icon: e, href: t, label: n }) => {
	let r = T(), { iconColor: i } = xi();
	return /* @__PURE__ */ f("li", {
		className: "cu-social__item",
		"data-social": i ? e : void 0,
		children: /* @__PURE__ */ f(r, {
			className: "cu-social__link",
			href: t,
			"aria-label": n,
			children: /* @__PURE__ */ f(E, { name: e })
		})
	});
};
Si.displayName = "SocialIcons.Item";
//#endregion
//#region src/components/SocialIcons/SocialIcons.tsx
var Ci = ({ children: e, prefix: t, iconColor: n }) => {
	let r = n ? `cu-social--${n}` : void 0;
	return /* @__PURE__ */ f(bi.Provider, {
		value: { iconColor: n },
		children: /* @__PURE__ */ p("div", {
			className: ["cu-social", r].filter(Boolean).join(" "),
			children: [t && /* @__PURE__ */ f("p", {
				className: "cu-social__prefix",
				children: t
			}), /* @__PURE__ */ f("ul", {
				className: "cu-social__list",
				children: e
			})]
		})
	});
};
Ci.displayName = "SocialIcons";
var wi = Object.assign(Ci, { Item: Si });
//#endregion
export { g as Article, _ as Aside, w as Avatar, ae as Badge, se as BadgeGroup, v as Body, D as Button, ce as ButtonGroup, le as CallOut, sr as Card, te as Column, vi as CookieBanner, Br as DepartmentBar, Cr as Embed, wr as EmbedHubSpot, Sr as EmbedWrapper, cr as Figure, Kr as Footer, Qr as FooterStandard, Ar as FullBanner, E as Icon, Mr as ImageCover, Fr as ImageGrid, Nr as ImageGridImage, Pr as ImageGridWrapper, yi as LinkProvider, y as Main, pi as Nav, Vn as PROVIDER_NAMES, O as PageHeader, mi as ProgressBar, lr as Quote, ne as Section, wi as SocialIcons, ur as StackedList, In as Status, dr as Testimonial, mr as Timeline, Rr as WideImage, zr as WideWave, Fn as defaultStatusTypes, zn as detectProvider, hi as formatHoursStatus, Bn as getProvider, Kn as useOEmbed, Qn as useReducedMotion, ar as useScrollReveal };
