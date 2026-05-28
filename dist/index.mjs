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
}), y = ({ children: e, isFirst: t = !1 }) => /* @__PURE__ */ f("div", {
	className: t ? "is-first" : void 0,
	children: e
});
y.displayName = "Column.Content";
//#endregion
//#region src/utils/propClasses.tsx
var b = {
	aligncontent: "aligncontent",
	alignwide: "alignwide",
	alignfull: "alignfull"
}, x = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	"1/3": "one-third",
	"2/3": "two-thirds"
}, S = ({ children: e, cols: t = "1" }) => /* @__PURE__ */ f("div", {
	className: `cu-column cu-column--${x[t]}`,
	children: e
}), ee = Object.assign(S, { Content: y });
S.displayName = "Column";
//#endregion
//#region src/components/Main/Main.tsx
var C = ({ children: e, as: t = "main", hasPadding: n = !0, className: r = "" }) => /* @__PURE__ */ f(t, {
	className: `${n ? "cu-main cu-main--padding" : "cu-main"} ${r}`,
	children: /* @__PURE__ */ f("div", {
		className: "alignfull has-global-padding is-layout-constrained entry-content",
		children: e
	})
}), te = ({ children: e, as: t = "section", isGrey: n, maxWidth: r = "aligncontent" }) => /* @__PURE__ */ f(t, {
	className: `cu-section cu-section--${n ? "grey has-global-padding" : "white"} ${r ? b[r] : ""} is-layout-constrained`,
	children: e
}), w = ({ children: e, as: t = "h1", preHeader: n, header: r, content: i, metaData: a, size: o = "lg", isWhite: s = !1, isCenter: c = !1, noUnderline: l = !1, pronoun: u }) => {
	let d = i && i.length > 320 ? `${i.substring(0, 320)}...` : i;
	return /* @__PURE__ */ p("header", {
		className: [
			"cu-pageheader",
			`cu-pageheader--${o}`,
			s ? "cu-pageheader--white" : "",
			c ? "cu-pageheader--center" : ""
		].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ p(t, {
				className: ["cu-pageheader__heading", l ? "" : "cu-pageheader__heading--underline"].filter(Boolean).join(" "),
				children: [
					n && /* @__PURE__ */ f("span", {
						className: "cu-pageheader__pre",
						children: n
					}),
					r,
					u && /* @__PURE__ */ p("span", {
						className: "cu-pageheader__pronoun",
						children: [
							"(",
							u,
							")"
						]
					})
				]
			}),
			a && /* @__PURE__ */ f("div", {
				className: "cu-pageheader__meta",
				children: a
			}),
			d && /* @__PURE__ */ f("p", {
				className: "cu-pageheader__content",
				children: d
			}),
			e
		]
	});
}, ne = ({ children: e, title: t, as: n = "h2", justify: r = "center", maxWidth: i = "aligncontent" }) => /* @__PURE__ */ p("div", {
	className: [
		"cu-callout",
		`cu-callout--${r}`,
		i ? b[i] : ""
	].filter(Boolean).join(" "),
	children: [/* @__PURE__ */ f(w, {
		as: n,
		header: t,
		size: "md",
		isCenter: r === "center",
		noUnderline: !1
	}), e]
}), T = ({ children: e, caption: t, size: n = "full", align: r = "none" }) => {
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
}, re = (e, t) => e && t ? `${e[0]}${t[0]}` : e ? e[0] : t ? t[0] : "CU", ie = ({ firstName: e, lastName: t, src: n, alt: r, size: i = "md", isCircle: a = !1, onClick: o }) => {
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
}, ae = n((e) => /* @__PURE__ */ f("a", { ...e })), E = () => a(ae), oe = ({ text: e, href: t, rounded: n = "md", color: r = "grey", ...i }) => {
	let a = E(), o = `cu-badge cu-badge--${r} cu-badge--radius-${n}`;
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
}, se = (e, t, n, r) => {
	let i = {};
	return e !== void 0 && (i.top = `${e}px`), t !== void 0 && (i.right = `${t}px`), n !== void 0 && (i.bottom = `${n}px`), r !== void 0 && (i.left = `${r}px`), i;
}, ce = ({ children: e, isAbsolute: t = !1, top: n = 0, right: r, bottom: i, left: a = 0 }) => /* @__PURE__ */ f("div", {
	className: "cu-badge-group",
	style: t ? {
		position: "absolute",
		...se(n, r, i, a)
	} : {},
	children: e
}), D = ({ name: e, size: t = "1em", title: n, ...r }) => {
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
}, le = ({ color: e = "red", title: t, icon: n, type: r = "button", isSmall: i, isFull: a, isDisabled: o, isOutline: s, ariaLabel: c, ...l }) => /* @__PURE__ */ p("button", {
	type: r,
	"aria-label": c,
	className: `cu-button ${o ? "cu-button--disabled" : `cu-button--${e}`} ${s && !o ? "cu-button--outline" : ""} ${i ? "cu-button--small" : ""} ${a ? "cu-button--full" : ""}`.trim(),
	disabled: o,
	...l,
	children: [n && /* @__PURE__ */ f(D, {
		className: "cu-icon",
		name: n,
		size: i ? 16 : 20
	}), t]
}), ue = ({ children: e, align: t = "start" }) => /* @__PURE__ */ f("div", {
	className: `cu-buttongroup cu-buttongroup--justify-${t}`,
	children: e
}), de = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__body",
	children: e
});
de.displayName = "Card.Body";
//#endregion
//#region src/components/Card/CardContent.tsx
var fe = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__content",
	children: e
});
fe.displayName = "Card.Content";
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/constants.js
var pe = 365.2425, me = 6048e5, he = 864e5, ge = 6e4, _e = 36e5, ve = 1e3, ye = 3600 * 24;
ye * 7, ye * pe / 12 * 3;
var be = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/constructFrom.js
function O(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && be in e ? e[be](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/toDate.js
function k(e, t) {
	return O(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/addDays.js
function xe(e, t, n) {
	let r = k(e, n?.in);
	return isNaN(t) ? O(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/defaultOptions.js
var Se = {};
function A() {
	return Se;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfWeek.js
function j(e, t) {
	let n = A(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = k(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfISOWeek.js
function M(e, t) {
	return j(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getISOWeekYear.js
function Ce(e, t) {
	let n = k(e, t?.in), r = n.getFullYear(), i = O(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = M(i), o = O(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = M(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function N(e) {
	let t = k(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/normalizeDates.js
function we(e, ...t) {
	let n = O.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfDay.js
function P(e, t) {
	let n = k(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/differenceInCalendarDays.js
function Te(e, t, n) {
	let [r, i] = we(n?.in, e, t), a = P(r), o = P(i), s = +a - N(a), c = +o - N(o);
	return Math.round((s - c) / he);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfISOWeekYear.js
function Ee(e, t) {
	let n = Ce(e, t), r = O(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), M(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isSameDay.js
function De(e, t, n) {
	let [r, i] = we(n?.in, e, t);
	return +P(r) == +P(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isDate.js
function Oe(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isValid.js
function ke(e) {
	return !(!Oe(e) && typeof e != "number" || isNaN(+k(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/getRoundingMethod.js
function Ae(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/differenceInMilliseconds.js
function je(e, t) {
	return k(e) - +k(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/differenceInMinutes.js
function Me(e, t, n) {
	let r = je(e, t) / ge;
	return Ae(n?.roundingMethod)(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfYear.js
function Ne(e, t) {
	let n = k(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Pe = {
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
}, Fe = (e, t, n) => {
	let r, i = Pe[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Ie(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Le = {
	date: Ie({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Ie({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Ie({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Re = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, ze = (e, t, n, r) => Re[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function F(e) {
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
var Be = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: F({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: F({
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
	month: F({
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
	day: F({
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
	dayPeriod: F({
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function I(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? He(s, (e) => e.test(o)) : Ve(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Ve(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function He(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Ue(e) {
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/en-US.js
var We = {
	code: "en-US",
	formatDistance: Fe,
	formatLong: Le,
	formatRelative: ze,
	localize: Be,
	match: {
		ordinalNumber: Ue({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: I({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: I({
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
		month: I({
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
		day: I({
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
		dayPeriod: I({
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getDayOfYear.js
function Ge(e, t) {
	let n = k(e, t?.in);
	return Te(n, Ne(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getISOWeek.js
function Ke(e, t) {
	let n = k(e, t?.in), r = M(n) - +Ee(n);
	return Math.round(r / me) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getWeekYear.js
function qe(e, t) {
	let n = k(e, t?.in), r = n.getFullYear(), i = A(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = O(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = j(o, t), c = O(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = j(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfWeekYear.js
function Je(e, t) {
	let n = A(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = qe(e, t), a = O(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), j(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getWeek.js
function Ye(e, t) {
	let n = k(e, t?.in), r = j(n, t) - +Je(n, t);
	return Math.round(r / me) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/addLeadingZeros.js
function L(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/format/lightFormatters.js
var R = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return L(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : L(n + 1, 2);
	},
	d(e, t) {
		return L(e.getDate(), t.length);
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
		return L(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return L(e.getHours(), t.length);
	},
	m(e, t) {
		return L(e.getMinutes(), t.length);
	},
	s(e, t) {
		return L(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return L(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, z = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Xe = {
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
		return R.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = qe(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? L(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : L(a, t.length);
	},
	R: function(e, t) {
		return L(Ce(e), t.length);
	},
	u: function(e, t) {
		return L(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return L(r, 2);
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
			case "qq": return L(r, 2);
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
			case "MM": return R.M(e, t);
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
			case "LL": return L(r + 1, 2);
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
		let i = Ye(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : L(i, t.length);
	},
	I: function(e, t, n) {
		let r = Ke(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : L(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : R.d(e, t);
	},
	D: function(e, t, n) {
		let r = Ge(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : L(r, t.length);
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
			case "ee": return L(a, 2);
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
			case "cc": return L(a, t.length);
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
			case "ii": return L(i, t.length);
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
		switch (i = r === 12 ? z.noon : r === 0 ? z.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? z.evening : r >= 12 ? z.afternoon : r >= 4 ? z.morning : z.night, t) {
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
		return R.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : R.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : L(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : L(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : R.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : R.s(e, t);
	},
	S: function(e, t) {
		return R.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Qe(r);
			case "XXXX":
			case "XX": return B(r);
			default: return B(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Qe(r);
			case "xxxx":
			case "xx": return B(r);
			default: return B(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Ze(r, ":");
			default: return "GMT" + B(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Ze(r, ":");
			default: return "GMT" + B(r, ":");
		}
	},
	t: function(e, t, n) {
		return L(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return L(+e, t.length);
	}
};
function Ze(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + L(a, 2);
}
function Qe(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + L(Math.abs(e) / 60, 2) : B(e, t);
}
function B(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = L(Math.trunc(r / 60), 2), a = L(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/format/longFormatters.js
var $e = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, et = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, tt = {
	p: et,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return $e(e, t);
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
		return a.replace("{{date}}", $e(r, t)).replace("{{time}}", et(i, t));
	}
}, nt = /^D+$/, rt = /^Y+$/, it = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function at(e) {
	return nt.test(e);
}
function ot(e) {
	return rt.test(e);
}
function st(e, t, n) {
	let r = ct(e, t, n);
	if (console.warn(r), it.includes(e)) throw RangeError(r);
}
function ct(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/format.js
var lt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ut = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, dt = /^'([^]*?)'?$/, ft = /''/g, pt = /[a-zA-Z]/;
function V(e, t, n) {
	let r = A(), i = n?.locale ?? r.locale ?? We, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = k(e, n?.in);
	if (!ke(s)) throw RangeError("Invalid time value");
	let c = t.match(ut).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = tt[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(lt).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: mt(e)
		};
		if (Xe[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(pt)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && ot(a) || !n?.useAdditionalDayOfYearTokens && at(a)) && st(a, t, String(e));
		let o = Xe[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function mt(e) {
	let t = e.match(dt);
	return t ? t[1].replace(ft, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getDate.js
function ht(e, t) {
	return k(e, t?.in).getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getDefaultOptions.js
function gt() {
	return Object.assign({}, A());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getISODay.js
function _t(e, t) {
	let n = k(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isAfter.js
function vt(e, t) {
	return +k(e) > +k(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isBefore.js
function yt(e, t) {
	return +k(e) < +k(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/transpose.js
function bt(e, t) {
	let n = xt(t) ? new t(0) : O(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function xt(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/Setter.js
var St = 10, Ct = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, wt = class extends Ct {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Tt = class extends Ct {
	priority = St;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => O(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : O(e, bt(e, this.context));
	}
}, H = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new wt(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Et = class extends H {
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
}, U = {
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
}, W = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/utils.js
function G(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function K(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function q(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * _e + a * ge + o * ve),
		rest: t.slice(n[0].length)
	};
}
function Dt(e) {
	return K(U.anyDigitsSigned, e);
}
function J(e, t) {
	switch (e) {
		case 1: return K(U.singleDigit, t);
		case 2: return K(U.twoDigits, t);
		case 3: return K(U.threeDigits, t);
		case 4: return K(U.fourDigits, t);
		default: return K(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Ot(e, t) {
	switch (e) {
		case 1: return K(U.singleDigitSigned, t);
		case 2: return K(U.twoDigitsSigned, t);
		case 3: return K(U.threeDigitsSigned, t);
		case 4: return K(U.fourDigitsSigned, t);
		default: return K(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function kt(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function At(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function jt(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var Mt = class extends H {
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
			case "y": return G(J(4, e), r);
			case "yo": return G(n.ordinalNumber(e, { unit: "year" }), r);
			default: return G(J(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = At(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Nt = class extends H {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return G(J(4, e), r);
			case "Yo": return G(n.ordinalNumber(e, { unit: "year" }), r);
			default: return G(J(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = qe(e, r);
		if (n.isTwoDigitYear) {
			let t = At(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), j(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), j(e, r);
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
}, Pt = class extends H {
	priority = 130;
	parse(e, t) {
		return Ot(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = O(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), M(r);
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
}, Ft = class extends H {
	priority = 130;
	parse(e, t) {
		return Ot(t === "u" ? 4 : t.length, e);
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
}, It = class extends H {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return J(t.length, e);
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
}, Lt = class extends H {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return J(t.length, e);
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
}, Rt = class extends H {
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
			case "M": return G(K(U.month, e), r);
			case "MM": return G(J(2, e), r);
			case "Mo": return G(n.ordinalNumber(e, { unit: "month" }), r);
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
}, zt = class extends H {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return G(K(U.month, e), r);
			case "LL": return G(J(2, e), r);
			case "Lo": return G(n.ordinalNumber(e, { unit: "month" }), r);
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/setWeek.js
function Bt(e, t, n) {
	let r = k(e, n?.in), i = Ye(r, n) - t;
	return r.setDate(r.getDate() - i * 7), k(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var Vt = class extends H {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return K(U.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return J(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return j(Bt(e, n, r), r);
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/setISOWeek.js
function Ht(e, t, n) {
	let r = k(e, n?.in), i = Ke(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Ut = class extends H {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return K(U.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return J(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return M(Ht(e, n));
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
}, Wt = [
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
], Gt = [
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
], Kt = class extends H {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return K(U.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return J(t.length, e);
		}
	}
	validate(e, t) {
		let n = jt(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Gt[r] : t >= 1 && t <= Wt[r];
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
}, qt = class extends H {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return K(U.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return J(t.length, e);
		}
	}
	validate(e, t) {
		return jt(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/setDay.js
function Jt(e, t, n) {
	let r = A(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = k(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return xe(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var Yt = class extends H {
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
		return e = Jt(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Xt = class extends H {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return G(J(t.length, e), i);
			case "eo": return G(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Jt(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, Zt = class extends H {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return G(J(t.length, e), i);
			case "co": return G(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Jt(e, n, r), e.setHours(0, 0, 0, 0), e;
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
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/setISODay.js
function Qt(e, t, n) {
	let r = k(e, n?.in);
	return xe(r, t - _t(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var $t = class extends H {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return J(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return G(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return G(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return G(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return G(n.day(e, {
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
		return e = Qt(e, n), e.setHours(0, 0, 0, 0), e;
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
}, en = class extends H {
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
		return e.setHours(kt(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, tn = class extends H {
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
		return e.setHours(kt(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, nn = class extends H {
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
		return e.setHours(kt(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, rn = class extends H {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return K(U.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return J(t.length, e);
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
}, an = class extends H {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return K(U.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return J(t.length, e);
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
}, on = class extends H {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return K(U.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return J(t.length, e);
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
}, sn = class extends H {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return K(U.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return J(t.length, e);
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
}, cn = class extends H {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return K(U.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return J(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ln = class extends H {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return K(U.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return J(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, un = class extends H {
	priority = 30;
	parse(e, t) {
		return G(J(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, dn = class extends H {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return q(W.basicOptionalMinutes, e);
			case "XX": return q(W.basic, e);
			case "XXXX": return q(W.basicOptionalSeconds, e);
			case "XXXXX": return q(W.extendedOptionalSeconds, e);
			default: return q(W.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : O(e, e.getTime() - N(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, fn = class extends H {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return q(W.basicOptionalMinutes, e);
			case "xx": return q(W.basic, e);
			case "xxxx": return q(W.basicOptionalSeconds, e);
			case "xxxxx": return q(W.extendedOptionalSeconds, e);
			default: return q(W.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : O(e, e.getTime() - N(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, pn = class extends H {
	priority = 40;
	parse(e) {
		return Dt(e);
	}
	set(e, t, n) {
		return [O(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, mn = class extends H {
	priority = 20;
	parse(e) {
		return Dt(e);
	}
	set(e, t, n) {
		return [O(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, hn = {
	G: new Et(),
	y: new Mt(),
	Y: new Nt(),
	R: new Pt(),
	u: new Ft(),
	Q: new It(),
	q: new Lt(),
	M: new Rt(),
	L: new zt(),
	w: new Vt(),
	I: new Ut(),
	d: new Kt(),
	D: new qt(),
	E: new Yt(),
	e: new Xt(),
	c: new Zt(),
	i: new $t(),
	a: new en(),
	b: new tn(),
	B: new nn(),
	h: new rn(),
	H: new an(),
	K: new on(),
	k: new sn(),
	m: new cn(),
	s: new ln(),
	S: new un(),
	X: new dn(),
	x: new fn(),
	t: new pn(),
	T: new mn()
}, gn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _n = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vn = /^'([^]*?)'?$/, yn = /''/g, bn = /\S/, xn = /[a-zA-Z]/;
function Y(e, t, n, r) {
	let i = () => O(r?.in || n, NaN), a = gt(), o = r?.locale ?? a.locale ?? We, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : k(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Tt(r?.in, n)], d = t.match(_n).map((e) => {
		let t = e[0];
		if (t in tt) {
			let n = tt[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(gn), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && ot(n) && st(n, t, e), !r?.useAdditionalDayOfYearTokens && at(n) && st(n, t, e);
		let a = n[0], s = hn[a];
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
			if (a.match(xn)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Sn(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && bn.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = k(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function Sn(e) {
	return e.match(vn)[1].replace(yn, "'");
}
//#endregion
//#region src/components/Card/CardDateThumb.tsx
var Cn = ({ startDate: e, endDate: t }) => {
	let n = Y(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), r = Y(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), i = V(n, "MMM"), a = ht(n);
	return /* @__PURE__ */ f("div", {
		className: "cu-card__date-thumb",
		"aria-hidden": "true",
		children: De(n, r) ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
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
Cn.displayName = "Card.DateThumb";
//#endregion
//#region src/components/Card/CardExcerpt.tsx
var wn = ({ text: e, hasMore: t, truncateOnMobile: n }) => /* @__PURE__ */ p("p", {
	className: `cu-card__excerpt${n ? " cu-card__excerpt--truncate-mobile" : ""}`,
	children: [e && e.length > 170 ? `${e.substring(0, 150)}...` : e, t && /* @__PURE__ */ f("span", {
		className: "cu-card__excerpt-more",
		children: " More"
	})]
});
wn.displayName = "Card.Excerpt";
//#endregion
//#region src/components/Card/CardEventMeta.tsx
var Tn = 18, En = (e) => e.replace(" ", "T"), Dn = (e) => e.split(" ")[0], On = (e) => `${e.getHours() % 12 || 12}:${V(e, "mm")} ${V(e, "a")}`, kn = ({ startDateTime: e, endDateTime: t, onCampus: n, onCampusBuilding: r, onCampusRoomNumber: i, eventAddress: a }) => {
	let o = Y(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), s = Y(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), c = De(o, s), l = V(o, "MMMM"), u = ht(o), m = V(s, "MMMM"), h = ht(s), g = On(o), _ = On(s), v = n ? `${i} ${r}` : a;
	return /* @__PURE__ */ p("ul", {
		className: "cu-card__meta cu-card__meta--has-icons",
		children: [/* @__PURE__ */ f("li", { children: c ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(D, {
			name: "clock",
			size: Tn,
			title: "When"
		}), /* @__PURE__ */ p("time", {
			dateTime: `${En(e)}/${En(t)}`,
			children: [
				g,
				" — ",
				_
			]
		})] }) : /* @__PURE__ */ p(d, { children: [
			/* @__PURE__ */ f(D, {
				name: "calendar-days",
				size: Tn,
				title: "When"
			}),
			/* @__PURE__ */ p("time", {
				dateTime: Dn(e),
				children: [
					l,
					" ",
					u
				]
			}),
			" — ",
			/* @__PURE__ */ p("time", {
				dateTime: Dn(t),
				children: [
					m,
					" ",
					h
				]
			})
		] }) }), /* @__PURE__ */ p("li", { children: [/* @__PURE__ */ f(D, {
			name: "location-dot",
			size: Tn,
			title: "Where"
		}), v] })]
	});
};
kn.displayName = "Card.EventMeta";
//#endregion
//#region src/components/Card/CardFigure.tsx
var An = ({ children: e, isRound: t, isSmall: n, isSquare: r, isIcon: i }) => /* @__PURE__ */ f("figure", {
	className: [
		"cu-card__figure",
		t && "cu-card__figure--round",
		n && "cu-card__figure--small",
		r && "cu-card__figure--square",
		i && "cu-card__figure--icon"
	].filter(Boolean).join(" "),
	children: e
});
An.displayName = "Card.Figure";
//#endregion
//#region src/components/Card/CardFooter.tsx
var jn = ({ children: e }) => /* @__PURE__ */ f("footer", {
	className: "cu-card__footer",
	children: e
});
jn.displayName = "Card.Footer";
//#endregion
//#region src/components/Card/CardHeader.tsx
var Mn = ({ title: e = "No title available", link: t, extraText: n, as: r = "h2", date: i, datePrefix: a, readTime: o, position: s = "bottom" }) => {
	let c = E(), l = r, u = i ? new Date(i).toLocaleString("en-US", {
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
Mn.displayName = "Card.Header";
//#endregion
//#region src/components/Card/CardImageThumb.tsx
var Nn = ({ children: e, isSquare: t }) => /* @__PURE__ */ f("figure", {
	className: `cu-card__image-thumb${t ? " cu-card__image-thumb--square" : ""}`,
	children: e
});
Nn.displayName = "Card.ImageThumb";
//#endregion
//#region src/components/Card/CardInitials.tsx
var Pn = ({ initials: e }) => /* @__PURE__ */ p("figure", {
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
Pn.displayName = "Card.Initials";
//#endregion
//#region src/components/Card/CardPeopleMeta.tsx
var Fn = ({ jobTitle: e, children: t, phone: n }) => /* @__PURE__ */ p("ul", {
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
Fn.displayName = "Card.PeopleMeta";
//#endregion
//#region src/components/Card/CardStats.tsx
var In = ({ stat: e, desc: t, reverse: n }) => {
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
In.displayName = "Card.Stats";
//#endregion
//#region src/components/Status/types.ts
var Ln = {
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
}, Rn = ({ children: e, variant: t = "success", type: n, label: r, context: i = "standalone" }) => {
	let a = n ? Ln[n] : void 0, o = a?.labels?.[t], s = e ?? r ?? o ?? void 0;
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
Rn.displayName = "Status";
//#endregion
//#region src/components/Card/CardStatus.tsx
var zn = (e) => /* @__PURE__ */ f("div", {
	className: "cu-card__status",
	children: /* @__PURE__ */ f(Rn, {
		...e,
		context: "in-card"
	})
});
zn.displayName = "Card.Status";
//#endregion
//#region src/utils/video/providers.ts
var Bn = [
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
], Vn = (e) => {
	for (let t of Bn) if (t.matches(e)) return t;
	return null;
}, Hn = (e) => Bn.find((t) => t.name === e) ?? null, Un = Bn.map((e) => e.name), Wn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Kn = async (e, t) => {
	let n = Vn(e);
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
}, qn = (e, t) => {
	if (!e) return {
		data: null,
		loading: !1,
		error: null
	};
	let n = Wn.get(e);
	return n ? {
		data: n,
		loading: !1,
		error: null
	} : {
		data: null,
		loading: !t,
		error: null
	};
}, Jn = (e, t) => {
	let n = !!t?.skipNetwork, [r, i] = u(() => qn(e, n)), [a, s] = u(e), [c, l] = u(n);
	return (e !== a || n !== c) && (s(e), l(n), i(qn(e, n))), o(() => {
		if (!e || Wn.has(e) || n) return;
		let t = new AbortController(), r = Gn.get(e);
		return r || (r = Kn(e, t.signal), Gn.set(e, r), r.finally(() => Gn.delete(e)).catch(() => {})), r.then((n) => {
			t.signal.aborted || (Wn.set(e, n), i({
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
}, Yn = [
	"maxresdefault",
	"sddefault",
	"hqdefault",
	"default"
], Xn = (e, t) => `https://i.ytimg.com/vi/${e}/${t}.jpg`, Zn = ({ url: e, thumbnail: t, title: n, provider: r, skipNetwork: i, onPlay: a }) => {
	let [o, s] = u(!1), [c, l] = u(0), d = Vn(e), m = r ?? d?.name, h = d?.parseId(e) ?? null, g = d && h ? d.buildEmbedUrl(h) : null, _ = m === "youtube", v = Jn(!t && !_ ? e : void 0, { skipNetwork: i }), y = _ && h ? Xn(h, Yn[c] ?? "default") : null, b = t ?? y ?? v.data?.thumbnail ?? void 0, x = _ && h && !t ? Yn.slice(1).map((e) => Xn(h, e)).join(",") : void 0, S = () => {
		!_ || t || c < Yn.length - 1 && l((e) => e + 1);
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
Zn.displayName = "Card.VideoFigure";
//#endregion
//#region src/utils/motion/useReducedMotion.ts
var Qn = "(prefers-reduced-motion: reduce)", $n = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(Qn).matches, er = () => {
	let [e, t] = u($n);
	return o(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(Qn), n = (e) => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, tr = 120, nr = 600, rr = "--cu-card-stagger", ir = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new Map(), or = (e, t) => {
	let n = `${e}|${t}`, r = ar.get(n);
	if (r) return r;
	let i = new IntersectionObserver((e) => {
		let t = 0;
		e.forEach((e) => {
			let n = ir.get(e.target);
			if (n) if (e.isIntersecting) {
				let r = Math.min(t * tr, nr);
				e.target.style.setProperty(rr, `${r}ms`), n.onVisible(), n.once && i.unobserve(e.target), t++;
			} else n.once || n.onHidden();
		});
	}, {
		threshold: e,
		rootMargin: t
	});
	return ar.set(n, i), i;
}, sr = (e = {}) => {
	let { threshold: t = 0, rootMargin: n = "0px 0px 200px 0px", once: r = !0, disabled: i = !1 } = e, a = er(), s = l(null), [c, d] = u(!1), f = a || i || c;
	return o(() => {
		if (a || i) return;
		let e = s.current;
		if (!e || typeof IntersectionObserver > "u") return;
		let o = or(t, n);
		return ir.set(e, {
			onVisible: () => d(!0),
			onHidden: () => d(!1),
			once: r
		}), o.observe(e), () => {
			o.unobserve(e), ir.delete(e);
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
}, cr = ({ children: e, isGrey: t, hasWave: n, isCenter: r, isCenterDesktop: i, noHover: a, noImage: o, leftBorder: s, revealOnScroll: c = !0, className: l }) => {
	let { ref: u, isVisible: d } = sr({ disabled: !c });
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
}, lr = Object.assign(cr, {
	Figure: An,
	VideoFigure: Zn,
	DateThumb: Cn,
	ImageThumb: Nn,
	Initials: Pn,
	Header: Mn,
	Body: de,
	Content: fe,
	Footer: jn,
	Excerpt: wn,
	EventMeta: kn,
	PeopleMeta: Fn,
	Stats: In,
	Status: zn
});
cr.displayName = "Card";
//#endregion
//#region src/components/CookieBanner/cookies.ts
var ur = (e) => {
	if (typeof document > "u") return !1;
	let t = document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`));
	if (!t) return !0;
	let n = t.split("=")[1];
	return new Date(n).getTime() <= Date.now();
}, dr = (e, t = 365) => {
	if (typeof document > "u") return;
	let n = /* @__PURE__ */ new Date();
	n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3), document.cookie = `${e}=true; expires=${n.toUTCString()}; path=/`;
}, fr = ({ cookieName: e = "cookieConsent", message: t = "This site uses cookies to offer you a better browsing experience. Find out more on", policyHref: n = "https://carleton.ca/privacy/privacy-notices/website-privacy-notice/", policyLabel: r = "how we use cookies and how you can change your settings.", buttonLabel: i = "Ok, got it!" }) => {
	let a = E(), [o, s] = u(() => ur(e));
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
				children: /* @__PURE__ */ f(le, {
					onClick: () => {
						dr(e), s(!1);
					},
					title: i
				})
			})]
		})
	}) : null;
}, pr = ({ deptName: e, buildingName: t, officeNumber: n, phone: r, email: i, buttons: a }) => {
	let o = E();
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
				children: /* @__PURE__ */ f(ue, {
					align: "end",
					children: a.map((e, t) => /* @__PURE__ */ f(le, {
						title: e.title,
						color: t === 0 ? "red" : "dark-grey"
					}, e.id))
				})
			})]
		})
	});
}, mr = "https://cdn.carleton.ca/rds/assets", hr = "/_assets", gr = !1, _r = globalThis.process?.env?.NODE_ENV === "development", X = gr || _r ? hr : mr, Z = {
	bgArise1: `${X}/bg-images/arise-1.jpg`,
	bgArise2: `${X}/bg-images/arise-2.jpg`,
	bgLeeds: `${X}/bg-images/leeds.jpg`,
	bgLibrary: `${X}/bg-images/library.jpg`,
	bgNicol: `${X}/bg-images/nicol.jpg`,
	bgSoutham: `${X}/bg-images/southam.jpg`,
	bgSplashAthletics: `${X}/bg-images/splash-athletics.png`,
	bgTory: `${X}/bg-images/tory.jpg`,
	campusAerial01: `${X}/banners/campus-aerial-01.jpg`,
	campusRiver01: `${X}/banners/campus-river-01.jpg`,
	cuLogoBlackLeftHorizontal: `${X}/cu-logos/cu-logo-black-left-horizontal.svg`,
	cuLogoBlackLeftHorizontalOutlined: `${X}/cu-logos/cu-logo-black-left-horizontal-outlined.svg`,
	cuLogoBlackRightHorizontal: `${X}/cu-logos/cu-logo-black-right-horizontal.svg`,
	cuLogoBlackRightHorizontalOutlined: `${X}/cu-logos/cu-logo-black-right-horizontal-outlined.svg`,
	cuLogoBlackVertical: `${X}/cu-logos/cu-logo-black-vertical.svg`,
	cuLogoBlackVerticalOutlined: `${X}/cu-logos/cu-logo-black-vertical-outlined.svg`,
	cuLogoCarleton360: `${X}/cu-logos/cu-logo-carleton360.svg`,
	cuLogoColorLeftHorizontal: `${X}/cu-logos/cu-logo-color-left-horiztonal.svg`,
	cuLogoColorLeftHorizontalOutlined: `${X}/cu-logos/cu-logo-color-left-horizontal-outlined.svg`,
	cuLogoColorRightHorizontal: `${X}/cu-logos/cu-logo-color-right-horiztonal.svg`,
	cuLogoColorRightHorizontalOutlined: `${X}/cu-logos/cu-logo-color-right-horizontal-outlined.svg`,
	cuLogoColorVertical: `${X}/cu-logos/cu-logo-color-vertical.svg`,
	cuLogoColorVerticalOutlined: `${X}/cu-logos/cu-logo-color-vertical-outlined.svg`,
	cuRavensLogoWhite: `${X}/graphics/cu-ravens-logo-white.svg`,
	cuShieldBlack: `${X}/cu-logos/cu-shield-black.svg`,
	cuShieldBlackOutlined: `${X}/cu-logos/cu-shield-black-outlined.svg`,
	cuShieldColor: `${X}/cu-logos/cu-shield-color.svg`,
	cuShieldColorOutlined: `${X}/cu-logos/cu-shield-color-outlined.svg`,
	cuWavesFooterRed: `${X}/graphics/cu-waves-footer-red.svg`,
	cuWavesHardEdgeBlack: `${X}/graphics/cu-waves-hard-edge-black.svg`,
	cuWavesHardEdgeRed: `${X}/graphics/cu-waves-hard-edge-red.svg`,
	cuWavesRepeatingBottomRed: `${X}/graphics/cu-waves-repeating-bottom-red.svg`,
	favicon16: `${X}/favicons/favicon-16x16.png`,
	favicon32: `${X}/favicons/favicon-32x32.png`,
	favicon48: `${X}/favicons/favicon-48x48.png`,
	faviconAndroidChrome192: `${X}/favicons/android-chrome-192x192.png`,
	faviconAndroidChrome512: `${X}/favicons/android-chrome-512x512.png`,
	faviconAppleTouch: `${X}/favicons/apple-touch-icon.png`,
	faviconIco: `${X}/favicons/favicon.ico`,
	faviconMstile150: `${X}/favicons/mstile-150x150.png`,
	faviconSafariPinnedTab: `${X}/favicons/safari-pinned-tab.svg`,
	fontawesomeLight: `${X}/graphics/fontawesome-light.svg`,
	greyBg: `${X}/graphics/grey-bg.jpg`,
	iconXSolid: `${X}/icons/x-solid.svg`,
	lexicalAlignCenter: `${X}/lexical-icons/align-center-light.svg`,
	lexicalAlignJustify: `${X}/lexical-icons/align-justify-light.svg`,
	lexicalAlignLeft: `${X}/lexical-icons/align-left-light.svg`,
	lexicalAlignRight: `${X}/lexical-icons/align-right-light.svg`,
	lexicalBold: `${X}/lexical-icons/bold-light.svg`,
	lexicalChevronDown: `${X}/lexical-icons/chevron-down-light.svg`,
	lexicalH2: `${X}/lexical-icons/h2-light.svg`,
	lexicalH3: `${X}/lexical-icons/h3-light.svg`,
	lexicalH4: `${X}/lexical-icons/h4-light.svg`,
	lexicalImage: `${X}/lexical-icons/image-regular.svg`,
	lexicalItalic: `${X}/lexical-icons/italic-light.svg`,
	lexicalLink: `${X}/lexical-icons/link-light.svg`,
	lexicalListOl: `${X}/lexical-icons/list-ol-light.svg`,
	lexicalListUl: `${X}/lexical-icons/list-ul-light.svg`,
	lexicalMessageQuote: `${X}/lexical-icons/message-quote-light.svg`,
	lexicalParagraph: `${X}/lexical-icons/paragraph-light.svg`,
	lexicalPencil: `${X}/lexical-icons/pencil-light.svg`,
	lexicalRotateLeft: `${X}/lexical-icons/rotate-left-light.svg`,
	lexicalRotateRight: `${X}/lexical-icons/rotate-right-light.svg`,
	lexicalUnderline: `${X}/lexical-icons/underline-light.svg`,
	quoteRed10: `${X}/graphics/quote-red-10.svg`,
	quoteWhite: `${X}/graphics/quote-white.svg`,
	ravensLogo: `${X}/ravens-logos/ravens-logo.svg`,
	ravensLogoWordmark: `${X}/ravens-logos/ravens-logo-wordmark.svg`
}, vr = ({ logoSrc: e = Z.cuLogoColorVerticalOutlined, logoAlt: t = "Logo of Carleton University", privacyHref: n = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: r = "https://carleton.ca/accessibility/", copyrightHref: i = "https://library.carleton.ca/copyright-carleton" }) => {
	let a = E(), o = (/* @__PURE__ */ new Date()).getFullYear();
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
}, yr = "Carleton University acknowledges the location of its campus on the traditional, unceded territories of the Algonquin Anishinàbeg nation", br = {
	phone: "613-520-2600",
	phoneHref: "tel:+1-613-520-2600",
	contactHref: "https://carleton.ca/about/contact/",
	address: "1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada"
}, xr = [
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
], Sr = [
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
			src: Z.ravensLogo,
			alt: "Carleton Ravens",
			href: "https://goravens.carleton.ca",
			width: 64
		}
	}]
], Cr = {
	standard: Sr,
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
	futureFunder: Sr
}, wr = ({ type: e = "standard", acknowledgment: t = yr, contact: n = br, social: r = xr, logoSrc: i = Z.cuLogoColorVerticalOutlined, logoAlt: a = "Logo of Carleton University", privacyHref: o = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: s = "https://carleton.ca/accessibility/", copyrightHref: c = "https://library.carleton.ca/copyright-carleton" }) => {
	let l = E(), u = Cr[e], d = (/* @__PURE__ */ new Date()).getFullYear();
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
									}), /* @__PURE__ */ f(D, {
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
}, Tr = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__top",
	children: e
});
Tr.displayName = "Nav.Top";
//#endregion
//#region src/components/Nav/NavBottom.tsx
var Er = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__bottom",
	children: /* @__PURE__ */ f("div", {
		className: "cu-nav__bottom-inner",
		children: e
	})
});
Er.displayName = "Nav.Bottom";
//#endregion
//#region src/components/Nav/NavLogo.tsx
var Dr = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg", Or = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-shield-color.svg", kr = ({ title: e, link: t }) => {
	let n = E();
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__logo",
		children: [/* @__PURE__ */ p("a", {
			href: "https://carleton.ca",
			className: "cu-nav__logomark",
			children: [/* @__PURE__ */ f("img", {
				className: `cu-nav__logomark-full${e ? " cu-nav__logomark-full--sm-hidden" : ""}`,
				src: Dr,
				width: 148,
				height: 40,
				alt: "Carleton University"
			}), e && /* @__PURE__ */ f("img", {
				className: "cu-nav__logomark-shield",
				src: Or,
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
kr.displayName = "Nav.Logo";
//#endregion
//#region src/components/Nav/NavSubMenu.tsx
var Ar = ({ items: e, isOpen: t, variant: n = "desktop" }) => {
	let [r, i] = u(null), a = E();
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
}, jr = ({ item: e, isOpen: t, onToggle: n, variant: r = "desktop" }) => {
	let i = E(), a = !!e.submenu?.length, o = r === "mobile", s = o ? ["cu-nav__submenu-link", a && t && "cu-nav__submenu-link--open"].filter(Boolean).join(" ") : ["cu-nav__link", a && t && "cu-nav__link--open"].filter(Boolean).join(" ");
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
		}), a && /* @__PURE__ */ f(Ar, {
			items: e.submenu ?? [],
			isOpen: t,
			variant: r
		})]
	});
}, Mr = "(max-width: 599.98px)", Nr = () => {
	let [e, t] = u(!1);
	return o(() => {
		let e = window.matchMedia(Mr), n = () => t(e.matches);
		return n(), e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, Pr = () => {}, Fr = ({ menu: e }) => {
	let [t, n] = u(null), [r, a] = u(!1), [d, m] = u(null), g = Nr(), _ = l(null), v = l(null), y = l(null), b = c(() => e.map((e) => e.title).join(""), [e]), x = i(() => {
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
	}, C = g ? 0 : t ?? e.length, te = e.slice(0, C), w = e.slice(C), ne = w.length > 0, T = !ne;
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__menu",
		ref: _,
		children: [
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list cu-nav__list--measure",
				ref: v,
				"aria-hidden": "true",
				children: e.map((e) => /* @__PURE__ */ f(jr, {
					item: e,
					isOpen: !1,
					onToggle: Pr
				}, e.title))
			}),
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list",
				children: te.map((e) => /* @__PURE__ */ f(jr, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => S(e.title)
				}, e.title))
			}),
			/* @__PURE__ */ p("button", {
				ref: y,
				className: `cu-nav__browse${T ? " cu-nav__browse--ghost" : ""}`,
				onClick: () => {
					T || (m(null), a((e) => !e));
				},
				"aria-expanded": T ? void 0 : r,
				"aria-haspopup": T ? void 0 : "true",
				"aria-hidden": T || void 0,
				tabIndex: T ? -1 : void 0,
				children: [/* @__PURE__ */ f("span", {
					className: "cu-nav__browse-label",
					children: "Browse"
				}), /* @__PURE__ */ f("span", {
					className: `cu-nav__arrow${r && !T ? " cu-nav__arrow--open" : ""}`,
					"aria-hidden": "true"
				})]
			}),
			r && ne && /* @__PURE__ */ f("ul", {
				className: "cu-nav__browse-dropdown",
				children: w.map((e) => /* @__PURE__ */ f(jr, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => ee(e.title),
					variant: "mobile"
				}, e.title))
			})
		]
	});
};
Fr.displayName = "Nav.Menu";
//#endregion
//#region src/components/Nav/NavButtons.tsx
var Q = ({ buttons: e, isSearch: t, onClickSearch: n }) => {
	let r = E();
	return !t && !e?.length ? null : /* @__PURE__ */ p("div", {
		className: "cu-nav__buttons",
		children: [t && /* @__PURE__ */ f("button", {
			className: "cu-nav__search-btn",
			onClick: n,
			"aria-label": "Search",
			children: /* @__PURE__ */ f(D, {
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
Q.displayName = "Nav.Buttons";
//#endregion
//#region src/components/Nav/Nav.tsx
var Ir = (n) => {
	let i = e.toArray(n), a = i.findIndex((e) => r(e) && e.type === Tr), o = i.findIndex((e) => r(e) && e.type === Er);
	if (a === -1 || o === -1) return n;
	let s = i[a], c = i[o], l = e.toArray(s.props.children), u = l.findIndex((e) => r(e) && e.type === Q);
	if (u === -1) return n;
	let d = l[u];
	return i[a] = t(s, void 0, ...l.filter((e, t) => t !== u)), i[o] = t(c, void 0, ...e.toArray(c.props.children), d), i;
}, Lr = ({ children: e }) => {
	let t = Nr(), n = l(null);
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
			children: t ? Ir(e) : e
		})
	});
};
Lr.displayName = "Nav";
var Rr = Object.assign(Lr, {
	Top: Tr,
	Bottom: Er,
	Logo: kr,
	Menu: Fr,
	Buttons: Q
}), zr = ({ component: e, children: t }) => /* @__PURE__ */ f(ae.Provider, {
	value: e,
	children: t
}), Br = ({ value: e, max: t = 100, label: n }) => {
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
}, Vr = ({ icon: e, href: t, label: n }) => /* @__PURE__ */ f("li", {
	className: "cu-social__item",
	children: /* @__PURE__ */ f(E(), {
		className: "cu-social__link",
		href: t,
		"aria-label": n,
		children: /* @__PURE__ */ f(D, { name: e })
	})
});
Vr.displayName = "SocialIcons.Item";
//#endregion
//#region src/components/SocialIcons/SocialIcons.tsx
var Hr = ({ children: e, prefix: t }) => /* @__PURE__ */ p("div", {
	className: "cu-social",
	children: [t && /* @__PURE__ */ f("p", {
		className: "cu-social__prefix",
		children: t
	}), /* @__PURE__ */ f("ul", {
		className: "cu-social__list",
		children: e
	})]
});
Hr.displayName = "SocialIcons";
var Ur = Object.assign(Hr, { Item: Vr }), $ = (e) => V(e, "h:mm a"), Wr = (e, t, n = /* @__PURE__ */ new Date()) => {
	let r = new Date(n);
	r.setHours(0, 0, 0, 0);
	let i = Y(e, "HH:mm", r), a = Y(t, "HH:mm", r);
	return yt(n, i) ? {
		variant: "error",
		label: `Opens at ${$(i)}`
	} : vt(n, a) || n.getTime() === a.getTime() ? {
		variant: "error",
		label: `Opens tomorrow at ${$(xe(i, 1))}`
	} : Me(a, n) <= 60 ? {
		variant: "warning",
		label: `Closes at ${$(a)}`
	} : {
		variant: "success",
		label: `Open until ${$(a)}`
	};
};
//#endregion
export { g as Article, _ as Aside, ie as Avatar, oe as Badge, ce as BadgeGroup, v as Body, le as Button, ue as ButtonGroup, ne as CallOut, lr as Card, ee as Column, fr as CookieBanner, pr as DepartmentBar, T as Figure, vr as Footer, wr as FooterStandard, D as Icon, zr as LinkProvider, C as Main, Rr as Nav, Un as PROVIDER_NAMES, w as PageHeader, Br as ProgressBar, te as Section, Ur as SocialIcons, Rn as Status, Ln as defaultStatusTypes, Vn as detectProvider, Wr as formatHoursStatus, Hn as getProvider, Jn as useOEmbed, er as useReducedMotion, sr as useScrollReveal };
