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
}, ee = {
	start: "start",
	end: "end",
	center: "center"
}, S = ({ children: e, cols: t = "1" }) => /* @__PURE__ */ f("div", {
	className: `cu-column cu-column--${x[t]}`,
	children: e
}), C = Object.assign(S, { Content: y });
S.displayName = "Column";
//#endregion
//#region src/components/Main/Main.tsx
var te = ({ children: e, as: t = "main", hasPadding: n = !0, className: r = "" }) => /* @__PURE__ */ f(t, {
	className: `${n ? "cu-main cu-main--padding" : "cu-main"} ${r}`,
	children: /* @__PURE__ */ f("div", {
		className: "alignfull has-global-padding is-layout-constrained entry-content",
		children: e
	})
}), ne = ({ children: e, as: t = "section", isGrey: n, maxWidth: r = "aligncontent", contentWidth: i }) => /* @__PURE__ */ f(t, {
	className: `cu-section cu-section--${n ? "grey has-global-padding" : "white"} ${r} is-layout-constrained`,
	children: i === void 0 ? e : /* @__PURE__ */ f("div", {
		className: `has-global-padding ${i ? "alignwide" : "aligncontent"}`,
		children: e
	})
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
}, T = () => /* @__PURE__ */ p("svg", {
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
}), re = () => /* @__PURE__ */ f("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false",
	children: /* @__PURE__ */ f("path", { d: "M2.5 1.5 L12.5 7 L2.5 12.5 Z" })
}), ie = ({ src: e }) => {
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
			children: f(n ? T : re, {})
		})]
	});
};
ie.displayName = "FullBanner.Video";
//#endregion
//#region src/components/FullBanner/FullBanner.tsx
var ae = {
	lg: "cu-fullbanner__inner--lg",
	xl: "cu-fullbanner__inner--xl"
}, oe = ({ children: e, title: t, content: n, headerType: r = "h2", image: i, imageAlt: a = "", media: o, opacity: s = 70, focalPointX: c = 50, focalPointY: l = 50, maxWidth: u = "alignwide", contentBox: d = "xl", justify: m = "start" }) => {
	let h = ["cu-fullbanner", b[u]].filter(Boolean).join(" "), g = { "--cu-fullbanner-overlay": `rgba(0, 0, 0, ${s / 100})` }, _ = { objectPosition: `${c}% ${l}%` };
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
				className: `cu-fullbanner__inner ${ae[d]} cu-fullbanner__inner--${ee[m]}`,
				children: /* @__PURE__ */ p("div", {
					className: "cu-fullbanner__box",
					children: [/* @__PURE__ */ f(w, {
						header: t,
						as: r,
						size: r === "h1" ? "lg" : "md",
						content: n,
						isWhite: !0,
						noUnderline: !0
					}), e]
				})
			})
		})]
	});
};
oe.displayName = "FullBanner";
var se = Object.assign(oe, { Video: ie }), ce = ({ children: e, image: t, opacity: n = 85, focalPointX: r = 50, focalPointY: i = 50, maxWidth: a = "aligncontent", contentWidth: o }) => /* @__PURE__ */ p("section", {
	className: ["cu-imagecover", a].filter(Boolean).join(" "),
	style: {
		...t && { "--cu-imagecover-bg": `url(${t})` },
		"--cu-imagecover-focal-x": `${r}%`,
		"--cu-imagecover-focal-y": `${i}%`,
		"--cu-imagecover-overlay": `rgba(255, 255, 255, ${n / 100})`
	},
	children: [
		/* @__PURE__ */ f("div", {
			className: "cu-imagecover__wave",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ f("div", {
			className: "cu-imagecover__overlay",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ f("div", {
			className: "cu-imagecover__content is-layout-constrained has-global-padding",
			children: o === void 0 ? e : /* @__PURE__ */ f("div", {
				className: `cu-imagecover__inner ${o ? "alignwide" : "aligncontent"}`,
				children: e
			})
		})
	]
}), le = ({ children: e, cite: t, graphic: n = "border", isCenter: r }) => /* @__PURE__ */ p("blockquote", {
	className: [
		"cu-quote",
		`cu-quote--${n}`,
		r ? "cu-quote--center" : void 0
	].filter(Boolean).join(" "),
	children: [e, t && /* @__PURE__ */ f("cite", {
		className: "cu-quote__cite",
		children: t
	})]
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
}), ue = ({ buttonText: e = "Subscribe" }) => /* @__PURE__ */ p("div", {
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
ue.displayName = "WideImage.Signup";
//#endregion
//#region src/components/WideImage/WideImage.tsx
var de = ({ children: e, title: t, content: n, image: r, headerType: i = "h2", opacity: a = 70, focalPointX: o = 50, focalPointY: s = 50, isType: c = "light", maxWidth: l = "aligncontent" }) => /* @__PURE__ */ f("div", {
	className: [
		"cu-wideimage",
		`cu-wideimage--${c}`,
		b[l]
	].filter(Boolean).join(" "),
	style: c === "image" && r ? {
		backgroundImage: `url(${r})`,
		backgroundPosition: `${o}% ${s}%`,
		"--cu-wideimage-overlay": `rgba(0, 0, 0, ${a / 100})`
	} : {},
	children: /* @__PURE__ */ p("div", {
		className: "cu-wideimage__content",
		children: [/* @__PURE__ */ f(w, {
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
de.displayName = "WideImage";
var fe = Object.assign(de, { Signup: ue }), pe = ({ quote: e, cite: t, imageUrl: n, imageZoom: r = 0, focalPointX: i = 50, focalPointY: a = 50, reverse: o = !1 }) => /* @__PURE__ */ p("div", {
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
		children: /* @__PURE__ */ f(le, {
			cite: t,
			children: /* @__PURE__ */ f("p", { children: e })
		})
	})]
}), me = ({ title: e, as: t = "h2", children: n, date: r }) => /* @__PURE__ */ p("div", {
	className: "cu-timeline__item",
	children: [/* @__PURE__ */ f("div", {
		className: "cu-timeline__date",
		children: /* @__PURE__ */ f("p", { children: r })
	}), /* @__PURE__ */ p("div", {
		className: "cu-timeline__content",
		children: [/* @__PURE__ */ f(w, {
			as: t,
			header: e,
			size: "sm",
			noUnderline: !0
		}), n]
	})]
}), he = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-timeline",
	children: e
}), ge = Object.assign(he, { Item: me });
he.displayName = "Timeline";
//#endregion
//#region src/components/StackedList/StackedList.tsx
var _e = ({ children: e, as: t = "ul", cols: n = "2", header: r, noShadow: i = !1 }) => /* @__PURE__ */ p("div", {
	className: ["cu-stackedlist", i ? "cu-stackedlist--no-shadow" : void 0].filter(Boolean).join(" "),
	children: [r && /* @__PURE__ */ f("h2", {
		className: "cu-stackedlist__header",
		children: r
	}), /* @__PURE__ */ f(t, {
		className: `cu-stackedlist__list cu-stackedlist--cols-${n}`,
		children: e
	})]
}), ve = ({ children: e, title: t, as: n = "h2", justify: r = "center", maxWidth: i = "aligncontent" }) => /* @__PURE__ */ p("div", {
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
}), ye = ({ children: e, caption: t, size: n = "full", align: r = "none" }) => {
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
}, be = (e, t) => e && t ? `${e[0]}${t[0]}` : e ? e[0] : t ? t[0] : "CU", xe = ({ firstName: e, lastName: t, src: n, alt: r, size: i = "md", isCircle: a = !1, onClick: o }) => {
	let s = t ? `${e} ${t}` : e, c = `cu-avatar cu-avatar--${i} ${a ? "cu-avatar--circle" : "cu-avatar--square"}`, l = n ? /* @__PURE__ */ f("img", {
		className: "cu-avatar__image",
		src: n,
		alt: "",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ f("span", {
		className: "cu-avatar__initials",
		"aria-hidden": "true",
		children: be(e, t)
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
}, Se = n((e) => /* @__PURE__ */ f("a", { ...e })), O = () => a(Se), Ce = ({ text: e, href: t, rounded: n = "md", color: r = "grey", ...i }) => {
	let a = O(), o = `cu-badge cu-badge--${r} cu-badge--radius-${n}`;
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
}, we = (e, t, n, r) => {
	let i = {};
	return e !== void 0 && (i.top = `${e}px`), t !== void 0 && (i.right = `${t}px`), n !== void 0 && (i.bottom = `${n}px`), r !== void 0 && (i.left = `${r}px`), i;
}, Te = ({ children: e, isAbsolute: t = !1, top: n = 0, right: r, bottom: i, left: a = 0 }) => /* @__PURE__ */ f("div", {
	className: "cu-badge-group",
	style: t ? {
		position: "absolute",
		...we(n, r, i, a)
	} : {},
	children: e
}), Ee = ({ children: e, align: t = "start" }) => /* @__PURE__ */ f("div", {
	className: `cu-buttongroup cu-buttongroup--justify-${t}`,
	children: e
}), De = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__body",
	children: e
});
De.displayName = "Card.Body";
//#endregion
//#region src/components/Card/CardContent.tsx
var Oe = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__content",
	children: e
});
Oe.displayName = "Card.Content";
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js
var ke = 365.2425, Ae = 6048e5, je = 864e5, Me = 6e4, Ne = 36e5, Pe = 1e3, Fe = 3600 * 24;
Fe * 7, Fe * ke / 12 * 3;
var Ie = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function k(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Ie in e ? e[Ie](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function A(e, t) {
	return k(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addDays.js
function Le(e, t, n) {
	let r = A(e, n?.in);
	return isNaN(t) ? k(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var Re = {};
function j() {
	return Re;
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
function ze(e, t) {
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
function Be(e, ...t) {
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
function Ve(e, t, n) {
	let [r, i] = Be(n?.in, e, t), a = F(r), o = F(i), s = +a - P(a), c = +o - P(o);
	return Math.round((s - c) / je);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function He(e, t) {
	let n = ze(e, t), r = k(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameDay.js
function Ue(e, t, n) {
	let [r, i] = Be(n?.in, e, t);
	return +F(r) == +F(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function We(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function Ge(e) {
	return !(!We(e) && typeof e != "number" || isNaN(+A(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js
function Ke(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInMilliseconds.js
function qe(e, t) {
	return A(e) - +A(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInMinutes.js
function Je(e, t, n) {
	let r = qe(e, t) / Me;
	return Ke(n?.roundingMethod)(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function Ye(e, t) {
	let n = A(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Xe = {
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
}, Ze = (e, t, n) => {
	let r, i = Xe[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Qe(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var $e = {
	date: Qe({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Qe({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Qe({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, et = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, tt = (e, t, n, r) => et[e];
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
var nt = {
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
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? it(s, (e) => e.test(o)) : rt(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function rt(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function it(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function at(e) {
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
var ot = {
	code: "en-US",
	formatDistance: Ze,
	formatLong: $e,
	formatRelative: tt,
	localize: nt,
	match: {
		ordinalNumber: at({
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
function st(e, t) {
	let n = A(e, t?.in);
	return Ve(n, Ye(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function ct(e, t) {
	let n = A(e, t?.in), r = N(n) - +He(n);
	return Math.round(r / Ae) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function lt(e, t) {
	let n = A(e, t?.in), r = n.getFullYear(), i = j(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = k(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = M(o, t), c = k(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = M(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function ut(e, t) {
	let n = j(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = lt(e, t), a = k(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), M(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function dt(e, t) {
	let n = A(e, t?.in), r = M(n, t) - +ut(n, t);
	return Math.round(r / Ae) + 1;
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
}, ft = {
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
		let i = lt(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? R(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : R(a, t.length);
	},
	R: function(e, t) {
		return R(ze(e), t.length);
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
		let i = dt(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : R(i, t.length);
	},
	I: function(e, t, n) {
		let r = ct(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : R(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : z.d(e, t);
	},
	D: function(e, t, n) {
		let r = st(e);
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
			case "X": return mt(r);
			case "XXXX":
			case "XX": return V(r);
			default: return V(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return mt(r);
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
			case "OOO": return "GMT" + pt(r, ":");
			default: return "GMT" + V(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + pt(r, ":");
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
function pt(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + R(a, 2);
}
function mt(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + R(Math.abs(e) / 60, 2) : V(e, t);
}
function V(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = R(Math.trunc(r / 60), 2), a = R(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var ht = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, gt = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, _t = {
	p: gt,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return ht(e, t);
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
		return a.replace("{{date}}", ht(r, t)).replace("{{time}}", gt(i, t));
	}
}, vt = /^D+$/, yt = /^Y+$/, bt = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function xt(e) {
	return vt.test(e);
}
function St(e) {
	return yt.test(e);
}
function Ct(e, t, n) {
	let r = wt(e, t, n);
	if (console.warn(r), bt.includes(e)) throw RangeError(r);
}
function wt(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var Tt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Et = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Dt = /^'([^]*?)'?$/, Ot = /''/g, kt = /[a-zA-Z]/;
function H(e, t, n) {
	let r = j(), i = n?.locale ?? r.locale ?? ot, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = A(e, n?.in);
	if (!Ge(s)) throw RangeError("Invalid time value");
	let c = t.match(Et).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = _t[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Tt).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: At(e)
		};
		if (ft[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(kt)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && St(a) || !n?.useAdditionalDayOfYearTokens && xt(a)) && Ct(a, t, String(e));
		let o = ft[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function At(e) {
	let t = e.match(Dt);
	return t ? t[1].replace(Ot, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDate.js
function jt(e, t) {
	return A(e, t?.in).getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDefaultOptions.js
function Mt() {
	return Object.assign({}, j());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISODay.js
function Nt(e, t) {
	let n = A(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isAfter.js
function Pt(e, t) {
	return +A(e) > +A(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isBefore.js
function Ft(e, t) {
	return +A(e) < +A(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/transpose.js
function It(e, t) {
	let n = Lt(t) ? new t(0) : k(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Lt(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/Setter.js
var Rt = 10, zt = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Bt = class extends zt {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Vt = class extends zt {
	priority = Rt;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => k(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : k(e, It(e, this.context));
	}
}, U = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Bt(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Ht = class extends U {
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
		value: r * (i * Ne + a * Me + o * Pe),
		rest: t.slice(n[0].length)
	};
}
function Ut(e) {
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
function Wt(e, t) {
	switch (e) {
		case 1: return q(W.singleDigitSigned, t);
		case 2: return q(W.twoDigitsSigned, t);
		case 3: return q(W.threeDigitsSigned, t);
		case 4: return q(W.fourDigitsSigned, t);
		default: return q(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Gt(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Kt(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function qt(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var Jt = class extends U {
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
			let t = Kt(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Yt = class extends U {
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
		let i = lt(e, r);
		if (n.isTwoDigitYear) {
			let t = Kt(n.year, i);
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
}, Xt = class extends U {
	priority = 130;
	parse(e, t) {
		return Wt(t === "R" ? 4 : t.length, e);
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
}, Zt = class extends U {
	priority = 130;
	parse(e, t) {
		return Wt(t === "u" ? 4 : t.length, e);
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
}, Qt = class extends U {
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
}, $t = class extends U {
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
}, en = class extends U {
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
}, tn = class extends U {
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
function nn(e, t, n) {
	let r = A(e, n?.in), i = dt(r, n) - t;
	return r.setDate(r.getDate() - i * 7), A(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var rn = class extends U {
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
		return M(nn(e, n, r), r);
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
function an(e, t, n) {
	let r = A(e, n?.in), i = ct(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var on = class extends U {
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
		return N(an(e, n));
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
}, sn = [
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
], cn = [
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
], ln = class extends U {
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
		let n = qt(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= cn[r] : t >= 1 && t <= sn[r];
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
}, un = class extends U {
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
		return qt(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function dn(e, t, n) {
	let r = j(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = A(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return Le(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var fn = class extends U {
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
		return e = dn(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, pn = class extends U {
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
		return e = dn(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, mn = class extends U {
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
		return e = dn(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function hn(e, t, n) {
	let r = A(e, n?.in);
	return Le(r, t - Nt(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var gn = class extends U {
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
		return e = hn(e, n), e.setHours(0, 0, 0, 0), e;
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
}, _n = class extends U {
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
		return e.setHours(Gt(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, vn = class extends U {
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
		return e.setHours(Gt(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, yn = class extends U {
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
		return e.setHours(Gt(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, bn = class extends U {
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
}, xn = class extends U {
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
}, Sn = class extends U {
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
}, Cn = class extends U {
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
}, wn = class extends U {
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
}, Tn = class extends U {
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
}, En = class extends U {
	priority = 30;
	parse(e, t) {
		return K(Y(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, Dn = class extends U {
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
}, On = class extends U {
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
}, kn = class extends U {
	priority = 40;
	parse(e) {
		return Ut(e);
	}
	set(e, t, n) {
		return [k(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, An = class extends U {
	priority = 20;
	parse(e) {
		return Ut(e);
	}
	set(e, t, n) {
		return [k(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, jn = {
	G: new Ht(),
	y: new Jt(),
	Y: new Yt(),
	R: new Xt(),
	u: new Zt(),
	Q: new Qt(),
	q: new $t(),
	M: new en(),
	L: new tn(),
	w: new rn(),
	I: new on(),
	d: new ln(),
	D: new un(),
	E: new fn(),
	e: new pn(),
	c: new mn(),
	i: new gn(),
	a: new _n(),
	b: new vn(),
	B: new yn(),
	h: new bn(),
	H: new xn(),
	K: new Sn(),
	k: new Cn(),
	m: new wn(),
	s: new Tn(),
	S: new En(),
	X: new Dn(),
	x: new On(),
	t: new kn(),
	T: new An()
}, Mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Nn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Pn = /^'([^]*?)'?$/, Fn = /''/g, In = /\S/, Ln = /[a-zA-Z]/;
function X(e, t, n, r) {
	let i = () => k(r?.in || n, NaN), a = Mt(), o = r?.locale ?? a.locale ?? ot, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : A(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Vt(r?.in, n)], d = t.match(Nn).map((e) => {
		let t = e[0];
		if (t in _t) {
			let n = _t[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(Mn), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && St(n) && Ct(n, t, e), !r?.useAdditionalDayOfYearTokens && xt(n) && Ct(n, t, e);
		let a = n[0], s = jn[a];
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
			if (a.match(Ln)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Rn(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && In.test(e)) return i();
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
function Rn(e) {
	return e.match(Pn)[1].replace(Fn, "'");
}
//#endregion
//#region src/components/Card/CardDateThumb.tsx
var zn = ({ startDate: e, endDate: t }) => {
	let n = X(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), r = X(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), i = H(n, "MMM"), a = jt(n);
	return /* @__PURE__ */ f("div", {
		className: "cu-card__date-thumb",
		"aria-hidden": "true",
		children: Ue(n, r) ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
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
zn.displayName = "Card.DateThumb";
//#endregion
//#region src/components/Card/CardExcerpt.tsx
var Bn = ({ text: e, hasMore: t, truncateOnMobile: n }) => /* @__PURE__ */ p("p", {
	className: `cu-card__excerpt${n ? " cu-card__excerpt--truncate-mobile" : ""}`,
	children: [e && e.length > 170 ? `${e.substring(0, 150)}...` : e, t && /* @__PURE__ */ f("span", {
		className: "cu-card__excerpt-more",
		children: " More"
	})]
});
Bn.displayName = "Card.Excerpt";
//#endregion
//#region src/components/Card/CardEventMeta.tsx
var Vn = 18, Hn = (e) => e.replace(" ", "T"), Un = (e) => e.split(" ")[0], Wn = (e) => `${e.getHours() % 12 || 12}:${H(e, "mm")} ${H(e, "a")}`, Gn = ({ startDateTime: e, endDateTime: t, onCampus: n, onCampusBuilding: r, onCampusRoomNumber: i, eventAddress: a }) => {
	let o = X(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), s = X(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), c = Ue(o, s), l = H(o, "MMMM"), u = jt(o), m = H(s, "MMMM"), h = jt(s), g = Wn(o), _ = Wn(s), v = n ? `${i} ${r}` : a;
	return /* @__PURE__ */ p("ul", {
		className: "cu-card__meta cu-card__meta--has-icons",
		children: [/* @__PURE__ */ f("li", { children: c ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(E, {
			name: "clock",
			size: Vn,
			title: "When"
		}), /* @__PURE__ */ p("time", {
			dateTime: `${Hn(e)}/${Hn(t)}`,
			children: [
				g,
				" — ",
				_
			]
		})] }) : /* @__PURE__ */ p(d, { children: [
			/* @__PURE__ */ f(E, {
				name: "calendar-days",
				size: Vn,
				title: "When"
			}),
			/* @__PURE__ */ p("time", {
				dateTime: Un(e),
				children: [
					l,
					" ",
					u
				]
			}),
			" — ",
			/* @__PURE__ */ p("time", {
				dateTime: Un(t),
				children: [
					m,
					" ",
					h
				]
			})
		] }) }), /* @__PURE__ */ p("li", { children: [/* @__PURE__ */ f(E, {
			name: "location-dot",
			size: Vn,
			title: "Where"
		}), v] })]
	});
};
Gn.displayName = "Card.EventMeta";
//#endregion
//#region src/components/Card/CardFigure.tsx
var Kn = ({ children: e, isRound: t, isSmall: n, isSquare: r, isIcon: i }) => /* @__PURE__ */ f("figure", {
	className: [
		"cu-card__figure",
		t && "cu-card__figure--round",
		n && "cu-card__figure--small",
		r && "cu-card__figure--square",
		i && "cu-card__figure--icon"
	].filter(Boolean).join(" "),
	children: e
});
Kn.displayName = "Card.Figure";
//#endregion
//#region src/components/Card/CardFooter.tsx
var qn = ({ children: e }) => /* @__PURE__ */ f("footer", {
	className: "cu-card__footer",
	children: e
});
qn.displayName = "Card.Footer";
//#endregion
//#region src/components/Card/CardHeader.tsx
var Jn = ({ title: e = "No title available", link: t, extraText: n, as: r = "h2", date: i, datePrefix: a, readTime: o, position: s = "bottom" }) => {
	let c = O(), l = r, u = i ? new Date(i).toLocaleString("en-US", {
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
Jn.displayName = "Card.Header";
//#endregion
//#region src/components/Card/CardImageThumb.tsx
var Yn = ({ children: e, isSquare: t }) => /* @__PURE__ */ f("figure", {
	className: `cu-card__image-thumb${t ? " cu-card__image-thumb--square" : ""}`,
	children: e
});
Yn.displayName = "Card.ImageThumb";
//#endregion
//#region src/components/Card/CardInitials.tsx
var Xn = ({ initials: e }) => /* @__PURE__ */ p("figure", {
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
Xn.displayName = "Card.Initials";
//#endregion
//#region src/components/Card/CardPeopleMeta.tsx
var Zn = ({ jobTitle: e, children: t, phone: n }) => /* @__PURE__ */ p("ul", {
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
Zn.displayName = "Card.PeopleMeta";
//#endregion
//#region src/components/Card/CardStats.tsx
var Qn = ({ stat: e, desc: t, reverse: n }) => {
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
Qn.displayName = "Card.Stats";
//#endregion
//#region src/components/Status/types.ts
var $n = {
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
}, er = ({ children: e, variant: t = "success", type: n, label: r, context: i = "standalone" }) => {
	let a = n ? $n[n] : void 0, o = a?.labels?.[t], s = e ?? r ?? o ?? void 0;
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
er.displayName = "Status";
//#endregion
//#region src/components/Card/CardStatus.tsx
var tr = (e) => /* @__PURE__ */ f("div", {
	className: "cu-card__status",
	children: /* @__PURE__ */ f(er, {
		...e,
		context: "in-card"
	})
});
tr.displayName = "Card.Status";
//#endregion
//#region src/utils/video/providers.ts
var nr = [
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
], rr = (e) => {
	for (let t of nr) if (t.matches(e)) return t;
	return null;
}, ir = (e) => nr.find((t) => t.name === e) ?? null, ar = nr.map((e) => e.name), or = /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ new Map(), cr = async (e, t) => {
	let n = rr(e);
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
}, lr = (e, t) => {
	if (!e) return {
		data: null,
		loading: !1,
		error: null
	};
	let n = or.get(e);
	return n ? {
		data: n,
		loading: !1,
		error: null
	} : {
		data: null,
		loading: !t,
		error: null
	};
}, ur = (e, t) => {
	let n = !!t?.skipNetwork, [r, i] = u(() => lr(e, n)), [a, s] = u(e), [c, l] = u(n);
	return (e !== a || n !== c) && (s(e), l(n), i(lr(e, n))), o(() => {
		if (!e || or.has(e) || n) return;
		let t = new AbortController(), r = sr.get(e);
		return r || (r = cr(e, t.signal), sr.set(e, r), r.finally(() => sr.delete(e)).catch(() => {})), r.then((n) => {
			t.signal.aborted || (or.set(e, n), i({
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
}, dr = [
	"maxresdefault",
	"sddefault",
	"hqdefault",
	"default"
], fr = (e, t) => `https://i.ytimg.com/vi/${e}/${t}.jpg`, pr = ({ url: e, thumbnail: t, title: n, provider: r, skipNetwork: i, onPlay: a }) => {
	let [o, s] = u(!1), [c, l] = u(0), d = rr(e), m = r ?? d?.name, h = d?.parseId(e) ?? null, g = d && h ? d.buildEmbedUrl(h) : null, _ = m === "youtube", v = ur(!t && !_ ? e : void 0, { skipNetwork: i }), y = _ && h ? fr(h, dr[c] ?? "default") : null, b = t ?? y ?? v.data?.thumbnail ?? void 0, x = _ && h && !t ? dr.slice(1).map((e) => fr(h, e)).join(",") : void 0, ee = () => {
		!_ || t || c < dr.length - 1 && l((e) => e + 1);
	}, S = (e) => {
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
			onClick: S,
			children: [b ? /* @__PURE__ */ f("img", {
				className: "cu-card__figure-poster",
				src: b,
				alt: "",
				loading: "lazy",
				"data-fallbacks": x,
				onError: ee
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
pr.displayName = "Card.VideoFigure";
//#endregion
//#region src/utils/motion/useReducedMotion.ts
var mr = "(prefers-reduced-motion: reduce)", hr = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(mr).matches, gr = () => {
	let [e, t] = u(hr);
	return o(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(mr), n = (e) => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, _r = 120, vr = 600, yr = "--cu-card-stagger", br = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new Map(), Sr = (e, t) => {
	let n = `${e}|${t}`, r = xr.get(n);
	if (r) return r;
	let i = new IntersectionObserver((e) => {
		let t = 0;
		e.forEach((e) => {
			let n = br.get(e.target);
			if (n) if (e.isIntersecting) {
				let r = Math.min(t * _r, vr);
				e.target.style.setProperty(yr, `${r}ms`), n.onVisible(), n.once && i.unobserve(e.target), t++;
			} else n.once || n.onHidden();
		});
	}, {
		threshold: e,
		rootMargin: t
	});
	return xr.set(n, i), i;
}, Cr = (e = {}) => {
	let { threshold: t = 0, rootMargin: n = "0px 0px 200px 0px", once: r = !0, disabled: i = !1 } = e, a = gr(), s = l(null), [c, d] = u(!1), f = a || i || c;
	return o(() => {
		if (a || i) return;
		let e = s.current;
		if (!e || typeof IntersectionObserver > "u") return;
		let o = Sr(t, n);
		return br.set(e, {
			onVisible: () => d(!0),
			onHidden: () => d(!1),
			once: r
		}), o.observe(e), () => {
			o.unobserve(e), br.delete(e);
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
}, wr = ({ children: e, isGrey: t, hasWave: n, isCenter: r, isCenterDesktop: i, noHover: a, noImage: o, leftBorder: s, revealOnScroll: c = !0, className: l }) => {
	let { ref: u, isVisible: d } = Cr({ disabled: !c });
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
}, Tr = Object.assign(wr, {
	Figure: Kn,
	VideoFigure: pr,
	DateThumb: zn,
	ImageThumb: Yn,
	Initials: Xn,
	Header: Jn,
	Body: De,
	Content: Oe,
	Footer: qn,
	Excerpt: Bn,
	EventMeta: Gn,
	PeopleMeta: Zn,
	Stats: Qn,
	Status: tr
});
wr.displayName = "Card";
//#endregion
//#region src/components/CookieBanner/cookies.ts
var Er = (e) => {
	if (typeof document > "u") return !1;
	let t = document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`));
	if (!t) return !0;
	let n = t.split("=")[1];
	return new Date(n).getTime() <= Date.now();
}, Dr = (e, t = 365) => {
	if (typeof document > "u") return;
	let n = /* @__PURE__ */ new Date();
	n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3), document.cookie = `${e}=true; expires=${n.toUTCString()}; path=/`;
}, Or = ({ cookieName: e = "cookieConsent", message: t = "This site uses cookies to offer you a better browsing experience. Find out more on", policyHref: n = "https://carleton.ca/privacy/privacy-notices/website-privacy-notice/", policyLabel: r = "how we use cookies and how you can change your settings.", buttonLabel: i = "Ok, got it!" }) => {
	let a = O(), [o, s] = u(() => Er(e));
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
						Dr(e), s(!1);
					},
					title: i
				})
			})]
		})
	}) : null;
}, kr = ({ deptName: e, buildingName: t, officeNumber: n, phone: r, email: i, buttons: a }) => {
	let o = O();
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
				children: /* @__PURE__ */ f(Ee, {
					align: "end",
					children: a.map((e, t) => /* @__PURE__ */ f(D, {
						title: e.title,
						color: t === 0 ? "red" : "dark-grey"
					}, e.id))
				})
			})]
		})
	});
}, Ar = "https://cdn.carleton.ca/rds/assets", jr = "/_assets", Mr = !1, Nr = globalThis.process?.env?.NODE_ENV === "development", Z = Mr || Nr ? jr : Ar, Q = {
	bgArise1: `${Z}/bg-images/arise-1.jpg`,
	bgArise2: `${Z}/bg-images/arise-2.jpg`,
	bgLeeds: `${Z}/bg-images/leeds.jpg`,
	bgLibrary: `${Z}/bg-images/library.jpg`,
	bgNicol: `${Z}/bg-images/nicol.jpg`,
	bgSoutham: `${Z}/bg-images/southam.jpg`,
	bgSplashAthletics: `${Z}/bg-images/splash-athletics.png`,
	bgTory: `${Z}/bg-images/tory.jpg`,
	campusAerial01: `${Z}/banners/campus-aerial-01.jpg`,
	campusRiver01: `${Z}/banners/campus-river-01.jpg`,
	cuLogoBlackLeftHorizontal: `${Z}/cu-logos/cu-logo-black-left-horizontal.svg`,
	cuLogoBlackLeftHorizontalOutlined: `${Z}/cu-logos/cu-logo-black-left-horizontal-outlined.svg`,
	cuLogoBlackRightHorizontal: `${Z}/cu-logos/cu-logo-black-right-horizontal.svg`,
	cuLogoBlackRightHorizontalOutlined: `${Z}/cu-logos/cu-logo-black-right-horizontal-outlined.svg`,
	cuLogoBlackVertical: `${Z}/cu-logos/cu-logo-black-vertical.svg`,
	cuLogoBlackVerticalOutlined: `${Z}/cu-logos/cu-logo-black-vertical-outlined.svg`,
	cuLogoCarleton360: `${Z}/cu-logos/cu-logo-carleton360.svg`,
	cuLogoColorLeftHorizontal: `${Z}/cu-logos/cu-logo-color-left-horiztonal.svg`,
	cuLogoColorLeftHorizontalOutlined: `${Z}/cu-logos/cu-logo-color-left-horizontal-outlined.svg`,
	cuLogoColorRightHorizontal: `${Z}/cu-logos/cu-logo-color-right-horiztonal.svg`,
	cuLogoColorRightHorizontalOutlined: `${Z}/cu-logos/cu-logo-color-right-horizontal-outlined.svg`,
	cuLogoColorVertical: `${Z}/cu-logos/cu-logo-color-vertical.svg`,
	cuLogoColorVerticalOutlined: `${Z}/cu-logos/cu-logo-color-vertical-outlined.svg`,
	cuRavensLogoWhite: `${Z}/graphics/cu-ravens-logo-white.svg`,
	cuShieldBlack: `${Z}/cu-logos/cu-shield-black.svg`,
	cuShieldBlackOutlined: `${Z}/cu-logos/cu-shield-black-outlined.svg`,
	cuShieldColor: `${Z}/cu-logos/cu-shield-color.svg`,
	cuShieldColorOutlined: `${Z}/cu-logos/cu-shield-color-outlined.svg`,
	cuWavesFooterRed: `${Z}/graphics/cu-waves-footer-red.svg`,
	cuWavesHardEdgeBlack: `${Z}/graphics/cu-waves-hard-edge-black.svg`,
	cuWavesHardEdgeRed: `${Z}/graphics/cu-waves-hard-edge-red.svg`,
	cuWavesRepeatingBottomRed: `${Z}/graphics/cu-waves-repeating-bottom-red.svg`,
	favicon16: `${Z}/favicons/favicon-16x16.png`,
	favicon32: `${Z}/favicons/favicon-32x32.png`,
	favicon48: `${Z}/favicons/favicon-48x48.png`,
	faviconAndroidChrome192: `${Z}/favicons/android-chrome-192x192.png`,
	faviconAndroidChrome512: `${Z}/favicons/android-chrome-512x512.png`,
	faviconAppleTouch: `${Z}/favicons/apple-touch-icon.png`,
	faviconIco: `${Z}/favicons/favicon.ico`,
	faviconMstile150: `${Z}/favicons/mstile-150x150.png`,
	faviconSafariPinnedTab: `${Z}/favicons/safari-pinned-tab.svg`,
	fontawesomeLight: `${Z}/graphics/fontawesome-light.svg`,
	greyBg: `${Z}/graphics/grey-bg.jpg`,
	iconXSolid: `${Z}/icons/x-solid.svg`,
	lexicalAlignCenter: `${Z}/lexical-icons/align-center-light.svg`,
	lexicalAlignJustify: `${Z}/lexical-icons/align-justify-light.svg`,
	lexicalAlignLeft: `${Z}/lexical-icons/align-left-light.svg`,
	lexicalAlignRight: `${Z}/lexical-icons/align-right-light.svg`,
	lexicalBold: `${Z}/lexical-icons/bold-light.svg`,
	lexicalChevronDown: `${Z}/lexical-icons/chevron-down-light.svg`,
	lexicalH2: `${Z}/lexical-icons/h2-light.svg`,
	lexicalH3: `${Z}/lexical-icons/h3-light.svg`,
	lexicalH4: `${Z}/lexical-icons/h4-light.svg`,
	lexicalImage: `${Z}/lexical-icons/image-regular.svg`,
	lexicalItalic: `${Z}/lexical-icons/italic-light.svg`,
	lexicalLink: `${Z}/lexical-icons/link-light.svg`,
	lexicalListOl: `${Z}/lexical-icons/list-ol-light.svg`,
	lexicalListUl: `${Z}/lexical-icons/list-ul-light.svg`,
	lexicalMessageQuote: `${Z}/lexical-icons/message-quote-light.svg`,
	lexicalParagraph: `${Z}/lexical-icons/paragraph-light.svg`,
	lexicalPencil: `${Z}/lexical-icons/pencil-light.svg`,
	lexicalRotateLeft: `${Z}/lexical-icons/rotate-left-light.svg`,
	lexicalRotateRight: `${Z}/lexical-icons/rotate-right-light.svg`,
	lexicalUnderline: `${Z}/lexical-icons/underline-light.svg`,
	quoteRed10: `${Z}/graphics/quote-red-10.svg`,
	quoteWhite: `${Z}/graphics/quote-white.svg`,
	ravensLogo: `${Z}/ravens-logos/ravens-logo.svg`,
	ravensLogoWordmark: `${Z}/ravens-logos/ravens-logo-wordmark.svg`
}, Pr = ({ logoSrc: e = Q.cuLogoColorVerticalOutlined, logoAlt: t = "Logo of Carleton University", privacyHref: n = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: r = "https://carleton.ca/accessibility/", copyrightHref: i = "https://library.carleton.ca/copyright-carleton" }) => {
	let a = O(), o = (/* @__PURE__ */ new Date()).getFullYear();
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
}, Fr = "Carleton University acknowledges the location of its campus on the traditional, unceded territories of the Algonquin Anishinàbeg nation", Ir = {
	phone: "613-520-2600",
	phoneHref: "tel:+1-613-520-2600",
	contactHref: "https://carleton.ca/about/contact/",
	address: "1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada"
}, Lr = [
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
], Rr = [
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
			src: Q.ravensLogo,
			alt: "Carleton Ravens",
			href: "https://goravens.carleton.ca",
			width: 64
		}
	}]
], zr = {
	standard: Rr,
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
	futureFunder: Rr
}, Br = ({ type: e = "standard", acknowledgment: t = Fr, contact: n = Ir, social: r = Lr, logoSrc: i = Q.cuLogoColorVerticalOutlined, logoAlt: a = "Logo of Carleton University", privacyHref: o = "https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/", accessibilityHref: s = "https://carleton.ca/accessibility/", copyrightHref: c = "https://library.carleton.ca/copyright-carleton" }) => {
	let l = O(), u = zr[e], d = (/* @__PURE__ */ new Date()).getFullYear();
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
}, Vr = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__top",
	children: e
});
Vr.displayName = "Nav.Top";
//#endregion
//#region src/components/Nav/NavBottom.tsx
var Hr = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__bottom",
	children: /* @__PURE__ */ f("div", {
		className: "cu-nav__bottom-inner",
		children: e
	})
});
Hr.displayName = "Nav.Bottom";
//#endregion
//#region src/components/Nav/NavLogo.tsx
var Ur = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg", Wr = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-shield-color.svg", Gr = ({ title: e, link: t }) => {
	let n = O();
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__logo",
		children: [/* @__PURE__ */ p("a", {
			href: "https://carleton.ca",
			className: "cu-nav__logomark",
			children: [/* @__PURE__ */ f("img", {
				className: `cu-nav__logomark-full${e ? " cu-nav__logomark-full--sm-hidden" : ""}`,
				src: Ur,
				width: 148,
				height: 40,
				alt: "Carleton University"
			}), e && /* @__PURE__ */ f("img", {
				className: "cu-nav__logomark-shield",
				src: Wr,
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
Gr.displayName = "Nav.Logo";
//#endregion
//#region src/components/Nav/NavSubMenu.tsx
var Kr = ({ items: e, isOpen: t, variant: n = "desktop" }) => {
	let [r, i] = u(null), a = O();
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
}, qr = ({ item: e, isOpen: t, onToggle: n, variant: r = "desktop" }) => {
	let i = O(), a = !!e.submenu?.length, o = r === "mobile", s = o ? ["cu-nav__submenu-link", a && t && "cu-nav__submenu-link--open"].filter(Boolean).join(" ") : ["cu-nav__link", a && t && "cu-nav__link--open"].filter(Boolean).join(" ");
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
		}), a && /* @__PURE__ */ f(Kr, {
			items: e.submenu ?? [],
			isOpen: t,
			variant: r
		})]
	});
}, Jr = "(max-width: 599.98px)", Yr = () => {
	let [e, t] = u(!1);
	return o(() => {
		let e = window.matchMedia(Jr), n = () => t(e.matches);
		return n(), e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, Xr = () => {}, Zr = ({ menu: e }) => {
	let [t, n] = u(null), [r, a] = u(!1), [d, m] = u(null), g = Yr(), _ = l(null), v = l(null), y = l(null), b = c(() => e.map((e) => e.title).join(""), [e]), x = i(() => {
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
	let ee = (e) => {
		a(!1), m((t) => t === e ? null : e);
	}, S = (e) => {
		m((t) => t === e ? null : e);
	}, C = g ? 0 : t ?? e.length, te = e.slice(0, C), ne = e.slice(C), w = ne.length > 0, T = !w;
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__menu",
		ref: _,
		children: [
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list cu-nav__list--measure",
				ref: v,
				"aria-hidden": "true",
				children: e.map((e) => /* @__PURE__ */ f(qr, {
					item: e,
					isOpen: !1,
					onToggle: Xr
				}, e.title))
			}),
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list",
				children: te.map((e) => /* @__PURE__ */ f(qr, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => ee(e.title)
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
			r && w && /* @__PURE__ */ f("ul", {
				className: "cu-nav__browse-dropdown",
				children: ne.map((e) => /* @__PURE__ */ f(qr, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => S(e.title),
					variant: "mobile"
				}, e.title))
			})
		]
	});
};
Zr.displayName = "Nav.Menu";
//#endregion
//#region src/components/Nav/NavButtons.tsx
var Qr = ({ buttons: e, isSearch: t, onClickSearch: n }) => {
	let r = O();
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
Qr.displayName = "Nav.Buttons";
//#endregion
//#region src/components/Nav/Nav.tsx
var $r = (n) => {
	let i = e.toArray(n), a = i.findIndex((e) => r(e) && e.type === Vr), o = i.findIndex((e) => r(e) && e.type === Hr);
	if (a === -1 || o === -1) return n;
	let s = i[a], c = i[o], l = e.toArray(s.props.children), u = l.findIndex((e) => r(e) && e.type === Qr);
	if (u === -1) return n;
	let d = l[u];
	return i[a] = t(s, void 0, ...l.filter((e, t) => t !== u)), i[o] = t(c, void 0, ...e.toArray(c.props.children), d), i;
}, ei = ({ children: e }) => {
	let t = Yr(), n = l(null);
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
			children: t ? $r(e) : e
		})
	});
};
ei.displayName = "Nav";
var ti = Object.assign(ei, {
	Top: Vr,
	Bottom: Hr,
	Logo: Gr,
	Menu: Zr,
	Buttons: Qr
}), ni = ({ component: e, children: t }) => /* @__PURE__ */ f(Se.Provider, {
	value: e,
	children: t
}), ri = ({ value: e, max: t = 100, label: n }) => {
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
}, ii = n({}), ai = () => a(ii), oi = ({ icon: e, href: t, label: n }) => {
	let r = O(), { iconColor: i } = ai();
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
oi.displayName = "SocialIcons.Item";
//#endregion
//#region src/components/SocialIcons/SocialIcons.tsx
var si = ({ children: e, prefix: t, iconColor: n }) => {
	let r = n ? `cu-social--${n}` : void 0;
	return /* @__PURE__ */ f(ii.Provider, {
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
si.displayName = "SocialIcons";
var ci = Object.assign(si, { Item: oi }), $ = (e) => H(e, "h:mm a"), li = (e, t, n = /* @__PURE__ */ new Date()) => {
	let r = new Date(n);
	r.setHours(0, 0, 0, 0);
	let i = X(e, "HH:mm", r), a = X(t, "HH:mm", r);
	return Ft(n, i) ? {
		variant: "error",
		label: `Opens at ${$(i)}`
	} : Pt(n, a) || n.getTime() === a.getTime() ? {
		variant: "error",
		label: `Opens tomorrow at ${$(Le(i, 1))}`
	} : Je(a, n) <= 60 ? {
		variant: "warning",
		label: `Closes at ${$(a)}`
	} : {
		variant: "success",
		label: `Open until ${$(a)}`
	};
};
//#endregion
export { g as Article, _ as Aside, xe as Avatar, Ce as Badge, Te as BadgeGroup, v as Body, D as Button, Ee as ButtonGroup, ve as CallOut, Tr as Card, C as Column, Or as CookieBanner, kr as DepartmentBar, ye as Figure, Pr as Footer, Br as FooterStandard, se as FullBanner, E as Icon, ce as ImageCover, ni as LinkProvider, te as Main, ti as Nav, ar as PROVIDER_NAMES, w as PageHeader, ri as ProgressBar, le as Quote, ne as Section, ci as SocialIcons, _e as StackedList, er as Status, pe as Testimonial, ge as Timeline, fe as WideImage, $n as defaultStatusTypes, rr as detectProvider, li as formatHoursStatus, ir as getProvider, ur as useOEmbed, gr as useReducedMotion, Cr as useScrollReveal };
