import { t as e } from "../_shared/useLinkContext-C6Tt2S8U.mjs";
import { t } from "../_shared/Icon-BxlTg0gG.mjs";
import { a as n, c as r, i, o as a, r as o, t as s } from "../_shared/Status-Dxbxt0iQ.mjs";
import { useEffect as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/Card/CardBody.tsx
var m = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__body",
	children: e
});
m.displayName = "Card.Body";
//#endregion
//#region src/components/Card/CardContent.tsx
var h = ({ children: e }) => /* @__PURE__ */ f("div", {
	className: "cu-card__content",
	children: e
});
h.displayName = "Card.Content";
//#endregion
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/isSameDay.js
function g(e, t, r) {
	let [i, o] = a(r?.in, e, t);
	return +n(i) == +n(o);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.2.1/node_modules/date-fns/getDate.js
function _(e, t) {
	return r(e, t?.in).getDate();
}
//#endregion
//#region src/components/Card/CardDateThumb.tsx
var v = ({ startDate: e, endDate: t }) => {
	let n = o(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), r = o(t, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), a = i(n, "MMM"), s = _(n);
	return /* @__PURE__ */ f("div", {
		className: "cu-card__date-thumb",
		"aria-hidden": "true",
		children: g(n, r) ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-month",
			children: a
		}), /* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-day",
			children: s
		})] }) : /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-month",
			children: "Multi"
		}), /* @__PURE__ */ f("span", {
			className: "cu-card__date-thumb-day",
			children: "Day"
		})] })
	});
};
v.displayName = "Card.DateThumb";
//#endregion
//#region src/components/Card/CardExcerpt.tsx
var y = ({ text: e, hasMore: t, truncateOnMobile: n }) => /* @__PURE__ */ p("p", {
	className: `cu-card__excerpt${n ? " cu-card__excerpt--truncate-mobile" : ""}`,
	children: [e && e.length > 170 ? `${e.substring(0, 150)}...` : e, t && /* @__PURE__ */ f("span", {
		className: "cu-card__excerpt-more",
		children: " More"
	})]
});
y.displayName = "Card.Excerpt";
//#endregion
//#region src/components/Card/CardEventMeta.tsx
var b = 18, x = (e) => e.replace(" ", "T"), S = (e) => e.split(" ")[0], C = (e) => `${e.getHours() % 12 || 12}:${i(e, "mm")} ${i(e, "a")}`, w = ({ startDateTime: e, endDateTime: n, onCampus: r, onCampusBuilding: a, onCampusRoomNumber: s, eventAddress: c }) => {
	let l = o(e, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), u = o(n, "yyyy-MM-dd HH:mm:ss", /* @__PURE__ */ new Date()), m = g(l, u), h = i(l, "MMMM"), v = _(l), y = i(u, "MMMM"), w = _(u), T = C(l), E = C(u), D = r ? `${s} ${a}` : c;
	return /* @__PURE__ */ p("ul", {
		className: "cu-card__meta cu-card__meta--has-icons",
		children: [/* @__PURE__ */ f("li", { children: m ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(t, {
			name: "clock",
			size: b,
			title: "When"
		}), /* @__PURE__ */ p("time", {
			dateTime: `${x(e)}/${x(n)}`,
			children: [
				T,
				" — ",
				E
			]
		})] }) : /* @__PURE__ */ p(d, { children: [
			/* @__PURE__ */ f(t, {
				name: "calendar-days",
				size: b,
				title: "When"
			}),
			/* @__PURE__ */ p("time", {
				dateTime: S(e),
				children: [
					h,
					" ",
					v
				]
			}),
			" — ",
			/* @__PURE__ */ p("time", {
				dateTime: S(n),
				children: [
					y,
					" ",
					w
				]
			})
		] }) }), /* @__PURE__ */ p("li", { children: [/* @__PURE__ */ f(t, {
			name: "location-dot",
			size: b,
			title: "Where"
		}), D] })]
	});
};
w.displayName = "Card.EventMeta";
//#endregion
//#region src/components/Card/CardFigure.tsx
var T = ({ children: e, isRound: t, isSmall: n, isSquare: r, isIcon: i }) => /* @__PURE__ */ f("figure", {
	className: [
		"cu-card__figure",
		t && "cu-card__figure--round",
		n && "cu-card__figure--small",
		r && "cu-card__figure--square",
		i && "cu-card__figure--icon"
	].filter(Boolean).join(" "),
	children: e
});
T.displayName = "Card.Figure";
//#endregion
//#region src/components/Card/CardFooter.tsx
var E = ({ children: e }) => /* @__PURE__ */ f("footer", {
	className: "cu-card__footer",
	children: e
});
E.displayName = "Card.Footer";
//#endregion
//#region src/components/Card/CardHeader.tsx
var D = ({ title: t = "No title available", link: n, extraText: r, as: i = "h2", date: a, datePrefix: o, readTime: s, position: c = "top" }) => {
	let l = e(), u = i, d = a ? new Date(a).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric"
	}) : null;
	return /* @__PURE__ */ p("header", {
		className: "cu-card__header",
		children: [
			(a && c === "top" || s && c === "top") && /* @__PURE__ */ p("div", {
				className: "cu-card__header-meta",
				children: [a && /* @__PURE__ */ p("time", {
					className: "cu-card__header-time",
					children: [o && `${o} `, d]
				}), s && /* @__PURE__ */ p("p", {
					className: `cu-card__header-readtime${a ? " cu-card__header-readtime--with-divider" : ""}`,
					children: [s, " minute read"]
				})]
			}),
			r && !a && /* @__PURE__ */ f("div", {
				className: "cu-card__header-extra",
				children: /* @__PURE__ */ f("p", { children: r })
			}),
			/* @__PURE__ */ f(u, {
				className: "cu-card__header-title",
				children: n ? /* @__PURE__ */ f(l, {
					href: n,
					children: t
				}) : t
			}),
			(a && c === "bottom" || s && c === "bottom") && /* @__PURE__ */ p("div", {
				className: "cu-card__header-meta",
				children: [a && /* @__PURE__ */ p("time", {
					className: "cu-card__header-time",
					children: [o && `${o} `, d]
				}), s && /* @__PURE__ */ p("p", {
					className: `cu-card__header-readtime${a ? " cu-card__header-readtime--with-divider" : ""}`,
					children: [s, " minute read"]
				})]
			})
		]
	});
};
D.displayName = "Card.Header";
//#endregion
//#region src/components/Card/CardImageThumb.tsx
var O = ({ children: e, isSquare: t }) => /* @__PURE__ */ f("figure", {
	className: `cu-card__image-thumb${t ? " cu-card__image-thumb--square" : ""}`,
	children: e
});
O.displayName = "Card.ImageThumb";
//#endregion
//#region src/components/Card/CardInitials.tsx
var k = ({ initials: e }) => /* @__PURE__ */ p("figure", {
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
k.displayName = "Card.Initials";
//#endregion
//#region src/components/Card/CardPeopleMeta.tsx
var A = ({ jobTitle: e, children: t, phone: n }) => /* @__PURE__ */ p("ul", {
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
A.displayName = "Card.PeopleMeta";
//#endregion
//#region src/components/Card/CardStats.tsx
var j = ({ stat: e, desc: t, reverse: n }) => {
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
j.displayName = "Card.Stats";
//#endregion
//#region src/components/Card/CardStatus.tsx
var M = (e) => /* @__PURE__ */ f("div", {
	className: "cu-card__status",
	children: /* @__PURE__ */ f(s, {
		...e,
		context: "in-card"
	})
});
M.displayName = "Card.Status";
//#endregion
//#region src/utils/video/providers.ts
var N = [
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
], P = (e) => {
	for (let t of N) if (t.matches(e)) return t;
	return null;
};
N.map((e) => e.name);
//#endregion
//#region src/utils/video/useOEmbed.ts
var F = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), L = async (e, t) => {
	let n = P(e);
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
}, R = (e, t) => {
	if (!e) return {
		data: null,
		loading: !1,
		error: null
	};
	let n = F.get(e);
	return n ? {
		data: n,
		loading: !1,
		error: null
	} : {
		data: null,
		loading: !t,
		error: null
	};
}, z = (e, t) => {
	let n = !!t?.skipNetwork, [r, i] = u(() => R(e, n)), [a, o] = u(e), [s, l] = u(n);
	return (e !== a || n !== s) && (o(e), l(n), i(R(e, n))), c(() => {
		if (!e || F.has(e) || n) return;
		let t = new AbortController(), r = I.get(e);
		return r || (r = L(e, t.signal), I.set(e, r), r.finally(() => I.delete(e)).catch(() => {})), r.then((n) => {
			t.signal.aborted || (F.set(e, n), i({
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
}, B = [
	"maxresdefault",
	"sddefault",
	"hqdefault",
	"default"
], V = (e, t) => `https://i.ytimg.com/vi/${e}/${t}.jpg`, H = ({ url: e, thumbnail: t, title: n, provider: r, skipNetwork: i, onPlay: a }) => {
	let [o, s] = u(!1), [c, l] = u(0), d = P(e), m = r ?? d?.name, h = d?.parseId(e) ?? null, g = d && h ? d.buildEmbedUrl(h) : null, _ = m === "youtube", v = z(!t && !_ ? e : void 0, { skipNetwork: i }), y = _ && h ? V(h, B[c] ?? "default") : null, b = t ?? y ?? v.data?.thumbnail ?? void 0, x = _ && h && !t ? B.slice(1).map((e) => V(h, e)).join(",") : void 0, S = () => {
		!_ || t || c < B.length - 1 && l((e) => e + 1);
	}, C = (e) => {
		g && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1 || (e.preventDefault(), s(!0), a?.()));
	}, w = [
		"cu-card__figure",
		"cu-card__figure--video",
		o && "cu-card__figure--playing"
	].filter(Boolean).join(" "), T = n ? `Play video: ${n}` : "Play video";
	return /* @__PURE__ */ f("figure", {
		className: w,
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
			"aria-label": T,
			onClick: C,
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
H.displayName = "Card.VideoFigure";
//#endregion
//#region src/utils/motion/useReducedMotion.ts
var U = "(prefers-reduced-motion: reduce)", W = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(U).matches, G = () => {
	let [e, t] = u(W);
	return c(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(U), n = (e) => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}, K = 120, q = 600, J = "--cu-card-stagger", Y = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new Map(), Z = (e, t) => {
	let n = `${e}|${t}`, r = X.get(n);
	if (r) return r;
	let i = new IntersectionObserver((e) => {
		let t = 0;
		e.forEach((e) => {
			let n = Y.get(e.target);
			if (n) if (e.isIntersecting) {
				let r = Math.min(t * K, q);
				e.target.style.setProperty(J, `${r}ms`), n.onVisible(), n.once && i.unobserve(e.target), t++;
			} else n.once || n.onHidden();
		});
	}, {
		threshold: e,
		rootMargin: t
	});
	return X.set(n, i), i;
}, Q = (e = {}) => {
	let { threshold: t = 0, rootMargin: n = "0px 0px 200px 0px", once: r = !0, disabled: i = !1 } = e, a = G(), o = l(null), [s, d] = u(!1), f = a || i || s;
	return c(() => {
		if (a || i) return;
		let e = o.current;
		if (!e || typeof IntersectionObserver > "u") return;
		let s = Z(t, n);
		return Y.set(e, {
			onVisible: () => d(!0),
			onHidden: () => d(!1),
			once: r
		}), s.observe(e), () => {
			s.unobserve(e), Y.delete(e);
		};
	}, [
		t,
		n,
		r,
		i,
		a
	]), {
		ref: o,
		isVisible: f
	};
}, $ = ({ children: e, isGrey: t, hasWave: n, isCenter: r, isCenterDesktop: i, noHover: a, leftBorder: o, revealOnScroll: s = !0 }) => {
	let { ref: c, isVisible: l } = Q({ disabled: !s });
	return /* @__PURE__ */ p("div", {
		ref: c,
		className: [
			"cu-card",
			t && "cu-card--grey",
			r && "cu-card--center",
			i && "cu-card--center-desktop",
			a && "cu-card--no-hover",
			o && "cu-card--border-left",
			n && t && "cu-card--has-wave"
		].filter(Boolean).join(" "),
		"data-cu-reveal": s ? "" : void 0,
		"data-revealed": l ? "true" : "false",
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
}, ee = Object.assign($, {
	Figure: T,
	VideoFigure: H,
	DateThumb: v,
	ImageThumb: O,
	Initials: k,
	Header: D,
	Body: m,
	Content: h,
	Footer: E,
	Excerpt: y,
	EventMeta: w,
	PeopleMeta: A,
	Stats: j,
	Status: M
});
$.displayName = "Card";
//#endregion
export { ee as Card };
