var c = "[data-cu-reveal]", v = "data-revealed", f = 0, l = "0px 0px 200px 0px", g = 120, E = 600, m = "--cu-card-stagger", p = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches), s = (r) => {
  r.setAttribute(v, "true");
}, n = null, i = typeof WeakSet == "function" ? /* @__PURE__ */ new WeakSet() : null, w = () => n || (typeof IntersectionObserver > "u" ? null : (n = new IntersectionObserver((r) => {
  let t = 0;
  r.forEach((e) => {
    if (e.isIntersecting) {
      const a = Math.min(t * g, E);
      e.target.style.setProperty(m, `${a}ms`), s(e.target), n?.unobserve(e.target), t++;
    }
  });
}, {
  threshold: f,
  rootMargin: l
}), n)), u = (r = document) => {
  const t = r.querySelectorAll(c);
  if (!t.length) return;
  const e = p(), a = e ? null : w();
  t.forEach((o) => {
    i?.has(o) || (e || !a ? s(o) : (a.observe(o), i?.add(o)));
  });
}, d = () => {
  u(document);
};
typeof window < "u" && typeof document < "u" && !window.cuMotion && (window.cuMotion = {
  init: d,
  register: u
}, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", d) : d());
export {
  d as init,
  u as register
};
