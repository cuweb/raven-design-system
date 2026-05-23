import { createContext as e, useContext as t, useEffect as n, useRef as r, useState as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { iconMap as c } from "@cuweb/rds-icons";
//#region src/components/Article/Article.tsx
var l = ({ children: e, content: t }) => t ? /* @__PURE__ */ o("article", { dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ o("article", { children: e }), u = ({ children: e, isSticky: t, topSpace: n = 0 }) => /* @__PURE__ */ o("aside", {
	className: "relative cu-aside cu-prose",
	children: t ? /* @__PURE__ */ o("div", {
		className: "sticky",
		style: { top: `${n}px` },
		children: e
	}) : e
}), d = ({ children: e, className: t }) => /* @__PURE__ */ o("body", {
	className: t || "",
	children: e
}), f = ({ children: e, isFirst: t = !1 }) => /* @__PURE__ */ o("div", {
	className: t ? "is-first" : void 0,
	children: e
});
f.displayName = "Column.Content";
//#endregion
//#region src/utils/propClasses.tsx
var p = {
	aligncontent: "aligncontent",
	alignwide: "alignwide",
	alignfull: "alignfull"
}, m = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	"1/3": "one-third",
	"2/3": "two-thirds"
}, h = ({ children: e, cols: t = "1" }) => /* @__PURE__ */ o("div", {
	className: `cu-column cu-column--${m[t]}`,
	children: e
}), g = Object.assign(h, { Content: f });
h.displayName = "Column";
//#endregion
//#region src/components/Main/Main.tsx
var _ = ({ children: e, hasPadding: t = !0 }) => /* @__PURE__ */ o("main", {
	className: `${t ? "cu-main cu-main--padding" : "cu-main"}`,
	children: /* @__PURE__ */ o("div", {
		className: "alignfull has-global-padding is-layout-constrained entry-content",
		children: e
	})
}), v = ({ children: e, as: t = "section", isGrey: n, maxWidth: r = "aligncontent" }) => /* @__PURE__ */ o(t, {
	className: `cu-section cu-section--${n ? "grey" : "white"} ${r ? p[r] : ""} has-global-padding is-layout-constrained`,
	children: e
}), y = e((e) => /* @__PURE__ */ o("a", { ...e })), b = () => t(y), ee = ({ text: e, href: t, rounded: n = "md", color: r = "grey", ...i }) => {
	let a = b(), s = `cu-badge cu-badge--${r} cu-badge--radius-${n}`;
	return t ? /* @__PURE__ */ o(a, {
		href: t,
		className: s,
		...i,
		children: e
	}) : /* @__PURE__ */ o("span", {
		className: s,
		...i,
		children: e
	});
}, te = (e, t, n, r) => {
	let i = {};
	return e !== void 0 && (i.top = `${e}px`), t !== void 0 && (i.right = `${t}px`), n !== void 0 && (i.bottom = `${n}px`), r !== void 0 && (i.left = `${r}px`), i;
}, ne = ({ children: e, isAbsolute: t = !1, top: n = 0, right: r, bottom: i, left: a = 0 }) => /* @__PURE__ */ o("div", {
	className: "cu-badge-group",
	style: t ? {
		position: "absolute",
		...te(n, r, i, a)
	} : {},
	children: e
}), x = ({ name: e, size: t = "1em", title: n, ...r }) => {
	let i = c[e];
	return i ? /* @__PURE__ */ o(i, {
		width: t,
		height: t,
		focusable: !1,
		...n ? {
			role: "img",
			"aria-label": n
		} : { "aria-hidden": !0 },
		...r,
		children: n ? /* @__PURE__ */ o("title", { children: n }) : null
	}) : null;
}, S = ({ color: e = "red", title: t, icon: n, type: r = "button", isSmall: i, isFull: a, isDisabled: c, ariaLabel: l, ...u }) => {
	let d = c ? "cu-button--disabled" : `cu-button--${e}`;
	return /* @__PURE__ */ s("button", {
		type: r,
		"aria-label": l ?? t,
		className: `cu-button ${d} ${i ? "cu-button--small" : ""} ${a ? "cu-button--full" : ""}`.trim(),
		disabled: c,
		...u,
		children: [n && /* @__PURE__ */ o(x, {
			className: "cu-icon",
			name: n,
			size: i ? 16 : 20
		}), t]
	});
}, re = ({ children: e, align: t = "start" }) => /* @__PURE__ */ o("div", {
	className: `cu-buttongroup cu-buttongroup--justify-${t}`,
	children: e
}), ie = ({ children: e }) => /* @__PURE__ */ o("div", {
	className: "cu-card__body",
	children: e
});
ie.displayName = "Card.Body";
//#endregion
//#region src/components/Card/CardContent.tsx
var ae = ({ children: e }) => /* @__PURE__ */ o("div", {
	className: "cu-card__content",
	children: e
});
ae.displayName = "Card.Content";
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/constants.js
var oe = 365.2425, se = 6048e5, ce = 864e5, le = 6e4, ue = 36e5, de = 1e3, fe = 3600 * 24;
fe * 7, fe * oe / 12 * 3;
var pe = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/constructFrom.js
function C(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && pe in e ? e[pe](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/toDate.js
function w(e, t) {
	return C(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/addDays.js
function T(e, t, n) {
	let r = w(e, n?.in);
	return isNaN(t) ? C(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/defaultOptions.js
var me = {};
function E() {
	return me;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfWeek.js
function D(e, t) {
	let n = E(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = w(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfISOWeek.js
function O(e, t) {
	return D(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getISOWeekYear.js
function he(e, t) {
	let n = w(e, t?.in), r = n.getFullYear(), i = C(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = O(i), o = C(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = O(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function k(e) {
	let t = w(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/normalizeDates.js
function ge(e, ...t) {
	let n = C.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfDay.js
function A(e, t) {
	let n = w(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/differenceInCalendarDays.js
function _e(e, t, n) {
	let [r, i] = ge(n?.in, e, t), a = A(r), o = A(i), s = +a - k(a), c = +o - k(o);
	return Math.round((s - c) / ce);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfISOWeekYear.js
function ve(e, t) {
	let n = he(e, t), r = C(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), O(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isSameDay.js
function ye(e, t, n) {
	let [r, i] = ge(n?.in, e, t);
	return +A(r) == +A(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isDate.js
function be(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isValid.js
function xe(e) {
	return !(!be(e) && typeof e != "number" || isNaN(+w(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/getRoundingMethod.js
function Se(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/differenceInMilliseconds.js
function Ce(e, t) {
	return w(e) - +w(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/differenceInMinutes.js
function we(e, t, n) {
	let r = Ce(e, t) / le;
	return Se(n?.roundingMethod)(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfYear.js
function Te(e, t) {
	let n = w(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Ee = {
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
}, De = (e, t, n) => {
	let r, i = Ee[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function j(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Oe = {
	date: j({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: j({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: j({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, ke = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Ae = (e, t, n, r) => ke[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function M(e) {
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
var je = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: M({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: M({
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
	month: M({
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
	day: M({
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
	dayPeriod: M({
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
function N(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ne(s, (e) => e.test(o)) : Me(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Me(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Ne(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Pe(e) {
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
var Fe = {
	code: "en-US",
	formatDistance: De,
	formatLong: Oe,
	formatRelative: Ae,
	localize: je,
	match: {
		ordinalNumber: Pe({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: N({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: N({
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
		month: N({
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
		day: N({
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
		dayPeriod: N({
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
function Ie(e, t) {
	let n = w(e, t?.in);
	return _e(n, Te(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getISOWeek.js
function Le(e, t) {
	let n = w(e, t?.in), r = O(n) - +ve(n);
	return Math.round(r / se) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getWeekYear.js
function P(e, t) {
	let n = w(e, t?.in), r = n.getFullYear(), i = E(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = C(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = D(o, t), c = C(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = D(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/startOfWeekYear.js
function Re(e, t) {
	let n = E(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = P(e, t), a = C(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), D(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getWeek.js
function ze(e, t) {
	let n = w(e, t?.in), r = D(n, t) - +Re(n, t);
	return Math.round(r / se) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/addLeadingZeros.js
function F(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/format/lightFormatters.js
var I = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return F(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : F(n + 1, 2);
	},
	d(e, t) {
		return F(e.getDate(), t.length);
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
		return F(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return F(e.getHours(), t.length);
	},
	m(e, t) {
		return F(e.getMinutes(), t.length);
	},
	s(e, t) {
		return F(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return F(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, L = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Be = {
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
		return I.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = P(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? F(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : F(a, t.length);
	},
	R: function(e, t) {
		return F(he(e), t.length);
	},
	u: function(e, t) {
		return F(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return F(r, 2);
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
			case "qq": return F(r, 2);
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
			case "MM": return I.M(e, t);
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
			case "LL": return F(r + 1, 2);
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
		let i = ze(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : F(i, t.length);
	},
	I: function(e, t, n) {
		let r = Le(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : F(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : I.d(e, t);
	},
	D: function(e, t, n) {
		let r = Ie(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : F(r, t.length);
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
			case "ee": return F(a, 2);
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
			case "cc": return F(a, t.length);
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
			case "ii": return F(i, t.length);
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
		switch (i = r === 12 ? L.noon : r === 0 ? L.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? L.evening : r >= 12 ? L.afternoon : r >= 4 ? L.morning : L.night, t) {
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
		return I.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : I.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : F(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : F(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : I.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : I.s(e, t);
	},
	S: function(e, t) {
		return I.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return He(r);
			case "XXXX":
			case "XX": return R(r);
			default: return R(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return He(r);
			case "xxxx":
			case "xx": return R(r);
			default: return R(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Ve(r, ":");
			default: return "GMT" + R(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Ve(r, ":");
			default: return "GMT" + R(r, ":");
		}
	},
	t: function(e, t, n) {
		return F(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return F(+e, t.length);
	}
};
function Ve(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + F(a, 2);
}
function He(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + F(Math.abs(e) / 60, 2) : R(e, t);
}
function R(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = F(Math.trunc(r / 60), 2), a = F(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/_lib/format/longFormatters.js
var Ue = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, We = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Ge = {
	p: We,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Ue(e, t);
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
		return a.replace("{{date}}", Ue(r, t)).replace("{{time}}", We(i, t));
	}
}, Ke = /^D+$/, qe = /^Y+$/, Je = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Ye(e) {
	return Ke.test(e);
}
function Xe(e) {
	return qe.test(e);
}
function Ze(e, t, n) {
	let r = Qe(e, t, n);
	if (console.warn(r), Je.includes(e)) throw RangeError(r);
}
function Qe(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/format.js
var $e = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, et = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tt = /^'([^]*?)'?$/, nt = /''/g, rt = /[a-zA-Z]/;
function z(e, t, n) {
	let r = E(), i = n?.locale ?? r.locale ?? Fe, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = w(e, n?.in);
	if (!xe(s)) throw RangeError("Invalid time value");
	let c = t.match(et).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Ge[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match($e).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: it(e)
		};
		if (Be[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(rt)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && Xe(a) || !n?.useAdditionalDayOfYearTokens && Ye(a)) && Ze(a, t, String(e));
		let o = Be[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function it(e) {
	let t = e.match(tt);
	return t ? t[1].replace(nt, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getDate.js
function B(e, t) {
	return w(e, t?.in).getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getDefaultOptions.js
function at() {
	return Object.assign({}, E());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/getISODay.js
function ot(e, t) {
	let n = w(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isAfter.js
function st(e, t) {
	return +w(e) > +w(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/isBefore.js
function ct(e, t) {
	return +w(e) < +w(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/transpose.js
function lt(e, t) {
	let n = ut(t) ? new t(0) : C(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function ut(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/Setter.js
var dt = 10, ft = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, pt = class extends ft {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, mt = class extends ft {
	priority = dt;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => C(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : C(e, lt(e, this.context));
	}
}, V = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new pt(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, ht = class extends V {
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
}, H = {
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
}, U = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/utils.js
function W(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function G(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function K(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * ue + a * le + o * de),
		rest: t.slice(n[0].length)
	};
}
function gt(e) {
	return G(H.anyDigitsSigned, e);
}
function q(e, t) {
	switch (e) {
		case 1: return G(H.singleDigit, t);
		case 2: return G(H.twoDigits, t);
		case 3: return G(H.threeDigits, t);
		case 4: return G(H.fourDigits, t);
		default: return G(RegExp("^\\d{1," + e + "}"), t);
	}
}
function _t(e, t) {
	switch (e) {
		case 1: return G(H.singleDigitSigned, t);
		case 2: return G(H.twoDigitsSigned, t);
		case 3: return G(H.threeDigitsSigned, t);
		case 4: return G(H.fourDigitsSigned, t);
		default: return G(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function J(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function vt(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function yt(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var bt = class extends V {
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
			case "y": return W(q(4, e), r);
			case "yo": return W(n.ordinalNumber(e, { unit: "year" }), r);
			default: return W(q(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = vt(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, xt = class extends V {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return W(q(4, e), r);
			case "Yo": return W(n.ordinalNumber(e, { unit: "year" }), r);
			default: return W(q(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = P(e, r);
		if (n.isTwoDigitYear) {
			let t = vt(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), D(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), D(e, r);
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
}, St = class extends V {
	priority = 130;
	parse(e, t) {
		return _t(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = C(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), O(r);
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
}, Ct = class extends V {
	priority = 130;
	parse(e, t) {
		return _t(t === "u" ? 4 : t.length, e);
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
}, wt = class extends V {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return q(t.length, e);
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
}, Tt = class extends V {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return q(t.length, e);
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
}, Et = class extends V {
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
			case "M": return W(G(H.month, e), r);
			case "MM": return W(q(2, e), r);
			case "Mo": return W(n.ordinalNumber(e, { unit: "month" }), r);
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
}, Dt = class extends V {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return W(G(H.month, e), r);
			case "LL": return W(q(2, e), r);
			case "Lo": return W(n.ordinalNumber(e, { unit: "month" }), r);
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
function Ot(e, t, n) {
	let r = w(e, n?.in), i = ze(r, n) - t;
	return r.setDate(r.getDate() - i * 7), w(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var kt = class extends V {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return G(H.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return q(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return D(Ot(e, n, r), r);
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
function At(e, t, n) {
	let r = w(e, n?.in), i = Le(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var jt = class extends V {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return G(H.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return q(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return O(At(e, n));
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
}, Mt = [
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
], Nt = [
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
], Pt = class extends V {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return G(H.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return q(t.length, e);
		}
	}
	validate(e, t) {
		let n = yt(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Nt[r] : t >= 1 && t <= Mt[r];
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
}, Ft = class extends V {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return G(H.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return q(t.length, e);
		}
	}
	validate(e, t) {
		return yt(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function Y(e, t, n) {
	let r = E(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = w(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return T(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var It = class extends V {
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
		return e = Y(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Lt = class extends V {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return W(q(t.length, e), i);
			case "eo": return W(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Y(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, Rt = class extends V {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return W(q(t.length, e), i);
			case "co": return W(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = Y(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function zt(e, t, n) {
	let r = w(e, n?.in);
	return T(r, t - ot(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.3.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Bt = class extends V {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return q(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return W(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return W(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return W(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return W(n.day(e, {
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
		return e = zt(e, n), e.setHours(0, 0, 0, 0), e;
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
}, Vt = class extends V {
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
		return e.setHours(J(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Ht = class extends V {
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
		return e.setHours(J(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Ut = class extends V {
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
		return e.setHours(J(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, Wt = class extends V {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return G(H.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return q(t.length, e);
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
}, Gt = class extends V {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return G(H.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return q(t.length, e);
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
}, Kt = class extends V {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return G(H.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return q(t.length, e);
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
}, qt = class extends V {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return G(H.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return q(t.length, e);
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
}, Jt = class extends V {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return G(H.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return q(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Yt = class extends V {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return G(H.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return q(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Xt = class extends V {
	priority = 30;
	parse(e, t) {
		return W(q(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, Zt = class extends V {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return K(U.basicOptionalMinutes, e);
			case "XX": return K(U.basic, e);
			case "XXXX": return K(U.basicOptionalSeconds, e);
			case "XXXXX": return K(U.extendedOptionalSeconds, e);
			default: return K(U.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : C(e, e.getTime() - k(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, Qt = class extends V {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return K(U.basicOptionalMinutes, e);
			case "xx": return K(U.basic, e);
			case "xxxx": return K(U.basicOptionalSeconds, e);
			case "xxxxx": return K(U.extendedOptionalSeconds, e);
			default: return K(U.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : C(e, e.getTime() - k(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, $t = class extends V {
	priority = 40;
	parse(e) {
		return gt(e);
	}
	set(e, t, n) {
		return [C(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, en = class extends V {
	priority = 20;
	parse(e) {
		return gt(e);
	}
	set(e, t, n) {
		return [C(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, tn = {
	G: new ht(),
	y: new bt(),
	Y: new xt(),
	R: new St(),
	u: new Ct(),
	Q: new wt(),
	q: new Tt(),
	M: new Et(),
	L: new Dt(),
	w: new kt(),
	I: new jt(),
	d: new Pt(),
	D: new Ft(),
	E: new It(),
	e: new Lt(),
	c: new Rt(),
	i: new Bt(),
	a: new Vt(),
	b: new Ht(),
	B: new Ut(),
	h: new Wt(),
	H: new Gt(),
	K: new Kt(),
	k: new qt(),
	m: new Jt(),
	s: new Yt(),
	S: new Xt(),
	X: new Zt(),
	x: new Qt(),
	t: new $t(),
	T: new en()
}, nn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, an = /^'([^]*?)'?$/, on = /''/g, sn = /\S/, cn = /[a-zA-Z]/;
function X(e, t, n, r) {
	let i = () => C(r?.in || n, NaN), a = at(), o = r?.locale ?? a.locale ?? Fe, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : w(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new mt(r?.in, n)], d = t.match(rn).map((e) => {
		let t = e[0];
		if (t in Ge) {
			let n = Ge[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(nn), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && Xe(n) && Ze(n, t, e), !r?.useAdditionalDayOfYearTokens && Ye(n) && Ze(n, t, e);
		let a = n[0], s = tn[a];
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
			if (a.match(cn)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = ln(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && sn.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = w(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function ln(e) {
	return e.match(an)[1].replace(on, "'");
}
//#endregion
//#region src/components/Card/CardDateThumb.tsx
var un = ({ startDate: e, endDate: t }) => {
	let n = X(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), r = X(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), i = z(n, "MMM"), c = B(n);
	return /* @__PURE__ */ o("div", {
		className: "cu-card__date-thumb",
		"aria-hidden": "true",
		children: ye(n, r) ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("span", {
			className: "cu-card__date-thumb-month",
			children: i
		}), /* @__PURE__ */ o("span", {
			className: "cu-card__date-thumb-day",
			children: c
		})] }) : /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("span", {
			className: "cu-card__date-thumb-month",
			children: "Multi"
		}), /* @__PURE__ */ o("span", {
			className: "cu-card__date-thumb-day",
			children: "Day"
		})] })
	});
};
un.displayName = "Card.DateThumb";
//#endregion
//#region src/components/Card/CardExcerpt.tsx
var dn = ({ text: e, hasMore: t, truncateOnMobile: n }) => /* @__PURE__ */ s("p", {
	className: `cu-card__excerpt${n ? " cu-card__excerpt--truncate-mobile" : ""}`,
	children: [e && e.length > 170 ? `${e.substring(0, 150)}...` : e, t && /* @__PURE__ */ o("span", {
		className: "cu-card__excerpt-more",
		children: " More"
	})]
});
dn.displayName = "Card.Excerpt";
//#endregion
//#region src/components/Card/CardEventMeta.tsx
var Z = 18, fn = (e) => e.replace(" ", "T"), pn = (e) => e.split(" ")[0], mn = (e) => `${e.getHours() % 12 || 12}:${z(e, "mm")} ${z(e, "a")}`, hn = ({ startDateTime: e, endDateTime: t, onCampus: n, onCampusBuilding: r, onCampusRoomNumber: i, eventAddress: c }) => {
	let l = X(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), u = X(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), d = ye(l, u), f = z(l, "MMMM"), p = B(l), m = z(u, "MMMM"), h = B(u), g = mn(l), _ = mn(u), v = n ? `${i} ${r}` : c;
	return /* @__PURE__ */ s("ul", {
		className: "cu-card__meta cu-card__meta--has-icons",
		children: [/* @__PURE__ */ o("li", { children: d ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(x, {
			name: "clock",
			size: Z,
			title: "When"
		}), /* @__PURE__ */ s("time", {
			dateTime: `${fn(e)}/${fn(t)}`,
			children: [
				g,
				" — ",
				_
			]
		})] }) : /* @__PURE__ */ s(a, { children: [
			/* @__PURE__ */ o(x, {
				name: "calendar-days",
				size: Z,
				title: "When"
			}),
			/* @__PURE__ */ s("time", {
				dateTime: pn(e),
				children: [
					f,
					" ",
					p
				]
			}),
			" — ",
			/* @__PURE__ */ s("time", {
				dateTime: pn(t),
				children: [
					m,
					" ",
					h
				]
			})
		] }) }), /* @__PURE__ */ s("li", { children: [/* @__PURE__ */ o(x, {
			name: "location-dot",
			size: Z,
			title: "Where"
		}), v] })]
	});
};
hn.displayName = "Card.EventMeta";
//#endregion
//#region src/components/Card/CardFigure.tsx
var gn = ({ children: e, isRound: t, isSmall: n, isSquare: r, isIcon: i }) => /* @__PURE__ */ o("figure", {
	className: [
		"cu-card__figure",
		t && "cu-card__figure--round",
		n && "cu-card__figure--small",
		r && "cu-card__figure--square",
		i && "cu-card__figure--icon"
	].filter(Boolean).join(" "),
	children: e
});
gn.displayName = "Card.Figure";
//#endregion
//#region src/components/Card/CardFooter.tsx
var _n = ({ children: e }) => /* @__PURE__ */ o("footer", {
	className: "cu-card__footer",
	children: e
});
_n.displayName = "Card.Footer";
//#endregion
//#region src/components/Card/CardHeader.tsx
var vn = ({ title: e = "No title available", link: t, extraText: n, as: r = "h2", date: i, datePrefix: a, readTime: c, position: l = "top" }) => {
	let u = b(), d = r, f = i ? new Date(i).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric"
	}) : null;
	return /* @__PURE__ */ s("header", {
		className: "cu-card__header",
		children: [
			(i && l === "top" || c && l === "top") && /* @__PURE__ */ s("div", {
				className: "cu-card__header-meta",
				children: [i && /* @__PURE__ */ s("time", {
					className: "cu-card__header-time",
					children: [a && `${a} `, f]
				}), c && /* @__PURE__ */ s("p", {
					className: `cu-card__header-readtime${i ? " cu-card__header-readtime--with-divider" : ""}`,
					children: [c, " minute read"]
				})]
			}),
			n && !i && /* @__PURE__ */ o("div", {
				className: "cu-card__header-extra",
				children: /* @__PURE__ */ o("p", { children: n })
			}),
			/* @__PURE__ */ o(d, {
				className: "cu-card__header-title",
				children: t ? /* @__PURE__ */ o(u, {
					href: t,
					children: e
				}) : e
			}),
			(i && l === "bottom" || c && l === "bottom") && /* @__PURE__ */ s("div", {
				className: "cu-card__header-meta",
				children: [i && /* @__PURE__ */ s("time", {
					className: "cu-card__header-time",
					children: [a && `${a} `, f]
				}), c && /* @__PURE__ */ s("p", {
					className: `cu-card__header-readtime${i ? " cu-card__header-readtime--with-divider" : ""}`,
					children: [c, " minute read"]
				})]
			})
		]
	});
};
vn.displayName = "Card.Header";
//#endregion
//#region src/components/Card/CardImageThumb.tsx
var yn = ({ children: e, isSquare: t }) => /* @__PURE__ */ o("figure", {
	className: `cu-card__image-thumb${t ? " cu-card__image-thumb--square" : ""}`,
	children: e
});
yn.displayName = "Card.ImageThumb";
//#endregion
//#region src/components/Card/CardInitials.tsx
var bn = ({ initials: e }) => /* @__PURE__ */ s("figure", {
	className: "cu-card__initials",
	children: [/* @__PURE__ */ o("img", {
		src: "https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",
		alt: "",
		width: 200,
		height: 200
	}), /* @__PURE__ */ o("span", {
		className: "cu-card__initials-label",
		children: e
	})]
});
bn.displayName = "Card.Initials";
//#endregion
//#region src/components/Card/CardPeopleMeta.tsx
var xn = ({ jobTitle: e, children: t, phone: n }) => /* @__PURE__ */ s("ul", {
	className: "cu-card__meta",
	children: [
		e && /* @__PURE__ */ o("li", {
			className: "cu-card__people-meta-job",
			children: e
		}),
		t && /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o("strong", {
			className: "cu-card__people-meta-email",
			children: t
		}) }),
		n && /* @__PURE__ */ o("li", { children: n })
	]
});
xn.displayName = "Card.PeopleMeta";
//#endregion
//#region src/components/Card/CardStats.tsx
var Sn = ({ stat: e, desc: t, reverse: n }) => {
	let r = `cu-card__stats${n ? " cu-card__stats--reverse" : ""}`, i = t && t.length > 80 ? `${t.substring(0, 80)}...` : t, a = e && e.length > 60 ? `${e.substring(0, 60)}...` : e;
	return /* @__PURE__ */ s("div", {
		className: r,
		children: [/* @__PURE__ */ o("p", {
			className: "cu-card__stats-desc",
			children: i
		}), /* @__PURE__ */ o("p", {
			className: "cu-card__stats-stat",
			children: a
		})]
	});
};
Sn.displayName = "Card.Stats";
//#endregion
//#region src/components/Status/types.ts
var Cn = {
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
}, wn = ({ children: e, variant: t = "success", type: n, label: r, context: i = "standalone" }) => {
	let a = n ? Cn[n] : void 0, c = a?.labels?.[t], l = e ?? r ?? c ?? void 0;
	if (n !== void 0 && l === void 0) return null;
	let u = a && l !== void 0 && typeof l != "object" ? `${a.ariaPrefix}: ${l}` : void 0;
	return /* @__PURE__ */ s("span", {
		className: `cu-status cu-status--${t} cu-status--${i}`,
		"aria-label": u,
		children: [/* @__PURE__ */ o("span", {
			className: "cu-status__dot",
			"aria-hidden": "true"
		}), l]
	});
};
wn.displayName = "Status";
//#endregion
//#region src/components/Card/CardStatus.tsx
var Tn = (e) => /* @__PURE__ */ o("div", {
	className: "cu-card__status",
	children: /* @__PURE__ */ o(wn, {
		...e,
		context: "in-card"
	})
});
Tn.displayName = "Card.Status";
//#endregion
//#region src/utils/video/providers.ts
var En = [
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
], Dn = (e) => {
	for (let t of En) if (t.matches(e)) return t;
	return null;
}, On = (e) => En.find((t) => t.name === e) ?? null, kn = En.map((e) => e.name), An = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Mn = async (e, t) => {
	let n = Dn(e);
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
}, Nn = (e, t) => {
	if (!e) return {
		data: null,
		loading: !1,
		error: null
	};
	let n = An.get(e);
	return n ? {
		data: n,
		loading: !1,
		error: null
	} : {
		data: null,
		loading: !t,
		error: null
	};
}, Pn = (e, t) => {
	let r = !!t?.skipNetwork, [a, o] = i(() => Nn(e, r)), [s, c] = i(e), [l, u] = i(r);
	return (e !== s || r !== l) && (c(e), u(r), o(Nn(e, r))), n(() => {
		if (!e || An.has(e) || r) return;
		let t = new AbortController(), n = jn.get(e);
		return n || (n = Mn(e, t.signal), jn.set(e, n), n.finally(() => jn.delete(e)).catch(() => {})), n.then((n) => {
			t.signal.aborted || (An.set(e, n), o({
				data: n,
				loading: !1,
				error: null
			}));
		}).catch((e) => {
			t.signal.aborted || e instanceof Error && e.name === "AbortError" || o({
				data: null,
				loading: !1,
				error: e instanceof Error ? e : Error(String(e))
			});
		}), () => {
			t.abort();
		};
	}, [e, r]), a;
}, Fn = [
	"maxresdefault",
	"sddefault",
	"hqdefault",
	"default"
], In = (e, t) => `https://i.ytimg.com/vi/${e}/${t}.jpg`, Ln = ({ url: e, thumbnail: t, title: n, provider: r, skipNetwork: a, onPlay: c }) => {
	let [l, u] = i(!1), [d, f] = i(0), p = Dn(e), m = r ?? p?.name, h = p?.parseId(e) ?? null, g = p && h ? p.buildEmbedUrl(h) : null, _ = m === "youtube", v = Pn(!t && !_ ? e : void 0, { skipNetwork: a }), y = _ && h ? In(h, Fn[d] ?? "default") : null, b = t ?? y ?? v.data?.thumbnail ?? void 0, ee = _ && h && !t ? Fn.slice(1).map((e) => In(h, e)).join(",") : void 0, te = () => {
		!_ || t || d < Fn.length - 1 && f((e) => e + 1);
	}, ne = (e) => {
		g && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1 || (e.preventDefault(), u(!0), c?.()));
	}, x = [
		"cu-card__figure",
		"cu-card__figure--video",
		l && "cu-card__figure--playing"
	].filter(Boolean).join(" "), S = n ? `Play video: ${n}` : "Play video";
	return /* @__PURE__ */ o("figure", {
		className: x,
		"data-rds-video-card": !0,
		"data-embed-url": g ?? void 0,
		"data-provider": m,
		children: l && g ? /* @__PURE__ */ o("iframe", {
			className: "cu-card__figure-iframe",
			src: g,
			title: n ?? "Video player",
			allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
			allowFullScreen: !0
		}) : /* @__PURE__ */ s("a", {
			className: "cu-card__figure-link",
			href: e,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": S,
			onClick: ne,
			children: [b ? /* @__PURE__ */ o("img", {
				className: "cu-card__figure-poster",
				src: b,
				alt: "",
				loading: "lazy",
				"data-fallbacks": ee,
				onError: te
			}) : v.loading ? /* @__PURE__ */ o("span", {
				className: "cu-card__figure-skeleton",
				"aria-hidden": "true"
			}) : /* @__PURE__ */ o("span", {
				className: "cu-card__figure-placeholder",
				"aria-hidden": "true"
			}), /* @__PURE__ */ o("span", {
				className: "cu-card__figure-play",
				"aria-hidden": "true",
				children: /* @__PURE__ */ s("svg", {
					viewBox: "0 0 68 48",
					focusable: "false",
					children: [/* @__PURE__ */ o("path", {
						className: "cu-card__figure-play-bg",
						d: "M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
					}), /* @__PURE__ */ o("path", {
						className: "cu-card__figure-play-arrow",
						d: "M 45,24 27,14 27,34"
					})]
				})
			})]
		})
	});
};
Ln.displayName = "Card.VideoFigure";
//#endregion
//#region src/utils/motion/useReducedMotion.ts
var Rn = "(prefers-reduced-motion: reduce)", zn = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(Rn).matches, Bn = () => {
	let [e, t] = i(zn);
	return n(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(Rn), n = (e) => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, Vn = 120, Hn = 600, Un = "--cu-card-stagger", Wn = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new Map(), Kn = (e, t) => {
	let n = `${e}|${t}`, r = Gn.get(n);
	if (r) return r;
	let i = new IntersectionObserver((e) => {
		let t = 0;
		e.forEach((e) => {
			let n = Wn.get(e.target);
			if (n) if (e.isIntersecting) {
				let r = Math.min(t * Vn, Hn);
				e.target.style.setProperty(Un, `${r}ms`), n.onVisible(), n.once && i.unobserve(e.target), t++;
			} else n.once || n.onHidden();
		});
	}, {
		threshold: e,
		rootMargin: t
	});
	return Gn.set(n, i), i;
}, qn = (e = {}) => {
	let { threshold: t = 0, rootMargin: a = "0px 0px 200px 0px", once: o = !0, disabled: s = !1 } = e, c = Bn(), l = r(null), [u, d] = i(!1), f = c || s || u;
	return n(() => {
		if (c || s) return;
		let e = l.current;
		if (!e || typeof IntersectionObserver > "u") return;
		let n = Kn(t, a);
		return Wn.set(e, {
			onVisible: () => d(!0),
			onHidden: () => d(!1),
			once: o
		}), n.observe(e), () => {
			n.unobserve(e), Wn.delete(e);
		};
	}, [
		t,
		a,
		o,
		s,
		c
	]), {
		ref: l,
		isVisible: f
	};
}, Jn = ({ children: e, isGrey: t, hasWave: n, isCenter: r, isCenterDesktop: i, noHover: a, leftBorder: c, revealOnScroll: l = !0, className: u }) => {
	let { ref: d, isVisible: f } = qn({ disabled: !l });
	return /* @__PURE__ */ s("div", {
		ref: d,
		className: `${[
			"cu-card",
			t && "cu-card--grey",
			r && "cu-card--center",
			i && "cu-card--center-desktop",
			a && "cu-card--no-hover",
			c && "cu-card--border-left",
			n && t && "cu-card--has-wave"
		].filter(Boolean).join(" ")} ${u || ""}`,
		"data-cu-reveal": l ? "" : void 0,
		"data-revealed": f ? "true" : "false",
		children: [e, n && t && /* @__PURE__ */ s("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			className: "cu-card__wave",
			fill: "none",
			viewBox: "0 0 1280 312",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ o("path", {
				fill: "#fff",
				d: "M26.412 315.608c-.602-.268-6.655-2.412-13.524-4.769a1943.84 1943.84 0 0 1-14.682-5.144l-2.276-.858v-5.358c0-4.876.086-5.358.773-5.09 1.674.643 21.38 5.84 34.646 9.109 14.682 3.59 28.935 6.858 45.936 10.449l9.874 2.089H57.322c-16.4 0-30.31-.16-30.91-.428ZM460.019 315.233c42.974-10.074 75.602-19.88 132.443-39.867 76.16-26.791 152.063-57.709 222.385-90.663 16.7-7.823 21.336-10.074 44.262-21.273 85.004-41.688 134.719-64.193 195.291-88.413 66.55-26.577 145.2-53.584 194.27-66.765C1258.5 5.626 1281.34 0 1282.24 0c.17 0 .34 27.596.34 61.3v61.299l-2.23.375c-84.7 13.718-165.93 35.955-310.736 84.931-46.494 15.753-65.427 22.076-96.166 32.15-9.102 3-24.814 8.198-34.989 11.574-107.543 35.954-153.008 50.422-196.626 62.639l-6.74 1.876-89.126-.054c-78.135-.054-88.782-.161-85.948-.857ZM729.628 312.875c33.229-10.985 69.248-23.523 127.506-44.207 118.705-42.223 164.596-57.709 217.446-73.302 2.62-.75 8.29-2.465 12.67-3.751 56.19-16.772 126.94-33.597 184.17-43.671 5.07-.91 9.66-1.768 10.22-1.875l.94-.161v170.236l-281.28-.054H719.968l9.66-3.215ZM246.864 313.411c-65.041-2.251-143.047-12.11-208.432-26.256-18.375-3.965-41.73-9.538-42.202-10.074-.171-.214-.257-21.38-.214-47.046l.129-46.618 6.654 3.697c57.313 32.043 118.491 56.531 197.699 79.143 40.313 11.521 83.459 18.058 138.669 21.059 15.584.857 65.685.857 81.14 0 33.744-1.876 61.306-4.93 88.396-9.806 6.396-1.126 11.634-1.929 11.722-1.929.255.375-20.48 7.769-30.999 11.038-28.592 8.948-59.288 15.646-91.873 20.147-26.36 3.59-50.015 5.627-78.35 6.698-15.584.59-55.209.59-72.339-.053Z"
			}), /* @__PURE__ */ o("path", {
				fill: "#fff",
				d: "M-3.066 295.067 32.06 304.1v9.033H-3.066v-18.066Z"
			})]
		})]
	});
}, Yn = Object.assign(Jn, {
	Figure: gn,
	VideoFigure: Ln,
	DateThumb: un,
	ImageThumb: yn,
	Initials: bn,
	Header: vn,
	Body: ie,
	Content: ae,
	Footer: _n,
	Excerpt: dn,
	EventMeta: hn,
	PeopleMeta: xn,
	Stats: Sn,
	Status: Tn
});
Jn.displayName = "Card";
//#endregion
//#region src/components/CookieBanner/cookies.ts
var Xn = (e) => {
	if (typeof document > "u") return !1;
	let t = document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`));
	if (!t) return !0;
	let n = t.split("=")[1];
	return new Date(n).getTime() <= Date.now();
}, Zn = (e, t = 365) => {
	if (typeof document > "u") return;
	let n = /* @__PURE__ */ new Date();
	n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3), document.cookie = `${e}=true; expires=${n.toUTCString()}; path=/`;
}, Qn = ({ cookieName: e = "cookieConsent", message: t = "This site uses cookies to offer you a better browsing experience. Find out more on", policyHref: n = "https://carleton.ca/privacy/privacy-notices/website-privacy-notice/", policyLabel: r = "how we use cookies and how you can change your settings.", buttonLabel: a = "Ok, got it!" }) => {
	let c = b(), [l, u] = i(() => Xn(e));
	return l ? /* @__PURE__ */ o("div", {
		className: "cu-cookie-banner",
		role: "dialog",
		"aria-live": "polite",
		"aria-label": "Cookie notice",
		children: /* @__PURE__ */ s("div", {
			className: "cu-cookie-banner__content",
			children: [/* @__PURE__ */ s("p", {
				className: "cu-cookie-banner__message",
				children: [
					t,
					" ",
					/* @__PURE__ */ o(c, {
						href: n,
						className: "cu-cookie-banner__link",
						children: r
					})
				]
			}), /* @__PURE__ */ o("div", {
				className: "cu-cookie-banner__action",
				children: /* @__PURE__ */ o(S, {
					onClick: () => {
						Zn(e), u(!1);
					},
					title: a
				})
			})]
		})
	}) : null;
}, $n = ({ deptName: e, buildingName: t, officeNumber: n, phone: r, email: i, buttons: a }) => {
	let c = b();
	return /* @__PURE__ */ o("aside", {
		className: "cu-department-bar",
		children: /* @__PURE__ */ s("div", {
			className: "cu-department-bar__inner",
			children: [/* @__PURE__ */ s("div", {
				className: "cu-department-bar__info",
				children: [e && /* @__PURE__ */ o("h2", {
					className: "cu-department-bar__name",
					children: e
				}), /* @__PURE__ */ s("ul", {
					className: "cu-department-bar__meta",
					children: [
						t && /* @__PURE__ */ s("li", {
							className: "cu-department-bar__meta-item",
							children: [n && `${n} `, t]
						}),
						r && /* @__PURE__ */ o("li", {
							className: "cu-department-bar__meta-item",
							children: r
						}),
						i && /* @__PURE__ */ o("li", {
							className: "cu-department-bar__meta-item",
							children: /* @__PURE__ */ o(c, {
								href: `mailto:${i}`,
								className: "cu-department-bar__email",
								children: i
							})
						})
					]
				})]
			}), a && a.length > 0 && /* @__PURE__ */ o("div", {
				className: "cu-department-bar__actions",
				children: /* @__PURE__ */ o(re, {
					align: "end",
					children: a.map((e, t) => /* @__PURE__ */ o(S, {
						title: e.title,
						color: t === 0 ? "red" : "dark-grey"
					}, e.id))
				})
			})]
		})
	});
}, er = "https://cdn.carleton.ca/rds/assets", tr = "/_assets", nr = !1, rr = globalThis.process?.env?.NODE_ENV === "development", Q = nr || rr ? tr : er, ir = {
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
}, ar = ({ logoSrc: e = ir.cuLogoColorVerticalOutlined, logoAlt: t = "Logo of Carleton University", privacyHref: n = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: r = "https://carleton.ca/accessibility/", copyrightHref: i = "https://library.carleton.ca/copyright-carleton" }) => {
	let a = b(), c = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ s("footer", {
		className: "cu-footer cu-footer--basic",
		"aria-labelledby": "cu-footer-heading",
		children: [/* @__PURE__ */ o("h2", {
			id: "cu-footer-heading",
			className: "sr-only",
			children: "Footer"
		}), /* @__PURE__ */ s("div", {
			className: "cu-footer__logo-links",
			children: [/* @__PURE__ */ o("img", {
				className: "cu-footer__logo",
				src: e,
				alt: t
			}), /* @__PURE__ */ s("ul", {
				className: "cu-footer__meta",
				children: [
					/* @__PURE__ */ o("li", {
						className: "cu-footer__meta-item",
						children: /* @__PURE__ */ o(a, {
							href: n,
							className: "cu-footer__meta-link",
							children: "Privacy Policy"
						})
					}),
					/* @__PURE__ */ o("li", {
						className: "cu-footer__meta-item",
						children: /* @__PURE__ */ o(a, {
							href: r,
							className: "cu-footer__meta-link",
							children: "Accessibility"
						})
					}),
					/* @__PURE__ */ o("li", {
						className: "cu-footer__meta-item",
						children: /* @__PURE__ */ s(a, {
							href: i,
							className: "cu-footer__meta-link",
							children: ["© Copyright ", c]
						})
					})
				]
			})]
		})]
	});
}, or = "Carleton University acknowledges the location of its campus on the traditional, unceded territories of the Algonquin Anishinàbeg nation", sr = {
	phone: "613-520-2600",
	phoneHref: "tel:+1-613-520-2600",
	contactHref: "https://carleton.ca/about/contact/",
	address: "1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada"
}, cr = [
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
], lr = [
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
			src: ir.ravensLogo,
			alt: "Carleton Ravens",
			href: "https://goravens.carleton.ca",
			width: 64
		}
	}]
], ur = {
	standard: lr,
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
	futureFunder: lr
}, dr = ({ type: e = "standard", acknowledgment: t = or, contact: n = sr, social: r = cr, logoSrc: i = ir.cuLogoColorVerticalOutlined, logoAlt: a = "Logo of Carleton University", privacyHref: c = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: l = "https://carleton.ca/accessibility/", copyrightHref: u = "https://library.carleton.ca/copyright-carleton" }) => {
	let d = b(), f = ur[e], p = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ s("footer", {
		className: `cu-footer cu-footer--${e}`,
		"aria-labelledby": "cu-footer-heading",
		children: [/* @__PURE__ */ o("h2", {
			id: "cu-footer-heading",
			className: "sr-only",
			children: "Footer"
		}), /* @__PURE__ */ s("div", {
			className: "cu-footer__inner",
			children: [
				/* @__PURE__ */ o("div", {
					className: "cu-footer__acknowledgment",
					children: /* @__PURE__ */ o("p", { children: t })
				}),
				/* @__PURE__ */ o("div", {
					className: "cu-footer__columns",
					children: f.map((e, t) => /* @__PURE__ */ o("div", {
						className: "cu-footer__column",
						children: e.map((e, t) => /* @__PURE__ */ s("div", {
							className: "cu-footer__column-group",
							children: [
								/* @__PURE__ */ o("h3", {
									className: "cu-footer__column-heading",
									children: e.heading
								}),
								/* @__PURE__ */ o("ul", {
									className: "cu-footer__column-list",
									children: e.links.map((e, t) => /* @__PURE__ */ o("li", {
										className: "cu-footer__column-item",
										children: /* @__PURE__ */ o(d, {
											href: e.href,
											className: "cu-footer__column-link",
											children: e.name
										})
									}, t))
								}),
								e.media && (e.media.href ? /* @__PURE__ */ o(d, {
									href: e.media.href,
									className: "cu-footer__column-media",
									style: { width: e.media.width },
									children: /* @__PURE__ */ o("img", {
										src: e.media.src,
										alt: e.media.alt
									})
								}) : /* @__PURE__ */ o("img", {
									className: "cu-footer__column-media",
									src: e.media.src,
									alt: e.media.alt,
									style: { width: e.media.width }
								}))
							]
						}, t))
					}, t))
				}),
				/* @__PURE__ */ s("div", {
					className: "cu-footer__contact",
					children: [
						/* @__PURE__ */ s("p", {
							className: "cu-footer__contact-lead",
							children: [
								"Contact us by",
								" ",
								n.phoneHref && /* @__PURE__ */ o(d, {
									href: n.phoneHref,
									className: "cu-footer__contact-link",
									children: "phone"
								}),
								n.phoneHref && n.contactHref && " or ",
								n.contactHref && /* @__PURE__ */ o(d, {
									href: n.contactHref,
									className: "cu-footer__contact-link",
									children: "email"
								})
							]
						}),
						/* @__PURE__ */ o("p", {
							className: "cu-footer__contact-address",
							children: n.address
						}),
						/* @__PURE__ */ o("ul", {
							className: "cu-footer__social",
							children: r.map((e) => /* @__PURE__ */ o("li", {
								className: "cu-footer__social-item",
								children: /* @__PURE__ */ s(d, {
									href: e.href,
									className: "cu-footer__social-link",
									children: [/* @__PURE__ */ o("span", {
										className: "sr-only",
										children: e.name
									}), /* @__PURE__ */ o(x, {
										name: e.icon,
										size: 24
									})]
								})
							}, e.name))
						})
					]
				}),
				/* @__PURE__ */ s("div", {
					className: "cu-footer__logo-links",
					children: [/* @__PURE__ */ o("img", {
						className: "cu-footer__logo",
						src: i,
						alt: a
					}), /* @__PURE__ */ s("ul", {
						className: "cu-footer__meta",
						children: [
							/* @__PURE__ */ o("li", {
								className: "cu-footer__meta-item",
								children: /* @__PURE__ */ o(d, {
									href: c,
									className: "cu-footer__meta-link",
									children: "Privacy Policy"
								})
							}),
							/* @__PURE__ */ o("li", {
								className: "cu-footer__meta-item",
								children: /* @__PURE__ */ o(d, {
									href: l,
									className: "cu-footer__meta-link",
									children: "Accessibility"
								})
							}),
							/* @__PURE__ */ o("li", {
								className: "cu-footer__meta-item",
								children: /* @__PURE__ */ s(d, {
									href: u,
									className: "cu-footer__meta-link",
									children: ["© Copyright ", p]
								})
							})
						]
					})]
				})
			]
		})]
	});
}, fr = ({ component: e, children: t }) => /* @__PURE__ */ o(y.Provider, {
	value: e,
	children: t
}), $ = (e) => z(e, "h:mm a"), pr = (e, t, n = /* @__PURE__ */ new Date()) => {
	let r = new Date(n);
	r.setHours(0, 0, 0, 0);
	let i = X(e, "HH:mm", r), a = X(t, "HH:mm", r);
	return ct(n, i) ? {
		variant: "error",
		label: `Opens at ${$(i)}`
	} : st(n, a) || n.getTime() === a.getTime() ? {
		variant: "error",
		label: `Opens tomorrow at ${$(T(i, 1))}`
	} : we(a, n) <= 60 ? {
		variant: "warning",
		label: `Closes at ${$(a)}`
	} : {
		variant: "success",
		label: `Open until ${$(a)}`
	};
};
//#endregion
export { l as Article, u as Aside, ee as Badge, ne as BadgeGroup, d as Body, S as Button, re as ButtonGroup, Yn as Card, g as Column, Qn as CookieBanner, $n as DepartmentBar, ar as Footer, dr as FooterStandard, x as Icon, fr as LinkProvider, _ as Main, kn as PROVIDER_NAMES, v as Section, wn as Status, Cn as defaultStatusTypes, Dn as detectProvider, pr as formatHoursStatus, On as getProvider, Pn as useOEmbed, Bn as useReducedMotion, qn as useScrollReveal };
