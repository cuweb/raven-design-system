import { t as e } from "../_shared/useLinkContext-C6Tt2S8U.mjs";
import { t } from "../_shared/Icon-BxlTg0gG.mjs";
import { Children as n, cloneElement as r, isValidElement as i, useCallback as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { flushSync as m } from "react-dom";
//#region src/components/Nav/NavTop.tsx
var h = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__top",
	children: e
});
h.displayName = "Nav.Top";
//#endregion
//#region src/components/Nav/NavBottom.tsx
var g = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-nav__bottom",
	children: /* @__PURE__ */ f("div", {
		className: "cu-nav__bottom-inner",
		children: e
	})
});
g.displayName = "Nav.Bottom";
//#endregion
//#region src/components/Nav/NavLogo.tsx
var _ = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg", v = "https://cdn.carleton.ca/rds/assets/cu-logos/cu-shield-color.svg", y = ({ title: t, link: n }) => {
	let r = e();
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__logo",
		children: [/* @__PURE__ */ p("a", {
			href: "https://carleton.ca",
			className: "cu-nav__logomark",
			children: [/* @__PURE__ */ f("img", {
				className: `cu-nav__logomark-full${t ? " cu-nav__logomark-full--sm-hidden" : ""}`,
				src: _,
				width: 148,
				height: 40,
				alt: "Carleton University"
			}), t && /* @__PURE__ */ f("img", {
				className: "cu-nav__logomark-shield",
				src: v,
				width: 30,
				height: 38,
				alt: "Carleton University"
			})]
		}), t && n && /* @__PURE__ */ f(r, {
			href: n,
			className: "cu-nav__site-title",
			children: t
		})]
	});
};
y.displayName = "Nav.Logo";
//#endregion
//#region src/components/Nav/NavSubMenu.tsx
var b = ({ items: t, isOpen: n, variant: r = "desktop" }) => {
	let [i, a] = u(null), o = e();
	return n ? /* @__PURE__ */ f("ul", {
		className: `cu-nav__submenu${r === "mobile" ? " cu-nav__submenu--mobile" : ""}`,
		children: t.map((e) => /* @__PURE__ */ f("li", {
			className: "cu-nav__submenu-item",
			children: e.submenu?.length ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ p("div", {
				className: "cu-nav__submenu-row",
				children: [/* @__PURE__ */ f(o, {
					href: e.href ?? "#",
					className: "cu-nav__submenu-link",
					children: e.title
				}), /* @__PURE__ */ f("button", {
					className: "cu-nav__submenu-expand",
					onClick: () => a((t) => t === e.title ? null : e.title),
					"aria-expanded": i === e.title,
					"aria-label": `${i === e.title ? "Collapse" : "Expand"} ${e.title}`,
					children: /* @__PURE__ */ f("span", {
						className: `cu-nav__arrow${i === e.title ? " cu-nav__arrow--open" : ""}`,
						"aria-hidden": "true"
					})
				})]
			}), i === e.title && /* @__PURE__ */ f("ul", {
				className: "cu-nav__submenu cu-nav__submenu--nested",
				children: e.submenu.map((e) => /* @__PURE__ */ f("li", {
					className: "cu-nav__submenu-item",
					children: /* @__PURE__ */ f(o, {
						href: e.href ?? "#",
						className: "cu-nav__submenu-link",
						children: e.title
					})
				}, e.title))
			})] }) : /* @__PURE__ */ f(o, {
				href: e.href ?? "#",
				className: "cu-nav__submenu-link",
				children: e.title
			})
		}, e.title))
	}) : null;
}, x = ({ item: t, isOpen: n, onToggle: r, variant: i = "desktop" }) => {
	let a = e(), o = !!t.submenu?.length, s = i === "mobile", c = s ? ["cu-nav__submenu-link", o && n && "cu-nav__submenu-link--open"].filter(Boolean).join(" ") : ["cu-nav__link", o && n && "cu-nav__link--open"].filter(Boolean).join(" ");
	return /* @__PURE__ */ p("li", {
		className: s ? "cu-nav__submenu-item" : "cu-nav__item",
		children: [o ? /* @__PURE__ */ p("button", {
			className: c,
			onClick: r,
			"aria-expanded": n,
			children: [t.title, /* @__PURE__ */ f("span", {
				className: `cu-nav__arrow${n ? " cu-nav__arrow--open" : ""}`,
				"aria-hidden": "true"
			})]
		}) : /* @__PURE__ */ f(a, {
			href: t.href ?? "#",
			className: c,
			children: t.title
		}), o && /* @__PURE__ */ f(b, {
			items: t.submenu ?? [],
			isOpen: n,
			variant: i
		})]
	});
}, S = "(max-width: 599.98px)", C = () => {
	let [e, t] = u(!1);
	return o(() => {
		let e = window.matchMedia(S), n = () => t(e.matches);
		return n(), e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, w = () => {}, T = ({ menu: e }) => {
	let [t, n] = u(null), [r, i] = u(!1), [d, h] = u(null), g = C(), _ = l(null), v = l(null), y = l(null), b = c(() => e.map((e) => e.title).join(""), [e]), S = a(() => {
		if (g) return;
		let t = _.current, r = v.current, a = y.current;
		if (!t || !r || !a) return;
		let o = Array.from(r.children);
		if (o.length !== e.length) return;
		let s = t.getBoundingClientRect().width, c = r.getBoundingClientRect().left, l = (e) => e.getBoundingClientRect().right - c, u = o[o.length - 1];
		if (u && l(u) <= s) {
			n(e.length), i(!1);
			return;
		}
		let d = a.getBoundingClientRect().width, f = parseFloat(getComputedStyle(t).columnGap) || 0, p = s - d - f, m = 0;
		for (let e of o) if (l(e) <= p) m++;
		else break;
		n(m);
	}, [e.length, g]);
	s(() => {
		S();
	}, [b, S]), o(() => {
		if (!_.current) return;
		let e = new ResizeObserver(() => m(() => S()));
		return e.observe(_.current), () => e.disconnect();
	}, [S]), o(() => {
		if (!(!g || !r)) return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = "";
		};
	}, [g, r]), o(() => {
		let e = (e) => {
			_.current && !_.current.contains(e.target) && (i(!1), h(null));
		}, t = (e) => {
			e.key === "Escape" && (i(!1), h(null));
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, []);
	let T = (e) => {
		i(!1), h((t) => t === e ? null : e);
	}, E = (e) => {
		h((t) => t === e ? null : e);
	}, D = g ? 0 : t ?? e.length, O = e.slice(0, D), k = e.slice(D), A = k.length > 0, j = !A;
	return /* @__PURE__ */ p("div", {
		className: "cu-nav__menu",
		ref: _,
		children: [
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list cu-nav__list--measure",
				ref: v,
				"aria-hidden": "true",
				children: e.map((e) => /* @__PURE__ */ f(x, {
					item: e,
					isOpen: !1,
					onToggle: w
				}, e.title))
			}),
			/* @__PURE__ */ f("ul", {
				className: "cu-nav__list",
				children: O.map((e) => /* @__PURE__ */ f(x, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => T(e.title)
				}, e.title))
			}),
			/* @__PURE__ */ p("button", {
				ref: y,
				className: `cu-nav__browse${j ? " cu-nav__browse--ghost" : ""}`,
				onClick: () => {
					j || (h(null), i((e) => !e));
				},
				"aria-expanded": j ? void 0 : r,
				"aria-haspopup": j ? void 0 : "true",
				"aria-hidden": j || void 0,
				tabIndex: j ? -1 : void 0,
				children: [/* @__PURE__ */ f("span", {
					className: "cu-nav__browse-label",
					children: "Browse"
				}), /* @__PURE__ */ f("span", {
					className: `cu-nav__arrow${r && !j ? " cu-nav__arrow--open" : ""}`,
					"aria-hidden": "true"
				})]
			}),
			r && A && /* @__PURE__ */ f("ul", {
				className: "cu-nav__browse-dropdown",
				children: k.map((e) => /* @__PURE__ */ f(x, {
					item: e,
					isOpen: d === e.title,
					onToggle: () => E(e.title),
					variant: "mobile"
				}, e.title))
			})
		]
	});
};
T.displayName = "Nav.Menu";
//#endregion
//#region src/components/Nav/NavButtons.tsx
var E = ({ buttons: n, isSearch: r, onClickSearch: i }) => {
	let a = e();
	return !r && !n?.length ? null : /* @__PURE__ */ p("div", {
		className: "cu-nav__buttons",
		children: [r && /* @__PURE__ */ f("button", {
			className: "cu-nav__search-btn",
			onClick: i,
			"aria-label": "Search",
			children: /* @__PURE__ */ f(t, {
				name: "magnifying-glass",
				size: 20,
				"aria-hidden": "true"
			})
		}), n?.map((e) => /* @__PURE__ */ f(a, {
			href: e.href,
			className: `cu-nav__cta-link${e.variant === "dark" ? " cu-nav__cta-link--dark" : ""}`,
			children: e.title
		}, e.title))]
	});
};
E.displayName = "Nav.Buttons";
//#endregion
//#region src/components/Nav/Nav.tsx
var D = (e) => {
	let t = n.toArray(e), a = t.findIndex((e) => i(e) && e.type === h), o = t.findIndex((e) => i(e) && e.type === g);
	if (a === -1 || o === -1) return e;
	let s = t[a], c = t[o], l = n.toArray(s.props.children), u = l.findIndex((e) => i(e) && e.type === E);
	if (u === -1) return e;
	let d = l[u];
	return t[a] = r(s, void 0, ...l.filter((e, t) => t !== u)), t[o] = r(c, void 0, ...n.toArray(c.props.children), d), t;
}, O = ({ children: e }) => {
	let t = C(), n = l(null);
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
			children: t ? D(e) : e
		})
	});
};
O.displayName = "Nav";
var k = Object.assign(O, {
	Top: h,
	Bottom: g,
	Logo: y,
	Menu: T,
	Buttons: E
});
//#endregion
export { k as Nav };
