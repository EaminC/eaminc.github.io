(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = n(s);
    fetch(s.href, r);
  }
})();
/**
 * @vue/shared v3.5.5
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Dr(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ge = {},
  vn = [],
  ke = () => {},
  bf = () => !1,
  as = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  jr = (e) => e.startsWith("onUpdate:"),
  Se = Object.assign,
  Vr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  _f = Object.prototype.hasOwnProperty,
  le = (e, t) => _f.call(e, t),
  G = Array.isArray,
  bn = (e) => cs(e) === "[object Map]",
  ma = (e) => cs(e) === "[object Set]",
  q = (e) => typeof e == "function",
  _e = (e) => typeof e == "string",
  Lt = (e) => typeof e == "symbol",
  ae = (e) => e !== null && typeof e == "object",
  ga = (e) => (ae(e) || q(e)) && q(e.then) && q(e.catch),
  ya = Object.prototype.toString,
  cs = (e) => ya.call(e),
  wf = (e) => cs(e).slice(8, -1),
  va = (e) => cs(e) === "[object Object]",
  Hr = (e) =>
    _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Wn = Dr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  us = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Cf = /-(\w)/g,
  et = us((e) => e.replace(Cf, (t, n) => (n ? n.toUpperCase() : ""))),
  xf = /\B([A-Z])/g,
  fn = us((e) => e.replace(xf, "-$1").toLowerCase()),
  fs = us((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  jo = us((e) => (e ? `on${fs(e)}` : "")),
  Bt = (e, t) => !Object.is(e, t),
  Hs = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  ba = (e, t, n, o = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: o,
      value: n,
    });
  },
  Tf = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Sf = (e) => {
    const t = _e(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Wi;
const _a = () =>
  Wi ||
  (Wi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Fe(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        s = _e(o) ? Pf(o) : Fe(o);
      if (s) for (const r in s) t[r] = s[r];
    }
    return t;
  } else if (_e(e) || ae(e)) return e;
}
const Of = /;(?![^(]*\))/g,
  Ef = /:([^]+)/,
  Af = /\/\*[^]*?\*\//g;
function Pf(e) {
  const t = {};
  return (
    e
      .replace(Af, "")
      .split(Of)
      .forEach((n) => {
        if (n) {
          const o = n.split(Ef);
          o.length > 1 && (t[o[0].trim()] = o[1].trim());
        }
      }),
    t
  );
}
function W(e) {
  let t = "";
  if (_e(e)) t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const o = W(e[n]);
      o && (t += o + " ");
    }
  else if (ae(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const $f =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  kf = Dr($f);
function wa(e) {
  return !!e || e === "";
}
const Ca = (e) => !!(e && e.__v_isRef === !0),
  dt = (e) =>
    _e(e)
      ? e
      : e == null
      ? ""
      : G(e) || (ae(e) && (e.toString === ya || !q(e.toString)))
      ? Ca(e)
        ? dt(e.value)
        : JSON.stringify(e, xa, 2)
      : String(e),
  xa = (e, t) =>
    Ca(t)
      ? xa(e, t.value)
      : bn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, s], r) => ((n[Ws(o, r) + " =>"] = s), n),
            {}
          ),
        }
      : ma(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ws(n)) }
      : Lt(t)
      ? Ws(t)
      : ae(t) && !G(t) && !va(t)
      ? String(t)
      : t,
  Ws = (e, t = "") => {
    var n;
    return Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.5
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ne;
class Mf {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ne),
      !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ne;
      try {
        return (Ne = this), t();
      } finally {
        Ne = n;
      }
    }
  }
  on() {
    Ne = this;
  }
  off() {
    Ne = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function ds() {
  return Ne;
}
function ps(e, t = !1) {
  Ne && Ne.cleanups.push(e);
}
let me;
const zs = new WeakSet();
class Ta {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.nextEffect = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ne && Ne.active && Ne.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), zs.has(this) && (zs.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) ||
      this.flags & 8 ||
      ((this.flags |= 8), (this.nextEffect = zn), (zn = this));
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), zi(this), Oa(this);
    const t = me,
      n = nt;
    (me = this), (nt = !0);
    try {
      return this.fn();
    } finally {
      Ea(this), (me = t), (nt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ur(t);
      (this.deps = this.depsTail = void 0),
        zi(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? zs.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    ur(this) && this.run();
  }
  get dirty() {
    return ur(this);
  }
}
let Sa = 0,
  zn;
function Wr() {
  Sa++;
}
function zr() {
  if (--Sa > 0) return;
  let e;
  for (; zn; ) {
    let t = zn;
    for (zn = void 0; t; ) {
      const n = t.nextEffect;
      if (((t.nextEffect = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Oa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Ea(e) {
  let t,
    n = e.depsTail,
    o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Ur(o), If(o)) : (t = o),
      (o.dep.activeLink = o.prevActiveLink),
      (o.prevActiveLink = void 0),
      (o = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function ur(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && Aa(t.dep.computed)) ||
      t.dep.version !== t.version
    )
      return !0;
  return !!e._dirty;
}
function Aa(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Xn)
  )
    return;
  e.globalVersion = Xn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && !ur(e))) {
    e.flags &= -3;
    return;
  }
  const n = me,
    o = nt;
  (me = e), (nt = !0);
  try {
    Oa(e);
    const s = e.fn(e._value);
    (t.version === 0 || Bt(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (me = n), (nt = o), Ea(e), (e.flags &= -3);
  }
}
function Ur(e) {
  const { dep: t, prevSub: n, nextSub: o } = e;
  if (
    (n && ((n.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = n), (e.nextSub = void 0)),
    t.subs === e && (t.subs = n),
    !t.subs && t.computed)
  ) {
    t.computed.flags &= -5;
    for (let s = t.computed.deps; s; s = s.nextDep) Ur(s);
  }
}
function If(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let nt = !0;
const Pa = [];
function Dt() {
  Pa.push(nt), (nt = !1);
}
function jt() {
  const e = Pa.pop();
  nt = e === void 0 ? !0 : e;
}
function zi(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = me;
    me = void 0;
    try {
      t();
    } finally {
      me = n;
    }
  }
}
let Xn = 0;
class Bf {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Kr {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0);
  }
  track(t) {
    if (!me || !nt || me === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== me)
      (n = this.activeLink = new Bf(me, this)),
        me.deps
          ? ((n.prevDep = me.depsTail),
            (me.depsTail.nextDep = n),
            (me.depsTail = n))
          : (me.deps = me.depsTail = n),
        me.flags & 4 && $a(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const o = n.nextDep;
      (o.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = o),
        (n.prevDep = me.depsTail),
        (n.nextDep = void 0),
        (me.depsTail.nextDep = n),
        (me.depsTail = n),
        me.deps === n && (me.deps = o);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xn++, this.notify(t);
  }
  notify(t) {
    Wr();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify();
    } finally {
      zr();
    }
  }
}
function $a(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let o = t.deps; o; o = o.nextDep) $a(o);
  }
  const n = e.dep.subs;
  n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
}
const Yo = new WeakMap(),
  nn = Symbol(""),
  fr = Symbol(""),
  Qn = Symbol("");
function Me(e, t, n) {
  if (nt && me) {
    let o = Yo.get(e);
    o || Yo.set(e, (o = new Map()));
    let s = o.get(n);
    s || o.set(n, (s = new Kr())), s.track();
  }
}
function yt(e, t, n, o, s, r) {
  const i = Yo.get(e);
  if (!i) {
    Xn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((Wr(), t === "clear")) i.forEach(l);
  else {
    const a = G(e),
      u = a && Hr(n);
    if (a && n === "length") {
      const c = Number(o);
      i.forEach((f, d) => {
        (d === "length" || d === Qn || (!Lt(d) && d >= c)) && l(f);
      });
    } else
      switch ((n !== void 0 && l(i.get(n)), u && l(i.get(Qn)), t)) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(nn)), bn(e) && l(i.get(fr)));
          break;
        case "delete":
          a || (l(i.get(nn)), bn(e) && l(i.get(fr)));
          break;
        case "set":
          bn(e) && l(i.get(nn));
          break;
      }
  }
  zr();
}
function Nf(e, t) {
  var n;
  return (n = Yo.get(e)) == null ? void 0 : n.get(t);
}
function pn(e) {
  const t = re(e);
  return t === e ? t : (Me(t, "iterate", Qn), Qe(e) ? t : t.map(Pe));
}
function hs(e) {
  return Me((e = re(e)), "iterate", Qn), e;
}
const Rf = {
  __proto__: null,
  [Symbol.iterator]() {
    return Us(this, Symbol.iterator, Pe);
  },
  concat(...e) {
    return pn(this).concat(...e.map((t) => (G(t) ? pn(t) : t)));
  },
  entries() {
    return Us(this, "entries", (e) => ((e[1] = Pe(e[1])), e));
  },
  every(e, t) {
    return ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ht(this, "filter", e, t, (n) => n.map(Pe), arguments);
  },
  find(e, t) {
    return ht(this, "find", e, t, Pe, arguments);
  },
  findIndex(e, t) {
    return ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ht(this, "findLast", e, t, Pe, arguments);
  },
  findLastIndex(e, t) {
    return ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return ht(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ks(this, "includes", e);
  },
  indexOf(...e) {
    return Ks(this, "indexOf", e);
  },
  join(e) {
    return pn(this).join(e);
  },
  lastIndexOf(...e) {
    return Ks(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fn(this, "pop");
  },
  push(...e) {
    return Fn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ui(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ui(this, "reduceRight", e, t);
  },
  shift() {
    return Fn(this, "shift");
  },
  some(e, t) {
    return ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fn(this, "splice", e);
  },
  toReversed() {
    return pn(this).toReversed();
  },
  toSorted(e) {
    return pn(this).toSorted(e);
  },
  toSpliced(...e) {
    return pn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fn(this, "unshift", e);
  },
  values() {
    return Us(this, "values", Pe);
  },
};
function Us(e, t, n) {
  const o = hs(e),
    s = o[t]();
  return (
    o !== e &&
      !Qe(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const r = s._next();
        return r.value && (r.value = n(r.value)), r;
      })),
    s
  );
}
const Ff = Array.prototype;
function ht(e, t, n, o, s, r) {
  const i = hs(e),
    l = i !== e && !Qe(e),
    a = i[t];
  if (a !== Ff[t]) {
    const f = a.apply(e, r);
    return l ? Pe(f) : f;
  }
  let u = n;
  i !== e &&
    (l
      ? (u = function (f, d) {
          return n.call(this, Pe(f), d, e);
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const c = a.call(i, u, o);
  return l && s ? s(c) : c;
}
function Ui(e, t, n, o) {
  const s = hs(e);
  let r = n;
  return (
    s !== e &&
      (Qe(e)
        ? n.length > 3 &&
          (r = function (i, l, a) {
            return n.call(this, i, l, a, e);
          })
        : (r = function (i, l, a) {
            return n.call(this, i, Pe(l), a, e);
          })),
    s[t](r, ...o)
  );
}
function Ks(e, t, n) {
  const o = re(e);
  Me(o, "iterate", Qn);
  const s = o[t](...n);
  return (s === -1 || s === !1) && Gr(n[0])
    ? ((n[0] = re(n[0])), o[t](...n))
    : s;
}
function Fn(e, t, n = []) {
  Dt(), Wr();
  const o = re(e)[t].apply(e, n);
  return zr(), jt(), o;
}
const Lf = Dr("__proto__,__v_isRef,__isVue"),
  ka = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Lt)
  );
function Df(e) {
  Lt(e) || (e = String(e));
  const t = re(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class Ma {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, o) {
    const s = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return o === (s ? (r ? La : Fa) : r ? Ra : Na).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
        ? t
        : void 0;
    const i = G(t);
    if (!s) {
      let a;
      if (i && (a = Rf[n])) return a;
      if (n === "hasOwnProperty") return Df;
    }
    const l = Reflect.get(t, n, xe(t) ? t : o);
    return (Lt(n) ? ka.has(n) : Lf(n)) || (s || Me(t, "get", n), r)
      ? l
      : xe(l)
      ? i && Hr(n)
        ? l
        : l.value
      : ae(l)
      ? s
        ? ys(l)
        : wt(l)
      : l;
  }
}
class Ia extends Ma {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = sn(r);
      if (
        (!Qe(o) && !sn(o) && ((r = re(r)), (o = re(o))),
        !G(t) && xe(r) && !xe(o))
      )
        return a ? !1 : ((r.value = o), !0);
    }
    const i = G(t) && Hr(n) ? Number(n) < t.length : le(t, n),
      l = Reflect.set(t, n, o, xe(t) ? t : s);
    return (
      t === re(s) && (i ? Bt(o, r) && yt(t, "set", n, o) : yt(t, "add", n, o)),
      l
    );
  }
  deleteProperty(t, n) {
    const o = le(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && o && yt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Lt(n) || !ka.has(n)) && Me(t, "has", n), o;
  }
  ownKeys(t) {
    return Me(t, "iterate", G(t) ? "length" : nn), Reflect.ownKeys(t);
  }
}
class Ba extends Ma {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const jf = new Ia(),
  Vf = new Ba(),
  Hf = new Ia(!0),
  Wf = new Ba(!0),
  qr = (e) => e,
  ms = (e) => Reflect.getPrototypeOf(e);
function Eo(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = re(e),
    r = re(t);
  n || (Bt(t, r) && Me(s, "get", t), Me(s, "get", r));
  const { has: i } = ms(s),
    l = o ? qr : n ? Yr : Pe;
  if (i.call(s, t)) return l(e.get(t));
  if (i.call(s, r)) return l(e.get(r));
  e !== s && e.get(t);
}
function Ao(e, t = !1) {
  const n = this.__v_raw,
    o = re(n),
    s = re(e);
  return (
    t || (Bt(e, s) && Me(o, "has", e), Me(o, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function Po(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Me(re(e), "iterate", nn), Reflect.get(e, "size", e)
  );
}
function Ki(e, t = !1) {
  !t && !Qe(e) && !sn(e) && (e = re(e));
  const n = re(this);
  return ms(n).has.call(n, e) || (n.add(e), yt(n, "add", e, e)), this;
}
function qi(e, t, n = !1) {
  !n && !Qe(t) && !sn(t) && (t = re(t));
  const o = re(this),
    { has: s, get: r } = ms(o);
  let i = s.call(o, e);
  i || ((e = re(e)), (i = s.call(o, e)));
  const l = r.call(o, e);
  return (
    o.set(e, t), i ? Bt(t, l) && yt(o, "set", e, t) : yt(o, "add", e, t), this
  );
}
function Gi(e) {
  const t = re(this),
    { has: n, get: o } = ms(t);
  let s = n.call(t, e);
  s || ((e = re(e)), (s = n.call(t, e))), o && o.call(t, e);
  const r = t.delete(e);
  return s && yt(t, "delete", e, void 0), r;
}
function Yi() {
  const e = re(this),
    t = e.size !== 0,
    n = e.clear();
  return t && yt(e, "clear", void 0, void 0), n;
}
function $o(e, t) {
  return function (o, s) {
    const r = this,
      i = r.__v_raw,
      l = re(i),
      a = t ? qr : e ? Yr : Pe;
    return (
      !e && Me(l, "iterate", nn), i.forEach((u, c) => o.call(s, a(u), a(c), r))
    );
  };
}
function ko(e, t, n) {
  return function (...o) {
    const s = this.__v_raw,
      r = re(s),
      i = bn(r),
      l = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      u = s[e](...o),
      c = n ? qr : t ? Yr : Pe;
    return (
      !t && Me(r, "iterate", a ? fr : nn),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: l ? [c(f[0]), c(f[1])] : c(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ot(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zf() {
  const e = {
      get(r) {
        return Eo(this, r);
      },
      get size() {
        return Po(this);
      },
      has: Ao,
      add: Ki,
      set: qi,
      delete: Gi,
      clear: Yi,
      forEach: $o(!1, !1),
    },
    t = {
      get(r) {
        return Eo(this, r, !1, !0);
      },
      get size() {
        return Po(this);
      },
      has: Ao,
      add(r) {
        return Ki.call(this, r, !0);
      },
      set(r, i) {
        return qi.call(this, r, i, !0);
      },
      delete: Gi,
      clear: Yi,
      forEach: $o(!1, !0),
    },
    n = {
      get(r) {
        return Eo(this, r, !0);
      },
      get size() {
        return Po(this, !0);
      },
      has(r) {
        return Ao.call(this, r, !0);
      },
      add: Ot("add"),
      set: Ot("set"),
      delete: Ot("delete"),
      clear: Ot("clear"),
      forEach: $o(!0, !1),
    },
    o = {
      get(r) {
        return Eo(this, r, !0, !0);
      },
      get size() {
        return Po(this, !0);
      },
      has(r) {
        return Ao.call(this, r, !0);
      },
      add: Ot("add"),
      set: Ot("set"),
      delete: Ot("delete"),
      clear: Ot("clear"),
      forEach: $o(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = ko(r, !1, !1)),
        (n[r] = ko(r, !0, !1)),
        (t[r] = ko(r, !1, !0)),
        (o[r] = ko(r, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [Uf, Kf, qf, Gf] = zf();
function gs(e, t) {
  const n = t ? (e ? Gf : qf) : e ? Kf : Uf;
  return (o, s, r) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? o
      : Reflect.get(le(n, s) && s in o ? n : o, s, r);
}
const Yf = { get: gs(!1, !1) },
  Zf = { get: gs(!1, !0) },
  Jf = { get: gs(!0, !1) },
  Xf = { get: gs(!0, !0) },
  Na = new WeakMap(),
  Ra = new WeakMap(),
  Fa = new WeakMap(),
  La = new WeakMap();
function Qf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ed(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qf(wf(e));
}
function wt(e) {
  return sn(e) ? e : vs(e, !1, jf, Yf, Na);
}
function td(e) {
  return vs(e, !1, Hf, Zf, Ra);
}
function ys(e) {
  return vs(e, !0, Vf, Jf, Fa);
}
function hn(e) {
  return vs(e, !0, Wf, Xf, La);
}
function vs(e, t, n, o, s) {
  if (!ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = s.get(e);
  if (r) return r;
  const i = ed(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return s.set(e, l), l;
}
function _n(e) {
  return sn(e) ? _n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sn(e) {
  return !!(e && e.__v_isReadonly);
}
function Qe(e) {
  return !!(e && e.__v_isShallow);
}
function Gr(e) {
  return e ? !!e.__v_raw : !1;
}
function re(e) {
  const t = e && e.__v_raw;
  return t ? re(t) : e;
}
function nd(e) {
  return (
    !le(e, "__v_skip") && Object.isExtensible(e) && ba(e, "__v_skip", !0), e
  );
}
const Pe = (e) => (ae(e) ? wt(e) : e),
  Yr = (e) => (ae(e) ? ys(e) : e);
function xe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ee(e) {
  return Da(e, !1);
}
function od(e) {
  return Da(e, !0);
}
function Da(e, t) {
  return xe(e) ? e : new sd(e, t);
}
class sd {
  constructor(t, n) {
    (this.dep = new Kr()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : re(t)),
      (this._value = n ? t : Pe(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      o = this.__v_isShallow || Qe(t) || sn(t);
    (t = o ? t : re(t)),
      Bt(t, n) &&
        ((this._rawValue = t),
        (this._value = o ? t : Pe(t)),
        this.dep.trigger());
  }
}
function v(e) {
  return xe(e) ? e.value : e;
}
const rd = {
  get: (e, t, n) => (t === "__v_raw" ? e : v(Reflect.get(e, t, n))),
  set: (e, t, n, o) => {
    const s = e[t];
    return xe(s) && !xe(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function ja(e) {
  return _n(e) ? e : new Proxy(e, rd);
}
class id {
  constructor(t, n, o) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = o),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Nf(re(this._object), this._key);
  }
}
class ld {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Vn(e, t, n) {
  return xe(e)
    ? e
    : q(e)
    ? new ld(e)
    : ae(e) && arguments.length > 1
    ? ad(e, t, n)
    : ee(e);
}
function ad(e, t, n) {
  const o = e[t];
  return xe(o) ? o : new id(e, t, n);
}
class cd {
  constructor(t, n, o) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Kr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Xn - 1),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = o);
  }
  notify() {
    (this.flags |= 16), me !== this && this.dep.notify();
  }
  get value() {
    const t = this.dep.track();
    return Aa(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ud(e, t, n = !1) {
  let o, s;
  return q(e) ? (o = e) : ((o = e.get), (s = e.set)), new cd(o, s, n);
}
const Mo = {},
  Zo = new WeakMap();
let Xt;
function fd(e, t = !1, n = Xt) {
  if (n) {
    let o = Zo.get(n);
    o || Zo.set(n, (o = [])), o.push(e);
  }
}
function dd(e, t, n = ge) {
  const {
      immediate: o,
      deep: s,
      once: r,
      scheduler: i,
      augmentJob: l,
      call: a,
    } = n,
    u = (x) => (s ? x : Qe(x) || s === !1 || s === 0 ? gt(x, 1) : gt(x));
  let c,
    f,
    d,
    m,
    h = !1,
    y = !1;
  if (
    (xe(e)
      ? ((f = () => e.value), (h = Qe(e)))
      : _n(e)
      ? ((f = () => u(e)), (h = !0))
      : G(e)
      ? ((y = !0),
        (h = e.some((x) => _n(x) || Qe(x))),
        (f = () =>
          e.map((x) => {
            if (xe(x)) return x.value;
            if (_n(x)) return u(x);
            if (q(x)) return a ? a(x, 2) : x();
          })))
      : q(e)
      ? t
        ? (f = a ? () => a(e, 2) : e)
        : (f = () => {
            if (d) {
              Dt();
              try {
                d();
              } finally {
                jt();
              }
            }
            const x = Xt;
            Xt = c;
            try {
              return a ? a(e, 3, [m]) : e(m);
            } finally {
              Xt = x;
            }
          })
      : (f = ke),
    t && s)
  ) {
    const x = f,
      B = s === !0 ? 1 / 0 : s;
    f = () => gt(x(), B);
  }
  const b = ds(),
    w = () => {
      c.stop(), b && Vr(b.effects, c);
    };
  if (r)
    if (t) {
      const x = t;
      t = (...B) => {
        x(...B), w();
      };
    } else {
      const x = f;
      f = () => {
        x(), w();
      };
    }
  let S = y ? new Array(e.length).fill(Mo) : Mo;
  const C = (x) => {
    if (!(!(c.flags & 1) || (!c.dirty && !x)))
      if (t) {
        const B = c.run();
        if (s || h || (y ? B.some((D, K) => Bt(D, S[K])) : Bt(B, S))) {
          d && d();
          const D = Xt;
          Xt = c;
          try {
            const K = [B, S === Mo ? void 0 : y && S[0] === Mo ? [] : S, m];
            a ? a(t, 3, K) : t(...K), (S = B);
          } finally {
            Xt = D;
          }
        }
      } else c.run();
  };
  return (
    l && l(C),
    (c = new Ta(f)),
    (c.scheduler = i ? () => i(C, !1) : C),
    (m = (x) => fd(x, !1, c)),
    (d = c.onStop =
      () => {
        const x = Zo.get(c);
        if (x) {
          if (a) a(x, 4);
          else for (const B of x) B();
          Zo.delete(c);
        }
      }),
    t ? (o ? C(!0) : (S = c.run())) : i ? i(C.bind(null, !0), !0) : c.run(),
    (w.pause = c.pause.bind(c)),
    (w.resume = c.resume.bind(c)),
    (w.stop = w),
    w
  );
}
function gt(e, t = 1 / 0, n) {
  if (t <= 0 || !ae(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, xe(e))) gt(e.value, t, n);
  else if (G(e)) for (let o = 0; o < e.length; o++) gt(e[o], t, n);
  else if (ma(e) || bn(e))
    e.forEach((o) => {
      gt(o, t, n);
    });
  else if (va(e)) {
    for (const o in e) gt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && gt(e[o], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.5
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function fo(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    bs(s, t, n);
  }
}
function ot(e, t, n, o) {
  if (q(e)) {
    const s = fo(e, t, n, o);
    return (
      s &&
        ga(s) &&
        s.catch((r) => {
          bs(r, t, n);
        }),
      s
    );
  }
  if (G(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++) s.push(ot(e[r], t, n, o));
    return s;
  }
}
function bs(e, t, n, o = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || ge;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === !1) return;
      }
      l = l.parent;
    }
    if (r) {
      Dt(), fo(r, null, 10, [e, a, u]), jt();
      return;
    }
  }
  pd(e, n, s, o, i);
}
function pd(e, t, n, o = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
let eo = !1,
  dr = !1;
const Re = [];
let ct = 0;
const wn = [];
let Pt = null,
  gn = 0;
const Va = Promise.resolve();
let Zr = null;
function Ha(e) {
  const t = Zr || Va;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hd(e) {
  let t = eo ? ct + 1 : 0,
    n = Re.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1,
      s = Re[o],
      r = to(s);
    r < e || (r === e && s.flags & 2) ? (t = o + 1) : (n = o);
  }
  return t;
}
function Jr(e) {
  if (!(e.flags & 1)) {
    const t = to(e),
      n = Re[Re.length - 1];
    !n || (!(e.flags & 2) && t >= to(n)) ? Re.push(e) : Re.splice(hd(t), 0, e),
      (e.flags |= 1),
      Wa();
  }
}
function Wa() {
  !eo && !dr && ((dr = !0), (Zr = Va.then(Ua)));
}
function md(e) {
  G(e)
    ? wn.push(...e)
    : Pt && e.id === -1
    ? Pt.splice(gn + 1, 0, e)
    : e.flags & 1 || (wn.push(e), (e.flags |= 1)),
    Wa();
}
function Zi(e, t, n = eo ? ct + 1 : 0) {
  for (; n < Re.length; n++) {
    const o = Re[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid) continue;
      Re.splice(n, 1),
        n--,
        o.flags & 4 && (o.flags &= -2),
        o(),
        (o.flags &= -2);
    }
  }
}
function za(e) {
  if (wn.length) {
    const t = [...new Set(wn)].sort((n, o) => to(n) - to(o));
    if (((wn.length = 0), Pt)) {
      Pt.push(...t);
      return;
    }
    for (Pt = t, gn = 0; gn < Pt.length; gn++) {
      const n = Pt[gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Pt = null), (gn = 0);
  }
}
const to = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ua(e) {
  (dr = !1), (eo = !0);
  try {
    for (ct = 0; ct < Re.length; ct++) {
      const t = Re[ct];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        fo(t, t.i, t.i ? 15 : 14),
        (t.flags &= -2));
    }
  } finally {
    for (; ct < Re.length; ct++) {
      const t = Re[ct];
      t && (t.flags &= -2);
    }
    (ct = 0),
      (Re.length = 0),
      za(),
      (eo = !1),
      (Zr = null),
      (Re.length || wn.length) && Ua();
  }
}
let Oe = null,
  Ka = null;
function Jo(e) {
  const t = Oe;
  return (Oe = e), (Ka = (e && e.type.__scopeId) || null), t;
}
function ie(e, t = Oe, n) {
  if (!t || e._n) return e;
  const o = (...s) => {
    o._d && al(-1);
    const r = Jo(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Jo(r), o._d && al(1);
    }
    return i;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function on(e, t) {
  if (Oe === null) return e;
  const n = Es(Oe),
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, a = ge] = t[s];
    r &&
      (q(r) && (r = { mounted: r, updated: r }),
      r.deep && gt(i),
      o.push({
        dir: r,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function Wt(e, t, n, o) {
  const s = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[o];
    a && (Dt(), ot(a, n, 8, [e.el, l, e, t]), jt());
  }
}
const qa = Symbol("_vte"),
  Ga = (e) => e.__isTeleport,
  Un = (e) => e && (e.disabled || e.disabled === ""),
  gd = (e) => e && (e.defer || e.defer === ""),
  Ji = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  Xi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  pr = (e, t) => {
    const n = e && e.to;
    return _e(n) ? (t ? t(n) : null) : n;
  },
  yd = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, s, r, i, l, a, u) {
      const {
          mc: c,
          pc: f,
          pbc: d,
          o: { insert: m, querySelector: h, createText: y, createComment: b },
        } = u,
        w = Un(t.props);
      let { shapeFlag: S, children: C, dynamicChildren: x } = t;
      if (e == null) {
        const B = (t.el = y("")),
          D = (t.anchor = y(""));
        m(B, n, o), m(D, n, o);
        const K = (k, P) => {
            S & 16 &&
              (s && s.isCE && (s.ce._teleportTarget = k),
              c(C, k, P, s, r, i, l, a));
          },
          M = () => {
            const k = (t.target = pr(t.props, h)),
              P = Za(k, t, y, m);
            k &&
              (i !== "svg" && Ji(k)
                ? (i = "svg")
                : i !== "mathml" && Xi(k) && (i = "mathml"),
              w || (K(k, P), Vo(t)));
          };
        w && (K(n, D), Vo(t)), gd(t.props) ? Le(M, r) : M();
      } else {
        (t.el = e.el), (t.targetStart = e.targetStart);
        const B = (t.anchor = e.anchor),
          D = (t.target = e.target),
          K = (t.targetAnchor = e.targetAnchor),
          M = Un(e.props),
          k = M ? n : D,
          P = M ? B : K;
        if (
          (i === "svg" || Ji(D)
            ? (i = "svg")
            : (i === "mathml" || Xi(D)) && (i = "mathml"),
          x
            ? (d(e.dynamicChildren, x, k, s, r, i, l), ni(e, t, !0))
            : a || f(e, t, k, P, s, r, i, l, !1),
          w)
        )
          M
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Io(t, n, B, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const N = (t.target = pr(t.props, h));
          N && Io(t, N, null, u, 0);
        } else M && Io(t, D, K, u, 1);
        Vo(t);
      }
    },
    remove(e, t, n, { um: o, o: { remove: s } }, r) {
      const {
        shapeFlag: i,
        children: l,
        anchor: a,
        targetStart: u,
        targetAnchor: c,
        target: f,
        props: d,
      } = e;
      if ((f && (s(u), s(c)), r && s(a), i & 16)) {
        const m = r || !Un(d);
        for (let h = 0; h < l.length; h++) {
          const y = l[h];
          o(y, t, n, m, !!y.dynamicChildren);
        }
      }
    },
    move: Io,
    hydrate: vd,
  };
function Io(e, t, n, { o: { insert: o }, m: s }, r = 2) {
  r === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: u, props: c } = e,
    f = r === 2;
  if ((f && o(i, t, n), (!f || Un(c)) && a & 16))
    for (let d = 0; d < u.length; d++) s(u[d], t, n, 2);
  f && o(l, t, n);
}
function vd(
  e,
  t,
  n,
  o,
  s,
  r,
  {
    o: {
      nextSibling: i,
      parentNode: l,
      querySelector: a,
      insert: u,
      createText: c,
    },
  },
  f
) {
  const d = (t.target = pr(t.props, a));
  if (d) {
    const m = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Un(t.props))
        (t.anchor = f(i(e), t, l(e), n, o, s, r)),
          (t.targetStart = m),
          (t.targetAnchor = m && i(m));
      else {
        t.anchor = i(e);
        let h = m;
        for (; h; ) {
          if (h && h.nodeType === 8) {
            if (h.data === "teleport start anchor") t.targetStart = h;
            else if (h.data === "teleport anchor") {
              (t.targetAnchor = h),
                (d._lpa = t.targetAnchor && i(t.targetAnchor));
              break;
            }
          }
          h = i(h);
        }
        t.targetAnchor || Za(d, t, c, u), f(m && i(m), t, d, n, o, s, r);
      }
    Vo(t);
  }
  return t.anchor && i(t.anchor);
}
const Ya = yd;
function Vo(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.targetStart;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
function Za(e, t, n, o) {
  const s = (t.targetStart = n("")),
    r = (t.targetAnchor = n(""));
  return (s[qa] = r), e && (o(s, e), o(r, e)), r;
}
const $t = Symbol("_leaveCb"),
  Bo = Symbol("_enterCb");
function bd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    xt(() => {
      e.isMounted = !0;
    }),
    Cs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ze = [Function, Array],
  Ja = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ze,
    onEnter: Ze,
    onAfterEnter: Ze,
    onEnterCancelled: Ze,
    onBeforeLeave: Ze,
    onLeave: Ze,
    onAfterLeave: Ze,
    onLeaveCancelled: Ze,
    onBeforeAppear: Ze,
    onAppear: Ze,
    onAfterAppear: Ze,
    onAppearCancelled: Ze,
  },
  Xa = (e) => {
    const t = e.subTree;
    return t.component ? Xa(t.component) : t;
  },
  _d = {
    name: "BaseTransition",
    props: Ja,
    setup(e, { slots: t }) {
      const n = Tt(),
        o = bd();
      return () => {
        const s = t.default && tc(t.default(), !0);
        if (!s || !s.length) return;
        const r = Qa(s),
          i = re(e),
          { mode: l } = i;
        if (o.isLeaving) return qs(r);
        const a = Qi(r);
        if (!a) return qs(r);
        let u = hr(a, i, o, n, (d) => (u = d));
        a.type !== $e && no(a, u);
        const c = n.subTree,
          f = c && Qi(c);
        if (f && f.type !== $e && !Qt(a, f) && Xa(n).type !== $e) {
          const d = hr(f, i, o, n);
          if ((no(f, d), l === "out-in" && a.type !== $e))
            return (
              (o.isLeaving = !0),
              (d.afterLeave = () => {
                (o.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete d.afterLeave;
              }),
              qs(r)
            );
          l === "in-out" &&
            a.type !== $e &&
            (d.delayLeave = (m, h, y) => {
              const b = ec(o, f);
              (b[String(f.key)] = f),
                (m[$t] = () => {
                  h(), (m[$t] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = y);
            });
        }
        return r;
      };
    },
  };
function Qa(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== $e) {
        t = n;
        break;
      }
  }
  return t;
}
const wd = _d;
function ec(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function hr(e, t, n, o, s) {
  const {
      appear: r,
      mode: i,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: m,
      onAfterLeave: h,
      onLeaveCancelled: y,
      onBeforeAppear: b,
      onAppear: w,
      onAfterAppear: S,
      onAppearCancelled: C,
    } = t,
    x = String(e.key),
    B = ec(n, e),
    D = (k, P) => {
      k && ot(k, o, 9, P);
    },
    K = (k, P) => {
      const N = P[1];
      D(k, P),
        G(k) ? k.every(($) => $.length <= 1) && N() : k.length <= 1 && N();
    },
    M = {
      mode: i,
      persisted: l,
      beforeEnter(k) {
        let P = a;
        if (!n.isMounted)
          if (r) P = b || a;
          else return;
        k[$t] && k[$t](!0);
        const N = B[x];
        N && Qt(e, N) && N.el[$t] && N.el[$t](), D(P, [k]);
      },
      enter(k) {
        let P = u,
          N = c,
          $ = f;
        if (!n.isMounted)
          if (r) (P = w || u), (N = S || c), ($ = C || f);
          else return;
        let Y = !1;
        const ce = (k[Bo] = (we) => {
          Y ||
            ((Y = !0),
            we ? D($, [k]) : D(N, [k]),
            M.delayedLeave && M.delayedLeave(),
            (k[Bo] = void 0));
        });
        P ? K(P, [k, ce]) : ce();
      },
      leave(k, P) {
        const N = String(e.key);
        if ((k[Bo] && k[Bo](!0), n.isUnmounting)) return P();
        D(d, [k]);
        let $ = !1;
        const Y = (k[$t] = (ce) => {
          $ ||
            (($ = !0),
            P(),
            ce ? D(y, [k]) : D(h, [k]),
            (k[$t] = void 0),
            B[N] === e && delete B[N]);
        });
        (B[N] = e), m ? K(m, [k, Y]) : Y();
      },
      clone(k) {
        const P = hr(k, t, n, o, s);
        return s && s(P), P;
      },
    };
  return M;
}
function qs(e) {
  if (_s(e)) return (e = bt(e)), (e.children = null), e;
}
function Qi(e) {
  if (!_s(e)) return Ga(e.type) && e.children ? Qa(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && q(n.default)) return n.default();
  }
}
function no(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), no(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function tc(e, t = !1, n) {
  let o = [],
    s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ve
      ? (i.patchFlag & 128 && s++, (o = o.concat(tc(i.children, t, l))))
      : (t || i.type !== $e) && o.push(l != null ? bt(i, { key: l }) : i);
  }
  if (s > 1) for (let r = 0; r < o.length; r++) o[r].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function ne(e, t) {
  return q(e) ? Se({ name: e.name }, t, { setup: e }) : e;
}
function nc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mr(e, t, n, o, s = !1) {
  if (G(e)) {
    e.forEach((h, y) => mr(h, t && (G(t) ? t[y] : t), n, o, s));
    return;
  }
  if (Cn(o) && !s) return;
  const r = o.shapeFlag & 4 ? Es(o.component) : o.el,
    i = s ? null : r,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ge ? (l.refs = {}) : l.refs,
    f = l.setupState,
    d = re(f),
    m = f === ge ? () => !1 : (h) => le(d, h);
  if (
    (u != null &&
      u !== a &&
      (_e(u)
        ? ((c[u] = null), m(u) && (f[u] = null))
        : xe(u) && (u.value = null)),
    q(a))
  )
    fo(a, l, 12, [i, c]);
  else {
    const h = _e(a),
      y = xe(a);
    if (h || y) {
      const b = () => {
        if (e.f) {
          const w = h ? (m(a) ? f[a] : c[a]) : a.value;
          s
            ? G(w) && Vr(w, r)
            : G(w)
            ? w.includes(r) || w.push(r)
            : h
            ? ((c[a] = [r]), m(a) && (f[a] = c[a]))
            : ((a.value = [r]), e.k && (c[e.k] = a.value));
        } else
          h
            ? ((c[a] = i), m(a) && (f[a] = i))
            : y && ((a.value = i), e.k && (c[e.k] = i));
      };
      i ? ((b.id = -1), Le(b, n)) : b();
    }
  }
}
const Cn = (e) => !!e.type.__asyncLoader,
  _s = (e) => e.type.__isKeepAlive;
function Cd(e, t) {
  sc(e, "a", t);
}
function oc(e, t) {
  sc(e, "da", t);
}
function sc(e, t, n = Ee) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((ws(t, o, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      _s(s.parent.vnode) && xd(o, t, n, s), (s = s.parent);
  }
}
function xd(e, t, n, o) {
  const s = ws(t, e, o, !0);
  xs(() => {
    Vr(o[t], s);
  }, n);
}
function ws(e, t, n = Ee, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          Dt();
          const l = mo(n),
            a = ot(t, n, e, i);
          return l(), jt(), a;
        });
    return o ? s.unshift(r) : s.push(r), r;
  }
}
const Ct =
    (e) =>
    (t, n = Ee) => {
      (!Os || e === "sp") && ws(e, (...o) => t(...o), n);
    },
  rc = Ct("bm"),
  xt = Ct("m"),
  Td = Ct("bu"),
  Sd = Ct("u"),
  Cs = Ct("bum"),
  xs = Ct("um"),
  Od = Ct("sp"),
  Ed = Ct("rtg"),
  Ad = Ct("rtc");
function Pd(e, t = Ee) {
  ws("ec", e, t);
}
const Xr = "components",
  $d = "directives";
function zt(e, t) {
  return Qr(Xr, e, !0, t) || e;
}
const ic = Symbol.for("v-ndc");
function kd(e) {
  return _e(e) ? Qr(Xr, e, !1) || e : e || ic;
}
function Md(e) {
  return Qr($d, e);
}
function Qr(e, t, n = !0, o = !1) {
  const s = Oe || Ee;
  if (s) {
    const r = s.type;
    if (e === Xr) {
      const l = bp(r, !1);
      if (l && (l === t || l === et(t) || l === fs(et(t)))) return r;
    }
    const i = el(s[e] || r[e], t) || el(s.appContext[e], t);
    return !i && o ? r : i;
  }
}
function el(e, t) {
  return e && (e[t] || e[et(t)] || e[fs(et(t))]);
}
function No(e, t, n, o) {
  let s;
  const r = n,
    i = G(e);
  if (i || _e(e)) {
    const l = i && _n(e);
    let a = !1;
    l && ((a = !Qe(e)), (e = hs(e))), (s = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      s[u] = t(a ? Pe(e[u]) : e[u], u, void 0, r);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, r);
  } else if (ae(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, r));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        s[a] = t(e[c], c, a, r);
      }
    }
  else s = [];
  return s;
}
function be(e, t, n = {}, o, s) {
  if (Oe.ce || (Oe.parent && Cn(Oe.parent) && Oe.parent.ce))
    return (
      t !== "default" && (n.name = t),
      L(),
      Ye(ve, null, [Q("slot", n, o && o())], 64)
    );
  let r = e[t];
  r && r._c && (r._d = !1), L();
  const i = r && lc(r(n)),
    l = Ye(
      ve,
      { key: (n.key || (i && i.key) || `_${t}`) + (!i && o ? "_fb" : "") },
      i || (o ? o() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    l
  );
}
function lc(e) {
  return e.some((t) =>
    Pn(t) ? !(t.type === $e || (t.type === ve && !lc(t.children))) : !0
  )
    ? e
    : null;
}
function Id(e, t) {
  const n = {};
  for (const o in e) n[jo(o)] = e[o];
  return n;
}
const gr = (e) => (e ? (Ec(e) ? Es(e) : gr(e.parent)) : null),
  Kn = Se(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gr(e.parent),
    $root: (e) => gr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ei(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Jr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ha.bind(e.proxy)),
    $watch: (e) => tp.bind(e),
  }),
  Gs = (e, t) => e !== ge && !e.__isScriptSetup && le(e, t),
  Bd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: o,
        data: s,
        props: r,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return o[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Gs(o, t)) return (i[t] = 1), o[t];
          if (s !== ge && le(s, t)) return (i[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && le(u, t)) return (i[t] = 3), r[t];
          if (n !== ge && le(n, t)) return (i[t] = 4), n[t];
          yr && (i[t] = 0);
        }
      }
      const c = Kn[t];
      let f, d;
      if (c) return t === "$attrs" && Me(e.attrs, "get", ""), c(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== ge && le(n, t)) return (i[t] = 4), n[t];
      if (((d = a.config.globalProperties), le(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: s, ctx: r } = e;
      return Gs(s, t)
        ? ((s[t] = n), !0)
        : o !== ge && le(o, t)
        ? ((o[t] = n), !0)
        : le(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: s,
          propsOptions: r,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ge && le(e, i)) ||
        Gs(t, i) ||
        ((l = r[0]) && le(l, i)) ||
        le(o, i) ||
        le(Kn, i) ||
        le(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : le(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function po() {
  return Nd().slots;
}
function Nd() {
  const e = Tt();
  return e.setupContext || (e.setupContext = Pc(e));
}
function tl(e) {
  return G(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let yr = !0;
function Rd(e) {
  const t = ei(e),
    n = e.proxy,
    o = e.ctx;
  (yr = !1), t.beforeCreate && nl(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: m,
    updated: h,
    activated: y,
    deactivated: b,
    beforeDestroy: w,
    beforeUnmount: S,
    destroyed: C,
    unmounted: x,
    render: B,
    renderTracked: D,
    renderTriggered: K,
    errorCaptured: M,
    serverPrefetch: k,
    expose: P,
    inheritAttrs: N,
    components: $,
    directives: Y,
    filters: ce,
  } = t;
  if ((u && Fd(u, o, null), i))
    for (const te in i) {
      const oe = i[te];
      q(oe) && (o[te] = oe.bind(n));
    }
  if (s) {
    const te = s.call(n, n);
    ae(te) && (e.data = wt(te));
  }
  if (((yr = !0), r))
    for (const te in r) {
      const oe = r[te],
        We = q(oe) ? oe.bind(n, n) : q(oe.get) ? oe.get.bind(n, n) : ke,
        St = !q(oe) && q(oe.set) ? oe.set.bind(n) : ke,
        Ht = I({ get: We, set: St });
      Object.defineProperty(o, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Ht.value,
        set: (st) => (Ht.value = st),
      });
    }
  if (l) for (const te in l) ac(l[te], o, n, te);
  if (a) {
    const te = q(a) ? a.call(n) : a;
    Reflect.ownKeys(te).forEach((oe) => {
      Ts(oe, te[oe]);
    });
  }
  c && nl(c, e, "c");
  function pe(te, oe) {
    G(oe) ? oe.forEach((We) => te(We.bind(n))) : oe && te(oe.bind(n));
  }
  if (
    (pe(rc, f),
    pe(xt, d),
    pe(Td, m),
    pe(Sd, h),
    pe(Cd, y),
    pe(oc, b),
    pe(Pd, M),
    pe(Ad, D),
    pe(Ed, K),
    pe(Cs, S),
    pe(xs, x),
    pe(Od, k),
    G(P))
  )
    if (P.length) {
      const te = e.exposed || (e.exposed = {});
      P.forEach((oe) => {
        Object.defineProperty(te, oe, {
          get: () => n[oe],
          set: (We) => (n[oe] = We),
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === ke && (e.render = B),
    N != null && (e.inheritAttrs = N),
    $ && (e.components = $),
    Y && (e.directives = Y),
    k && nc(e);
}
function Fd(e, t, n = ke) {
  G(e) && (e = vr(e));
  for (const o in e) {
    const s = e[o];
    let r;
    ae(s)
      ? "default" in s
        ? (r = je(s.from || o, s.default, !0))
        : (r = je(s.from || o))
      : (r = je(s)),
      xe(r)
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (i) => (r.value = i),
          })
        : (t[o] = r);
  }
}
function nl(e, t, n) {
  ot(G(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ac(e, t, n, o) {
  let s = o.includes(".") ? wc(n, o) : () => n[o];
  if (_e(e)) {
    const r = t[e];
    q(r) && fe(s, r);
  } else if (q(e)) fe(s, e.bind(n));
  else if (ae(e))
    if (G(e)) e.forEach((r) => ac(r, t, n, o));
    else {
      const r = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(r) && fe(s, r, e);
    }
}
function ei(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = r.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !o
      ? (a = t)
      : ((a = {}), s.length && s.forEach((u) => Xo(a, u, i, !0)), Xo(a, t, i)),
    ae(t) && r.set(t, a),
    a
  );
}
function Xo(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Xo(e, r, n, !0), s && s.forEach((i) => Xo(e, i, n, !0));
  for (const i in t)
    if (!(o && i === "expose")) {
      const l = Ld[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ld = {
  data: ol,
  props: sl,
  emits: sl,
  methods: Hn,
  computed: Hn,
  beforeCreate: Be,
  created: Be,
  beforeMount: Be,
  mounted: Be,
  beforeUpdate: Be,
  updated: Be,
  beforeDestroy: Be,
  beforeUnmount: Be,
  destroyed: Be,
  unmounted: Be,
  activated: Be,
  deactivated: Be,
  errorCaptured: Be,
  serverPrefetch: Be,
  components: Hn,
  directives: Hn,
  watch: jd,
  provide: ol,
  inject: Dd,
};
function ol(e, t) {
  return t
    ? e
      ? function () {
          return Se(
            q(e) ? e.call(this, this) : e,
            q(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Dd(e, t) {
  return Hn(vr(e), vr(t));
}
function vr(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Hn(e, t) {
  return e ? Se(Object.create(null), e, t) : t;
}
function sl(e, t) {
  return e
    ? G(e) && G(t)
      ? [...new Set([...e, ...t])]
      : Se(Object.create(null), tl(e), tl(t ?? {}))
    : t;
}
function jd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Se(Object.create(null), e);
  for (const o in t) n[o] = Be(e[o], t[o]);
  return n;
}
function cc() {
  return {
    app: null,
    config: {
      isNativeTag: bf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Vd = 0;
function Hd(e, t) {
  return function (o, s = null) {
    q(o) || (o = Se({}, o)), s != null && !ae(s) && (s = null);
    const r = cc(),
      i = new WeakSet(),
      l = [];
    let a = !1;
    const u = (r.app = {
      _uid: Vd++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: wp,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          i.has(c) ||
            (c && q(c.install)
              ? (i.add(c), c.install(u, ...f))
              : q(c) && (i.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, f) {
        return f ? ((r.components[c] = f), u) : r.components[c];
      },
      directive(c, f) {
        return f ? ((r.directives[c] = f), u) : r.directives[c];
      },
      mount(c, f, d) {
        if (!a) {
          const m = u._ceVNode || Q(o, s);
          return (
            (m.appContext = r),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            f && t ? t(m, c) : e(m, c, d),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            Es(m.component)
          );
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a &&
          (ot(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return (r.provides[c] = f), u;
      },
      runWithContext(c) {
        const f = xn;
        xn = u;
        try {
          return c();
        } finally {
          xn = f;
        }
      },
    });
    return u;
  };
}
let xn = null;
function Ts(e, t) {
  if (Ee) {
    let n = Ee.provides;
    const o = Ee.parent && Ee.parent.provides;
    o === n && (n = Ee.provides = Object.create(o)), (n[e] = t);
  }
}
function je(e, t, n = !1) {
  const o = Ee || Oe;
  if (o || xn) {
    const s = xn
      ? xn._context.provides
      : o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && q(t) ? t.call(o && o.proxy) : t;
  }
}
const uc = {},
  fc = () => Object.create(uc),
  dc = (e) => Object.getPrototypeOf(e) === uc;
function Wd(e, t, n, o = !1) {
  const s = {},
    r = fc();
  (e.propsDefaults = Object.create(null)), pc(e, t, s, r);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = o ? s : td(s)) : e.type.props ? (e.props = s) : (e.props = r),
    (e.attrs = r);
}
function zd(e, t, n, o) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    l = re(s),
    [a] = e.propsOptions;
  let u = !1;
  if ((o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (Ss(e.emitsOptions, d)) continue;
        const m = t[d];
        if (a)
          if (le(r, d)) m !== r[d] && ((r[d] = m), (u = !0));
          else {
            const h = et(d);
            s[h] = br(a, l, h, m, e, !1);
          }
        else m !== r[d] && ((r[d] = m), (u = !0));
      }
    }
  } else {
    pc(e, t, s, r) && (u = !0);
    let c;
    for (const f in l)
      (!t || (!le(t, f) && ((c = fn(f)) === f || !le(t, c)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (s[f] = br(a, l, f, void 0, e, !0))
          : delete s[f]);
    if (r !== l)
      for (const f in r) (!t || !le(t, f)) && (delete r[f], (u = !0));
  }
  u && yt(e.attrs, "set", "");
}
function pc(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (Wn(a)) continue;
      const u = t[a];
      let c;
      s && le(s, (c = et(a)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : Ss(e.emitsOptions, a) ||
          ((!(a in o) || u !== o[a]) && ((o[a] = u), (i = !0)));
    }
  if (r) {
    const a = re(n),
      u = l || ge;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = br(s, a, f, u[f], e, !le(u, f));
    }
  }
  return i;
}
function br(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = le(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && q(a)) {
        const { propsDefaults: u } = s;
        if (n in u) o = u[n];
        else {
          const c = mo(s);
          (o = u[n] = a.call(null, t)), c();
        }
      } else o = a;
      s.ce && s.ce._setProp(n, o);
    }
    i[0] &&
      (r && !l ? (o = !1) : i[1] && (o === "" || o === fn(n)) && (o = !0));
  }
  return o;
}
const Ud = new WeakMap();
function hc(e, t, n = !1) {
  const o = n ? Ud : t.propsCache,
    s = o.get(e);
  if (s) return s;
  const r = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!q(e)) {
    const c = (f) => {
      a = !0;
      const [d, m] = hc(f, t, !0);
      Se(i, d), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a) return ae(e) && o.set(e, vn), vn;
  if (G(r))
    for (let c = 0; c < r.length; c++) {
      const f = et(r[c]);
      rl(f) && (i[f] = ge);
    }
  else if (r)
    for (const c in r) {
      const f = et(c);
      if (rl(f)) {
        const d = r[c],
          m = (i[f] = G(d) || q(d) ? { type: d } : Se({}, d)),
          h = m.type;
        let y = !1,
          b = !0;
        if (G(h))
          for (let w = 0; w < h.length; ++w) {
            const S = h[w],
              C = q(S) && S.name;
            if (C === "Boolean") {
              y = !0;
              break;
            } else C === "String" && (b = !1);
          }
        else y = q(h) && h.name === "Boolean";
        (m[0] = y), (m[1] = b), (y || le(m, "default")) && l.push(f);
      }
    }
  const u = [i, l];
  return ae(e) && o.set(e, u), u;
}
function rl(e) {
  return e[0] !== "$" && !Wn(e);
}
const mc = (e) => e[0] === "_" || e === "$stable",
  ti = (e) => (G(e) ? e.map(ut) : [ut(e)]),
  Kd = (e, t, n) => {
    if (t._n) return t;
    const o = ie((...s) => ti(t(...s)), n);
    return (o._c = !1), o;
  },
  gc = (e, t, n) => {
    const o = e._ctx;
    for (const s in e) {
      if (mc(s)) continue;
      const r = e[s];
      if (q(r)) t[s] = Kd(s, r, o);
      else if (r != null) {
        const i = ti(r);
        t[s] = () => i;
      }
    }
  },
  yc = (e, t) => {
    const n = ti(t);
    e.slots.default = () => n;
  },
  vc = (e, t, n) => {
    for (const o in t) (n || o !== "_") && (e[o] = t[o]);
  },
  qd = (e, t, n) => {
    const o = (e.slots = fc());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (vc(o, t, n), n && ba(o, "_", s, !0)) : gc(t, o);
    } else t && yc(e, t);
  },
  Gd = (e, t, n) => {
    const { vnode: o, slots: s } = e;
    let r = !0,
      i = ge;
    if (o.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (r = !1)
          : vc(s, t, n)
        : ((r = !t.$stable), gc(t, s)),
        (i = t);
    } else t && (yc(e, t), (i = { default: 1 }));
    if (r) for (const l in s) !mc(l) && i[l] == null && delete s[l];
  },
  Le = ap;
function Yd(e) {
  return Zd(e);
}
function Zd(e, t) {
  const n = _a();
  n.__VUE__ = !0;
  const {
      insert: o,
      remove: s,
      patchProp: r,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: m = ke,
      insertStaticContent: h,
    } = e,
    y = (
      p,
      g,
      _,
      E = null,
      T = null,
      O = null,
      j = void 0,
      F = null,
      R = !!g.dynamicChildren
    ) => {
      if (p === g) return;
      p && !Qt(p, g) && ((E = Oo(p)), st(p, T, O, !0), (p = null)),
        g.patchFlag === -2 && ((R = !1), (g.dynamicChildren = null));
      const { type: A, ref: Z, shapeFlag: V } = g;
      switch (A) {
        case ho:
          b(p, g, _, E);
          break;
        case $e:
          w(p, g, _, E);
          break;
        case Ho:
          p == null && S(g, _, E, j);
          break;
        case ve:
          $(p, g, _, E, T, O, j, F, R);
          break;
        default:
          V & 1
            ? B(p, g, _, E, T, O, j, F, R)
            : V & 6
            ? Y(p, g, _, E, T, O, j, F, R)
            : (V & 64 || V & 128) && A.process(p, g, _, E, T, O, j, F, R, Nn);
      }
      Z != null && T && mr(Z, p && p.ref, O, g || p, !g);
    },
    b = (p, g, _, E) => {
      if (p == null) o((g.el = l(g.children)), _, E);
      else {
        const T = (g.el = p.el);
        g.children !== p.children && u(T, g.children);
      }
    },
    w = (p, g, _, E) => {
      p == null ? o((g.el = a(g.children || "")), _, E) : (g.el = p.el);
    },
    S = (p, g, _, E) => {
      [p.el, p.anchor] = h(p.children, g, _, E, p.el, p.anchor);
    },
    C = ({ el: p, anchor: g }, _, E) => {
      let T;
      for (; p && p !== g; ) (T = d(p)), o(p, _, E), (p = T);
      o(g, _, E);
    },
    x = ({ el: p, anchor: g }) => {
      let _;
      for (; p && p !== g; ) (_ = d(p)), s(p), (p = _);
      s(g);
    },
    B = (p, g, _, E, T, O, j, F, R) => {
      g.type === "svg" ? (j = "svg") : g.type === "math" && (j = "mathml"),
        p == null ? D(g, _, E, T, O, j, F, R) : k(p, g, T, O, j, F, R);
    },
    D = (p, g, _, E, T, O, j, F) => {
      let R, A;
      const { props: Z, shapeFlag: V, transition: U, dirs: J } = p;
      if (
        ((R = p.el = i(p.type, O, Z && Z.is, Z)),
        V & 8
          ? c(R, p.children)
          : V & 16 && M(p.children, R, null, E, T, Ys(p, O), j, F),
        J && Wt(p, null, E, "created"),
        K(R, p, p.scopeId, j, E),
        Z)
      ) {
        for (const ye in Z)
          ye !== "value" && !Wn(ye) && r(R, ye, null, Z[ye], O, E);
        "value" in Z && r(R, "value", null, Z.value, O),
          (A = Z.onVnodeBeforeMount) && it(A, E, p);
      }
      J && Wt(p, null, E, "beforeMount");
      const se = Jd(T, U);
      se && U.beforeEnter(R),
        o(R, g, _),
        ((A = Z && Z.onVnodeMounted) || se || J) &&
          Le(() => {
            A && it(A, E, p), se && U.enter(R), J && Wt(p, null, E, "mounted");
          }, T);
    },
    K = (p, g, _, E, T) => {
      if ((_ && m(p, _), E)) for (let O = 0; O < E.length; O++) m(p, E[O]);
      if (T) {
        let O = T.subTree;
        if (
          g === O ||
          (xc(O.type) && (O.ssContent === g || O.ssFallback === g))
        ) {
          const j = T.vnode;
          K(p, j, j.scopeId, j.slotScopeIds, T.parent);
        }
      }
    },
    M = (p, g, _, E, T, O, j, F, R = 0) => {
      for (let A = R; A < p.length; A++) {
        const Z = (p[A] = F ? kt(p[A]) : ut(p[A]));
        y(null, Z, g, _, E, T, O, j, F);
      }
    },
    k = (p, g, _, E, T, O, j) => {
      const F = (g.el = p.el);
      let { patchFlag: R, dynamicChildren: A, dirs: Z } = g;
      R |= p.patchFlag & 16;
      const V = p.props || ge,
        U = g.props || ge;
      let J;
      if (
        (_ && Ut(_, !1),
        (J = U.onVnodeBeforeUpdate) && it(J, _, g, p),
        Z && Wt(g, p, _, "beforeUpdate"),
        _ && Ut(_, !0),
        ((V.innerHTML && U.innerHTML == null) ||
          (V.textContent && U.textContent == null)) &&
          c(F, ""),
        A
          ? P(p.dynamicChildren, A, F, _, E, Ys(g, T), O)
          : j || oe(p, g, F, null, _, E, Ys(g, T), O, !1),
        R > 0)
      ) {
        if (R & 16) N(F, V, U, _, T);
        else if (
          (R & 2 && V.class !== U.class && r(F, "class", null, U.class, T),
          R & 4 && r(F, "style", V.style, U.style, T),
          R & 8)
        ) {
          const se = g.dynamicProps;
          for (let ye = 0; ye < se.length; ye++) {
            const de = se[ye],
              ze = V[de],
              Ae = U[de];
            (Ae !== ze || de === "value") && r(F, de, ze, Ae, T, _);
          }
        }
        R & 1 && p.children !== g.children && c(F, g.children);
      } else !j && A == null && N(F, V, U, _, T);
      ((J = U.onVnodeUpdated) || Z) &&
        Le(() => {
          J && it(J, _, g, p), Z && Wt(g, p, _, "updated");
        }, E);
    },
    P = (p, g, _, E, T, O, j) => {
      for (let F = 0; F < g.length; F++) {
        const R = p[F],
          A = g[F],
          Z =
            R.el && (R.type === ve || !Qt(R, A) || R.shapeFlag & 70)
              ? f(R.el)
              : _;
        y(R, A, Z, null, E, T, O, j, !0);
      }
    },
    N = (p, g, _, E, T) => {
      if (g !== _) {
        if (g !== ge)
          for (const O in g) !Wn(O) && !(O in _) && r(p, O, g[O], null, T, E);
        for (const O in _) {
          if (Wn(O)) continue;
          const j = _[O],
            F = g[O];
          j !== F && O !== "value" && r(p, O, F, j, T, E);
        }
        "value" in _ && r(p, "value", g.value, _.value, T);
      }
    },
    $ = (p, g, _, E, T, O, j, F, R) => {
      const A = (g.el = p ? p.el : l("")),
        Z = (g.anchor = p ? p.anchor : l(""));
      let { patchFlag: V, dynamicChildren: U, slotScopeIds: J } = g;
      J && (F = F ? F.concat(J) : J),
        p == null
          ? (o(A, _, E), o(Z, _, E), M(g.children || [], _, Z, T, O, j, F, R))
          : V > 0 && V & 64 && U && p.dynamicChildren
          ? (P(p.dynamicChildren, U, _, T, O, j, F),
            (g.key != null || (T && g === T.subTree)) && ni(p, g, !0))
          : oe(p, g, _, Z, T, O, j, F, R);
    },
    Y = (p, g, _, E, T, O, j, F, R) => {
      (g.slotScopeIds = F),
        p == null
          ? g.shapeFlag & 512
            ? T.ctx.activate(g, _, E, j, R)
            : ce(g, _, E, T, O, j, R)
          : we(p, g, R);
    },
    ce = (p, g, _, E, T, O, j) => {
      const F = (p.component = mp(p, E, T));
      if ((_s(p) && (F.ctx.renderer = Nn), gp(F, !1, j), F.asyncDep)) {
        if ((T && T.registerDep(F, pe, j), !p.el)) {
          const R = (F.subTree = Q($e));
          w(null, R, g, _);
        }
      } else pe(F, p, g, _, T, O, j);
    },
    we = (p, g, _) => {
      const E = (g.component = p.component);
      if (ip(p, g, _))
        if (E.asyncDep && !E.asyncResolved) {
          te(E, g, _);
          return;
        } else (E.next = g), E.update();
      else (g.el = p.el), (E.vnode = g);
    },
    pe = (p, g, _, E, T, O, j) => {
      const F = () => {
        if (p.isMounted) {
          let { next: V, bu: U, u: J, parent: se, vnode: ye } = p;
          {
            const Ue = bc(p);
            if (Ue) {
              V && ((V.el = ye.el), te(p, V, j)),
                Ue.asyncDep.then(() => {
                  p.isUnmounted || F();
                });
              return;
            }
          }
          let de = V,
            ze;
          Ut(p, !1),
            V ? ((V.el = ye.el), te(p, V, j)) : (V = ye),
            U && Hs(U),
            (ze = V.props && V.props.onVnodeBeforeUpdate) && it(ze, se, V, ye),
            Ut(p, !0);
          const Ae = Zs(p),
            tt = p.subTree;
          (p.subTree = Ae),
            y(tt, Ae, f(tt.el), Oo(tt), p, T, O),
            (V.el = Ae.el),
            de === null && lp(p, Ae.el),
            J && Le(J, T),
            (ze = V.props && V.props.onVnodeUpdated) &&
              Le(() => it(ze, se, V, ye), T);
        } else {
          let V;
          const { el: U, props: J } = g,
            { bm: se, m: ye, parent: de, root: ze, type: Ae } = p,
            tt = Cn(g);
          if (
            (Ut(p, !1),
            se && Hs(se),
            !tt && (V = J && J.onVnodeBeforeMount) && it(V, de, g),
            Ut(p, !0),
            U && ji)
          ) {
            const Ue = () => {
              (p.subTree = Zs(p)), ji(U, p.subTree, p, T, null);
            };
            tt && Ae.__asyncHydrate ? Ae.__asyncHydrate(U, p, Ue) : Ue();
          } else {
            ze.ce && ze.ce._injectChildStyle(Ae);
            const Ue = (p.subTree = Zs(p));
            y(null, Ue, _, E, p, T, O), (g.el = Ue.el);
          }
          if ((ye && Le(ye, T), !tt && (V = J && J.onVnodeMounted))) {
            const Ue = g;
            Le(() => it(V, de, Ue), T);
          }
          (g.shapeFlag & 256 ||
            (de && Cn(de.vnode) && de.vnode.shapeFlag & 256)) &&
            p.a &&
            Le(p.a, T),
            (p.isMounted = !0),
            (g = _ = E = null);
        }
      };
      p.scope.on();
      const R = (p.effect = new Ta(F));
      p.scope.off();
      const A = (p.update = R.run.bind(R)),
        Z = (p.job = R.runIfDirty.bind(R));
      (Z.i = p), (Z.id = p.uid), (R.scheduler = () => Jr(Z)), Ut(p, !0), A();
    },
    te = (p, g, _) => {
      g.component = p;
      const E = p.vnode.props;
      (p.vnode = g),
        (p.next = null),
        zd(p, g.props, E, _),
        Gd(p, g.children, _),
        Dt(),
        Zi(p),
        jt();
    },
    oe = (p, g, _, E, T, O, j, F, R = !1) => {
      const A = p && p.children,
        Z = p ? p.shapeFlag : 0,
        V = g.children,
        { patchFlag: U, shapeFlag: J } = g;
      if (U > 0) {
        if (U & 128) {
          St(A, V, _, E, T, O, j, F, R);
          return;
        } else if (U & 256) {
          We(A, V, _, E, T, O, j, F, R);
          return;
        }
      }
      J & 8
        ? (Z & 16 && Bn(A, T, O), V !== A && c(_, V))
        : Z & 16
        ? J & 16
          ? St(A, V, _, E, T, O, j, F, R)
          : Bn(A, T, O, !0)
        : (Z & 8 && c(_, ""), J & 16 && M(V, _, E, T, O, j, F, R));
    },
    We = (p, g, _, E, T, O, j, F, R) => {
      (p = p || vn), (g = g || vn);
      const A = p.length,
        Z = g.length,
        V = Math.min(A, Z);
      let U;
      for (U = 0; U < V; U++) {
        const J = (g[U] = R ? kt(g[U]) : ut(g[U]));
        y(p[U], J, _, null, T, O, j, F, R);
      }
      A > Z ? Bn(p, T, O, !0, !1, V) : M(g, _, E, T, O, j, F, R, V);
    },
    St = (p, g, _, E, T, O, j, F, R) => {
      let A = 0;
      const Z = g.length;
      let V = p.length - 1,
        U = Z - 1;
      for (; A <= V && A <= U; ) {
        const J = p[A],
          se = (g[A] = R ? kt(g[A]) : ut(g[A]));
        if (Qt(J, se)) y(J, se, _, null, T, O, j, F, R);
        else break;
        A++;
      }
      for (; A <= V && A <= U; ) {
        const J = p[V],
          se = (g[U] = R ? kt(g[U]) : ut(g[U]));
        if (Qt(J, se)) y(J, se, _, null, T, O, j, F, R);
        else break;
        V--, U--;
      }
      if (A > V) {
        if (A <= U) {
          const J = U + 1,
            se = J < Z ? g[J].el : E;
          for (; A <= U; )
            y(null, (g[A] = R ? kt(g[A]) : ut(g[A])), _, se, T, O, j, F, R),
              A++;
        }
      } else if (A > U) for (; A <= V; ) st(p[A], T, O, !0), A++;
      else {
        const J = A,
          se = A,
          ye = new Map();
        for (A = se; A <= U; A++) {
          const Ke = (g[A] = R ? kt(g[A]) : ut(g[A]));
          Ke.key != null && ye.set(Ke.key, A);
        }
        let de,
          ze = 0;
        const Ae = U - se + 1;
        let tt = !1,
          Ue = 0;
        const Rn = new Array(Ae);
        for (A = 0; A < Ae; A++) Rn[A] = 0;
        for (A = J; A <= V; A++) {
          const Ke = p[A];
          if (ze >= Ae) {
            st(Ke, T, O, !0);
            continue;
          }
          let rt;
          if (Ke.key != null) rt = ye.get(Ke.key);
          else
            for (de = se; de <= U; de++)
              if (Rn[de - se] === 0 && Qt(Ke, g[de])) {
                rt = de;
                break;
              }
          rt === void 0
            ? st(Ke, T, O, !0)
            : ((Rn[rt - se] = A + 1),
              rt >= Ue ? (Ue = rt) : (tt = !0),
              y(Ke, g[rt], _, null, T, O, j, F, R),
              ze++);
        }
        const Vi = tt ? Xd(Rn) : vn;
        for (de = Vi.length - 1, A = Ae - 1; A >= 0; A--) {
          const Ke = se + A,
            rt = g[Ke],
            Hi = Ke + 1 < Z ? g[Ke + 1].el : E;
          Rn[A] === 0
            ? y(null, rt, _, Hi, T, O, j, F, R)
            : tt && (de < 0 || A !== Vi[de] ? Ht(rt, _, Hi, 2) : de--);
        }
      }
    },
    Ht = (p, g, _, E, T = null) => {
      const { el: O, type: j, transition: F, children: R, shapeFlag: A } = p;
      if (A & 6) {
        Ht(p.component.subTree, g, _, E);
        return;
      }
      if (A & 128) {
        p.suspense.move(g, _, E);
        return;
      }
      if (A & 64) {
        j.move(p, g, _, Nn);
        return;
      }
      if (j === ve) {
        o(O, g, _);
        for (let V = 0; V < R.length; V++) Ht(R[V], g, _, E);
        o(p.anchor, g, _);
        return;
      }
      if (j === Ho) {
        C(p, g, _);
        return;
      }
      if (E !== 2 && A & 1 && F)
        if (E === 0) F.beforeEnter(O), o(O, g, _), Le(() => F.enter(O), T);
        else {
          const { leave: V, delayLeave: U, afterLeave: J } = F,
            se = () => o(O, g, _),
            ye = () => {
              V(O, () => {
                se(), J && J();
              });
            };
          U ? U(O, se, ye) : ye();
        }
      else o(O, g, _);
    },
    st = (p, g, _, E = !1, T = !1) => {
      const {
        type: O,
        props: j,
        ref: F,
        children: R,
        dynamicChildren: A,
        shapeFlag: Z,
        patchFlag: V,
        dirs: U,
        cacheIndex: J,
      } = p;
      if (
        (V === -2 && (T = !1),
        F != null && mr(F, null, _, p, !0),
        J != null && (g.renderCache[J] = void 0),
        Z & 256)
      ) {
        g.ctx.deactivate(p);
        return;
      }
      const se = Z & 1 && U,
        ye = !Cn(p);
      let de;
      if ((ye && (de = j && j.onVnodeBeforeUnmount) && it(de, g, p), Z & 6))
        vf(p.component, _, E);
      else {
        if (Z & 128) {
          p.suspense.unmount(_, E);
          return;
        }
        se && Wt(p, null, g, "beforeUnmount"),
          Z & 64
            ? p.type.remove(p, g, _, Nn, E)
            : A && !A.hasOnce && (O !== ve || (V > 0 && V & 64))
            ? Bn(A, g, _, !1, !0)
            : ((O === ve && V & 384) || (!T && Z & 16)) && Bn(R, g, _),
          E && Fi(p);
      }
      ((ye && (de = j && j.onVnodeUnmounted)) || se) &&
        Le(() => {
          de && it(de, g, p), se && Wt(p, null, g, "unmounted");
        }, _);
    },
    Fi = (p) => {
      const { type: g, el: _, anchor: E, transition: T } = p;
      if (g === ve) {
        yf(_, E);
        return;
      }
      if (g === Ho) {
        x(p);
        return;
      }
      const O = () => {
        s(_), T && !T.persisted && T.afterLeave && T.afterLeave();
      };
      if (p.shapeFlag & 1 && T && !T.persisted) {
        const { leave: j, delayLeave: F } = T,
          R = () => j(_, O);
        F ? F(p.el, O, R) : R();
      } else O();
    },
    yf = (p, g) => {
      let _;
      for (; p !== g; ) (_ = d(p)), s(p), (p = _);
      s(g);
    },
    vf = (p, g, _) => {
      const { bum: E, scope: T, job: O, subTree: j, um: F, m: R, a: A } = p;
      il(R),
        il(A),
        E && Hs(E),
        T.stop(),
        O && ((O.flags |= 8), st(j, p, g, _)),
        F && Le(F, g),
        Le(() => {
          p.isUnmounted = !0;
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve());
    },
    Bn = (p, g, _, E = !1, T = !1, O = 0) => {
      for (let j = O; j < p.length; j++) st(p[j], g, _, E, T);
    },
    Oo = (p) => {
      if (p.shapeFlag & 6) return Oo(p.component.subTree);
      if (p.shapeFlag & 128) return p.suspense.next();
      const g = d(p.anchor || p.el),
        _ = g && g[qa];
      return _ ? d(_) : g;
    };
  let Vs = !1;
  const Li = (p, g, _) => {
      p == null
        ? g._vnode && st(g._vnode, null, null, !0)
        : y(g._vnode || null, p, g, null, null, null, _),
        (g._vnode = p),
        Vs || ((Vs = !0), Zi(), za(), (Vs = !1));
    },
    Nn = {
      p: y,
      um: st,
      m: Ht,
      r: Fi,
      mt: ce,
      mc: M,
      pc: oe,
      pbc: P,
      n: Oo,
      o: e,
    };
  let Di, ji;
  return { render: Li, hydrate: Di, createApp: Hd(Li, Di) };
}
function Ys({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Ut({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Jd(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ni(e, t, n = !1) {
  const o = e.children,
    s = t.children;
  if (G(o) && G(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[r] = kt(s[r])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && ni(i, l)),
        l.type === ho && (l.el = i.el);
    }
}
function Xd(e) {
  const t = e.slice(),
    n = [0];
  let o, s, r, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const u = e[o];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[o] = s), n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        (l = (r + i) >> 1), e[n[l]] < u ? (r = l + 1) : (i = l);
      u < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), (n[r] = o));
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i]);
  return n;
}
function bc(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : bc(t);
}
function il(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Qd = Symbol.for("v-scx"),
  ep = () => je(Qd);
function fe(e, t, n) {
  return _c(e, t, n);
}
function _c(e, t, n = ge) {
  const { immediate: o, deep: s, flush: r, once: i } = n,
    l = Se({}, n);
  let a;
  if (Os)
    if (r === "sync") {
      const d = ep();
      a = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!t || o) l.once = !0;
    else return { stop: ke, resume: ke, pause: ke };
  const u = Ee;
  l.call = (d, m, h) => ot(d, u, m, h);
  let c = !1;
  r === "post"
    ? (l.scheduler = (d) => {
        Le(d, u && u.suspense);
      })
    : r !== "sync" &&
      ((c = !0),
      (l.scheduler = (d, m) => {
        m ? d() : Jr(d);
      })),
    (l.augmentJob = (d) => {
      t && (d.flags |= 4),
        c && ((d.flags |= 2), u && ((d.id = u.uid), (d.i = u)));
    });
  const f = dd(e, t, l);
  return a && a.push(f), f;
}
function tp(e, t, n) {
  const o = this.proxy,
    s = _e(e) ? (e.includes(".") ? wc(o, e) : () => o[e]) : e.bind(o, o);
  let r;
  q(t) ? (r = t) : ((r = t.handler), (n = t));
  const i = mo(this),
    l = _c(s, r.bind(o), n);
  return i(), l;
}
function wc(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++) o = o[n[s]];
    return o;
  };
}
const np = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${fn(t)}Modifiers`];
function op(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || ge;
  let s = n;
  const r = t.startsWith("update:"),
    i = r && np(o, t.slice(7));
  i &&
    (i.trim && (s = n.map((c) => (_e(c) ? c.trim() : c))),
    i.number && (s = n.map(Tf)));
  let l,
    a = o[(l = jo(t))] || o[(l = jo(et(t)))];
  !a && r && (a = o[(l = jo(fn(t)))]), a && ot(a, e, 6, s);
  const u = o[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ot(u, e, 6, s);
  }
}
function Cc(e, t, n = !1) {
  const o = t.emitsCache,
    s = o.get(e);
  if (s !== void 0) return s;
  const r = e.emits;
  let i = {},
    l = !1;
  if (!q(e)) {
    const a = (u) => {
      const c = Cc(u, t, !0);
      c && ((l = !0), Se(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !r && !l
    ? (ae(e) && o.set(e, null), null)
    : (G(r) ? r.forEach((a) => (i[a] = null)) : Se(i, r),
      ae(e) && o.set(e, i),
      i);
}
function Ss(e, t) {
  return !e || !as(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      le(e, t[0].toLowerCase() + t.slice(1)) || le(e, fn(t)) || le(e, t));
}
function Zs(e) {
  const {
      type: t,
      vnode: n,
      proxy: o,
      withProxy: s,
      propsOptions: [r],
      slots: i,
      attrs: l,
      emit: a,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: m,
      ctx: h,
      inheritAttrs: y,
    } = e,
    b = Jo(e);
  let w, S;
  try {
    if (n.shapeFlag & 4) {
      const x = s || o,
        B = x;
      (w = ut(u.call(B, x, c, f, m, d, h))), (S = l);
    } else {
      const x = t;
      (w = ut(
        x.length > 1 ? x(f, { attrs: l, slots: i, emit: a }) : x(f, null)
      )),
        (S = t.props ? l : sp(l));
    }
  } catch (x) {
    (qn.length = 0), bs(x, e, 1), (w = Q($e));
  }
  let C = w;
  if (S && y !== !1) {
    const x = Object.keys(S),
      { shapeFlag: B } = C;
    x.length &&
      B & 7 &&
      (r && x.some(jr) && (S = rp(S, r)), (C = bt(C, S, !1, !0)));
  }
  return (
    n.dirs &&
      ((C = bt(C, null, !1, !0)),
      (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
    n.transition && no(C, n.transition),
    (w = C),
    Jo(b),
    w
  );
}
const sp = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || as(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  rp = (e, t) => {
    const n = {};
    for (const o in e) (!jr(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
function ip(e, t, n) {
  const { props: o, children: s, component: r } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return o ? ll(o, i, u) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (i[d] !== o[d] && !Ss(u, d)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : o === i
      ? !1
      : o
      ? i
        ? ll(o, i, u)
        : !0
      : !!i;
  return !1;
}
function ll(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Ss(n, r)) return !0;
  }
  return !1;
}
function lp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const xc = (e) => e.__isSuspense;
function ap(e, t) {
  t && t.pendingBranch
    ? G(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : md(e);
}
const ve = Symbol.for("v-fgt"),
  ho = Symbol.for("v-txt"),
  $e = Symbol.for("v-cmt"),
  Ho = Symbol.for("v-stc"),
  qn = [];
let qe = null;
function L(e = !1) {
  qn.push((qe = e ? null : []));
}
function cp() {
  qn.pop(), (qe = qn[qn.length - 1] || null);
}
let oo = 1;
function al(e) {
  (oo += e), e < 0 && qe && (qe.hasOnce = !0);
}
function Tc(e) {
  return (
    (e.dynamicChildren = oo > 0 ? qe || vn : null),
    cp(),
    oo > 0 && qe && qe.push(e),
    e
  );
}
function H(e, t, n, o, s, r) {
  return Tc(z(e, t, n, o, s, r, !0));
}
function Ye(e, t, n, o, s) {
  return Tc(Q(e, t, n, o, s, !0));
}
function Pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Sc = ({ key: e }) => e ?? null,
  Wo = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? _e(e) || xe(e) || q(e)
        ? { i: Oe, r: e, k: t, f: !!n }
        : e
      : null
  );
function z(
  e,
  t = null,
  n = null,
  o = 0,
  s = null,
  r = e === ve ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Sc(t),
    ref: t && Wo(t),
    scopeId: Ka,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe,
  };
  return (
    l
      ? (oi(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= _e(n) ? 8 : 16),
    oo > 0 &&
      !i &&
      qe &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      qe.push(a),
    a
  );
}
const Q = up;
function up(e, t = null, n = null, o = 0, s = null, r = !1) {
  if (((!e || e === ic) && (e = $e), Pn(e))) {
    const l = bt(e, t, !0);
    return (
      n && oi(l, n),
      oo > 0 &&
        !r &&
        qe &&
        (l.shapeFlag & 6 ? (qe[qe.indexOf(e)] = l) : qe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((_p(e) && (e = e.__vccOpts), t)) {
    t = fp(t);
    let { class: l, style: a } = t;
    l && !_e(l) && (t.class = W(l)),
      ae(a) && (Gr(a) && !G(a) && (a = Se({}, a)), (t.style = Fe(a)));
  }
  const i = _e(e) ? 1 : xc(e) ? 128 : Ga(e) ? 64 : ae(e) ? 4 : q(e) ? 2 : 0;
  return z(e, t, n, o, s, i, r, !0);
}
function fp(e) {
  return e ? (Gr(e) || dc(e) ? Se({}, e) : e) : null;
}
function bt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: a } = e,
    u = t ? Oc(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Sc(u),
      ref:
        t && t.ref
          ? n && r
            ? G(r)
              ? r.concat(Wo(t))
              : [r, Wo(t)]
            : Wo(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ve ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && bt(e.ssContent),
      ssFallback: e.ssFallback && bt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && o && no(c, a.clone(c)), c;
}
function Je(e = " ", t = 0) {
  return Q(ho, null, e, t);
}
function dp(e, t) {
  const n = Q(Ho, null, e);
  return (n.staticCount = t), n;
}
function he(e = "", t = !1) {
  return t ? (L(), Ye($e, null, e)) : Q($e, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean"
    ? Q($e)
    : G(e)
    ? Q(ve, null, e.slice())
    : typeof e == "object"
    ? kt(e)
    : Q(ho, null, String(e));
}
function kt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : bt(e);
}
function oi(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (G(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), oi(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !dc(t)
        ? (t._ctx = Oe)
        : s === 3 &&
          Oe &&
          (Oe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: Oe }), (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [Je(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Oc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = W([t.class, o.class]));
      else if (s === "style") t.style = Fe([t.style, o.style]);
      else if (as(s)) {
        const r = t[s],
          i = o[s];
        i &&
          r !== i &&
          !(G(r) && r.includes(i)) &&
          (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function it(e, t, n, o = null) {
  ot(e, t, 7, [n, o]);
}
const pp = cc();
let hp = 0;
function mp(e, t, n) {
  const o = e.type,
    s = (t ? t.appContext : e.appContext) || pp,
    r = {
      uid: hp++,
      vnode: e,
      type: o,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Mf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: hc(o, s),
      emitsOptions: Cc(o, s),
      emit: null,
      emitted: null,
      propsDefaults: ge,
      inheritAttrs: o.inheritAttrs,
      ctx: ge,
      data: ge,
      props: ge,
      attrs: ge,
      slots: ge,
      refs: ge,
      setupState: ge,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = op.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let Ee = null;
const Tt = () => Ee || Oe;
let Qo, _r;
{
  const e = _a(),
    t = (n, o) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(o),
        (r) => {
          s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
        }
      );
    };
  (Qo = t("__VUE_INSTANCE_SETTERS__", (n) => (Ee = n))),
    (_r = t("__VUE_SSR_SETTERS__", (n) => (Os = n)));
}
const mo = (e) => {
    const t = Ee;
    return (
      Qo(e),
      e.scope.on(),
      () => {
        e.scope.off(), Qo(t);
      }
    );
  },
  cl = () => {
    Ee && Ee.scope.off(), Qo(null);
  };
function Ec(e) {
  return e.vnode.shapeFlag & 4;
}
let Os = !1;
function gp(e, t = !1, n = !1) {
  t && _r(t);
  const { props: o, children: s } = e.vnode,
    r = Ec(e);
  Wd(e, o, r, t), qd(e, s, n);
  const i = r ? yp(e, t) : void 0;
  return t && _r(!1), i;
}
function yp(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Bd));
  const { setup: o } = n;
  if (o) {
    const s = (e.setupContext = o.length > 1 ? Pc(e) : null),
      r = mo(e);
    Dt();
    const i = fo(o, e, 0, [e.props, s]);
    if ((jt(), r(), ga(i))) {
      if ((Cn(e) || nc(e), i.then(cl, cl), t))
        return i
          .then((l) => {
            ul(e, l, t);
          })
          .catch((l) => {
            bs(l, e, 0);
          });
      e.asyncDep = i;
    } else ul(e, i, t);
  } else Ac(e, t);
}
function ul(e, t, n) {
  q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ae(t) && (e.setupState = ja(t)),
    Ac(e, n);
}
let fl;
function Ac(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && fl && !o.render) {
      const s = o.template || ei(e).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = o,
          u = Se(Se({ isCustomElement: r, delimiters: l }, i), a);
        o.render = fl(s, u);
      }
    }
    e.render = o.render || ke;
  }
  {
    const s = mo(e);
    Dt();
    try {
      Rd(e);
    } finally {
      jt(), s();
    }
  }
}
const vp = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  },
};
function Pc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vp),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Es(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ja(nd(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Kn) return Kn[n](e);
          },
          has(t, n) {
            return n in t || n in Kn;
          },
        }))
    : e.proxy;
}
function bp(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function _p(e) {
  return q(e) && "__vccOpts" in e;
}
const I = (e, t) => ud(e, t, Os);
function As(e, t, n) {
  const o = arguments.length;
  return o === 2
    ? ae(t) && !G(t)
      ? Pn(t)
        ? Q(e, null, [t])
        : Q(e, t)
      : Q(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : o === 3 && Pn(n) && (n = [n]),
      Q(e, t, n));
}
const wp = "3.5.5",
  Cp = ke;
/**
 * @vue/runtime-dom v3.5.5
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let wr;
const dl = typeof window < "u" && window.trustedTypes;
if (dl)
  try {
    wr = dl.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const $c = wr ? (e) => wr.createHTML(e) : (e) => e,
  xp = "http://www.w3.org/2000/svg",
  Tp = "http://www.w3.org/1998/Math/MathML",
  mt = typeof document < "u" ? document : null,
  pl = mt && mt.createElement("template"),
  Sp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const s =
        t === "svg"
          ? mt.createElementNS(xp, e)
          : t === "mathml"
          ? mt.createElementNS(Tp, e)
          : n
          ? mt.createElement(e, { is: n })
          : mt.createElement(e);
      return (
        e === "select" &&
          o &&
          o.multiple != null &&
          s.setAttribute("multiple", o.multiple),
        s
      );
    },
    createText: (e) => mt.createTextNode(e),
    createComment: (e) => mt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => mt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, s, r) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        pl.innerHTML = $c(
          o === "svg"
            ? `<svg>${e}</svg>`
            : o === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = pl.content;
        if (o === "svg" || o === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Et = "transition",
  Ln = "animation",
  so = Symbol("_vtc"),
  kc = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Op = Se({}, Ja, kc),
  Ep = (e) => ((e.displayName = "Transition"), (e.props = Op), e),
  Ps = Ep((e, { slots: t }) => As(wd, Ap(e), t)),
  Kt = (e, t = []) => {
    G(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  hl = (e) => (e ? (G(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Ap(e) {
  const t = {};
  for (const $ in e) $ in kc || (t[$] = e[$]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: o,
      duration: s,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: u = i,
      appearToClass: c = l,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    h = Pp(s),
    y = h && h[0],
    b = h && h[1],
    {
      onBeforeEnter: w,
      onEnter: S,
      onEnterCancelled: C,
      onLeave: x,
      onLeaveCancelled: B,
      onBeforeAppear: D = w,
      onAppear: K = S,
      onAppearCancelled: M = C,
    } = t,
    k = ($, Y, ce) => {
      qt($, Y ? c : l), qt($, Y ? u : i), ce && ce();
    },
    P = ($, Y) => {
      ($._isLeaving = !1), qt($, f), qt($, m), qt($, d), Y && Y();
    },
    N = ($) => (Y, ce) => {
      const we = $ ? K : S,
        pe = () => k(Y, $, ce);
      Kt(we, [Y, pe]),
        ml(() => {
          qt(Y, $ ? a : r), At(Y, $ ? c : l), hl(we) || gl(Y, o, y, pe);
        });
    };
  return Se(t, {
    onBeforeEnter($) {
      Kt(w, [$]), At($, r), At($, i);
    },
    onBeforeAppear($) {
      Kt(D, [$]), At($, a), At($, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave($, Y) {
      $._isLeaving = !0;
      const ce = () => P($, Y);
      At($, f),
        At($, d),
        Mp(),
        ml(() => {
          $._isLeaving && (qt($, f), At($, m), hl(x) || gl($, o, b, ce));
        }),
        Kt(x, [$, ce]);
    },
    onEnterCancelled($) {
      k($, !1), Kt(C, [$]);
    },
    onAppearCancelled($) {
      k($, !0), Kt(M, [$]);
    },
    onLeaveCancelled($) {
      P($), Kt(B, [$]);
    },
  });
}
function Pp(e) {
  if (e == null) return null;
  if (ae(e)) return [Js(e.enter), Js(e.leave)];
  {
    const t = Js(e);
    return [t, t];
  }
}
function Js(e) {
  return Sf(e);
}
function At(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[so] || (e[so] = new Set())).add(t);
}
function qt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[so];
  n && (n.delete(t), n.size || (e[so] = void 0));
}
function ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $p = 0;
function gl(e, t, n, o) {
  const s = (e._endId = ++$p),
    r = () => {
      s === e._endId && o();
    };
  if (n) return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = kp(e, t);
  if (!i) return o();
  const u = i + "end";
  let c = 0;
  const f = () => {
      e.removeEventListener(u, d), r();
    },
    d = (m) => {
      m.target === e && ++c >= a && f();
    };
  setTimeout(() => {
    c < a && f();
  }, l + 1),
    e.addEventListener(u, d);
}
function kp(e, t) {
  const n = window.getComputedStyle(e),
    o = (h) => (n[h] || "").split(", "),
    s = o(`${Et}Delay`),
    r = o(`${Et}Duration`),
    i = yl(s, r),
    l = o(`${Ln}Delay`),
    a = o(`${Ln}Duration`),
    u = yl(l, a);
  let c = null,
    f = 0,
    d = 0;
  t === Et
    ? i > 0 && ((c = Et), (f = i), (d = r.length))
    : t === Ln
    ? u > 0 && ((c = Ln), (f = u), (d = a.length))
    : ((f = Math.max(i, u)),
      (c = f > 0 ? (i > u ? Et : Ln) : null),
      (d = c ? (c === Et ? r.length : a.length) : 0));
  const m =
    c === Et && /\b(transform|all)(,|$)/.test(o(`${Et}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: m };
}
function yl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, o) => vl(n) + vl(e[o])));
}
function vl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mp() {
  return document.body.offsetHeight;
}
function Ip(e, t, n) {
  const o = e[so];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const es = Symbol("_vod"),
  Mc = Symbol("_vsh"),
  si = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[es] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Dn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), Dn(e, !0), o.enter(e))
            : o.leave(e, () => {
                Dn(e, !1);
              })
          : Dn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Dn(e, t);
    },
  };
function Dn(e, t) {
  (e.style.display = t ? e[es] : "none"), (e[Mc] = !t);
}
const Bp = Symbol(""),
  Np = /(^|;)\s*display\s*:/;
function Rp(e, t, n) {
  const o = e.style,
    s = _e(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (_e(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && zo(o, l, "");
        }
      else for (const i in t) n[i] == null && zo(o, i, "");
    for (const i in n) i === "display" && (r = !0), zo(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[Bp];
      i && (n += ";" + i), (o.cssText = n), (r = Np.test(n));
    }
  } else t && e.removeAttribute("style");
  es in e && ((e[es] = r ? o.display : ""), e[Mc] && (o.display = "none"));
}
const bl = /\s*!important$/;
function zo(e, t, n) {
  if (G(n)) n.forEach((o) => zo(e, t, o));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = Fp(e, t);
    bl.test(n)
      ? e.setProperty(fn(o), n.replace(bl, ""), "important")
      : (e[o] = n);
  }
}
const _l = ["Webkit", "Moz", "ms"],
  Xs = {};
function Fp(e, t) {
  const n = Xs[t];
  if (n) return n;
  let o = et(t);
  if (o !== "filter" && o in e) return (Xs[t] = o);
  o = fs(o);
  for (let s = 0; s < _l.length; s++) {
    const r = _l[s] + o;
    if (r in e) return (Xs[t] = r);
  }
  return t;
}
const wl = "http://www.w3.org/1999/xlink";
function Cl(e, t, n, o, s, r = kf(t)) {
  o && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(wl, t.slice(6, t.length))
      : e.setAttributeNS(wl, t, n)
    : n == null || (r && !wa(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, r ? "" : Lt(n) ? String(n) : n);
}
function Lp(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $c(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const i = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (i !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean"
      ? (n = wa(n))
      : n == null && i === "string"
      ? ((n = ""), (r = !0))
      : i === "number" && ((n = 0), (r = !0));
  }
  try {
    e[t] = n;
  } catch {}
  r && e.removeAttribute(t);
}
function Dp(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function jp(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const xl = Symbol("_vei");
function Vp(e, t, n, o, s = null) {
  const r = e[xl] || (e[xl] = {}),
    i = r[t];
  if (o && i) i.value = o;
  else {
    const [l, a] = Hp(t);
    if (o) {
      const u = (r[t] = Up(o, s));
      Dp(e, l, u, a);
    } else i && (jp(e, l, i, a), (r[t] = void 0));
  }
}
const Tl = /(?:Once|Passive|Capture)$/;
function Hp(e) {
  let t;
  if (Tl.test(e)) {
    t = {};
    let o;
    for (; (o = e.match(Tl)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : fn(e.slice(2)), t];
}
let Qs = 0;
const Wp = Promise.resolve(),
  zp = () => Qs || (Wp.then(() => (Qs = 0)), (Qs = Date.now()));
function Up(e, t) {
  const n = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    ot(Kp(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = zp()), n;
}
function Kp(e, t) {
  if (G(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (s) => !s._stopped && o && o(s))
    );
  } else return t;
}
const Sl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  qp = (e, t, n, o, s, r) => {
    const i = s === "svg";
    t === "class"
      ? Ip(e, o, i)
      : t === "style"
      ? Rp(e, n, o)
      : as(t)
      ? jr(t) || Vp(e, t, n, o, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Gp(e, t, o, i)
        )
      ? (Lp(e, t, o),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Cl(e, t, o, i, r, t !== "value"))
      : (t === "true-value"
          ? (e._trueValue = o)
          : t === "false-value" && (e._falseValue = o),
        Cl(e, t, o, i));
  };
function Gp(e, t, n, o) {
  if (o)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Sl(t) && q(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Sl(t) && _e(n)
    ? !1
    : !!(t in e || (e._isVueCE && (/[A-Z]/.test(t) || !_e(n))));
}
const Yp = ["ctrl", "shift", "alt", "meta"],
  Zp = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Yp.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Jp = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      o = t.join(".");
    return (
      n[o] ||
      (n[o] = (s, ...r) => {
        for (let i = 0; i < t.length; i++) {
          const l = Zp[t[i]];
          if (l && l(s, t)) return;
        }
        return e(s, ...r);
      })
    );
  },
  Xp = Se({ patchProp: qp }, Sp);
let Ol;
function Ic() {
  return Ol || (Ol = Yd(Xp));
}
const Qp = (...e) => {
    Ic().render(...e);
  },
  eh = (...e) => {
    const t = Ic().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (o) => {
        const s = nh(o);
        if (!s) return;
        const r = t._component;
        !q(r) && !r.render && !r.template && (r.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = "");
        const i = n(s, !1, th(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  };
function th(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function nh(e) {
  return _e(e) ? document.querySelector(e) : e;
}
var oh =
    typeof global == "object" && global && global.Object === Object && global,
  sh = typeof self == "object" && self && self.Object === Object && self,
  $s = oh || sh || Function("return this")(),
  Nt = $s.Symbol,
  Bc = Object.prototype,
  rh = Bc.hasOwnProperty,
  ih = Bc.toString,
  jn = Nt ? Nt.toStringTag : void 0;
function lh(e) {
  var t = rh.call(e, jn),
    n = e[jn];
  try {
    e[jn] = void 0;
    var o = !0;
  } catch {}
  var s = ih.call(e);
  return o && (t ? (e[jn] = n) : delete e[jn]), s;
}
var ah = Object.prototype,
  ch = ah.toString;
function uh(e) {
  return ch.call(e);
}
var fh = "[object Null]",
  dh = "[object Undefined]",
  El = Nt ? Nt.toStringTag : void 0;
function ri(e) {
  return e == null
    ? e === void 0
      ? dh
      : fh
    : El && El in Object(e)
    ? lh(e)
    : uh(e);
}
function ii(e) {
  return e != null && typeof e == "object";
}
var ph = "[object Symbol]";
function li(e) {
  return typeof e == "symbol" || (ii(e) && ri(e) == ph);
}
function hh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var go = Array.isArray,
  mh = 1 / 0,
  Al = Nt ? Nt.prototype : void 0,
  Pl = Al ? Al.toString : void 0;
function Nc(e) {
  if (typeof e == "string") return e;
  if (go(e)) return hh(e, Nc) + "";
  if (li(e)) return Pl ? Pl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -mh ? "-0" : t;
}
function Rc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gh = "[object AsyncFunction]",
  yh = "[object Function]",
  vh = "[object GeneratorFunction]",
  bh = "[object Proxy]";
function _h(e) {
  if (!Rc(e)) return !1;
  var t = ri(e);
  return t == yh || t == vh || t == gh || t == bh;
}
var er = $s["__core-js_shared__"],
  $l = (function () {
    var e = /[^.]+$/.exec((er && er.keys && er.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function wh(e) {
  return !!$l && $l in e;
}
var Ch = Function.prototype,
  xh = Ch.toString;
function Th(e) {
  if (e != null) {
    try {
      return xh.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Sh = /[\\^$.*+?()[\]{}|]/g,
  Oh = /^\[object .+?Constructor\]$/,
  Eh = Function.prototype,
  Ah = Object.prototype,
  Ph = Eh.toString,
  $h = Ah.hasOwnProperty,
  kh = RegExp(
    "^" +
      Ph.call($h)
        .replace(Sh, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function Mh(e) {
  if (!Rc(e) || wh(e)) return !1;
  var t = _h(e) ? kh : Oh;
  return t.test(Th(e));
}
function Ih(e, t) {
  return e == null ? void 0 : e[t];
}
function Fc(e, t) {
  var n = Ih(e, t);
  return Mh(n) ? n : void 0;
}
function Bh(e, t) {
  var n = -1,
    o = e.length;
  for (t || (t = Array(o)); ++n < o; ) t[n] = e[n];
  return t;
}
function Nh(e, t) {
  return e === t || (e !== e && t !== t);
}
var Rh = "[object Arguments]";
function kl(e) {
  return ii(e) && ri(e) == Rh;
}
var Lc = Object.prototype,
  Fh = Lc.hasOwnProperty,
  Lh = Lc.propertyIsEnumerable,
  Dh = kl(
    (function () {
      return arguments;
    })()
  )
    ? kl
    : function (e) {
        return ii(e) && Fh.call(e, "callee") && !Lh.call(e, "callee");
      },
  jh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Vh = /^\w*$/;
function Hh(e, t) {
  if (go(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || li(e)
    ? !0
    : Vh.test(e) || !jh.test(e) || (t != null && e in Object(t));
}
var ro = Fc(Object, "create");
function Wh() {
  (this.__data__ = ro ? ro(null) : {}), (this.size = 0);
}
function zh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Uh = "__lodash_hash_undefined__",
  Kh = Object.prototype,
  qh = Kh.hasOwnProperty;
function Gh(e) {
  var t = this.__data__;
  if (ro) {
    var n = t[e];
    return n === Uh ? void 0 : n;
  }
  return qh.call(t, e) ? t[e] : void 0;
}
var Yh = Object.prototype,
  Zh = Yh.hasOwnProperty;
function Jh(e) {
  var t = this.__data__;
  return ro ? t[e] !== void 0 : Zh.call(t, e);
}
var Xh = "__lodash_hash_undefined__";
function Qh(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = ro && t === void 0 ? Xh : t),
    this
  );
}
function rn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
rn.prototype.clear = Wh;
rn.prototype.delete = zh;
rn.prototype.get = Gh;
rn.prototype.has = Jh;
rn.prototype.set = Qh;
function em() {
  (this.__data__ = []), (this.size = 0);
}
function ks(e, t) {
  for (var n = e.length; n--; ) if (Nh(e[n][0], t)) return n;
  return -1;
}
var tm = Array.prototype,
  nm = tm.splice;
function om(e) {
  var t = this.__data__,
    n = ks(t, e);
  if (n < 0) return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : nm.call(t, n, 1), --this.size, !0;
}
function sm(e) {
  var t = this.__data__,
    n = ks(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function rm(e) {
  return ks(this.__data__, e) > -1;
}
function im(e, t) {
  var n = this.__data__,
    o = ks(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
}
function kn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
kn.prototype.clear = em;
kn.prototype.delete = om;
kn.prototype.get = sm;
kn.prototype.has = rm;
kn.prototype.set = im;
var lm = Fc($s, "Map");
function am() {
  (this.size = 0),
    (this.__data__ = {
      hash: new rn(),
      map: new (lm || kn)(),
      string: new rn(),
    });
}
function cm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function Ms(e, t) {
  var n = e.__data__;
  return cm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function um(e) {
  var t = Ms(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function fm(e) {
  return Ms(this, e).get(e);
}
function dm(e) {
  return Ms(this, e).has(e);
}
function pm(e, t) {
  var n = Ms(this, e),
    o = n.size;
  return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
}
function dn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
dn.prototype.clear = am;
dn.prototype.delete = um;
dn.prototype.get = fm;
dn.prototype.has = dm;
dn.prototype.set = pm;
var hm = "Expected a function";
function ai(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(hm);
  var n = function () {
    var o = arguments,
      s = t ? t.apply(this, o) : o[0],
      r = n.cache;
    if (r.has(s)) return r.get(s);
    var i = e.apply(this, o);
    return (n.cache = r.set(s, i) || r), i;
  };
  return (n.cache = new (ai.Cache || dn)()), n;
}
ai.Cache = dn;
var mm = 500;
function gm(e) {
  var t = ai(e, function (o) {
      return n.size === mm && n.clear(), o;
    }),
    n = t.cache;
  return t;
}
var ym =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  vm = /\\(\\)?/g,
  bm = gm(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(ym, function (n, o, s, r) {
        t.push(s ? r.replace(vm, "$1") : o || n);
      }),
      t
    );
  });
function _m(e) {
  return e == null ? "" : Nc(e);
}
function wm(e, t) {
  return go(e) ? e : Hh(e, t) ? [e] : bm(_m(e));
}
var Cm = 1 / 0;
function xm(e) {
  if (typeof e == "string" || li(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -Cm ? "-0" : t;
}
function Tm(e, t) {
  t = wm(t, e);
  for (var n = 0, o = t.length; e != null && n < o; ) e = e[xm(t[n++])];
  return n && n == o ? e : void 0;
}
function Sm(e, t, n) {
  var o = e == null ? void 0 : Tm(e, t);
  return o === void 0 ? n : o;
}
function Dc(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; ) e[s + n] = t[n];
  return e;
}
var Ml = Nt ? Nt.isConcatSpreadable : void 0;
function Om(e) {
  return go(e) || Dh(e) || !!(Ml && e && e[Ml]);
}
function Em(e, t, n, o, s) {
  var r = -1,
    i = e.length;
  for (n || (n = Om), s || (s = []); ++r < i; ) {
    var l = e[r];
    n(l) ? Dc(s, l) : (s[s.length] = l);
  }
  return s;
}
function Am() {
  var e = arguments.length;
  if (!e) return [];
  for (var t = Array(e - 1), n = arguments[0], o = e; o--; )
    t[o - 1] = arguments[o];
  return Dc(go(n) ? Bh(n) : [n], Em(t));
}
function Pm(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
var $m = $s.isFinite;
function km(e) {
  return typeof e == "number" && $m(e);
}
const Mt =
  (e, t, { checkForDefaultPrevented: n = !0 } = {}) =>
  (s) => {
    const r = e == null ? void 0 : e(s);
    if (n === !1 || !r) return t == null ? void 0 : t(s);
  };
var Il;
const Ge = typeof window < "u",
  Mm = (e) => typeof e == "string",
  jc = () => {},
  Im =
    Ge &&
    ((Il = window == null ? void 0 : window.navigator) == null
      ? void 0
      : Il.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ci(e) {
  return typeof e == "function" ? e() : v(e);
}
function Bm(e) {
  return e;
}
function ui(e) {
  return ds() ? (ps(e), !0) : !1;
}
function Vc(e, t, n = {}) {
  const { immediate: o = !0 } = n,
    s = ee(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), (r = null));
  }
  function l() {
    (s.value = !1), i();
  }
  function a(...u) {
    i(),
      (s.value = !0),
      (r = setTimeout(() => {
        (s.value = !1), (r = null), e(...u);
      }, ci(t)));
  }
  return (
    o && ((s.value = !0), Ge && a()),
    ui(l),
    { isPending: ys(s), start: a, stop: l }
  );
}
function en(e) {
  var t;
  const n = ci(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Hc = Ge ? window : void 0;
function Tn(...e) {
  let t, n, o, s;
  if (
    (Mm(e[0]) || Array.isArray(e[0])
      ? (([n, o, s] = e), (t = Hc))
      : ([t, n, o, s] = e),
    !t)
  )
    return jc;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [],
    i = () => {
      r.forEach((c) => c()), (r.length = 0);
    },
    l = (c, f, d, m) => (
      c.addEventListener(f, d, m), () => c.removeEventListener(f, d, m)
    ),
    a = fe(
      () => [en(t), ci(s)],
      ([c, f]) => {
        i(), c && r.push(...n.flatMap((d) => o.map((m) => l(c, d, m, f))));
      },
      { immediate: !0, flush: "post" }
    ),
    u = () => {
      a(), i();
    };
  return ui(u), u;
}
let Bl = !1;
function Nm(e, t, n = {}) {
  const {
    window: o = Hc,
    ignore: s = [],
    capture: r = !0,
    detectIframe: i = !1,
  } = n;
  if (!o) return;
  Im &&
    !Bl &&
    ((Bl = !0),
    Array.from(o.document.body.children).forEach((d) =>
      d.addEventListener("click", jc)
    ));
  let l = !0;
  const a = (d) =>
      s.some((m) => {
        if (typeof m == "string")
          return Array.from(o.document.querySelectorAll(m)).some(
            (h) => h === d.target || d.composedPath().includes(h)
          );
        {
          const h = en(m);
          return h && (d.target === h || d.composedPath().includes(h));
        }
      }),
    c = [
      Tn(
        o,
        "click",
        (d) => {
          const m = en(e);
          if (!(!m || m === d.target || d.composedPath().includes(m))) {
            if ((d.detail === 0 && (l = !a(d)), !l)) {
              l = !0;
              return;
            }
            t(d);
          }
        },
        { passive: !0, capture: r }
      ),
      Tn(
        o,
        "pointerdown",
        (d) => {
          const m = en(e);
          m && (l = !d.composedPath().includes(m) && !a(d));
        },
        { passive: !0 }
      ),
      i &&
        Tn(o, "blur", (d) => {
          var m;
          const h = en(e);
          ((m = o.document.activeElement) == null ? void 0 : m.tagName) ===
            "IFRAME" &&
            !(h != null && h.contains(o.document.activeElement)) &&
            t(d);
        }),
    ].filter(Boolean);
  return () => c.forEach((d) => d());
}
const Nl =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Rl = "__vueuse_ssr_handlers__";
Nl[Rl] = Nl[Rl] || {};
var Fl;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(Fl || (Fl = {}));
var Rm = Object.defineProperty,
  Ll = Object.getOwnPropertySymbols,
  Fm = Object.prototype.hasOwnProperty,
  Lm = Object.prototype.propertyIsEnumerable,
  Dl = (e, t, n) =>
    t in e
      ? Rm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Dm = (e, t) => {
    for (var n in t || (t = {})) Fm.call(t, n) && Dl(e, n, t[n]);
    if (Ll) for (var n of Ll(t)) Lm.call(t, n) && Dl(e, n, t[n]);
    return e;
  };
const jm = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
Dm({ linear: Bm }, jm);
const vt = (e) => typeof e == "boolean",
  Rt = (e) => typeof e == "number" && km(e),
  Vm = (e) => e === void 0,
  tr = (e) =>
    (!e && e !== 0) ||
    (G(e) && e.length === 0) ||
    (ae(e) && !Object.keys(e).length),
  Hm = (e) => (typeof Element > "u" ? !1 : e instanceof Element),
  fi = (e) => (_e(e) ? !Number.isNaN(Number(e)) : !1);
class Wm extends Error {
  constructor(t) {
    super(t), (this.name = "VuesaxAlphaError");
  }
}
function zm(e, t) {
  throw new Wm(`[${e}] ${t}`);
}
const Wc = (e = "") => e.split(" ").filter((t) => !!t.trim()),
  jl = (e, t) => {
    if (!e || !t) return !1;
    if (t.includes(" ")) throw new Error("className should not contain space.");
    return e.classList.contains(t);
  },
  Um = (e, t) => {
    !e || !t.trim() || e.classList.add(...Wc(t));
  },
  Km = (e, t) => {
    !e || !t.trim() || e.classList.remove(...Wc(t));
  },
  qm = (e, t) => {
    var n;
    if (!Ge || !e || !t) return "";
    let o = et(t);
    o === "float" && (o = "cssFloat");
    try {
      const s = e.style[o];
      if (s) return s;
      const r =
        (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
      return r ? r[o] : "";
    } catch {
      return e.style[o];
    }
  };
function Cr(e, t = "px") {
  if (!e) return "";
  if (Rt(e) || fi(e)) return `${e}${t}`;
  if (_e(e)) return e;
}
let Ro;
const Gm = (e) => {
    var t;
    if (!Ge) return 0;
    if (Ro !== void 0) return Ro;
    const n = document.createElement("div");
    (n.className = `${e}-scrollbar__wrap`),
      (n.style.visibility = "hidden"),
      (n.style.width = "100px"),
      (n.style.position = "absolute"),
      (n.style.top = "-9999px"),
      document.body.appendChild(n);
    const o = n.offsetWidth;
    n.style.overflow = "scroll";
    const s = document.createElement("div");
    (s.style.width = "100%"), n.appendChild(s);
    const r = s.offsetWidth;
    return (t = n.parentNode) == null || t.removeChild(n), (Ro = o - r), Ro;
  },
  zc = "__vsPropKey",
  ue = (e) => e,
  Ym = (e) => ae(e) && !!e[zc],
  yo = (e, t) => {
    if (!ae(e) || Ym(e)) return e;
    const { values: n, required: o, default: s, type: r, validator: i } = e,
      a = {
        type: r,
        required: !!o,
        validator:
          n || i
            ? (u) => {
                let c = !1,
                  f = [];
                if (
                  (n &&
                    ((f = Array.from(n)),
                    le(e, "default") && f.push(s),
                    c || (c = f.includes(u))),
                  i && (c || (c = i(u))),
                  !c && f.length > 0)
                ) {
                  const d = [...new Set(f)]
                    .map((m) => JSON.stringify(m))
                    .join(", ");
                  Cp(
                    `Invalid prop: validation failed${
                      t ? ` for prop "${t}"` : ""
                    }. Expected one of [${d}], got value ${JSON.stringify(u)}.`
                  );
                }
                return c;
              }
            : void 0,
        [zc]: !0,
      };
    return le(e, "default") && (a.default = s), a;
  },
  Ie = (e) => Pm(Object.entries(e).map(([t, n]) => [t, yo(n, t)])),
  Zm = ue([String, Object, Function]),
  He = (e, t) => {
    if (
      ((e.install = (n) => {
        for (const o of [e, ...Object.values(t ?? {})]) n.component(o.name, o);
      }),
      t)
    )
      for (const [n, o] of Object.entries(t)) e[n] = o;
    return e;
  },
  Jm = (e, t) => (
    (e.install = (n) => {
      (e._context = n._context), (n.config.globalProperties[t] = e);
    }),
    e
  ),
  Uc = (e) => ((e.install = ke), e),
  Xm = {
    tab: "Tab",
    enter: "Enter",
    space: "Space",
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    esc: "Escape",
    delete: "Delete",
    backspace: "Backspace",
    numpadEnter: "NumpadEnter",
    pageUp: "PageUp",
    pageDown: "PageDown",
    home: "Home",
    end: "End",
  },
  Kc = /^(rgb|rgba)/,
  qc =
    /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/,
  Gc = /^(#)/,
  Qm = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
  eg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
  tg = ["primary", "success", "danger", "warn", "dark", "text"],
  vo = [
    ...tg,
    "light",
    "secondary",
    "facebook",
    "twitter",
    "youtube",
    "pinterest",
    "linkedin",
    "snapchat",
    "whatsapp",
    "tumblr",
    "reddit",
    "spotify",
    "amazon",
    "medium",
    "vimeo",
    "skype",
    "dribbble",
    "slack",
    "yahoo",
    "twitch",
    "discord",
    "telegram",
    "google-plus",
    "messenger",
  ],
  ng = 2e3,
  Is = "update:modelValue",
  og = [
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
  ],
  sg = ["", "default", "small", "large"],
  di = (e) => vo.includes(e),
  Yc = (e) => Gc.test(e) && [4, 7, 5, 9].includes(e.length),
  Zc = (e) => Kc.test(e),
  rg = (e) => qc.test(e),
  Jc = (e) => {
    e = e.replace(Qm, (n, o, s, r) => o + o + s + s + r + r);
    const t = eg.exec(e);
    return t
      ? {
          r: Number.parseInt(t[1], 16),
          g: Number.parseInt(t[2], 16),
          b: Number.parseInt(t[3], 16),
        }
      : null;
  },
  ig = (e, t, n, o, s = "vs") => {
    let r;
    if (Zc(t)) {
      const i = t.replace(/[rgba()]/g, "").split(",");
      (r = `${i[0]},${i[1]},${i[2]}`), yn(e, r, n);
    } else if (Yc(t)) {
      const i = Jc(t);
      (r = `${i.r},${i.g},${i.b}`), yn(e, r, n);
    } else
      di(t)
        ? ((r = window
            .getComputedStyle(document.body)
            .getPropertyValue(`--${s}-${t}`)),
          yn(e, r, n))
        : rg(t) && yn(e, t, n);
  },
  lg = (e) => !!(di(e) || Yc(e) || Zc(e)),
  ft = (e, t = "vs") => {
    const n = v(e);
    if (!n) return "";
    const o = Kc.test(n),
      s = qc.test(n),
      r = Gc.test(n);
    let i = "";
    if (o) {
      const l = n.replace(/[rgba()]/g, "").split(",");
      i = `${l[0]}, ${l[1]}, ${l[2]}`;
    } else if (r) {
      const l = Jc(n);
      i = `${l == null ? void 0 : l.r}, ${l == null ? void 0 : l.g}, ${
        l == null ? void 0 : l.b
      }`;
    } else di(n) ? (i = `var(--${t}-${n})`) : s && (i = n);
    return i;
  },
  yn = (e, t, n, o = "vs") => {
    !n && document != null && document.documentElement
      ? document.documentElement.style.setProperty(`--${o}-${e}`, t)
      : (n == null ? void 0 : n.nodeName) !== "#comment" &&
        (n == null || n.style.setProperty(`--${o}-${e}`, t));
  },
  pi = (e) => lg(e),
  Vl = (e, t, n) => {
    const o = e.currentTarget,
      s = o.getBoundingClientRect(),
      r = e.clientX - s.left,
      i = e.clientY - s.top;
    let l = 0.6;
    o.clientWidth > 150 && (l = 1.2);
    const a = document.createElement("div");
    (a.className = "vs-ripple"), t || ig("color", "#fff", a);
    const u = document.createElement("div");
    (u.className = "vs-ripple--default"),
      n && u.classList.add("vs-ripple--solid"),
      (u.style.transition = `all ${l}s ease`),
      (u.style.left = `${r}px`),
      (u.style.top = `${i}px`),
      a.appendChild(u),
      o.appendChild(a),
      (u.style.width = `${o.clientWidth * 2.5}px`),
      (u.style.height = `${o.clientWidth * 2.5}px`),
      (u.style.opacity = "1");
    let c = !1;
    setTimeout(() => {
      c = !0;
    }, 300);
    function f(d) {
      (u.style.transition = `all 0.${l * 600}s ease`),
        setTimeout(
          () => {
            (u.style.opacity = "0"),
              setTimeout(() => {
                o.removeChild(a);
              }, l * 300);
          },
          c ? 0 : l * 400
        ),
        d.target.removeEventListener("mouseup", f),
        d.target.removeEventListener("mouseleave", f);
    }
    e.target.addEventListener("mouseup", f),
      e.target.addEventListener("mouseleave", f);
  },
  ag = (e) => {
    const t = e.currentTarget,
      n = t.getBoundingClientRect(),
      o = e.clientX - n.left,
      s = e.clientY - n.top;
    let r = 0.6;
    t.clientWidth > 150 && (r = 1.2);
    const i = document.createElement("div");
    i.className = "vs-ripple";
    const l = document.createElement("div");
    (l.className = "vs-ripple--invert"),
      (l.style.left = `${o}px`),
      (l.style.top = `${s}px`),
      (l.style.width = `${t.clientWidth * 2.5}px`),
      (l.style.height = `${t.clientWidth * 2.5}px`),
      (l.style.opacity = "0"),
      i.appendChild(l),
      t.appendChild(i),
      setTimeout(() => {
        (l.style.width = "0px"),
          (l.style.height = "0px"),
          (l.style.opacity = "0.5");
      }, 1);
    let a = !1;
    setTimeout(() => {
      a = !0;
    }, 300);
    function u(c) {
      (l.style.transition = `all 0.${r * 600}s ease`),
        setTimeout(
          () => {
            (l.style.opacity = "0"),
              setTimeout(() => {
                t.removeChild(i);
              }, r * 300);
          },
          a ? 0 : r * 400
        ),
        c.target.removeEventListener("mouseup", u),
        c.target.removeEventListener("mouseleave", u);
    }
    e.target.addEventListener("mouseup", u),
      e.target.addEventListener("mouseleave", u);
  },
  cg = (e) => {
    const t = e.currentTarget,
      n = t.getBoundingClientRect(),
      o = e.clientX - n.left,
      s = e.clientY - n.top;
    let r = 0.6;
    t.clientWidth > 150 && (r = 1.2);
    const i = document.createElement("div");
    i.className = "vs-ripple";
    const l = document.createElement("div"),
      a = document.createElement("div");
    (l.className = "vs-ripple--cut-1"),
      (a.className = "vs-ripple--cut-2"),
      (l.style.left = a.style.left = `${o}px`),
      (l.style.top = a.style.top = `${s}px`),
      (l.style.width = a.style.width = `${t.clientWidth * 2.5}px`),
      (l.style.height = a.style.height = `${t.clientWidth * 2.5}px`),
      (l.style.opacity = a.style.opacity = "1"),
      i.appendChild(l),
      i.appendChild(a),
      t.appendChild(i),
      setTimeout(() => {
        (l.style.left = `-${t.clientWidth * 1.3}px`),
          (l.style.opacity = "1"),
          (a.style.left = `${t.clientWidth * 1.3}px`),
          (a.style.opacity = "1");
      }, 1);
    let u = !1;
    setTimeout(() => {
      u = !0;
    }, 300);
    function c(f) {
      (l.style.transition = `all 0.${r * 600}s ease`),
        setTimeout(
          () => {
            (l.style.opacity = "0"),
              setTimeout(() => {
                t.removeChild(i);
              }, r * 300);
          },
          u ? 0 : r * 400
        ),
        f.target.removeEventListener("mouseup", c),
        f.target.removeEventListener("mouseleave", c);
    }
    e.target.addEventListener("mouseup", c),
      e.target.addEventListener("mouseleave", c);
  },
  io = "vs",
  ug = "is-",
  Gt = (e, t, n, o, s) => {
    let r = `${e}-${t}`;
    return n && (r += `-${n}`), o && (r += `__${o}`), s && (r += `--${s}`), r;
  },
  fg = Symbol("namespaceContextKey"),
  dg = (e) => {
    const t = e || je(fg, ee(io));
    return I(() => v(t) || io);
  },
  Ce = (e, t) => {
    const n = dg(t);
    return {
      namespace: n,
      b: (y = "") => Gt(n.value, e, y, "", ""),
      e: (y) => (y ? Gt(n.value, e, "", y, "") : ""),
      m: (y) => (y ? Gt(n.value, e, "", "", y) : ""),
      be: (y, b) => (y && b ? Gt(n.value, e, y, b, "") : ""),
      em: (y, b) => (y && b ? Gt(n.value, e, "", y, b) : ""),
      bm: (y, b) => (y && b ? Gt(n.value, e, y, "", b) : ""),
      bem: (y, b, w) => (y && b && w ? Gt(n.value, e, y, b, w) : ""),
      is: (y, ...b) => {
        const w = b.length >= 1 ? b[0] : !0;
        return y && w ? `${ug}${y}` : "";
      },
      cssVar: (y) => {
        const b = {};
        for (const w in y) y[w] && (b[`--${n.value}-${w}`] = y[w]);
        return b;
      },
      cssVarName: (y) => `--${n.value}-${y}`,
      cssVarBlock: (y) => {
        const b = {};
        for (const w in y) y[w] && (b[`--${n.value}-${e}-${w}`] = y[w]);
        return b;
      },
      cssVarBlockName: (y) => `--${n.value}-${e}-${y}`,
    };
  },
  Mn = (e) => {
    const t = Ce("component"),
      n = I(() => (vo.includes(v(e)) ? t.m(v(e)) : "")),
      o = I(() => (!!v(e) && t.m(t.is("color"))) || "");
    return [v(n), v(o)];
  },
  pg = (e) => {
    const t = Tt();
    return I(() => {
      var n, o;
      return (o = v(((n = t.proxy) == null ? void 0 : n.$props)[e])) != null
        ? o
        : void 0;
    });
  };
yo({ type: String, values: sg, required: !1 });
const ln = yo({ type: String, values: vo, validator: pi }),
  In = (e) => {
    const t = pg("color");
    return I(() => t.value || v(e));
  };
function Hl() {
  let e;
  const t = (o, s) => {
      n(), (e = setTimeout(o, s));
    },
    n = () => clearTimeout(e);
  return ui(() => n()), { registerTimeout: t, cancelTimeout: n };
}
const hg = Ie({
    showAfter: { type: Number, validator: (e) => Rt(e) && e >= 0, default: 0 },
    hideAfter: {
      type: Number,
      validator: (e) => Rt(e) && e >= 0,
      default: 200,
    },
    autoClose: { type: Number, default: 0 },
  }),
  mg = ({ showAfter: e, hideAfter: t, autoClose: n, open: o, close: s }) => {
    const { registerTimeout: r } = Hl(),
      { registerTimeout: i, cancelTimeout: l } = Hl();
    return {
      onOpen: (c) => {
        r(() => {
          o(c);
          const f = v(n);
          Rt(f) &&
            f > 0 &&
            i(() => {
              s(c);
            }, f);
        }, v(e));
      },
      onClose: (c) => {
        l(),
          r(() => {
            s(c);
          }, v(t));
      },
    };
  },
  Xe = (
    { scope: e, type: t = "API", from: n, version: o, replacement: s, ref: r },
    i
  ) => {
    fe(
      () => v(i),
      (l) => {},
      { immediate: !0 }
    );
  },
  gg = ["top", "right", "bottom", "left"],
  Wl = ["start", "end"];
gg.reduce((e, t) => e.concat(t, `${t}-${Wl[0]}`, `${t}-${Wl[1]}`), []);
const lo = Math.min,
  Sn = Math.max,
  ts = Math.round,
  Ft = (e) => ({ x: e, y: e }),
  yg = { left: "right", right: "left", bottom: "top", top: "bottom" },
  vg = { start: "end", end: "start" };
function xr(e, t, n) {
  return Sn(e, lo(t, n));
}
function bo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function _o(e) {
  return e.split("-")[1];
}
function Xc(e) {
  return e === "x" ? "y" : "x";
}
function hi(e) {
  return e === "y" ? "height" : "width";
}
function Bs(e) {
  return ["top", "bottom"].includes(an(e)) ? "y" : "x";
}
function mi(e) {
  return Xc(Bs(e));
}
function bg(e, t, n = !1) {
  const o = _o(e),
    s = mi(e),
    r = hi(s);
  let i =
    s === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
      ? "bottom"
      : "top";
  return t.reference[r] > t.floating[r] && (i = ns(i)), [i, ns(i)];
}
function _g(e) {
  const t = ns(e);
  return [Tr(e), t, Tr(t)];
}
function Tr(e) {
  return e.replace(/start|end/g, (t) => vg[t]);
}
function wg(e, t, n) {
  const o = ["left", "right"],
    s = ["right", "left"],
    r = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? s : o) : t ? o : s;
    case "left":
    case "right":
      return t ? r : i;
    default:
      return [];
  }
}
function Cg(e, t, n, o) {
  const s = _o(e);
  let r = wg(an(e), n === "start", o);
  return (
    s && ((r = r.map((i) => `${i}-${s}`)), t && (r = r.concat(r.map(Tr)))), r
  );
}
function ns(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yg[t]);
}
function xg(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Qc(e) {
  return typeof e != "number"
    ? xg(e)
    : { top: e, right: e, bottom: e, left: e };
}
function os(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
const Tg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    var n, o;
    const {
        x: s,
        y: r,
        placement: i,
        rects: l,
        platform: a,
        elements: u,
        middlewareData: c,
      } = t,
      { element: f, padding: d = 0 } = bo(e, t) || {},
      m = en(f);
    if (m == null) return {};
    const h = Qc(d),
      y = { x: s, y: r },
      b = mi(i),
      w = hi(b),
      S = await a.getDimensions(m),
      C = b === "y",
      x = C ? "top" : "left",
      B = C ? "bottom" : "right",
      D = C ? "clientHeight" : "clientWidth",
      K = l.reference[w] + l.reference[b] - y[b] - l.floating[w],
      M = y[b] - l.reference[b],
      k = await ((n = a.getOffsetParent) == null ? void 0 : n.call(a, m));
    let P = k ? k[D] : 0;
    (!P || !(await ((o = a.isElement) == null ? void 0 : o.call(a, k)))) &&
      (P = u.floating[D] || l.floating[w]);
    const N = K / 2 - M / 2,
      $ = P / 2 - S[w] / 2 - 1,
      Y = lo(h[x], $),
      ce = lo(h[B], $),
      we = Y,
      pe = P - S[w] - ce,
      te = P / 2 - S[w] / 2 + N,
      oe = xr(we, te, pe),
      We =
        !c.arrow &&
        _o(i) != null &&
        te !== oe &&
        l.reference[w] / 2 - (te < we ? Y : ce) - S[w] / 2 < 0,
      St = We ? (te < we ? te - we : te - pe) : 0;
    return {
      [b]: y[b] + St,
      data: {
        [b]: oe,
        centerOffset: te - oe - St,
        ...(We && { alignmentOffset: St }),
      },
      reset: We,
    };
  },
});
async function eu(e, t = {}) {
  var n, o, s, r, i, l;
  const { x: a, y: u, platform: c, rects: f, elements: d, strategy: m } = e,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: b = "floating",
      altBoundary: w = !1,
      padding: S = 0,
    } = bo(t, e),
    C = Qc(S),
    B = d[w ? (b === "floating" ? "reference" : "floating") : b],
    D = os(
      await c.getClippingRect({
        element:
          (o = await ((n = c.isElement) == null ? void 0 : n.call(c, B))) ==
            null || o
            ? B
            : B.contextElement ||
              (await ((s = c.getDocumentElement) == null
                ? void 0
                : s.call(c, d.floating))),
        boundary: h,
        rootBoundary: y,
        strategy: m,
      })
    ),
    K = b === "floating" ? { ...f.floating, x: a, y: u } : f.reference,
    M = await ((r = c.getOffsetParent) == null
      ? void 0
      : r.call(c, d.floating)),
    k = (await ((i = c.isElement) == null ? void 0 : i.call(c, M)))
      ? (await ((l = c.getScale) == null ? void 0 : l.call(c, M))) || {
          x: 1,
          y: 1,
        }
      : { x: 1, y: 1 },
    P = os(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: K,
            offsetParent: M,
            strategy: m,
          })
        : K
    );
  return {
    top: (D.top - P.top + C.top) / k.y,
    bottom: (P.bottom - D.bottom + C.bottom) / k.y,
    left: (D.left - P.left + C.left) / k.x,
    right: (P.right - D.right + C.right) / k.x,
  };
}
const Sg = (e = {}) => ({
  name: "flip",
  options: e,
  async fn(t) {
    var n, o, s, r, i, l;
    const {
        placement: a,
        middlewareData: u,
        rects: c,
        initialPlacement: f,
        platform: d,
        elements: m,
      } = t,
      {
        mainAxis: h = !0,
        crossAxis: y = !0,
        fallbackPlacements: b,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: S = "none",
        flipAlignment: C = !0,
        ...x
      } = bo(e, t);
    if ((n = u.arrow) != null && n.alignmentOffset) return {};
    const B = an(a),
      D = an(f) === f,
      K = await ((o = d.isRTL) == null ? void 0 : o.call(d, m.floating)),
      M = b || (D || !C ? [ns(f)] : _g(f));
    !b && S !== "none" && M.push(...Cg(f, C, S, K));
    const k = [f, ...M],
      P = await eu(t, x),
      N = [];
    let $ = ((s = u.flip) == null ? void 0 : s.overflows) || [];
    if ((h && N.push(P[B]), y)) {
      const Y = bg(a, c, K);
      N.push(P[Y[0]], P[Y[1]]);
    }
    if (
      (($ = [...$, { placement: a, overflows: N }]), !N.every((Y) => Y <= 0))
    ) {
      const Y = (((r = u.flip) == null ? void 0 : r.index) || 0) + 1,
        ce = k[Y];
      if (ce)
        return { data: { index: Y, overflows: $ }, reset: { placement: ce } };
      let we =
        (i = $.filter((pe) => pe.overflows[0] <= 0).sort(
          (pe, te) => pe.overflows[1] - te.overflows[1]
        )[0]) == null
          ? void 0
          : i.placement;
      if (!we)
        switch (w) {
          case "bestFit": {
            const pe =
              (l = $.map((te) => [
                te.placement,
                te.overflows
                  .filter((oe) => oe > 0)
                  .reduce((oe, We) => oe + We, 0),
              ]).sort((te, oe) => te[1] - oe[1])[0]) == null
                ? void 0
                : l[0];
            pe && (we = pe);
            break;
          }
          case "initialPlacement":
            we = f;
            break;
        }
      if (a !== we) return { reset: { placement: we } };
    }
    return {};
  },
});
async function Og(e, t) {
  var n;
  const { placement: o, platform: s, elements: r } = e,
    i = await ((n = s.isRTL) == null ? void 0 : n.call(s, r.floating)),
    l = an(o),
    a = _o(o),
    u = Bs(o) === "y",
    c = ["left", "top"].includes(l) ? -1 : 1,
    f = i && u ? -1 : 1,
    d = bo(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: y,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof y == "number" && (h = a === "end" ? y * -1 : y),
    u ? { x: h * f, y: m * c } : { x: m * c, y: h * f }
  );
}
const Eg = (e = 0) => ({
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const { x: s, y: r, placement: i, middlewareData: l } = t,
        a = await Og(t, e);
      return i === ((n = l.offset) == null ? void 0 : n.placement) &&
        (o = l.arrow) != null &&
        o.alignmentOffset
        ? {}
        : { x: s + a.x, y: r + a.y, data: { ...a, placement: i } };
    },
  }),
  Ag = (e = {}) => ({
    name: "shift",
    options: e,
    async fn(t) {
      const { x: n, y: o, placement: s } = t,
        {
          mainAxis: r = !0,
          crossAxis: i = !1,
          limiter: l = { fn: ({ x: b, y: w }) => ({ x: b, y: w }) },
          ...a
        } = bo(e, t),
        u = { x: n, y: o },
        c = await eu(t, a),
        f = Bs(an(s)),
        d = Xc(f);
      let m = u[d],
        h = u[f];
      if (r) {
        const b = d === "y" ? "top" : "left",
          w = d === "y" ? "bottom" : "right",
          S = m + c[b],
          C = m - c[w];
        m = xr(S, m, C);
      }
      if (i) {
        const b = f === "y" ? "top" : "left",
          w = f === "y" ? "bottom" : "right",
          S = h + c[b],
          C = h - c[w];
        h = xr(S, h, C);
      }
      const y = l.fn({ ...t, [d]: m, [f]: h });
      return { ...y, data: { x: y.x - n, y: y.y - o } };
    },
  });
function zl({ reference: e, floating: t }, n, o) {
  const s = Bs(n),
    r = mi(n),
    i = hi(r),
    l = an(n),
    a = s === "y",
    u = e.x + e.width / 2 - t.width / 2,
    c = e.y + e.height / 2 - t.height / 2,
    f = e[i] / 2 - t[i] / 2;
  let d;
  switch (l) {
    case "top":
      d = { x: u, y: e.y - t.height };
      break;
    case "bottom":
      d = { x: u, y: e.y + e.height };
      break;
    case "right":
      d = { x: e.x + e.width, y: c };
      break;
    case "left":
      d = { x: e.x - t.width, y: c };
      break;
    default:
      d = { x: e.x, y: e.y };
  }
  switch (_o(n)) {
    case "start":
      d[r] -= f * (o && a ? -1 : 1);
      break;
    case "end":
      d[r] += f * (o && a ? -1 : 1);
      break;
  }
  return d;
}
const Pg = async (e, t, n) => {
  var o;
  const {
      placement: s = "bottom",
      strategy: r = "absolute",
      middleware: i = [],
      platform: l,
    } = n,
    a = i.filter(Boolean),
    u = await ((o = l.isRTL) == null ? void 0 : o.call(l, t));
  let c = await l.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: f, y: d } = zl(c, s, u),
    m = s,
    h = {},
    y = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: w, fn: S } = a[b],
      {
        x: C,
        y: x,
        data: B,
        reset: D,
      } = await S({
        x: f,
        y: d,
        initialPlacement: s,
        placement: m,
        strategy: r,
        middlewareData: h,
        rects: c,
        platform: l,
        elements: { reference: e, floating: t },
      });
    (f = C ?? f),
      (d = x ?? d),
      (h = { ...h, [w]: { ...h[w], ...B } }),
      D &&
        y <= 50 &&
        (y++,
        typeof D == "object" &&
          (D.placement && (m = D.placement),
          D.rects &&
            (c =
              D.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : D.rects),
          ({ x: f, y: d } = zl(c, m, u))),
        (b = -1));
  }
  return { x: f, y: d, placement: m, strategy: r, middlewareData: h };
};
function _t(e) {
  return gi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.ownerDocument) == null
      ? void 0
      : t.defaultView) || window
  );
}
function Vt(e) {
  var t;
  return (t = (gi(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function gi(e) {
  return e instanceof Node || e instanceof Ve(e).Node;
}
function $g(e) {
  return e instanceof Element || e instanceof Ve(e).Element;
}
function pt(e) {
  return e instanceof HTMLElement || e instanceof Ve(e).HTMLElement;
}
function Ul(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function wo(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: s } = cn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
    !["inline", "contents"].includes(s)
  );
}
function kg(e) {
  return ["table", "td", "th"].includes(_t(e));
}
function yi(e) {
  const t = vi(),
    n = cn(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o)
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o)
    )
  );
}
function Mg(e) {
  let t = $n(e);
  for (; pt(t) && !Ns(t); ) {
    if (yi(t)) return t;
    t = $n(t);
  }
  return null;
}
function vi() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ns(e) {
  return ["html", "body", "#document"].includes(_t(e));
}
function cn(e) {
  return Ve(e).getComputedStyle(e);
}
function Rs(e) {
  return $g(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function $n(e) {
  if (_t(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Ul(e) && e.host) || Vt(e);
  return Ul(t) ? t.host : t;
}
function tu(e) {
  const t = $n(e);
  return Ns(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : pt(t) && wo(t)
    ? t
    : tu(t);
}
function Sr(e, t = [], n = !0) {
  var o;
  const s = tu(e),
    r = s === ((o = e.ownerDocument) == null ? void 0 : o.body),
    i = Ve(s);
  return r
    ? t.concat(
        i,
        i.visualViewport || [],
        wo(s) ? s : [],
        i.frameElement && n ? Sr(i.frameElement) : []
      )
    : t.concat(s, Sr(s, [], n));
}
function nu(e) {
  return Hm(e) ? e : e.contextElement;
}
function ou(e) {
  const t = getComputedStyle(e);
  let n = Number.parseFloat(t.width) || 0,
    o = Number.parseFloat(t.height) || 0;
  const s = pt(e),
    r = s ? e.offsetWidth : n,
    i = s ? e.offsetHeight : o,
    l = ts(n) !== r || ts(o) !== i;
  return l && ((n = r), (o = i)), { width: n, height: o, $: l };
}
function On(e) {
  const t = nu(e);
  if (!pt(t)) return Ft(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: s, $: r } = ou(t);
  let i = (r ? ts(n.width) : n.width) / o,
    l = (r ? ts(n.height) : n.height) / s;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
function un(e) {
  return e instanceof Element || e instanceof Ve(e).Element;
}
const Ig = Ft(0);
function su(e) {
  const t = Ve(e);
  return !vi() || !t.visualViewport
    ? Ig
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Bg(e, t = !1, n) {
  return !n || (t && n !== Ve(e)) ? !1 : t;
}
function ao(e, t = !1, n = !1, o) {
  const s = e.getBoundingClientRect(),
    r = nu(e);
  let i = Ft(1);
  t && (o ? un(o) && (i = On(o)) : (i = On(e)));
  const l = Bg(r, n, o) ? su(r) : Ft(0);
  let a = (s.left + l.x) / i.x,
    u = (s.top + l.y) / i.y,
    c = s.width / i.x,
    f = s.height / i.y;
  if (r) {
    const d = Ve(r),
      m = o && un(o) ? Ve(o) : o;
    let h = d.frameElement;
    for (; h && o && m !== d; ) {
      const y = On(h),
        b = h.getBoundingClientRect(),
        w = cn(h),
        S = b.left + (h.clientLeft + Number.parseFloat(w.paddingLeft)) * y.x,
        C = b.top + (h.clientTop + Number.parseFloat(w.paddingTop)) * y.y;
      (a *= y.x),
        (u *= y.y),
        (c *= y.x),
        (f *= y.y),
        (a += S),
        (u += C),
        (h = Ve(h).frameElement);
    }
  }
  return os({ width: c, height: f, x: a, y: u });
}
function Ng({ rect: e, offsetParent: t, strategy: n }) {
  const o = pt(t),
    s = Vt(t);
  if (t === s) return e;
  let r = { scrollLeft: 0, scrollTop: 0 },
    i = Ft(1);
  const l = Ft(0);
  if (
    (o || (!o && n !== "fixed")) &&
    ((_t(t) !== "body" || wo(s)) && (r = Rs(t)), pt(t))
  ) {
    const a = ao(t);
    (i = On(t)), (l.x = a.x + t.clientLeft), (l.y = a.y + t.clientTop);
  }
  return {
    width: e.width * i.x,
    height: e.height * i.y,
    x: e.x * i.x - r.scrollLeft * i.x + l.x,
    y: e.y * i.y - r.scrollTop * i.y + l.y,
  };
}
function Rg(e) {
  return Array.from(e.getClientRects());
}
function ru(e) {
  return ao(Vt(e)).left + Rs(e).scrollLeft;
}
function Fg(e) {
  const t = Vt(e),
    n = Rs(e),
    o = e.ownerDocument.body,
    s = Sn(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    r = Sn(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + ru(e);
  const l = -n.scrollTop;
  return (
    cn(o).direction === "rtl" && (i += Sn(t.clientWidth, o.clientWidth) - s),
    { width: s, height: r, x: i, y: l }
  );
}
function Lg(e, t) {
  const n = Ve(e),
    o = Vt(e),
    s = n.visualViewport;
  let r = o.clientWidth,
    i = o.clientHeight,
    l = 0,
    a = 0;
  if (s) {
    (r = s.width), (i = s.height);
    const u = vi();
    (!u || (u && t === "fixed")) && ((l = s.offsetLeft), (a = s.offsetTop));
  }
  return { width: r, height: i, x: l, y: a };
}
function Dg(e, t) {
  const n = ao(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    r = pt(e) ? On(e) : Ft(1),
    i = e.clientWidth * r.x,
    l = e.clientHeight * r.y,
    a = s * r.x,
    u = o * r.y;
  return { width: i, height: l, x: a, y: u };
}
function Kl(e, t, n) {
  let o;
  if (t === "viewport") o = Lg(e, n);
  else if (t === "document") o = Fg(Vt(e));
  else if (un(t)) o = Dg(t, n);
  else {
    const s = su(e);
    o = { ...t, x: t.x - s.x, y: t.y - s.y };
  }
  return os(o);
}
function iu(e, t) {
  const n = $n(e);
  return n === t || !un(n) || Ns(n)
    ? !1
    : cn(n).position === "fixed" || iu(n, t);
}
function jg(e, t) {
  const n = t == null ? void 0 : t.get(e);
  if (n) return n;
  let o = Sr(e, [], !1).filter((l) => un(l) && _t(l) !== "body"),
    s = null;
  const r = cn(e).position === "fixed";
  let i = r ? $n(e) : e;
  for (; un(i) && !Ns(i); ) {
    const l = cn(i),
      a = yi(i);
    !a && l.position === "fixed" && (s = null),
      (
        r
          ? !a && !s
          : (!a &&
              l.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (wo(i) && !a && iu(e, i))
      )
        ? (o = o.filter((c) => c !== i))
        : (s = l),
      (i = $n(i));
  }
  return t == null || t.set(e, o), o;
}
function Vg({ element: e, boundary: t, rootBoundary: n, strategy: o }) {
  const r = [...(t === "clippingAncestors" ? jg(e, this._c) : Am([], t)), n],
    i = r[0],
    l = r.reduce((a, u) => {
      const c = Kl(e, u, o);
      return (
        (a.top = Sn(c.top, a.top)),
        (a.right = lo(c.right, a.right)),
        (a.bottom = lo(c.bottom, a.bottom)),
        (a.left = Sn(c.left, a.left)),
        a
      );
    }, Kl(e, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Hg(e) {
  const { width: t, height: n } = ou(e);
  return { width: t, height: n };
}
function Wg(e, t, n) {
  const o = pt(t),
    s = Vt(t),
    r = n === "fixed",
    i = ao(e, !0, r, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Ft(0);
  if (o || (!o && !r))
    if (((_t(t) !== "body" || wo(s)) && (l = Rs(t)), o)) {
      const u = ao(t, !0, r, t);
      (a.x = u.x + t.clientLeft), (a.y = u.y + t.clientTop);
    } else s && (a.x = ru(s));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height,
  };
}
function ql(e, t) {
  return !pt(e) || getComputedStyle(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function lu(e, t) {
  const n = Ve(e);
  if (!pt(e)) return n;
  let o = ql(e, t);
  for (; o && kg(o) && getComputedStyle(o).position === "static"; )
    o = ql(o, t);
  return o &&
    (_t(o) === "html" ||
      (_t(o) === "body" && getComputedStyle(o).position === "static" && !yi(o)))
    ? n
    : o || Mg(e) || n;
}
const zg = async function ({ reference: e, floating: t, strategy: n }) {
  const o = this.getOffsetParent || lu,
    s = this.getDimensions;
  return {
    reference: Wg(e, await o(t), n),
    floating: { x: 0, y: 0, ...(await s(t)) },
  };
};
function Ug(e) {
  return getComputedStyle(e).direction === "rtl";
}
const Kg = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ng,
    getDocumentElement: Vt,
    getClippingRect: Vg,
    getOffsetParent: lu,
    getElementRects: zg,
    getClientRects: Rg,
    getDimensions: Hg,
    getScale: On,
    isElement: un,
    isRTL: Ug,
  },
  qg = Ag,
  Gg = Sg,
  Yg = Tg,
  Zg = (e, t, n) => {
    const o = new Map(),
      s = { platform: Kg, ...n },
      r = { ...s.platform, _c: o };
    return Pg(e, t, { ...s, platform: r });
  };
function Jg(e) {
  return e != null && Object.prototype.hasOwnProperty.call(e, "$el");
}
function Or(e) {
  if (Jg(e)) {
    const t = e.$el;
    return gi(t) && _t(t) === "#comment" ? null : t;
  }
  return e;
}
function Xg(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Or(v(e.element));
      return n == null ? {} : Yg({ element: n, padding: e.padding }).fn(t);
    },
  };
}
function au(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gl(e, t) {
  const n = au(e);
  return Math.round(t * n) / n;
}
function Qg(e, t, n = {}) {
  const o = n.whileElementsMounted,
    s = I(() => {
      var M;
      return (M = v(n.open)) != null ? M : !0;
    }),
    r = I(() => {
      var M;
      return (M = v(n.fit)) != null ? M : !1;
    }),
    i = I(() => v(n.middleware)),
    l = I(() => {
      var M;
      return (M = v(n.placement)) != null ? M : "bottom";
    }),
    a = I(() => {
      var M;
      return (M = v(n.strategy)) != null ? M : "absolute";
    }),
    u = I(() => {
      var M;
      return (M = v(n.transform)) != null ? M : !0;
    }),
    c = I(() => Or(e.value)),
    f = I(() => Or(t.value)),
    d = ee(0),
    m = ee(0),
    h = ee(a.value),
    y = ee(l.value),
    b = od({}),
    w = ee(!1),
    S = I(() => {
      const M = { position: h.value, left: "0", top: "0" };
      if (!f.value) return M;
      const k = Gl(f.value, d.value),
        P = Gl(f.value, m.value);
      return u.value
        ? {
            ...M,
            transform: `translate(${k}px, ${P}px)`,
            ...(au(f.value) >= 1.5 && { willChange: "transform" }),
          }
        : { position: h.value, left: `${k}px`, top: `${P}px` };
    });
  let C;
  function x() {
    c.value == null ||
      f.value == null ||
      (r.value &&
        (f.value.style.width = `${c.value.getBoundingClientRect().width}px`),
      Zg(c.value, f.value, {
        middleware: i.value,
        placement: l.value,
        strategy: a.value,
      }).then((M) => {
        (d.value = M.x),
          (m.value = M.y),
          (h.value = M.strategy),
          (y.value = M.placement),
          (b.value = M.middlewareData),
          (w.value = !0);
      }));
  }
  function B() {
    typeof C == "function" && (C(), (C = void 0));
  }
  function D() {
    if ((B(), o === void 0)) {
      x();
      return;
    }
    if (c.value != null && f.value != null) {
      C = o(c.value, f.value, x);
      return;
    }
  }
  function K() {
    s.value || (w.value = !1);
  }
  return (
    xt(() => {
      Tn("resize", D, !0),
        Tn("scroll", D, !0),
        fe([i, l, a], x, { flush: "sync" }),
        fe([c, f], D, { flush: "sync" }),
        fe(s, K, { flush: "sync" });
    }),
    ds() && ps(B),
    {
      x: hn(d),
      y: hn(m),
      strategy: hn(h),
      placement: hn(y),
      middlewareData: hn(b),
      isPositioned: hn(w),
      floatingStyles: S,
      update: x,
    }
  );
}
const cu = Symbol("ForwardRef"),
  ey = (e) => {
    Ts(cu, {
      setForwardRef: (n) => {
        e.value = n;
      },
    });
  },
  ty = (e) => ({
    mounted(t) {
      e(t);
    },
    updated(t) {
      e(t);
    },
    unmounted() {
      e(null);
    },
  }),
  uu = Symbol("AvatarGroupContextKey"),
  ny = Symbol(),
  bi = Symbol("popper");
var oy = {
  name: "en",
  vs: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description:
        "current color is {color}. press enter to select a new color.",
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt:
        "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",
      },
    },
    inputNumber: { decrease: "decrease number", increase: "increase number" },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select",
    },
    dropdown: { toggleDropdown: "Toggle Dropdown" },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data",
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning:
        "Deprecated usages detected, please refer to the pagination documentation for more details",
    },
    dialog: { close: "Close this dialog" },
    drawer: { close: "Close this dialog" },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog",
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue",
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value",
    },
    table: {
      noMatch: "No matching data",
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum",
    },
    tree: { emptyText: "No Data" },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked",
    },
    image: { error: "FAILED" },
    pageHeader: { title: "Back" },
    popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" },
  },
};
const sy = (e) => (t, n) => ry(t, n, v(e)),
  ry = (e, t, n) =>
    Sm(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
      var r;
      return `${(r = t == null ? void 0 : t[s]) != null ? r : `{${s}}`}`;
    }),
  iy = (e) => {
    const t = I(() => v(e).name),
      n = xe(e) ? e : ee(e);
    return { lang: t, locale: n, t: sy(e) };
  },
  ly = Symbol("localeContextKey"),
  ay = (e) => {
    const t = e || je(ly, ee());
    return iy(I(() => t.value || oy));
  },
  Yl = ee(0),
  fu = 2e3,
  cy = Symbol("zIndexContextKey"),
  _i = (e) => {
    const t = e || je(cy, void 0),
      n = I(() => {
        const r = v(t);
        return Rt(r) ? r : fu;
      }),
      o = I(() => n.value + Yl.value);
    return {
      initialZIndex: n,
      currentZIndex: o,
      nextZIndex: () => (Yl.value++, o.value),
    };
  },
  Zl = ee();
function wi(e, t = void 0) {
  const n = Tt() ? je(ny, Zl) : Zl;
  return e
    ? I(() => {
        var o, s;
        return (s = (o = n.value) == null ? void 0 : o[e]) != null ? s : t;
      })
    : n;
}
const du = (e) => {
    const t = wi(),
      n = Ce(
        e,
        I(() => {
          var r;
          return ((r = t.value) == null ? void 0 : r.namespace) || io;
        })
      ),
      o = ay(
        I(() => {
          var r;
          return (r = t.value) == null ? void 0 : r.locale;
        })
      ),
      s = _i(
        I(() => {
          var r;
          return ((r = t.value) == null ? void 0 : r.zIndex) || fu;
        })
      );
    return { ns: n, locale: o, zIndex: s };
  },
  uy = (e) => {
    const t = Tt();
    if (!t)
      throw new Error(
        "useInject hook must be called inside setup function or <script setup>"
      );
    const n = je(e, void 0),
      o = I(() => (n == null ? void 0 : n.children.indexOf(t)) || 0);
    return (
      n == null || n.insert(t),
      xs(() => {
        n == null || n.remove(t);
      }),
      n ? { ...n, index: o } : void 0
    );
  },
  fy = (e, t) => {
    const n = wt([]),
      o = (r) => {
        n.push(r);
      },
      s = (r) => {
        const i = n.indexOf(r);
        n.splice(i, 1);
      };
    return (
      Ts(e, { ...t, children: n, insert: o, remove: s }),
      { children: n, insert: o, remove: s }
    );
  },
  Jl = { prefix: Math.floor(Math.random() * 1e4), current: 0 },
  dy = Symbol("IdInjection"),
  pu = () => (Tt() ? je(dy, Jl) : Jl),
  py = (e) => {
    xe(e) ||
      zm("[useLockscreen]", "You need to pass a ref param to this function");
    const t = Ce("popup"),
      n = I(() => t.bm("parent", "hidden"));
    if (!Ge || jl(document.body, n.value)) return;
    let o = 0,
      s = !1,
      r = "0";
    const i = () => {
      setTimeout(() => {
        Km(document.body, n.value), s && (document.body.style.width = r);
      }, 200);
    };
    fe(e, (l) => {
      if (!l) {
        i();
        return;
      }
      (s = !jl(document.body, n.value)),
        s && (r = document.body.style.width),
        (o = Gm(t.namespace.value));
      const a =
          document.documentElement.clientHeight < document.body.scrollHeight,
        u = qm(document.body, "overflowY");
      o > 0 &&
        (a || u === "scroll") &&
        s &&
        (document.body.style.width = `calc(100% - ${o}px)`),
        Um(document.body, n.value);
    }),
      ps(() => i());
  },
  En = [],
  hy = (e) => {
    En.length !== 0 &&
      e.code === Xm.esc &&
      (e.stopPropagation(), En[En.length - 1].handleClose());
  },
  my = (e, t) => {
    fe(t, (n) => {
      n ? En.push(e) : En.splice(En.indexOf(e), 1);
    });
  };
Ge && Tn(document, "keydown", hy);
const gy = yo({ type: ue(Boolean), default: null }),
  yy = yo({ type: ue(Function) }),
  vy = (e) => {
    const t = `update:${e}`,
      n = `onUpdate:${e}`,
      o = [t],
      s = { [e]: gy, [n]: yy };
    return {
      useModelToggle: ({
        indicator: i,
        toggleReason: l,
        shouldHideWhenRouteChanges: a,
        shouldProceed: u,
        processBeforeClosing: c,
        onShow: f,
        onHide: d,
      }) => {
        const m = Tt(),
          { emit: h } = m,
          y = m.props,
          b = I(() => q(y[n])),
          w = I(() => y[e] === null),
          S = (M) => {
            i.value !== !0 &&
              ((i.value = !0), l && (l.value = M), q(f) && f(M));
          },
          C = (M) => {
            i.value !== !1 &&
              ((i.value = !1), l && (l.value = M), q(d) && d(M));
          },
          x = (M) => {
            if (y.disabled === !0 || (q(u) && !u())) return;
            const k = b.value && Ge;
            k && h(t, !0), (w.value || !k) && S(M);
          },
          B = (M) => {
            if (y.disabled === !0 || !Ge || (q(c) && !c())) return;
            const k = b.value && Ge;
            k && h(t, !1), (w.value || !k) && C(M);
          },
          D = (M) => {
            vt(M) &&
              (y.disabled && M
                ? b.value && h(t, !1)
                : i.value !== M && (M ? S() : C()));
          },
          K = () => {
            i.value ? B() : x();
          };
        return (
          fe(() => y[e], D),
          a &&
            m.appContext.config.globalProperties.$route !== void 0 &&
            fe(
              () => ({ ...m.proxy.$route }),
              () => {
                a.value && i.value && B();
              }
            ),
          xt(() => {
            D(y[e]);
          }),
          { hide: B, show: x, toggle: K, hasUpdateHandler: b }
        );
      },
      useModelToggleProps: s,
      useModelToggleEmits: o,
    };
  };
let Xl;
const Ci = () => {
    const e = wi("namespace", io),
      t = pu(),
      n = I(() => `${e.value}-popper-container-${t.prefix}`),
      o = I(() => `#${n.value}`);
    return { id: n, selector: o };
  },
  hu = (e) => {
    const t = document.createElement("div");
    return (t.id = e), document.body.appendChild(t), t;
  },
  mu = () => {
    const { id: e, selector: t } = Ci();
    return (
      rc(() => {
        Ge &&
          !Xl &&
          !document.body.querySelector(t.value) &&
          (Xl = hu(e.value));
      }),
      { id: e, selector: t }
    );
  },
  by = (e) => {
    if (!e) return { onClick: ke, onMousedown: ke, onMouseup: ke };
    let t = !1,
      n = !1;
    return {
      onClick: (i) => {
        t && n && e(i), (t = n = !1);
      },
      onMousedown: (i) => {
        t = i.target === i.currentTarget;
      },
      onMouseup: (i) => {
        n = i.target === i.currentTarget;
      },
    };
  },
  _y = Ie({
    size: { type: ue([Number, String]) },
    color: { type: String, values: vo, validator: pi, default: "" },
  });
var Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t) n[o] = s;
  return n;
};
const wy = ne({ name: "VsIcon" }),
  Cy = ne({
    ...wy,
    props: _y,
    setup(e) {
      const t = e,
        n = Ce("icon"),
        o = I(() => {
          const { size: s, color: r } = t;
          return !s && !r
            ? {}
            : {
                ...n.cssVar({ color: ft(r) }),
                color: `rgb(${n.cssVarName("color")})`,
                fontSize: Vm(s) ? void 0 : Cr(s),
              };
        });
      return (s, r) => (
        L(),
        H(
          "i",
          { class: W(v(n).b()), style: Fe(o.value) },
          [be(s.$slots, "default")],
          6
        )
      );
    },
  });
var xy = Te(Cy, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/icon.vue",
  ],
]);
const Ty = Ie({ less: { type: Boolean } }),
  Sy = ne({ name: "IconArrow" }),
  Oy = ne({
    ...Sy,
    props: Ty,
    setup(e) {
      const t = Ce("icon-arrow");
      return (n, o) => (
        L(), H("i", { class: W([v(t).b(), v(t).is("less", n.less)]) }, null, 2)
      );
    },
  });
var Ey = Te(Oy, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/arrow.vue",
  ],
]);
const Ay = Ie({ indeterminate: { type: Boolean }, active: { type: Boolean } }),
  Py = z(
    "span",
    null,
    [z("div", { class: "line1" }), z("div", { class: "line2" })],
    -1
  ),
  $y = [Py],
  ky = ne({ name: "IconCheck" }),
  My = ne({
    ...ky,
    props: Ay,
    setup(e) {
      const t = Ce("icon-check");
      return (n, o) => (
        L(),
        H(
          "i",
          {
            class: W([
              v(t).b(),
              v(t).is("indeterminate", n.indeterminate),
              v(t).is("active", n.active),
            ]),
          },
          $y,
          2
        )
      );
    },
  });
var Iy = Te(My, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/check.vue",
  ],
]);
const By = Ie({
    hover: { type: String },
    scale: {
      type: ue([String, Number]),
      validator: (e) =>
        (fi(`${e}`) || Rt(e)) && Number(e) >= 0 && Number(e) <= 1,
      default: 1,
    },
  }),
  Ny = ne({ name: "IconClose" }),
  Ry = ne({
    ...Ny,
    props: By,
    setup(e) {
      const t = Ce("icon-close");
      return (n, o) => (
        L(),
        H(
          "i",
          {
            class: W([v(t).b(), n.hover && v(t).bm("hover", n.hover)]),
            style: Fe({ transform: `scale(${n.scale})` }),
          },
          null,
          6
        )
      );
    },
  });
var Fy = Te(Ry, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/close.vue",
  ],
]);
const Ly = z(
    "circle",
    { class: "path", cx: "25", cy: "25", r: "25" },
    null,
    -1
  ),
  Dy = [Ly],
  jy = z("circle", { class: "path", cx: "25", cy: "25", r: "25" }, null, -1),
  Vy = [jy],
  Hy = ne({ name: "IconLoading" }),
  Wy = ne({
    ...Hy,
    setup(e) {
      const t = Ce("icon-loading");
      return (n, o) => (
        L(),
        H(
          "div",
          { class: W(v(t).b()) },
          [
            (L(),
            H(
              "svg",
              { viewBox: "0 0 50 50", class: W([v(t).e("item"), v(t).e("1")]) },
              Dy,
              2
            )),
            (L(),
            H(
              "svg",
              { viewBox: "0 0 50 50", class: W([v(t).e("item"), v(t).e("2")]) },
              Vy,
              2
            )),
          ],
          2
        )
      );
    },
  });
var zy = Te(Wy, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/loading.vue",
  ],
]);
const Uy = Ie({ less: { type: Boolean } }),
  Ky = ne({ name: "IconPlus" }),
  qy = ne({
    ...Ky,
    props: Uy,
    setup(e) {
      const t = Ce("icon");
      return (n, o) => (
        L(),
        H("i", { class: W([v(t).b("plus"), v(t).is("less", n.less)]) }, null, 2)
      );
    },
  });
var Gy = Te(qy, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/plus.vue",
  ],
]);
const Yy = { name: "Star" },
  Zy = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
  Jy = z(
    "path",
    {
      fill: "currentColor",
      d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z",
    },
    null,
    -1
  ),
  Xy = [Jy];
function Qy(e, t, n, o, s, r) {
  return L(), H("svg", Zy, Xy);
}
var ev = Te(Yy, [
  ["render", Qy],
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/star.vue",
  ],
]);
const tv = { name: "StarFilled" },
  nv = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
  ov = z(
    "path",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z",
    },
    null,
    -1
  ),
  sv = [ov];
function rv(e, t, n, o, s, r) {
  return L(), H("svg", nv, sv);
}
var iv = Te(tv, [
  ["render", rv],
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/star-filled.vue",
  ],
]);
const lv = He(xy);
He(Ey);
He(Iy);
const xi = He(Fy),
  Ti = He(zy),
  av = He(Gy);
He(ev);
He(iv);
const cv = ne({ name: "VsCollapseTransition" }),
  uv = ne({
    ...cv,
    setup(e) {
      const t = Ce("collapse-transition"),
        n = {
          beforeEnter(o) {
            o.dataset || (o.dataset = {}),
              (o.dataset.oldPaddingTop = o.style.paddingTop),
              (o.dataset.oldPaddingBottom = o.style.paddingBottom),
              (o.style.maxHeight = 0),
              (o.style.paddingTop = 0),
              (o.style.paddingBottom = 0);
          },
          enter(o) {
            (o.dataset.oldOverflow = o.style.overflow),
              o.scrollHeight !== 0
                ? ((o.style.maxHeight = `${o.scrollHeight}px`),
                  (o.style.paddingTop = o.dataset.oldPaddingTop),
                  (o.style.paddingBottom = o.dataset.oldPaddingBottom))
                : ((o.style.maxHeight = 0),
                  (o.style.paddingTop = o.dataset.oldPaddingTop),
                  (o.style.paddingBottom = o.dataset.oldPaddingBottom)),
              (o.style.overflow = "hidden");
          },
          afterEnter(o) {
            (o.style.maxHeight = ""),
              (o.style.overflow = o.dataset.oldOverflow);
          },
          beforeLeave(o) {
            o.dataset || (o.dataset = {}),
              (o.dataset.oldPaddingTop = o.style.paddingTop),
              (o.dataset.oldPaddingBottom = o.style.paddingBottom),
              (o.dataset.oldOverflow = o.style.overflow),
              (o.style.maxHeight = `${o.scrollHeight}px`),
              (o.style.overflow = "hidden");
          },
          leave(o) {
            o.scrollHeight !== 0 &&
              ((o.style.maxHeight = 0),
              (o.style.paddingTop = 0),
              (o.style.paddingBottom = 0));
          },
          afterLeave(o) {
            (o.style.maxHeight = ""),
              (o.style.overflow = o.dataset.oldOverflow),
              (o.style.paddingTop = o.dataset.oldPaddingTop),
              (o.style.paddingBottom = o.dataset.oldPaddingBottom);
          },
        };
      return (o, s) => (
        L(),
        Ye(
          Ps,
          Oc({ name: v(t).b() }, Id(n)),
          { default: ie(() => [be(o.$slots, "default")]), _: 3 },
          16,
          ["name"]
        )
      );
    },
  });
var Uo = Te(uv, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/collapse-transition/src/collapse-transition.vue",
  ],
]);
Uo.install = (e) => {
  e.component(Uo.name, Uo);
};
const fv = Uo,
  Ql = fv,
  dv = Ie({
    color: { ...ln, default: "primary" },
    closable: { type: Boolean },
    hiddenContent: { type: Boolean, default: null },
    modelValue: { type: Boolean, default: !0 },
    page: { type: Number, default: 0 },
    progress: { type: [Number, String], default: 0 },
    time: { type: [Number, String], default: 0 },
    type: {
      type: String,
      values: ["", "border", "flat", "gradient", "relief", "shadow", "solid"],
      default: "",
    },
    border: Boolean,
    flat: Boolean,
    gradient: Boolean,
    relief: Boolean,
    shadow: Boolean,
    solid: Boolean,
  }),
  pv = {
    [Is]: (e) => vt(e),
    "update:page": (e) => Rt(e),
    "update:hiddenContent": (e) => vt(e),
  },
  hv = (e) => {
    Xe(
      {
        scope: "vs-alert",
        type: "Prop",
        from: "border",
        version: "0.2.0",
        replacement: "type",
        ref: "https://vuesax-alpha.vercel.app/components/alert#props",
      },
      I(() => !!e.border)
    ),
      Xe(
        {
          scope: "vs-alert",
          type: "Prop",
          from: "shadow",
          version: "0.2.0",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/alert#props",
        },
        I(() => !!e.shadow)
      ),
      Xe(
        {
          scope: "vs-alert",
          type: "Prop",
          from: "relief",
          version: "0.2.0",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/alert#props",
        },
        I(() => !!e.relief)
      ),
      Xe(
        {
          scope: "vs-alert",
          type: "Prop",
          from: "flat",
          version: "0.2.0",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/alert#props",
        },
        I(() => !!e.flat)
      ),
      Xe(
        {
          scope: "vs-alert",
          type: "Prop",
          from: "gradient",
          version: "0.2.0",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/alert#props",
        },
        I(() => !!e.gradient)
      ),
      Xe(
        {
          scope: "vs-alert",
          type: "Prop",
          from: "solid",
          version: "0.2.0",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/alert#props",
        },
        I(() => !!e.solid)
      );
  },
  mv = ne({ name: "VsAlert" }),
  gv = ne({
    ...mv,
    props: dv,
    emits: pv,
    setup(e, { emit: t }) {
      const n = e,
        o = po();
      hv(n);
      const s = Ce("alert"),
        r = Mn(In()),
        i = I(() => [
          r,
          s.b(),
          n.type && s.m(n.type),
          u.value.length > 0 && s.m("pages"),
        ]),
        l = I(() => s.cssVar({ color: ft(n.color) })),
        a = I(() => Object.keys(o).filter((y) => y.includes("page-")).length),
        u = I(() => {
          const h = Object.keys(o).filter((b) => b.includes("page-")),
            y = [];
          return (
            h.forEach((b) => {
              y.push(`${n.page}` === b.split("-")[1] && o[b]);
            }),
            y
          );
        }),
        c = () => {
          t(Is, !n.modelValue);
        },
        f = () => {
          t("update:hiddenContent", !n.hiddenContent);
        },
        d = () => {
          n.page > 1 && t("update:page", n.page - 1);
        },
        m = () => {
          n.page < a.value && t("update:page", n.page + 1);
        };
      return (h, y) => (
        L(),
        Ye(v(Ql), null, {
          default: ie(() => [
            h.modelValue
              ? (L(),
                H(
                  "div",
                  { key: 0, class: W(i.value), style: Fe(l.value) },
                  [
                    h.$slots.icon
                      ? (L(),
                        H(
                          "div",
                          { key: 0, class: W(v(s).e("icon")) },
                          [be(h.$slots, "icon")],
                          2
                        ))
                      : he("v-if", !0),
                    h.$slots.title
                      ? (L(),
                        H(
                          "div",
                          {
                            key: 1,
                            class: W([
                              v(s).e("title"),
                              v(vt)(h.hiddenContent) &&
                                v(s).em("title", "click__hidden"),
                            ]),
                            onClick: f,
                          },
                          [
                            be(h.$slots, "title"),
                            !h.closable && v(vt)(h.hiddenContent)
                              ? (L(),
                                Ye(
                                  v(av),
                                  {
                                    key: 0,
                                    less: !h.hiddenContent,
                                    onClick: Jp(f, ["stop"]),
                                  },
                                  null,
                                  8,
                                  ["less", "onClick"]
                                ))
                              : he("v-if", !0),
                          ],
                          2
                        ))
                      : he("v-if", !0),
                    Q(v(Ql), null, {
                      default: ie(() => [
                        h.hiddenContent
                          ? he("v-if", !0)
                          : (L(),
                            H(
                              "div",
                              { key: 0, class: W(v(s).e("content")) },
                              [
                                z(
                                  "div",
                                  { class: W(v(s).em("content", "text")) },
                                  [
                                    be(h.$slots, "default"),
                                    be(h.$slots, `page-${h.page}`),
                                  ],
                                  2
                                ),
                              ],
                              2
                            )),
                      ]),
                      _: 3,
                    }),
                    h.closable
                      ? (L(),
                        H(
                          "button",
                          { key: 2, class: W(v(s).e("close")), onClick: c },
                          [Q(v(xi), { hover: "less" })],
                          2
                        ))
                      : he("v-if", !0),
                    h.$slots.footer
                      ? (L(),
                        H(
                          "div",
                          { key: 3, class: W(v(s).e("footer")) },
                          [be(h.$slots, "footer")],
                          2
                        ))
                      : he("v-if", !0),
                    h.progress
                      ? (L(),
                        H(
                          "div",
                          { key: 4, class: W(v(s).e("progress")) },
                          [
                            z(
                              "div",
                              {
                                class: W(v(s).em("progress", "bar")),
                                style: Fe({ width: `${h.progress}%` }),
                              },
                              null,
                              6
                            ),
                          ],
                          2
                        ))
                      : he("v-if", !0),
                    a.value > 0
                      ? (L(),
                        H(
                          "div",
                          { key: 5, class: W(v(s).e("pagination")) },
                          [
                            z("button", { onClick: d, textContent: "<" }),
                            z(
                              "span",
                              null,
                              dt(h.page) + " / " + dt(a.value),
                              1
                            ),
                            z("button", { onClick: m, textContent: ">" }),
                          ],
                          2
                        ))
                      : he("v-if", !0),
                  ],
                  6
                ))
              : he("v-if", !0),
          ]),
          _: 3,
        })
      );
    },
  });
var yv = Te(gv, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/alert/src/alert.vue",
  ],
]);
const vv = He(yv),
  bv = Ie({
    color: ln,
    badgePosition: {
      type: String,
      values: ["top-right", "bottom-right", "bottom-left", "top-left"],
      default: "bottom-right",
    },
    badgeColor: { type: String, values: vo, validator: pi, default: "primary" },
    badge: { type: Boolean },
    history: { type: Boolean },
    historyGradient: { type: Boolean },
    loading: { type: Boolean },
    pointer: { type: Boolean },
    shape: {
      type: String,
      values: ["circle", "square", "default"],
      default: "default",
    },
    size: { type: [Number, String] },
    writing: { type: Boolean },
    circle: { type: Boolean },
    square: { type: Boolean },
  }),
  _v = (e) => {
    const t = uy(uu),
      n = I(() => t && t.index.value > t.max - 1),
      o = I(() => !!(t != null && t.max) && t.index.value === t.max - 1),
      s = I(() => t && t.children.length - t.index.value - 1),
      r = I(() => t && t.children.length - t.index.value - 1 != 0),
      i = I(() => {
        var l;
        const a = (l = e.text) == null ? void 0 : l.call(e);
        if (!a || a.length > 1) return "";
        const u = a[0];
        if (G(u.children) || !u.children) return "";
        const c = u.children;
        let f = [c];
        return (
          c.length > 5 && (f = c.split(/\s/g).map((d) => d[0])), f.join("")
        );
      });
    return {
      isHidden: n,
      isLastest: o,
      getText: i,
      moreNumber: s,
      showLastest: r,
    };
  },
  wv = ne({ name: "VsAvatar" }),
  Cv = ne({
    ...wv,
    props: bv,
    setup(e) {
      const t = e,
        n = po(),
        o = Ce("avatar"),
        s = ee(),
        {
          isHidden: r,
          isLastest: i,
          getText: l,
          showLastest: a,
          moreNumber: u,
        } = _v(n),
        c = Mn(In()),
        f = I(() => [
          o.b("content"),
          c,
          t.history && "history",
          t.historyGradient && "history--gradient",
          t.shape != "default" && `${o.be("content", t.shape)}`,
          r.value && `${o.be("content", "hidden")}`,
          i.value && `${o.be("content", "latest")}`,
          n.icons && `${o.be("content", "hasIcons")}`,
        ]),
        d = I(() => ({
          width: `${t.size}px`,
          height: `${t.size}px`,
          cursor: t.pointer ? "pointer" : "",
          ...o.cssVar({ color: ft(t.color) }),
        }));
      return (
        fe(
          () => t.badgeColor,
          () => {
            var m;
            yn("avatar-badge", ft(t.badgeColor), s.value),
              (m = s.value) == null ||
                m.classList.add(o.em("badge", "change-color"));
          }
        ),
        xt(() => {
          var m;
          (m = s.value) == null ||
            m.classList.add(o.em("badge", "change-color")),
            yn("avatar-badge", ft(t.badgeColor), s.value);
        }),
        (m, h) => (
          L(),
          H(
            "div",
            { ref_key: "root$", ref: s, class: W(f.value), style: Fe(d.value) },
            [
              m.loading
                ? (L(),
                  H(
                    "div",
                    { key: 0, class: W(v(o).e("loading")) },
                    [
                      z(
                        "div",
                        { class: W(v(o).em("loading", "animate")) },
                        [Q(v(Ti))],
                        2
                      ),
                    ],
                    2
                  ))
                : he("v-if", !0),
              z(
                "div",
                {
                  class: W([
                    v(o).b(),
                    v(l).length > 2 && v(o).em("letter", `${v(l).length}`),
                  ]),
                },
                [
                  m.$slots.text
                    ? (L(), H(ve, { key: 0 }, [Je(dt(v(l)), 1)], 64))
                    : he("v-if", !0),
                  be(m.$slots, "default"),
                ],
                2
              ),
              m.$slots.badge || m.badge
                ? (L(),
                  H(
                    "div",
                    {
                      key: 1,
                      class: W([
                        v(o).e("badge"),
                        v(o).is("slot", !!m.$slots.badge),
                        v(o).is("writing", m.writing),
                        m.badgePosition,
                      ]),
                    },
                    [
                      m.writing
                        ? (L(),
                          H(
                            "div",
                            { key: 0, class: W(v(o).e("points")) },
                            [
                              z(
                                "div",
                                { class: W(v(o).em("points", "item")) },
                                null,
                                2
                              ),
                              z(
                                "div",
                                { class: W(v(o).em("points", "item")) },
                                null,
                                2
                              ),
                              z(
                                "div",
                                { class: W(v(o).em("points", "item")) },
                                null,
                                2
                              ),
                            ],
                            2
                          ))
                        : be(m.$slots, "badge", { key: 1 }),
                    ],
                    2
                  ))
                : he("v-if", !0),
              v(i)
                ? on(
                    (L(),
                    H(
                      "div",
                      { key: 2, class: W(v(o).e("lastest")) },
                      dt(`+${v(u)}`),
                      3
                    )),
                    [[si, v(a)]]
                  )
                : he("v-if", !0),
              m.$slots.icons
                ? (L(),
                  H(
                    "div",
                    { key: 3, class: W(v(o).e("icons")) },
                    [be(m.$slots, "icons")],
                    2
                  ))
                : he("v-if", !0),
            ],
            6
          )
        )
      );
    },
  });
var xv = Te(Cv, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/avatar/src/avatar.vue",
  ],
]);
const Tv = Ie({ float: { type: Boolean }, max: { type: [String, Number] } }),
  Sv = ne({ name: "VsAvatarGroup" }),
  Ov = ne({
    ...Sv,
    props: Tv,
    setup(e) {
      const t = e,
        n = Ce("avatar");
      return (
        fy(uu, { max: t.max }),
        (o, s) => (
          L(),
          H(
            "div",
            { class: W([v(n).e("group"), { float: o.float }]) },
            [be(o.$slots, "default")],
            2
          )
        )
      );
    },
  });
var gu = Te(Ov, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/avatar/src/avatar-group.vue",
  ],
]);
const Ev = He(xv, { AvatarGroup: gu });
Uc(gu);
const Av = ne({ name: "VsButtonGroup" }),
  Pv = ne({
    ...Av,
    setup(e) {
      const t = Ce("button");
      return (n, o) => (
        L(),
        H("div", { class: W(v(t).e("group")) }, [be(n.$slots, "default")], 2)
      );
    },
  });
var yu = Te(Pv, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/button/src/button-group.vue",
  ],
]);
const $v = [
    "default",
    "border",
    "flat",
    "floating",
    "gradient",
    "shadow",
    "relief",
    "transparent",
  ],
  kv = ["xl", "large", "default", "small", "mini"],
  Mv = Ie({
    active: { type: Boolean },
    animateInactive: { type: Boolean },
    animationType: { type: String, values: ["scale", "rotate", "vertical"] },
    block: { type: Boolean },
    color: { ...ln, default: "primary" },
    icon: { type: Boolean },
    loading: { type: Boolean },
    shape: { type: String, values: ["circle", "square"] },
    size: { type: [Number, String], values: kv, default: "default" },
    ripple: { type: String, values: ["cut", "reverse"] },
    type: { type: String, values: $v, default: "default" },
    upload: { type: Boolean },
    border: { type: Boolean },
    flat: { type: Boolean },
    floating: { type: Boolean },
    gradient: { type: Boolean },
    shadow: { type: Boolean },
    relief: { type: Boolean },
    transparent: { type: Boolean },
    square: { type: Boolean },
    circle: { type: Boolean },
    to: { type: [String, Object] },
    href: { type: String },
    blank: { type: Boolean },
  }),
  Iv = ne({ name: "VsButton" }),
  Bv = ne({
    ...Iv,
    props: Mv,
    setup(e) {
      const t = e,
        n = po(),
        o = Ce("button"),
        s = ee(),
        r = Mn(In()),
        i = I(() => [
          o.b(),
          r,
          t.shape && o.m(t.shape),
          t.active && o.m("active"),
          n.animate && o.m("animate"),
          t.animationType && o.m(`animate-${t.animationType}`),
          t.animateInactive && o.m("animate-inactive"),
          t.block && o.m("block"),
          t.icon && o.m("icon"),
          t.loading && o.m("loading"),
          o.em("size", t.size),
          o.m(t.type),
          t.upload && o.m("upload"),
        ]),
        l = I(() => [o.cssVar({ color: ft(t.color) })]),
        a = (u) => {
          t.ripple === "reverse"
            ? ag(u)
            : t.ripple === "cut"
            ? cg(u)
            : t.type === "flat"
            ? Vl(
                u,
                !t.active && document.activeElement !== s.value
                  ? "inherit"
                  : void 0,
                !t.active && document.activeElement !== s.value
              )
            : Vl(u, void 0, !1);
        };
      return (u, c) => (
        L(),
        H(
          "button",
          {
            ref_key: "root$",
            ref: s,
            class: W(i.value),
            style: Fe(l.value),
            onMousedown: a,
          },
          [
            z(
              "div",
              { class: W(v(o).e("content")) },
              [be(u.$slots, "default")],
              2
            ),
            u.$slots.animate
              ? (L(),
                H(
                  "div",
                  {
                    key: 0,
                    class: W([
                      v(o).e("animate"),
                      v(o).em("animate", u.animationType),
                    ]),
                  },
                  [be(u.$slots, "animate")],
                  2
                ))
              : he("v-if", !0),
            u.loading
              ? (L(),
                H(
                  "div",
                  { key: 1, class: W(v(o).e("loading")) },
                  [Q(v(Ti))],
                  2
                ))
              : he("v-if", !0),
          ],
          38
        )
      );
    },
  });
var Nv = Te(Bv, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/button/src/button.vue",
  ],
]);
const Rv = He(Nv, { ButtonGroup: yu });
Uc(yu);
const Fv = Ie({
    modelValue: { type: Boolean, default: !1 },
    color: { ...ln, default: "primary" },
    overlayBlur: { default: !1, type: Boolean },
    beforeClose: { type: ue(Function) },
    loading: { default: !1, type: Boolean },
    fullScreen: { default: !1, type: Boolean },
    notClose: { default: !1, type: Boolean },
    preventClose: { default: !1, type: Boolean },
    notPadding: { default: !1, type: Boolean },
    lockScroll: { default: !1, type: Boolean },
    shape: { type: String, values: ["square", "rounded"], default: "rounded" },
    autoWidth: { default: !1, type: Boolean },
    scroll: { default: !1, type: Boolean },
    notCenter: { default: !1, type: Boolean },
    width: { default: null, type: String },
    overflowHidden: Boolean,
    blur: Boolean,
  }),
  Lv = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [Is]: (e) => vt(e),
  },
  Dv = (e, t) => {
    const n = ee(!1),
      o = ee(!1),
      s = ee(!1),
      r = Ce("dialog"),
      { nextZIndex: i } = _i(),
      l = Mn(In()),
      a = ee(i()),
      u = () => {
        t("opened");
      },
      c = () => {
        t("close");
      },
      f = () => {
        t("closed"), t(Is, !1);
      },
      d = () => {
        Ge && (o.value = !0);
      },
      m = () => {
        o.value = !1;
      },
      h = () => {
        d();
      },
      y = () => {
        const C = (x) => {
          x || ((s.value = !0), (o.value = !1));
        };
        e.beforeClose ? e.beforeClose(C) : m();
      },
      b = () => {
        if (e.preventClose) {
          (n.value = !0), Vc(() => (n.value = !1), 300);
          return;
        }
        y();
      };
    e.lockScroll && py(o),
      fe(
        () => e.modelValue,
        (C) => {
          C
            ? ((s.value = !1),
              (n.value = !0),
              h(),
              (a.value = i()),
              e.lockScroll && (document.body.style.overflow = "hidden"),
              Ha(() => {
                t("open");
              }))
            : ((n.value = !1),
              e.lockScroll && (document.body.style.overflow = ""),
              o.value && y());
        }
      );
    const w = I(() => [
        r.b("original"),
        l,
        r.m(e.shape),
        {
          [r.m("rebound")]: n.value,
          [r.m("not-padding")]: e.notPadding,
          [r.m("auto-width")]: e.autoWidth,
          [r.m("scroll")]: e.scroll,
          [r.m("loading")]: e.loading,
          [r.m("not-center")]: e.notCenter,
        },
      ]),
      S = I(() => ({ width: e.width, ...r.cssVar({ color: ft(e.color) }) }));
    return (
      xt(() => {
        e.modelValue && ((o.value = !0), h());
      }),
      {
        afterEnter: u,
        afterLeave: f,
        beforeLeave: c,
        handleClose: b,
        close: y,
        doClose: m,
        zIndex: a,
        closed: s,
        visible: o,
        dialogKls: w,
        dialogStyles: S,
      }
    );
  },
  jv = (e) => {
    Xe(
      {
        from: "overflowHidden",
        scope: "vs-dialog",
        version: "v0.1.0",
        type: "Prop",
        ref: "https://vuesax-alpha.vercel.app/components/dialog#lockScroll",
        replacement: "lockScroll",
      },
      I(() => !!e.overflowHidden)
    );
  },
  Vv = ne({ name: "VsDialog" }),
  Hv = ne({
    ...Vv,
    props: Fv,
    emits: Lv,
    setup(e, { expose: t, emit: n }) {
      const o = e;
      mu();
      const { selector: s } = Ci(),
        r = Ce("dialog");
      jv(o);
      const {
        visible: i,
        zIndex: l,
        dialogKls: a,
        dialogStyles: u,
        close: c,
        afterEnter: f,
        afterLeave: d,
        beforeLeave: m,
        handleClose: h,
      } = Dv(o, n);
      my({ handleClose: h }, i);
      const y = by(h),
        b = I(() => [
          r.b(),
          r.is("full-screen", o.fullScreen),
          r.is("blur", o.overlayBlur),
        ]);
      return (
        t({ visible: i, close: c }),
        (w, S) => (
          L(),
          Ye(
            Ya,
            { to: v(s) },
            [
              Q(
                Ps,
                {
                  name: v(r).b(),
                  onAfterEnter: v(f),
                  onAfterLeave: v(d),
                  onBeforeLeave: v(m),
                },
                {
                  default: ie(() => [
                    v(i)
                      ? (L(),
                        H(
                          "div",
                          {
                            key: 0,
                            class: W(b.value),
                            style: Fe({ zIndex: v(l) }),
                            onClick:
                              S[1] ||
                              (S[1] = (...C) =>
                                v(y).onClick && v(y).onClick(...C)),
                            onMousedown:
                              S[2] ||
                              (S[2] = (...C) =>
                                v(y).onMousedown && v(y).onMousedown(...C)),
                            onMouseup:
                              S[3] ||
                              (S[3] = (...C) =>
                                v(y).onMouseup && v(y).onMouseup(...C)),
                          },
                          [
                            z(
                              "div",
                              { style: Fe(v(u)), class: W(v(a)) },
                              [
                                w.loading
                                  ? (L(),
                                    H(
                                      "div",
                                      { key: 0, class: W(v(r).e("loading")) },
                                      [Q(v(Ti))],
                                      2
                                    ))
                                  : he("v-if", !0),
                                w.notClose
                                  ? he("v-if", !0)
                                  : (L(),
                                    H(
                                      "button",
                                      {
                                        key: 1,
                                        class: W(v(r).e("close")),
                                        onClick:
                                          S[0] ||
                                          (S[0] = (...C) => v(c) && v(c)(...C)),
                                      },
                                      [Q(v(xi), { hover: "x" })],
                                      2
                                    )),
                                w.$slots.header
                                  ? (L(),
                                    H(
                                      "div",
                                      { key: 2, class: W(v(r).e("header")) },
                                      [be(w.$slots, "header")],
                                      2
                                    ))
                                  : he("v-if", !0),
                                z(
                                  "div",
                                  {
                                    class: W([
                                      v(r).e("content"),
                                      { notFooter: !w.$slots.footer },
                                    ]),
                                  },
                                  [be(w.$slots, "default")],
                                  2
                                ),
                                w.$slots.footer
                                  ? (L(),
                                    H(
                                      "div",
                                      { key: 3, class: W(v(r).e("footer")) },
                                      [be(w.$slots, "footer")],
                                      2
                                    ))
                                  : he("v-if", !0),
                              ],
                              6
                            ),
                          ],
                          38
                        ))
                      : he("v-if", !0),
                  ]),
                  _: 3,
                },
                8,
                ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"]
              ),
            ],
            8,
            ["to"]
          )
        )
      );
    },
  });
var Wv = Te(Hv, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/dialog/src/dialog.vue",
  ],
]);
const zv = He(Wv),
  Uv = ["fixed", "absolute"],
  vu = Ie({
    animation: { type: String, default: "fade-in-linear" },
    appendTo: { type: ue(String) },
    visible: { type: ue(Boolean), default: null },
    teleported: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    strategy: { type: ue(String), values: Uv, default: "absolute" },
    fit: { type: Boolean },
    placement: { type: ue(String), values: og, default: "bottom" },
    zIndex: { type: Number, default: ng },
    interactivity: { type: Boolean, default: !0 },
    flip: { type: ue([Object, Boolean]), default: () => ({}) },
    shift: { type: ue([Object, Boolean]), default: () => ({}) },
    windowResize: { type: Boolean, default: !0 },
    windowScroll: { type: Boolean, default: !0 },
    showArrow: { type: Boolean, default: !0 },
    offset: { type: ue([Number, Object]), default: 12 },
    content: { type: String },
    rawContent: { type: Boolean },
    popperClass: { type: ue([String, Array, Object]), default: "" },
    popperStyle: { type: ue([String, Array, Object]), default: "" },
    persistent: { type: Boolean },
  }),
  Kv = {
    mouseenter: (e) => e instanceof MouseEvent,
    mouseleave: (e) => e instanceof MouseEvent,
    focus: () => !0,
    blur: () => !0,
    close: () => !0,
  },
  Yt = { type: ue(Function) },
  bu = Ie({
    disabled: { type: Boolean },
    trigger: { type: ue([String, Array]), default: "hover" },
    virtualRef: { type: ue(Object) },
    virtualTriggering: { type: Boolean },
    onMouseenter: Yt,
    onMouseleave: Yt,
    onClick: Yt,
    onKeydown: Yt,
    onFocus: Yt,
    onBlur: Yt,
    onContextmenu: Yt,
    triggerClass: { type: ue([String, Array, Object]) },
    triggerStyle: { type: ue([String, Array, Object]) },
  }),
  {
    useModelToggleProps: qv,
    useModelToggleEmits: Gv,
    useModelToggle: Yv,
  } = vy("visible"),
  _u = Ie({
    ...hg,
    ...vu,
    ...bu,
    ...qv,
    processBeforeOpen: { type: ue(Function), default: () => !0 },
    processBeforeClose: { type: ue(Function), default: () => !0 },
    showArrow: { type: Boolean, default: !0 },
    loading: { type: Boolean },
  }),
  Zv = [...Gv, "before-show", "show", "before-hide", "hide"],
  Jv = ["data-popper-placement"],
  Xv = ["innerHTML"],
  Qv = ne({ name: "VsPopper" }),
  e0 = ne({
    ...Qv,
    props: vu,
    emits: Kv,
    setup(e) {
      const t = e,
        n = Ce("popper"),
        {
          contentRef: o,
          controlled: s,
          open: r,
          trigger: i,
          updatePopper: l,
          onOpen: a,
          onClose: u,
          onShow: c,
          onHide: f,
          onBeforeShow: d,
          onBeforeHide: m,
        } = je(bi, void 0),
        h = ee(!1),
        y = I(() => t.persistent),
        b = I(() => (v(y) ? !0 : v(r))),
        w = I(() => (t.disabled ? !1 : v(r))),
        S = I(() => [n.b(), n.is("not-arrow", !t.showArrow), t.popperClass]),
        C = () => {
          l(!1);
        },
        x = () => {
          if (v(s)) return !0;
        },
        B = Mt(x, () => {
          t.interactivity && v(i) === "hover" && a();
        }),
        D = Mt(x, () => {
          v(i) === "hover" && u();
        }),
        K = () => {
          f();
        },
        M = () => {
          l(), d == null || d();
        },
        k = () => {
          m == null || m();
        };
      let P;
      const N = () => {
        c(),
          (P = Nm(
            I(() => en(o)),
            () => {
              if (v(s)) return;
              v(i) !== "hover" && u();
            }
          ));
      };
      return (
        xt(() => {
          fe(() => t.visible, C, { immediate: !0 });
        }),
        fe(
          () => v(r),
          ($) => {
            $ || P == null || P();
          },
          { flush: "post" }
        ),
        fe(
          () => t.content,
          () => {
            l();
          }
        ),
        Cs(() => {
          h.value = !0;
        }),
        ($, Y) => (
          L(),
          Ye(
            Ya,
            { to: $.appendTo, disabled: !$.teleported },
            [
              Q(
                Ps,
                {
                  name: $.animation,
                  onAfterLeave: K,
                  onBeforeEnter: M,
                  onAfterEnter: N,
                  onBeforeLeave: k,
                },
                {
                  default: ie(() => [
                    b.value
                      ? on(
                          (L(),
                          H(
                            "div",
                            {
                              key: 0,
                              ref_key: "contentRef",
                              ref: o,
                              class: W(S.value),
                              style: Fe($.popperStyle),
                              "data-popper-placement": $.placement,
                              onMouseenter:
                                Y[0] || (Y[0] = (...ce) => v(B) && v(B)(...ce)),
                              onMouseleave:
                                Y[1] || (Y[1] = (...ce) => v(D) && v(D)(...ce)),
                            },
                            [
                              h.value
                                ? he("v-if", !0)
                                : (L(),
                                  H(
                                    ve,
                                    { key: 0 },
                                    [
                                      $.content
                                        ? (L(),
                                          H(
                                            ve,
                                            { key: 0 },
                                            [
                                              $.rawContent
                                                ? (L(),
                                                  H(
                                                    "div",
                                                    {
                                                      key: 0,
                                                      innerHTML: $.content,
                                                    },
                                                    null,
                                                    8,
                                                    Xv
                                                  ))
                                                : (L(),
                                                  H(
                                                    ve,
                                                    { key: 1 },
                                                    [Je(dt($.content), 1)],
                                                    64
                                                  )),
                                            ],
                                            64
                                          ))
                                        : be($.$slots, "default", { key: 1 }),
                                    ],
                                    64
                                  )),
                            ],
                            46,
                            Jv
                          )),
                          [[si, w.value]]
                        )
                      : he("v-if", !0),
                  ]),
                  _: 3,
                },
                8,
                ["name"]
              ),
            ],
            8,
            ["to", "disabled"]
          )
        )
      );
    },
  });
var t0 = Te(e0, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/popper/src/content.vue",
  ],
]);
const n0 = "VsOnlyChild",
  o0 = ne({
    name: n0,
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var o, s;
        const r = je(cu, void 0),
          i = ty((o = r == null ? void 0 : r.setForwardRef) != null ? o : ke),
          l = (s = t.default) == null ? void 0 : s.call(t, n);
        if (!l || l.length > 1) return null;
        const a = wu(l);
        return a ? on(bt(a), [[i]]) : null;
      };
    },
  });
function wu(e) {
  if (!e) return null;
  const t = e;
  for (const n of t) {
    if (ae(n))
      switch (n.type) {
        case $e:
          continue;
        case ho:
        case "svg":
          return ea(n);
        case ve:
          return wu(n.children);
        default:
          return n;
      }
    return ea(n);
  }
  return null;
}
function ea(e) {
  const t = Ce("only-child");
  return As("span", { className: t.e("content") }, e);
}
const s0 = (e, t) => (G(e) ? e.includes(t) : e === t),
  mn = (e, t, n) => (o) => {
    s0(v(e), t) && n(o);
  },
  r0 = ne({
    __name: "trigger",
    props: bu,
    setup(e) {
      const t = e,
        n = Ce("popper"),
        { triggerRef: o, onOpen: s, onClose: r, onToggle: i } = je(bi, void 0);
      ey(o);
      const l = () => {
          if (t.disabled) return !0;
        },
        a = Vn(t, "trigger"),
        u = Mt(l, mn(a, "hover", s)),
        c = Mt(l, mn(a, "hover", r)),
        f = Mt(
          l,
          mn(a, "click", (y) => {
            y.button === 0 && i(y);
          })
        ),
        d = Mt(l, mn(a, "focus", s)),
        m = Mt(l, mn(a, "focus", r)),
        h = Mt(
          l,
          mn(a, "contextmenu", (y) => {
            y.preventDefault(), i(y);
          })
        );
      return (y, b) => (
        L(),
        Ye(
          v(o0),
          {
            ref_key: "triggerRef",
            ref: o,
            class: W(v(n).e("trigger")),
            onMouseenter: v(u),
            onMouseleave: v(c),
            onClick: v(f),
            onFocus: v(d),
            onBlur: v(m),
            onContextmenu: v(h),
          },
          { default: ie(() => [be(y.$slots, "default")]), _: 3 },
          8,
          [
            "class",
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onFocus",
            "onBlur",
            "onContextmenu",
          ]
        )
      );
    },
  });
var i0 = Te(r0, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/popper/src/trigger.vue",
  ],
]);
const l0 = ne({ name: "VsPopper", inheritAttrs: !1 }),
  a0 = ne({
    ...l0,
    props: _u,
    emits: Zv,
    setup(e, { expose: t, emit: n }) {
      const o = e;
      mu();
      const { selector: s, id: r } = Ci(),
        i = I(() => o.appendTo || s.value),
        { currentZIndex: l, nextZIndex: a } = _i(),
        u = I(() => l.value),
        c = ee(),
        f = ee(),
        d = ee(),
        m = ee(!1),
        h = ee(),
        {
          show: y,
          hide: b,
          hasUpdateHandler: w,
        } = Yv({
          indicator: m,
          toggleReason: h,
          processBeforeClosing: o.processBeforeClose,
          shouldProceed: o.processBeforeOpen,
        }),
        { onOpen: S, onClose: C } = mg({
          showAfter: Vn(o, "showAfter"),
          hideAfter: Vn(o, "hideAfter"),
          autoClose: Vn(o, "autoClose"),
          open: y,
          close: b,
        }),
        {
          update: x,
          placement: B,
          floatingStyles: D,
        } = Qg(c, f, {
          open: m,
          middleware: ee([
            !tr(o.offset) && Eg(o.offset),
            !tr(o.flip) && Gg(vt(o.flip) ? void 0 : o.flip),
            !tr(o.shift) && qg(vt(o.shift) ? void 0 : o.shift),
            Xg({ element: d }),
          ]),
          placement: I(() => o.placement),
          strategy: I(() => o.strategy),
          transform: !1,
          fit: I(() => o.fit),
        }),
        K = I(() => vt(o.visible) && !w.value),
        M = (N = !0) => {
          x(), N && a();
        },
        k = () => {
          o.virtualTriggering || C();
        },
        P = () => {
          var N;
          return !!(
            (N = f.value) != null && N.contains(document.activeElement)
          );
        };
      return (
        fe(
          () => o.disabled,
          (N) => {
            N && m.value && (m.value = !1);
          }
        ),
        oc(() => m.value && b()),
        Ts(bi, {
          contentRef: f,
          triggerRef: c,
          arrowRef: d,
          referenceRef: c,
          controlled: K,
          id: r,
          open: ys(m),
          trigger: Vn(o, "trigger"),
          onOpen: S,
          onClose: C,
          onToggle: (N) => {
            v(m) ? C(N) : S(N);
          },
          onShow: () => {
            n("show", h.value);
          },
          onHide: () => {
            n("hide", h.value);
          },
          onBeforeShow: () => {
            n("before-show", h.value);
          },
          onBeforeHide: () => {
            n("before-hide", h.value);
          },
          updatePopper: M,
        }),
        t(
          wt({
            triggerRef: c,
            contentRef: f,
            isFocusInsideContent: P,
            updatePopper: M,
            onOpen: S,
            onClose: C,
            hide: b,
            popperPlacement: B,
          })
        ),
        (N, $) => (
          L(),
          H(
            ve,
            null,
            [
              Q(
                i0,
                {
                  disabled: N.disabled,
                  trigger: N.trigger,
                  "virtual-ref": N.virtualRef,
                  "virtual-triggering": N.virtualTriggering,
                  "on-mouseenter": N.onMouseenter,
                  "on-mouseleave": N.onMouseleave,
                  "on-click": N.onClick,
                  "on-keydown": N.onKeydown,
                  "on-focus": N.onFocus,
                  "on-blur": k,
                  "on-contextmenu": N.onContextmenu,
                },
                { default: ie(() => [be(N.$slots, "default")]), _: 3 },
                8,
                [
                  "disabled",
                  "trigger",
                  "virtual-ref",
                  "virtual-triggering",
                  "on-mouseenter",
                  "on-mouseleave",
                  "on-click",
                  "on-keydown",
                  "on-focus",
                  "on-contextmenu",
                ]
              ),
              Q(
                t0,
                {
                  animation: N.animation,
                  "append-to": i.value,
                  teleported: N.teleported,
                  persistent: N.persistent,
                  placement: v(B),
                  content: N.content,
                  interactivity: N.interactivity,
                  "popper-class": N.popperClass,
                  "popper-style": [N.popperStyle, v(D), { zIndex: u.value }],
                  disabled: N.disabled,
                  visible: N.visible,
                  "show-arrow": N.showArrow,
                  onBlur: k,
                  onClose: v(C),
                },
                { default: ie(() => [be(N.$slots, "content")]), _: 3 },
                8,
                [
                  "animation",
                  "append-to",
                  "teleported",
                  "persistent",
                  "placement",
                  "content",
                  "interactivity",
                  "popper-class",
                  "popper-style",
                  "disabled",
                  "visible",
                  "show-arrow",
                  "onClose",
                ]
              ),
            ],
            64
          )
        )
      );
    },
  });
var c0 = Te(a0, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/popper/src/popper.vue",
  ],
]);
const u0 = He(c0),
  f0 = Ie({
    ..._u,
    shift: { type: ue([Object, Boolean]), default: !0 },
    color: ln,
    animation: { type: String, default: "tooltip" },
    interactivity: { type: Boolean, default: !1 },
    appendTo: { type: ue(String) },
    type: {
      type: String,
      values: ["shadow", "border", "border-thick"],
      default: "",
    },
    shape: {
      type: String,
      values: ["circle", "square", "default"],
      default: "",
    },
    effect: { type: String, values: ["light", "dark"], default: "dark" },
    showArrow: { type: Boolean, default: !0 },
    loading: { type: Boolean },
    offset: { type: Number, default: 8 },
    bottom: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean,
    notHover: Boolean,
    shadow: Boolean,
    border: Boolean,
    borderThick: Boolean,
    square: Boolean,
    circle: Boolean,
  }),
  d0 = (e) => {
    Xe(
      {
        scope: "vs-tooltip",
        type: "Prop",
        from: "[top, right, bottom, left]",
        version: "0.0.2",
        replacement: "placement",
        ref: "https://vuesax-alpha.vercel.app/components/tooltip#props",
      },
      I(() => e.top || e.right || e.bottom || e.left)
    ),
      Xe(
        {
          scope: "vs-tooltip",
          type: "Prop",
          from: "notHover",
          version: "0.0.2",
          replacement: "trigger",
          ref: "https://vuesax-alpha.vercel.app/components/tooltip#props",
        },
        I(() => e.notHover)
      ),
      Xe(
        {
          scope: "vs-tooltip",
          type: "Prop",
          from: "[border, borderThick]",
          version: "0.0.2",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/tooltip#props",
        },
        I(() => e.border || e.borderThick)
      ),
      Xe(
        {
          scope: "vs-tooltip",
          type: "Prop",
          from: "shadow",
          version: "0.0.2",
          replacement: "type",
          ref: "https://vuesax-alpha.vercel.app/components/tooltip#props",
        },
        I(() => e.shadow)
      ),
      Xe(
        {
          scope: "vs-tooltip",
          type: "Prop",
          from: "square | circle",
          version: "0.0.2",
          replacement: "shape",
          ref: "https://vuesax-alpha.vercel.app/components/tooltip#props",
        },
        I(() => e.square || e.circle)
      );
  },
  p0 = ne({ name: "VsTooltip" }),
  h0 = ne({
    ...p0,
    props: f0,
    setup(e, { expose: t }) {
      const n = e,
        o = Ce("tooltip"),
        s = ee(),
        r = I(() => [o.cssVar({ color: ft(n.color) })]),
        i = Mn(In()),
        l = I(() => [
          o.b(),
          i,
          o.is("loading", n.loading),
          o.is(n.type, !!n.type),
          o.is(n.shape, !!n.shape),
          o.is("not-arrow", !n.showArrow),
          o.is(n.effect),
        ]);
      return (
        d0(n),
        t({ popperRef: s }),
        (a, u) => {
          var c, f;
          return (
            L(),
            Ye(
              v(u0),
              {
                ref_key: "popperRef",
                ref: s,
                interactivity: a.interactivity,
                "popper-class": [l.value, (c = a.popperClass) != null ? c : ""],
                "popper-style": [(f = a.popperStyle) != null ? f : "", r.value],
                animation: a.animation,
                "append-to": a.appendTo,
                flip: a.flip,
                shift: a.shift,
                "window-resize": a.windowResize,
                "window-scroll": a.windowScroll,
                disabled: a.disabled,
                fit: a.fit,
                loading: a.loading,
                "hide-after": a.hideAfter,
                offset: a.offset,
                placement: a.placement,
                "show-after": a.showAfter,
                "show-arrow": a.showArrow,
                strategy: a.strategy,
                teleported: a.teleported,
                trigger: a.trigger,
                "trigger-class": a.triggerClass,
                "trigger-style": a.triggerStyle,
                "virtual-ref": a.virtualRef,
                "virtual-triggering": a.virtualTriggering,
                "z-index": a.zIndex,
                "on-blur": a.onBlur,
                "on-click": a.onClick,
                "on-focus": a.onFocus,
                "on-keydown": a.onKeydown,
                "on-contextmenu": a.onContextmenu,
                "on-mouseenter": a.onMouseenter,
                "on-mouseleave": a.onMouseleave,
              },
              {
                content: ie(() => [be(a.$slots, "content")]),
                default: ie(() => [be(a.$slots, "default")]),
                _: 3,
              },
              8,
              [
                "interactivity",
                "popper-class",
                "popper-style",
                "animation",
                "append-to",
                "flip",
                "shift",
                "window-resize",
                "window-scroll",
                "disabled",
                "fit",
                "loading",
                "hide-after",
                "offset",
                "placement",
                "show-after",
                "show-arrow",
                "strategy",
                "teleported",
                "trigger",
                "trigger-class",
                "trigger-style",
                "virtual-ref",
                "virtual-triggering",
                "z-index",
                "on-blur",
                "on-click",
                "on-focus",
                "on-keydown",
                "on-contextmenu",
                "on-mouseenter",
                "on-mouseleave",
              ]
            )
          );
        }
      );
    },
  });
var m0 = Te(h0, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/tooltip/src/tooltip.vue",
  ],
]);
const g0 = He(m0),
  y0 = [
    "top-right",
    "top-center",
    "top-left",
    "bottom-right",
    "bottom-center",
    "bottom-left",
  ],
  v0 = Ie({
    border: ln,
    color: ln,
    customClass: { type: String, default: "" },
    duration: { type: Number, default: 4500 },
    flat: { type: Boolean },
    icon: { type: Zm },
    iconSize: { type: String, default: "1.2rem" },
    id: { type: String, default: "" },
    dangerousHtmlString: { type: Boolean, default: !1 },
    content: { type: ue([String, Object]), default: "" },
    loading: Boolean,
    notPadding: Boolean,
    offset: { type: Number, default: 0 },
    onClick: { type: ue(Function), default: () => {} },
    onClickClose: { type: ue(Function), default: () => !0 },
    onClose: { type: ue(Function), default: () => {} },
    position: { type: ue(String), values: y0, default: "bottom-right" },
    progressAuto: { type: Boolean },
    shape: { type: String, values: ["square", ""], default: "" },
    showClose: { type: Boolean, default: !0 },
    sticky: { type: Boolean },
    title: { type: String, default: "" },
    zIndex: { type: Number },
    width: {
      type: ue([String, Number]),
      validator: (e) => ["auto", "full"].includes(e) || Rt(e) || fi(e),
      default: null,
    },
  }),
  b0 = ["innerHTML"],
  _0 = ["innerHTML"],
  w0 = { key: 1 },
  C0 = ne({ name: "VsNotification" }),
  x0 = ne({
    ...C0,
    props: v0,
    setup(e, { expose: t }) {
      const n = e,
        { ns: o, zIndex: s } = du("notification"),
        { currentZIndex: r, nextZIndex: i } = s,
        l = In(),
        a = ee(),
        u = ee(!1);
      let c;
      const f = Mn(l),
        d = I(() => [
          o.b(),
          f,
          o.is("flat", n.flat),
          o.is("sticky", n.sticky),
          o.is("border", !!n.border),
          o.is("color", !!l.value),
          o.is("icon", !!n.icon),
          o.is("on-click", !!n.onClick),
          o.is("on-click-close", !!n.onClickClose),
          n.shape && o.is(n.shape),
          o.is("loading", n.loading),
          o.is("not-padding", n.notPadding),
          o.is("width-full", n.width == "full"),
          o.is("width-auto", n.width == "auto"),
        ]),
        m = I(() => [
          { zIndex: v(r) },
          o.cssVar({ color: ft(l), border: ft(n.border) }),
        ]),
        h = () => {
          var P;
          (P = n.onClick) == null || P.call(n);
        },
        y = () => {
          var P, N;
          (P = n.onClickClose) != null &&
            P.call(n) &&
            ((u.value = !1), (N = n.onClose) == null || N.call(n));
        },
        b = (P) => {
          i();
          const N = P;
          (N.style.maxHeight = "0"), (N.style.padding = "0 20px");
        },
        w = (P, N) => {
          const $ = P.scrollHeight,
            Y = P;
          (Y.style.maxHeight = `${$ + 40}px`),
            window.innerWidth < 600
              ? (Y.style.padding = "15px")
              : (Y.style.padding = "20px"),
            N();
        },
        S = (P, N) => {
          setTimeout(() => {
            var $, Y;
            ($ = a.value) == null || $.remove(),
              N(),
              (Y = n.onClose) == null || Y.call(n);
          }, 150);
        },
        C = () => {
          n.duration > 0 &&
            ({ stop: c } = Vc(() => {
              u.value && D();
            }, n.duration));
        },
        x = () => {
          c == null || c();
        },
        B = () => {
          x(), C(), i(), (u.value = !0);
        },
        D = () => {
          u.value = !1;
        };
      let K = 0;
      const M = ee(0),
        k = () => {
          n.progressAuto &&
            n.duration > 0 &&
            (K = setInterval(() => {
              M.value += 1;
            }, n.duration / 100));
        };
      return (
        xt(() => {
          B(), k();
        }),
        Cs(() => {
          clearInterval(K);
        }),
        t({ visible: u, close: D, open: B }),
        (P, N) => (
          L(),
          Ye(
            Ps,
            {
              name: "vs-notification",
              onBeforeEnter: b,
              onEnter: w,
              onLeave: S,
              persisted: "",
            },
            {
              default: ie(() => [
                on(
                  z(
                    "div",
                    {
                      ref_key: "notifyRef",
                      ref: a,
                      class: W(d.value),
                      style: Fe(m.value),
                      onClick: h,
                    },
                    [
                      P.loading
                        ? (L(),
                          H(
                            "div",
                            { key: 1, class: W(v(o).e("loading")) },
                            null,
                            2
                          ))
                        : (L(),
                          H(
                            ve,
                            { key: 0 },
                            [
                              P.icon
                                ? (L(),
                                  H(
                                    ve,
                                    { key: 0 },
                                    [
                                      typeof P.icon == "string"
                                        ? (L(),
                                          H(
                                            "div",
                                            {
                                              key: 0,
                                              class: W(v(o).e("icon")),
                                              style: Fe({
                                                fontSize: v(Cr)(P.iconSize),
                                              }),
                                              innerHTML: P.icon,
                                            },
                                            null,
                                            14,
                                            b0
                                          ))
                                        : (L(),
                                          H(
                                            "div",
                                            {
                                              key: 1,
                                              class: W(v(o).e("icon")),
                                            },
                                            [
                                              Q(
                                                v(lv),
                                                { size: v(Cr)(P.iconSize) },
                                                {
                                                  default: ie(() => [
                                                    (L(), Ye(kd(P.icon))),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ["size"]
                                              ),
                                            ],
                                            2
                                          )),
                                    ],
                                    64
                                  ))
                                : he("v-if", !0),
                              z(
                                "div",
                                { class: W(v(o).e("content")) },
                                [
                                  P.title
                                    ? (L(),
                                      H(
                                        "div",
                                        { key: 0, class: W(v(o).e("title")) },
                                        [z("h4", null, dt(P.title), 1)],
                                        2
                                      ))
                                    : he("v-if", !0),
                                  P.content
                                    ? (L(),
                                      H(
                                        "div",
                                        { key: 1, class: W(v(o).e("text")) },
                                        [
                                          be(P.$slots, "default", {}, () => [
                                            P.dangerousHtmlString
                                              ? (L(),
                                                H(
                                                  "p",
                                                  {
                                                    key: 0,
                                                    innerHTML: P.content,
                                                  },
                                                  null,
                                                  8,
                                                  _0
                                                ))
                                              : (L(),
                                                H("p", w0, dt(P.content), 1)),
                                          ]),
                                        ],
                                        2
                                      ))
                                    : he("v-if", !0),
                                ],
                                2
                              ),
                            ],
                            64
                          )),
                      P.showClose
                        ? (L(),
                          H(
                            "button",
                            { key: 2, class: W(v(o).e("close")), onClick: y },
                            [Q(v(xi), { hover: "less" })],
                            2
                          ))
                        : he("v-if", !0),
                      P.progressAuto
                        ? (L(),
                          H(
                            "div",
                            {
                              key: 3,
                              class: W(v(o).e("progress")),
                              style: Fe({ width: `${M.value}%` }),
                            },
                            null,
                            6
                          ))
                        : he("v-if", !0),
                    ],
                    6
                  ),
                  [[si, u.value]]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  });
var T0 = Te(x0, [
  [
    "__file",
    "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/notification/src/notification.vue",
  ],
]);
const S0 = () => {
    const e = wi("namespace", io),
      t = pu(),
      n = I(() => `${e.value}-notification-container-${t.prefix}`),
      o = I(() => `#${n.value}`);
    return { id: n, selector: o };
  },
  Fo = {
    "top-right": null,
    "top-center": null,
    "top-left": null,
    "bottom-right": null,
    "bottom-center": null,
    "bottom-left": null,
  },
  O0 = (e = {}) => {
    var t, n;
    if (!Ge) return { close: () => {} };
    (typeof e == "string" || Pn(e)) && (e = { content: e });
    const o = e.position || "bottom-right",
      { id: s, selector: r } = S0();
    if (!Fo[o] && !document.body.querySelector(r.value)) {
      Fo[o] = hu(`${s.value}-${o}`);
      const { ns: u } = du("notification");
      (t = Fo[o]) == null || t.classList.add(u.is(o));
    }
    const i = Q(
        T0,
        { ...e, position: o },
        Pn(e.content) ? { default: () => (ae(e) ? e.content : null) } : null
      ),
      l = document.createElement("div");
    return (
      Qp(i, l),
      (n = Fo[o]) == null || n.appendChild(l.firstChild),
      {
        close: () => {
          i.component.exposed.close();
        },
      }
    );
  },
  Cu = Jm(O0, "$notification"),
  E0 = "./assets/avatar-BSmOo0I9.jpg",
  A0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n;
  },
  P0 = {
    data() {
      return {
        techHidden: !0,
        aboutHidden: !0,
        typingTexts: [
          "Outlier is me",
          "代码代码 烧饭烧饭",
          "璐璐的独家饲养官",
          "别卷了 朋友",
        ],
        btnList: [
          {
            icon: "icon-wodeboke",
            animate: "CV",
            color: "#fe8599",
            href: "./intro.html",
          },
          {
            icon: "icon-github",
            animate: "Github",
            color: "#3d3d3d",
            href: "https://github.com/EaminC",
          },
          {
            icon: "icon-bilibili",
            animate: "BiliBili",
            color: "#0BA6D8",
            href: "https://space.bilibili.com/263163679?spm_id_from=333.337.0.0",
          },
          {
            icon: "icon-youjian1",
            animate: "E-mail",
            color: "#FACB1E",
            href: "mailto:eaminc0328@gmail.com",
          },
          {
            icon: "icon-baojiaquotation2",
            animate: "Google Scholar",
            color: "#807F80",
            href: "https://scholar.google.com/citations?user=NeeNIjIAAAAJ&hl=en",
          },
        ],
        avaters: [
          { color: "#43B884", icon: "icon-vue", content: "Vue3" },
          {
            color: "#46C93A",
            icon: "icon-vuesax-linear-vuesax",
            content: "Vuesax for Vue3",
          },
          { color: "#1FD0ED", icon: "icon-less", content: "Less" },
          { color: "#FFBA00", icon: "icon-vite", content: "Vite" },
          { color: "#000", icon: "icon-vercel", content: "Vercel" },
          { color: "#000", icon: "icon-github", content: "Github" },
        ],
        upTime: "2024-09-16",
        version: "beta3",
        gridRows: 9,
        gridCols: 5,
        active: !1,
        isDarkMode: !0,
        theme: "system",
      };
    },
    mounted() {
      localStorage.getItem("isTheme")
        ? ((this.theme = localStorage.getItem("isTheme")), this.applyTheme())
        : this.applyTheme(),
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", this.applyTheme);
    },
    methods: {
      setTheme(e) {
        (this.theme = e), localStorage.setItem("isTheme", e), this.applyTheme();
      },
      applyTheme() {
        const e = window.matchMedia("(prefers-color-scheme: dark)").matches,
          t = this.theme === "system" ? (e ? "dark" : "light") : this.theme;
        document.documentElement.setAttribute("data-theme", t);
      },
      versions() {
        Cu({
          icon: '<i class="iconfont icon-guanyu"></i>',
          progressAuto: !0,
          position: "top-center",
          title: "Edit Time",
          color: "#FE8599",
          content: "Feb27/2025",
        });
      },
    },
  },
  $0 = {
    class: "bgBox",
    initial: { opacity: 0, y: 25 },
    enter: { opacity: 1, y: 0 },
    duration: 1e3,
  },
  k0 = { class: "bgGrid" },
  M0 = {
    class: "Grid",
    initial: { opacity: 0, y: -25 },
    enter: { opacity: 1, y: 0 },
    duration: 1e3,
  },
  I0 = {
    class: "main",
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    duration: 1e3,
  },
  B0 = { class: "typewriter" },
  N0 = { class: "btns" },
  R0 = ["href"],
  F0 = { class: "con-content" },
  L0 = { class: "con-footer" },
  D0 = { class: "reTheme" },
  j0 = ["checked"],
  V0 = ["checked"],
  H0 = ["checked"],
  W0 = { class: "footerBtn" };
function z0(e, t, n, o, s, r) {
  const i = zt("VueTyped"),
    l = zt("vs-button"),
    a = zt("vs-avatar"),
    u = zt("vs-tooltip"),
    c = zt("vs-avatar-group"),
    f = zt("vs-alert"),
    d = zt("vs-dialog"),
    m = Md("motion");
  return (
    L(),
    H("div", null, [
      on(
        (L(),
        H(
          "div",
          $0,
          t[8] ||
            (t[8] = [
              z(
                "img",
                {
                  src: "https://i.p-i.vip/43/20240915-66e6e5abe3e97.webp",
                  alt: "",
                },
                null,
                -1
              ),
            ])
        )),
        [[m]]
      ),
      z("div", k0, [
        on(
          (L(),
          H("div", M0, [
            t[9] || (t[9] = z("div", { class: "mask" }, null, -1)),
            (L(!0),
            H(
              ve,
              null,
              No(
                s.gridRows,
                (h) => (
                  L(),
                  H("div", { class: "itemGrid-row", key: h }, [
                    (L(!0),
                    H(
                      ve,
                      null,
                      No(
                        s.gridCols,
                        (y) => (
                          L(), H("div", { class: "itemGrid-cols", key: y })
                        )
                      ),
                      128
                    )),
                  ])
                )
              ),
              128
            )),
          ])),
          [[m]]
        ),
      ]),
      on(
        (L(),
        H("div", I0, [
          t[14] ||
            (t[14] = dp(
              '<div class="info"><div class="header"><img src="' +
                E0 +
                '" alt=""></div><div class="infoText"><h1>Hi,</h1><h1>I&#39;m <span class="qn">程逸鸣</span></h1></div></div>',
              1
            )),
          z("div", B0, [
            t[10] ||
              (t[10] = z(
                "i",
                { class: "iconfont icon-baojiaquotation2" },
                null,
                -1
              )),
            Q(
              i,
              {
                strings: s.typingTexts,
                startDelay: 300,
                typeSpeed: 100,
                backSpeed: 30,
                loop: !0,
                showCursor: !0,
              },
              null,
              8,
              ["strings"]
            ),
            t[11] ||
              (t[11] = z(
                "i",
                { class: "iconfont icon-baojiaquotation" },
                null,
                -1
              )),
          ]),
          z("div", N0, [
            (L(!0),
            H(
              ve,
              null,
              No(
                s.btnList,
                (h) => (
                  L(),
                  H(
                    "a",
                    { key: h.animate, href: h.href, target: "_blank" },
                    [
                      Q(
                        l,
                        {
                          type: "gradient",
                          color: h.color,
                          "animation-type": "scale",
                        },
                        {
                          animate: ie(() => [Je(dt(h.animate), 1)]),
                          default: ie(() => [
                            z("i", { class: W(`iconfont ${h.icon}`) }, null, 2),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["color"]
                      ),
                    ],
                    8,
                    R0
                  )
                )
              ),
              128
            )),
            Q(
              l,
              {
                class: "lastBtn",
                color: "#457B9D",
                "animation-type": "scale",
                onClick: t[0] || (t[0] = (h) => (s.active = !0)),
              },
              {
                animate: ie(() => t[12] || (t[12] = [Je(" About ")])),
                default: ie(() => [
                  t[13] ||
                    (t[13] = z(
                      "i",
                      { class: "iconfont icon-guanyu" },
                      null,
                      -1
                    )),
                ]),
                _: 1,
              }
            ),
          ]),
        ])),
        [[m]]
      ),
      t[32] ||
        (t[32] = z("div", { class: "footer" }, "Eamin CHAN | ©2025", -1)),
      Q(
        d,
        {
          "overlay-blur": "",
          width: "550px",
          "not-center": "",
          modelValue: s.active,
          "onUpdate:modelValue": t[7] || (t[7] = (h) => (s.active = h)),
        },
        {
          header: ie(
            () =>
              t[15] || (t[15] = [z("h2", { class: "not-margin" }, "About", -1)])
          ),
          footer: ie(() => [
            z("div", L0, [
              z("div", D0, [
                z(
                  "input",
                  {
                    type: "radio",
                    id: "light",
                    name: "theme",
                    checked: s.theme == "light",
                  },
                  null,
                  8,
                  j0
                ),
                z(
                  "label",
                  {
                    onClick: t[3] || (t[3] = (h) => r.setTheme("light")),
                    for: "light",
                  },
                  t[26] ||
                    (t[26] = [
                      z("i", { class: "iconfont icon-baitian" }, null, -1),
                    ])
                ),
                z(
                  "input",
                  {
                    type: "radio",
                    id: "system",
                    name: "theme",
                    checked: s.theme == "system",
                  },
                  null,
                  8,
                  V0
                ),
                z(
                  "label",
                  {
                    onClick: t[4] || (t[4] = (h) => r.setTheme("system")),
                    for: "system",
                  },
                  t[27] ||
                    (t[27] = [
                      z("i", { class: "iconfont icon-gensuixitong" }, null, -1),
                    ])
                ),
                z(
                  "input",
                  {
                    type: "radio",
                    id: "dark",
                    name: "theme",
                    checked: s.theme == "dark",
                  },
                  null,
                  8,
                  H0
                ),
                z(
                  "label",
                  {
                    onClick: t[5] || (t[5] = (h) => r.setTheme("dark")),
                    for: "dark",
                  },
                  t[28] ||
                    (t[28] = [
                      z("i", { class: "iconfont icon-yewan" }, null, -1),
                    ])
                ),
                t[29] || (t[29] = z("div", { class: "checkedBg" }, null, -1)),
              ]),
              z("div", W0, [
                Q(
                  l,
                  { color: "#fe8599", onClick: r.versions, type: "border" },
                  {
                    default: ie(
                      () => t[30] || (t[30] = [Je(" Current Version ")])
                    ),
                    _: 1,
                  },
                  8,
                  ["onClick"]
                ),
                Q(
                  l,
                  {
                    color: "#fe8599",
                    onClick: t[6] || (t[6] = (h) => (s.active = !1)),
                  },
                  {
                    default: ie(() => t[31] || (t[31] = [Je(" Roger ")])),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ]),
          default: ie(() => [
            z("div", F0, [
              Q(
                f,
                {
                  color: "#FE8599",
                  type: "gradient",
                  "hidden-content": s.techHidden,
                  "onUpdate:hiddenContent":
                    t[1] || (t[1] = (h) => (s.techHidden = h)),
                },
                {
                  title: ie(() => t[16] || (t[16] = [Je("Tech Stack")])),
                  default: ie(() => [
                    t[19] ||
                      (t[19] = z("p", null, "Based on Following Repos", -1)),
                    Q(
                      c,
                      { class: "aboutAva", float: "", max: "8" },
                      {
                        default: ie(() => [
                          (L(!0),
                          H(
                            ve,
                            null,
                            No(
                              s.avaters,
                              (h) => (
                                L(),
                                Ye(
                                  u,
                                  { placement: "top", key: h.content },
                                  {
                                    content: ie(() => [Je(dt(h.content), 1)]),
                                    default: ie(() => [
                                      Q(
                                        a,
                                        { color: h.color },
                                        {
                                          default: ie(() => [
                                            z(
                                              "i",
                                              {
                                                class: W(`iconfont ${h.icon}`),
                                              },
                                              null,
                                              2
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["color"]
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          )),
                          Q(
                            u,
                            { placement: "top" },
                            {
                              content: ie(
                                () => t[18] || (t[18] = [Je("初七云cdn")])
                              ),
                              default: ie(() => [
                                Q(
                                  a,
                                  { color: "#FF6D1A" },
                                  {
                                    default: ie(
                                      () => t[17] || (t[17] = [Je(" 初 ")])
                                    ),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["hidden-content"]
              ),
              Q(
                f,
                {
                  color: "#00BCD4",
                  type: "gradient",
                  "hidden-content": s.aboutHidden,
                  "onUpdate:hiddenContent":
                    t[2] || (t[2] = (h) => (s.aboutHidden = h)),
                },
                {
                  title: ie(() => t[20] || (t[20] = [Je("About Me")])),
                  default: ie(() => [
                    t[21] || (t[21] = z("p", null, "Hi this is eamin", -1)),
                    t[22] || (t[22] = z("p", null, "Born in Shanghai", -1)),
                    t[23] ||
                      (t[23] = z(
                        "p",
                        null,
                        "THU EE BS,also minor in Law,Statistics",
                        -1
                      )),
                    t[24] ||
                      (t[24] = z(
                        "p",
                        null,
                        "Current in Uchicago as CS predoc",
                        -1
                      )),
                    t[25] || (t[25] = z("p", null, "(+1)773-690-7675", -1)),
                  ]),
                  _: 1,
                },
                8,
                ["hidden-content"]
              ),
            ]),
          ]),
          _: 1,
        },
        8,
        ["modelValue"]
      ),
    ])
  );
}
const U0 = A0(P0, [["render", z0]]);
function Er() {
  return (
    (Er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    Er.apply(this, arguments)
  );
}
var K0 = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function (e) {},
    onComplete: function (e) {},
    preStringTyped: function (e, t) {},
    onStringTyped: function (e, t) {},
    onLastStringBackspaced: function (e) {},
    onTypingPaused: function (e, t) {},
    onTypingResumed: function (e, t) {},
    onReset: function (e) {},
    onStop: function (e, t) {},
    onStart: function (e, t) {},
    onDestroy: function (e) {},
  },
  q0 = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.load = function (n, o, s) {
        if (
          ((n.el = typeof s == "string" ? document.querySelector(s) : s),
          (n.options = Er({}, K0, o)),
          (n.isInput = n.el.tagName.toLowerCase() === "input"),
          (n.attr = n.options.attr),
          (n.bindInputFocusEvents = n.options.bindInputFocusEvents),
          (n.showCursor = !n.isInput && n.options.showCursor),
          (n.cursorChar = n.options.cursorChar),
          (n.cursorBlinking = !0),
          (n.elContent = n.attr ? n.el.getAttribute(n.attr) : n.el.textContent),
          (n.contentType = n.options.contentType),
          (n.typeSpeed = n.options.typeSpeed),
          (n.startDelay = n.options.startDelay),
          (n.backSpeed = n.options.backSpeed),
          (n.smartBackspace = n.options.smartBackspace),
          (n.backDelay = n.options.backDelay),
          (n.fadeOut = n.options.fadeOut),
          (n.fadeOutClass = n.options.fadeOutClass),
          (n.fadeOutDelay = n.options.fadeOutDelay),
          (n.isPaused = !1),
          (n.strings = n.options.strings.map(function (u) {
            return u.trim();
          })),
          (n.stringsElement =
            typeof n.options.stringsElement == "string"
              ? document.querySelector(n.options.stringsElement)
              : n.options.stringsElement),
          n.stringsElement)
        ) {
          (n.strings = []),
            (n.stringsElement.style.cssText =
              "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
          var r = Array.prototype.slice.apply(n.stringsElement.children),
            i = r.length;
          if (i)
            for (var l = 0; l < i; l += 1)
              n.strings.push(r[l].innerHTML.trim());
        }
        for (var a in ((n.strPos = 0),
        (n.arrayPos = 0),
        (n.stopNum = 0),
        (n.loop = n.options.loop),
        (n.loopCount = n.options.loopCount),
        (n.curLoop = 0),
        (n.shuffle = n.options.shuffle),
        (n.sequence = []),
        (n.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }),
        (n.typingComplete = !1),
        n.strings))
          n.sequence[a] = a;
        (n.currentElContent = this.getCurrentElContent(n)),
          (n.autoInsertCss = n.options.autoInsertCss),
          this.appendAnimationCss(n);
      }),
      (t.getCurrentElContent = function (n) {
        return n.attr
          ? n.el.getAttribute(n.attr)
          : n.isInput
          ? n.el.value
          : n.contentType === "html"
          ? n.el.innerHTML
          : n.el.textContent;
      }),
      (t.appendAnimationCss = function (n) {
        var o = "data-typed-js-css";
        if (
          n.autoInsertCss &&
          (n.showCursor || n.fadeOut) &&
          !document.querySelector("[" + o + "]")
        ) {
          var s = document.createElement("style");
          (s.type = "text/css"), s.setAttribute(o, !0);
          var r = "";
          n.showCursor &&
            (r += `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),
            n.fadeOut &&
              (r += `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
            s.length !== 0 && ((s.innerHTML = r), document.body.appendChild(s));
        }
      }),
      e
    );
  })())(),
  ta = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.typeHtmlChars = function (n, o, s) {
        if (s.contentType !== "html") return o;
        var r = n.substr(o).charAt(0);
        if (r === "<" || r === "&") {
          var i;
          for (
            i = r === "<" ? ">" : ";";
            n.substr(o + 1).charAt(0) !== i && !(1 + ++o > n.length);

          );
          o++;
        }
        return o;
      }),
      (t.backSpaceHtmlChars = function (n, o, s) {
        if (s.contentType !== "html") return o;
        var r = n.substr(o).charAt(0);
        if (r === ">" || r === ";") {
          var i;
          for (
            i = r === ">" ? "<" : "&";
            n.substr(o - 1).charAt(0) !== i && !(--o < 0);

          );
          o--;
        }
        return o;
      }),
      e
    );
  })())(),
  G0 = (function () {
    function e(n, o) {
      q0.load(this, o, n), this.begin();
    }
    var t = e.prototype;
    return (
      (t.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (t.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (t.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (t.destroy = function () {
        this.reset(!1), this.options.onDestroy(this);
      }),
      (t.reset = function (n) {
        n === void 0 && (n = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          n && (this.insertCursor(), this.options.onReset(this), this.begin());
      }),
      (t.begin = function () {
        var n = this;
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            n.currentElContent && n.currentElContent.length !== 0
              ? n.backspace(n.currentElContent, n.currentElContent.length)
              : n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos);
          }, this.startDelay));
      }),
      (t.typewrite = function (n, o) {
        var s = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var r = this.humanizer(this.typeSpeed),
          i = 1;
        this.pause.status !== !0
          ? (this.timeout = setTimeout(function () {
              o = ta.typeHtmlChars(n, o, s);
              var l = 0,
                a = n.substr(o);
              if (a.charAt(0) === "^" && /^\^\d+/.test(a)) {
                var u = 1;
                (u += (a = /\d+/.exec(a)[0]).length),
                  (l = parseInt(a)),
                  (s.temporaryPause = !0),
                  s.options.onTypingPaused(s.arrayPos, s),
                  (n = n.substring(0, o) + n.substring(o + u)),
                  s.toggleBlinking(!0);
              }
              if (a.charAt(0) === "`") {
                for (
                  ;
                  n.substr(o + i).charAt(0) !== "`" &&
                  (i++, !(o + i > n.length));

                );
                var c = n.substring(0, o),
                  f = n.substring(c.length + 1, o + i),
                  d = n.substring(o + i + 1);
                (n = c + f + d), i--;
              }
              s.timeout = setTimeout(function () {
                s.toggleBlinking(!1),
                  o >= n.length ? s.doneTyping(n, o) : s.keepTyping(n, o, i),
                  s.temporaryPause &&
                    ((s.temporaryPause = !1),
                    s.options.onTypingResumed(s.arrayPos, s));
              }, l);
            }, r))
          : this.setPauseStatus(n, o, !0);
      }),
      (t.keepTyping = function (n, o, s) {
        o === 0 &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var r = n.substr(0, (o += s));
        this.replaceText(r), this.typewrite(n, o);
      }),
      (t.doneTyping = function (n, o) {
        var s = this;
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            this.loop === !1 || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              s.backspace(n, o);
            }, this.backDelay));
      }),
      (t.backspace = function (n, o) {
        var s = this;
        if (this.pause.status !== !0) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var r = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            o = ta.backSpaceHtmlChars(n, o, s);
            var i = n.substr(0, o);
            if ((s.replaceText(i), s.smartBackspace)) {
              var l = s.strings[s.arrayPos + 1];
              s.stopNum = l && i === l.substr(0, o) ? o : 0;
            }
            o > s.stopNum
              ? (o--, s.backspace(n, o))
              : o <= s.stopNum &&
                (s.arrayPos++,
                s.arrayPos === s.strings.length
                  ? ((s.arrayPos = 0),
                    s.options.onLastStringBackspaced(),
                    s.shuffleStringsIfNeeded(),
                    s.begin())
                  : s.typewrite(s.strings[s.sequence[s.arrayPos]], o));
          }, r);
        } else this.setPauseStatus(n, o, !1);
      }),
      (t.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0);
      }),
      (t.setPauseStatus = function (n, o, s) {
        (this.pause.typewrite = s),
          (this.pause.curString = n),
          (this.pause.curStrPos = o);
      }),
      (t.toggleBlinking = function (n) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== n &&
              ((this.cursorBlinking = n),
              n
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (t.humanizer = function (n) {
        return Math.round((Math.random() * n) / 2) + n;
      }),
      (t.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (t.initFadeOut = function () {
        var n = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            n.arrayPos++,
              n.replaceText(""),
              n.strings.length > n.arrayPos
                ? n.typewrite(n.strings[n.sequence[n.arrayPos]], 0)
                : (n.typewrite(n.strings[0], 0), (n.arrayPos = 0));
          }, this.fadeOutDelay)
        );
      }),
      (t.replaceText = function (n) {
        this.attr
          ? this.el.setAttribute(this.attr, n)
          : this.isInput
          ? (this.el.value = n)
          : this.contentType === "html"
          ? (this.el.innerHTML = n)
          : (this.el.textContent = n);
      }),
      (t.bindFocusEvents = function () {
        var n = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (o) {
            n.stop();
          }),
          this.el.addEventListener("blur", function (o) {
            (n.el.value && n.el.value.length !== 0) || n.start();
          }));
      }),
      (t.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling
              )));
      }),
      e
    );
  })();
let Y0 = class {
  constructor(e) {
    (this.options = e), (this.typed = null);
  }
  init(e) {
    this.typed = new G0(e, this.options);
  }
  destroy() {
    this.typed && this.typed.destroy();
  }
};
const Z0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n;
  },
  J0 = {
    props: {
      strings: Array,
      typeSpeed: Number,
      startDelay: Number,
      backSpeed: Number,
      smartBackspace: Boolean,
      shuffle: Boolean,
      backDelay: Number,
      fadeOut: Boolean,
      fadeOutClass: String,
      fadeOutDelay: Number,
      loop: Boolean,
      loopCount: Number,
      showCursor: Boolean,
      autoInsertCss: Boolean,
      attr: String,
      bindInputFocusEvents: Boolean,
      contentType: String,
      onComplete: Function,
      preStringTyped: Function,
      onStringTyped: Function,
      onLastStringBackspaced: Function,
      onTypingPaused: Function,
      onTypingResumed: Function,
      onReset: Function,
      onStop: Function,
      onStart: Function,
      onDestroy: Function,
    },
    data() {
      return { vueTyped: null };
    },
    computed: {
      typedOptions() {
        const e = {};
        return (
          Object.keys(this.$props).forEach((t) => {
            this[t] !== void 0 && (e[t] = this[t]);
          }),
          e
        );
      },
    },
    mounted() {
      (this.vueTyped = new Y0(this.typedOptions)),
        this.vueTyped.init(this.$refs.typedElement);
    },
    beforeUnmount() {
      this.vueTyped.destroy();
    },
  },
  X0 = { ref: "typedElement" };
function Q0(e, t, n, o, s, r) {
  return L(), H("div", X0, [be(e.$slots, "default")], 512);
}
const eb = Z0(J0, [["render", Q0]]),
  tb = {
    install: (e) => {
      e.component("VueTyped", eb);
    },
  };
function nr(e) {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
    ? Object.prototype.toString.call(e) === "[object Module]"
    : !0;
}
function Ar(e, t, n = ".", o) {
  if (!nr(t)) return Ar(e, {}, n, o);
  const s = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor") continue;
    const i = e[r];
    i != null &&
      ((o && o(s, r, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[r])
          ? (s[r] = [...i, ...s[r]])
          : nr(i) && nr(s[r])
          ? (s[r] = Ar(i, s[r], (n ? `${n}.` : "") + r.toString(), o))
          : (s[r] = i)));
  }
  return s;
}
function nb(e) {
  return (...t) => t.reduce((n, o) => Ar(n, o, "", e), {});
}
const xu = nb();
function Tu(e) {
  return ds() ? (ps(e), !0) : !1;
}
function Si(e) {
  return typeof e == "function" ? e() : v(e);
}
const ob = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sb = (e) => e != null,
  rb = Object.prototype.toString,
  ss = (e) => rb.call(e) === "[object Object]",
  Ko = () => {};
function ib(e) {
  return Tt();
}
function lb(e, t) {
  ib() && xs(e, t);
}
function Gn(e) {
  var t;
  const n = Si(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Su = ob ? window : void 0;
function lt(...e) {
  let t, n, o, s;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, o, s] = e), (t = Su))
      : ([t, n, o, s] = e),
    !t)
  )
    return Ko;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [],
    i = () => {
      r.forEach((c) => c()), (r.length = 0);
    },
    l = (c, f, d, m) => (
      c.addEventListener(f, d, m), () => c.removeEventListener(f, d, m)
    ),
    a = fe(
      () => [Gn(t), Si(s)],
      ([c, f]) => {
        if ((i(), !c)) return;
        const d = ss(f) ? { ...f } : f;
        r.push(...n.flatMap((m) => o.map((h) => l(c, m, h, d))));
      },
      { immediate: !0, flush: "post" }
    ),
    u = () => {
      a(), i();
    };
  return Tu(u), u;
}
function ab() {
  const e = ee(!1),
    t = Tt();
  return (
    t &&
      xt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function cb(e) {
  const t = ab();
  return I(() => (t.value, !!e()));
}
function ub(e, t, n = {}) {
  const {
      root: o,
      rootMargin: s = "0px",
      threshold: r = 0.1,
      window: i = Su,
      immediate: l = !0,
    } = n,
    a = cb(() => i && "IntersectionObserver" in i),
    u = I(() => {
      const h = Si(e);
      return (Array.isArray(h) ? h : [h]).map(Gn).filter(sb);
    });
  let c = Ko;
  const f = ee(l),
    d = a.value
      ? fe(
          () => [u.value, Gn(o), f.value],
          ([h, y]) => {
            if ((c(), !f.value || !h.length)) return;
            const b = new IntersectionObserver(t, {
              root: Gn(y),
              rootMargin: s,
              threshold: r,
            });
            h.forEach((w) => w && b.observe(w)),
              (c = () => {
                b.disconnect(), (c = Ko);
              });
          },
          { immediate: l, flush: "post" }
        )
      : Ko,
    m = () => {
      c(), d(), (f.value = !1);
    };
  return (
    Tu(m),
    {
      isSupported: a,
      isActive: f,
      pause() {
        c(), (f.value = !1);
      },
      resume() {
        f.value = !0;
      },
      stop: m,
    }
  );
}
const Ou = (1 / 60) * 1e3,
  fb = typeof performance < "u" ? () => performance.now() : () => Date.now(),
  Eu =
    typeof window < "u"
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(fb()), Ou);
function db(e) {
  let t = [],
    n = [],
    o = 0,
    s = !1,
    r = !1;
  const i = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && s,
          d = f ? t : n;
        return (
          u && i.add(a),
          d.indexOf(a) === -1 && (d.push(a), f && s && (o = t.length)),
          a
        );
      },
      cancel: (a) => {
        const u = n.indexOf(a);
        u !== -1 && n.splice(u, 1), i.delete(a);
      },
      process: (a) => {
        if (s) {
          r = !0;
          return;
        }
        if (((s = !0), ([t, n] = [n, t]), (n.length = 0), (o = t.length), o))
          for (let u = 0; u < o; u++) {
            const c = t[u];
            c(a), i.has(c) && (l.schedule(c), e());
          }
        (s = !1), r && ((r = !1), l.process(a));
      },
    };
  return l;
}
const pb = 40;
let Pr = !0,
  co = !1,
  $r = !1;
const An = { delta: 0, timestamp: 0 },
  Co = ["read", "update", "preRender", "render", "postRender"],
  Fs = Co.reduce((e, t) => ((e[t] = db(() => (co = !0))), e), {}),
  kr = Co.reduce((e, t) => {
    const n = Fs[t];
    return (e[t] = (o, s = !1, r = !1) => (co || gb(), n.schedule(o, s, r))), e;
  }, {}),
  hb = Co.reduce((e, t) => ((e[t] = Fs[t].cancel), e), {});
Co.reduce((e, t) => ((e[t] = () => Fs[t].process(An)), e), {});
const mb = (e) => Fs[e].process(An),
  Au = (e) => {
    (co = !1),
      (An.delta = Pr ? Ou : Math.max(Math.min(e - An.timestamp, pb), 1)),
      (An.timestamp = e),
      ($r = !0),
      Co.forEach(mb),
      ($r = !1),
      co && ((Pr = !1), Eu(Au));
  },
  gb = () => {
    (co = !0), (Pr = !0), $r || Eu(Au);
  },
  Pu = () => An;
function $u(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
        (n[o[s]] = e[o[s]]);
  return n;
}
var na = function () {};
const Mr = (e, t, n) => Math.min(Math.max(n, e), t),
  or = 0.001,
  yb = 0.01,
  vb = 10,
  bb = 0.05,
  _b = 1;
function wb({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: o = 1,
}) {
  let s,
    r,
    i = 1 - t;
  (i = Mr(bb, _b, i)),
    (e = Mr(yb, vb, e / 1e3)),
    i < 1
      ? ((s = (u) => {
          const c = u * i,
            f = c * e,
            d = c - n,
            m = Ir(u, i),
            h = Math.exp(-f);
          return or - (d / m) * h;
        }),
        (r = (u) => {
          const f = u * i * e,
            d = f * n + n,
            m = Math.pow(i, 2) * Math.pow(u, 2) * e,
            h = Math.exp(-f),
            y = Ir(Math.pow(u, 2), i);
          return ((-s(u) + or > 0 ? -1 : 1) * ((d - m) * h)) / y;
        }))
      : ((s = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -or + c * f;
        }),
        (r = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = xb(s, r, l);
  if (((e = e * 1e3), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * o;
    return { stiffness: u, damping: i * 2 * Math.sqrt(o * u), duration: e };
  }
}
const Cb = 12;
function xb(e, t, n) {
  let o = n;
  for (let s = 1; s < Cb; s++) o = o - e(o) / t(o);
  return o;
}
function Ir(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Tb = ["duration", "bounce"],
  Sb = ["stiffness", "damping", "mass"];
function oa(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ob(e) {
  let t = Object.assign(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    e
  );
  if (!oa(e, Sb) && oa(e, Tb)) {
    const n = wb(e);
    (t = Object.assign(Object.assign(Object.assign({}, t), n), {
      velocity: 0,
      mass: 1,
    })),
      (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Oi(e) {
  var { from: t = 0, to: n = 1, restSpeed: o = 2, restDelta: s } = e,
    r = $u(e, ["from", "to", "restSpeed", "restDelta"]);
  const i = { done: !1, value: t };
  let {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = Ob(r),
    m = sa,
    h = sa;
  function y() {
    const b = c ? -(c / 1e3) : 0,
      w = n - t,
      S = a / (2 * Math.sqrt(l * u)),
      C = Math.sqrt(l / u) / 1e3;
    if ((s === void 0 && (s = Math.min(Math.abs(n - t) / 100, 0.4)), S < 1)) {
      const x = Ir(C, S);
      (m = (B) => {
        const D = Math.exp(-S * C * B);
        return (
          n -
          D * (((b + S * C * w) / x) * Math.sin(x * B) + w * Math.cos(x * B))
        );
      }),
        (h = (B) => {
          const D = Math.exp(-S * C * B);
          return (
            S *
              C *
              D *
              ((Math.sin(x * B) * (b + S * C * w)) / x + w * Math.cos(x * B)) -
            D * (Math.cos(x * B) * (b + S * C * w) - x * w * Math.sin(x * B))
          );
        });
    } else if (S === 1) m = (x) => n - Math.exp(-C * x) * (w + (b + C * w) * x);
    else {
      const x = C * Math.sqrt(S * S - 1);
      m = (B) => {
        const D = Math.exp(-S * C * B),
          K = Math.min(x * B, 300);
        return (
          n - (D * ((b + S * C * w) * Math.sinh(K) + x * w * Math.cosh(K))) / x
        );
      };
    }
  }
  return (
    y(),
    {
      next: (b) => {
        const w = m(b);
        if (d) i.done = b >= f;
        else {
          const S = h(b) * 1e3,
            C = Math.abs(S) <= o,
            x = Math.abs(n - w) <= s;
          i.done = C && x;
        }
        return (i.value = i.done ? n : w), i;
      },
      flipTarget: () => {
        (c = -c), ([t, n] = [n, t]), y();
      },
    }
  );
}
Oi.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const sa = (e) => 0,
  ku = (e, t, n) => {
    const o = t - e;
    return o === 0 ? 1 : (n - e) / o;
  },
  Ei = (e, t, n) => -n * e + n * t + e,
  Mu = (e, t) => (n) => Math.max(Math.min(n, t), e),
  Yn = (e) => (e % 1 ? Number(e.toFixed(5)) : e),
  uo = /(-)?([\d]*\.?[\d])+/g,
  Br =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Eb =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function xo(e) {
  return typeof e == "string";
}
const To = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Zn = Object.assign(Object.assign({}, To), { transform: Mu(0, 1) }),
  Lo = Object.assign(Object.assign({}, To), { default: 1 }),
  Ai = (e) => ({
    test: (t) => xo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Zt = Ai("deg"),
  Jn = Ai("%"),
  X = Ai("px"),
  ra = Object.assign(Object.assign({}, Jn), {
    parse: (e) => Jn.parse(e) / 100,
    transform: (e) => Jn.transform(e * 100),
  }),
  Pi = (e, t) => (n) =>
    !!(
      (xo(n) && Eb.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Iu = (e, t, n) => (o) => {
    if (!xo(o)) return o;
    const [s, r, i, l] = o.match(uo);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(r),
      [n]: parseFloat(i),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  tn = {
    test: Pi("hsl", "hue"),
    parse: Iu("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Jn.transform(Yn(t)) +
      ", " +
      Jn.transform(Yn(n)) +
      ", " +
      Yn(Zn.transform(o)) +
      ")",
  },
  Ab = Mu(0, 255),
  sr = Object.assign(Object.assign({}, To), {
    transform: (e) => Math.round(Ab(e)),
  }),
  It = {
    test: Pi("rgb", "red"),
    parse: Iu("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: o = 1 }) =>
      "rgba(" +
      sr.transform(e) +
      ", " +
      sr.transform(t) +
      ", " +
      sr.transform(n) +
      ", " +
      Yn(Zn.transform(o)) +
      ")",
  };
function Pb(e) {
  let t = "",
    n = "",
    o = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)),
        (n = e.substr(3, 2)),
        (o = e.substr(5, 2)),
        (s = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (n = e.substr(2, 1)),
        (o = e.substr(3, 1)),
        (s = e.substr(4, 1)),
        (t += t),
        (n += n),
        (o += o),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(o, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Nr = { test: Pi("#"), parse: Pb, transform: It.transform },
  De = {
    test: (e) => It.test(e) || Nr.test(e) || tn.test(e),
    parse: (e) =>
      It.test(e) ? It.parse(e) : tn.test(e) ? tn.parse(e) : Nr.parse(e),
    transform: (e) =>
      xo(e) ? e : e.hasOwnProperty("red") ? It.transform(e) : tn.transform(e),
  },
  Bu = "${c}",
  Nu = "${n}";
function $b(e) {
  var t, n, o, s;
  return (
    isNaN(e) &&
    xo(e) &&
    ((n = (t = e.match(uo)) === null || t === void 0 ? void 0 : t.length) !==
      null && n !== void 0
      ? n
      : 0) +
      ((s = (o = e.match(Br)) === null || o === void 0 ? void 0 : o.length) !==
        null && s !== void 0
        ? s
        : 0) >
      0
  );
}
function Ru(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0;
  const o = e.match(Br);
  o && ((n = o.length), (e = e.replace(Br, Bu)), t.push(...o.map(De.parse)));
  const s = e.match(uo);
  return (
    s && ((e = e.replace(uo, Nu)), t.push(...s.map(To.parse))),
    { values: t, numColors: n, tokenised: e }
  );
}
function Fu(e) {
  return Ru(e).values;
}
function Lu(e) {
  const { values: t, numColors: n, tokenised: o } = Ru(e),
    s = t.length;
  return (r) => {
    let i = o;
    for (let l = 0; l < s; l++)
      i = i.replace(l < n ? Bu : Nu, l < n ? De.transform(r[l]) : Yn(r[l]));
    return i;
  };
}
const kb = (e) => (typeof e == "number" ? 0 : e);
function Mb(e) {
  const t = Fu(e);
  return Lu(e)(t.map(kb));
}
const So = {
    test: $b,
    parse: Fu,
    createTransformer: Lu,
    getAnimatableNone: Mb,
  },
  Ib = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Bb(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [o] = n.match(uo) || [];
  if (!o) return e;
  const s = n.replace(o, "");
  let r = Ib.has(t) ? 1 : 0;
  return o !== n && (r *= 100), t + "(" + r + s + ")";
}
const Nb = /([a-z-]*)\(.*?\)/g,
  Rr = Object.assign(Object.assign({}, So), {
    getAnimatableNone: (e) => {
      const t = e.match(Nb);
      return t ? t.map(Bb).join(" ") : e;
    },
  });
function rr(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function ia({ hue: e, saturation: t, lightness: n, alpha: o }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    r = 0,
    i = 0;
  if (!t) s = r = i = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (s = rr(a, l, e + 1 / 3)), (r = rr(a, l, e)), (i = rr(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(r * 255),
    blue: Math.round(i * 255),
    alpha: o,
  };
}
const Rb = (e, t, n) => {
    const o = e * e,
      s = t * t;
    return Math.sqrt(Math.max(0, n * (s - o) + o));
  },
  Fb = [Nr, It, tn],
  la = (e) => Fb.find((t) => t.test(e)),
  Du = (e, t) => {
    let n = la(e),
      o = la(t),
      s = n.parse(e),
      r = o.parse(t);
    n === tn && ((s = ia(s)), (n = It)), o === tn && ((r = ia(r)), (o = It));
    const i = Object.assign({}, s);
    return (l) => {
      for (const a in i) a !== "alpha" && (i[a] = Rb(s[a], r[a], l));
      return (i.alpha = Ei(s.alpha, r.alpha, l)), n.transform(i);
    };
  },
  Lb = (e) => typeof e == "number",
  Db = (e, t) => (n) => t(e(n)),
  ju = (...e) => e.reduce(Db);
function Vu(e, t) {
  return Lb(e) ? (n) => Ei(e, t, n) : De.test(e) ? Du(e, t) : Wu(e, t);
}
const Hu = (e, t) => {
    const n = [...e],
      o = n.length,
      s = e.map((r, i) => Vu(r, t[i]));
    return (r) => {
      for (let i = 0; i < o; i++) n[i] = s[i](r);
      return n;
    };
  },
  jb = (e, t) => {
    const n = Object.assign(Object.assign({}, e), t),
      o = {};
    for (const s in n)
      e[s] !== void 0 && t[s] !== void 0 && (o[s] = Vu(e[s], t[s]));
    return (s) => {
      for (const r in o) n[r] = o[r](s);
      return n;
    };
  };
function aa(e) {
  const t = So.parse(e),
    n = t.length;
  let o = 0,
    s = 0,
    r = 0;
  for (let i = 0; i < n; i++)
    o || typeof t[i] == "number" ? o++ : t[i].hue !== void 0 ? r++ : s++;
  return { parsed: t, numNumbers: o, numRGB: s, numHSL: r };
}
const Wu = (e, t) => {
    const n = So.createTransformer(t),
      o = aa(e),
      s = aa(t);
    return o.numHSL === s.numHSL &&
      o.numRGB === s.numRGB &&
      o.numNumbers >= s.numNumbers
      ? ju(Hu(o.parsed, s.parsed), n)
      : (i) => `${i > 0 ? t : e}`;
  },
  Vb = (e, t) => (n) => Ei(e, t, n);
function Hb(e) {
  if (typeof e == "number") return Vb;
  if (typeof e == "string") return De.test(e) ? Du : Wu;
  if (Array.isArray(e)) return Hu;
  if (typeof e == "object") return jb;
}
function Wb(e, t, n) {
  const o = [],
    s = n || Hb(e[0]),
    r = e.length - 1;
  for (let i = 0; i < r; i++) {
    let l = s(e[i], e[i + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[i] : t;
      l = ju(a, l);
    }
    o.push(l);
  }
  return o;
}
function zb([e, t], [n]) {
  return (o) => n(ku(e, t, o));
}
function Ub(e, t) {
  const n = e.length,
    o = n - 1;
  return (s) => {
    let r = 0,
      i = !1;
    if ((s <= e[0] ? (i = !0) : s >= e[o] && ((r = o - 1), (i = !0)), !i)) {
      let a = 1;
      for (; a < n && !(e[a] > s || a === o); a++);
      r = a - 1;
    }
    const l = ku(e[r], e[r + 1], s);
    return t[r](l);
  };
}
function zu(e, t, { clamp: n = !0, ease: o, mixer: s } = {}) {
  const r = e.length;
  na(r === t.length),
    na(!o || !Array.isArray(o) || o.length === r - 1),
    e[0] > e[r - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
  const i = Wb(t, o, s),
    l = r === 2 ? zb(e, i) : Ub(e, i);
  return n ? (a) => l(Mr(e[0], e[r - 1], a)) : l;
}
const Ls = (e) => (t) => 1 - e(1 - t),
  $i = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Kb = (e) => (t) => Math.pow(t, e),
  Uu = (e) => (t) => t * t * ((e + 1) * t - e),
  qb = (e) => {
    const t = Uu(e);
    return (n) =>
      (n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
  },
  Ku = 1.525,
  Gb = 4 / 11,
  Yb = 8 / 11,
  Zb = 9 / 10,
  qu = (e) => e,
  ki = Kb(2),
  Jb = Ls(ki),
  Gu = $i(ki),
  Yu = (e) => 1 - Math.sin(Math.acos(e)),
  Zu = Ls(Yu),
  Xb = $i(Zu),
  Mi = Uu(Ku),
  Qb = Ls(Mi),
  e1 = $i(Mi),
  t1 = qb(Ku),
  n1 = 4356 / 361,
  o1 = 35442 / 1805,
  s1 = 16061 / 1805,
  rs = (e) => {
    if (e === 1 || e === 0) return e;
    const t = e * e;
    return e < Gb
      ? 7.5625 * t
      : e < Yb
      ? 9.075 * t - 9.9 * e + 3.4
      : e < Zb
      ? n1 * t - o1 * e + s1
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  r1 = Ls(rs),
  i1 = (e) => (e < 0.5 ? 0.5 * (1 - rs(1 - e * 2)) : 0.5 * rs(e * 2 - 1) + 0.5);
function l1(e, t) {
  return e.map(() => t || Gu).splice(0, e.length - 1);
}
function a1(e) {
  const t = e.length;
  return e.map((n, o) => (o !== 0 ? o / (t - 1) : 0));
}
function c1(e, t) {
  return e.map((n) => n * t);
}
function qo({ from: e = 0, to: t = 1, ease: n, offset: o, duration: s = 300 }) {
  const r = { done: !1, value: e },
    i = Array.isArray(t) ? t : [e, t],
    l = c1(o && o.length === i.length ? o : a1(i), s);
  function a() {
    return zu(l, i, { ease: Array.isArray(n) ? n : l1(i, n) });
  }
  let u = a();
  return {
    next: (c) => ((r.value = u(c)), (r.done = c >= s), r),
    flipTarget: () => {
      i.reverse(), (u = a());
    },
  };
}
function u1({
  velocity: e = 0,
  from: t = 0,
  power: n = 0.8,
  timeConstant: o = 350,
  restDelta: s = 0.5,
  modifyTarget: r,
}) {
  const i = { done: !1, value: t };
  let l = n * e;
  const a = t + l,
    u = r === void 0 ? a : r(a);
  return (
    u !== a && (l = u - t),
    {
      next: (c) => {
        const f = -l * Math.exp(-c / o);
        return (i.done = !(f > s || f < -s)), (i.value = i.done ? u : u + f), i;
      },
      flipTarget: () => {},
    }
  );
}
const ca = { keyframes: qo, spring: Oi, decay: u1 };
function f1(e) {
  if (Array.isArray(e.to)) return qo;
  if (ca[e.type]) return ca[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || (t.has("duration") && !t.has("dampingRatio"))
    ? qo
    : t.has("dampingRatio") ||
      t.has("stiffness") ||
      t.has("mass") ||
      t.has("damping") ||
      t.has("restSpeed") ||
      t.has("restDelta")
    ? Oi
    : qo;
}
function Ju(e, t, n = 0) {
  return e - t - n;
}
function d1(e, t, n = 0, o = !0) {
  return o ? Ju(t + -e, t, n) : t - (e - t) + n;
}
function p1(e, t, n, o) {
  return o ? e >= t + n : e <= -n;
}
const h1 = (e) => {
  const t = ({ delta: n }) => e(n);
  return { start: () => kr.update(t, !0), stop: () => hb.update(t) };
};
function Xu(e) {
  var t,
    n,
    {
      from: o,
      autoplay: s = !0,
      driver: r = h1,
      elapsed: i = 0,
      repeat: l = 0,
      repeatType: a = "loop",
      repeatDelay: u = 0,
      onPlay: c,
      onStop: f,
      onComplete: d,
      onRepeat: m,
      onUpdate: h,
    } = e,
    y = $u(e, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]);
  let { to: b } = y,
    w,
    S = 0,
    C = y.duration,
    x,
    B = !1,
    D = !0,
    K;
  const M = f1(y);
  !((n = (t = M).needsInterpolation) === null || n === void 0) &&
    n.call(t, o, b) &&
    ((K = zu([0, 100], [o, b], { clamp: !1 })), (o = 0), (b = 100));
  const k = M(Object.assign(Object.assign({}, y), { from: o, to: b }));
  function P() {
    S++,
      a === "reverse"
        ? ((D = S % 2 === 0), (i = d1(i, C, u, D)))
        : ((i = Ju(i, C, u)), a === "mirror" && k.flipTarget()),
      (B = !1),
      m && m();
  }
  function N() {
    w.stop(), d && d();
  }
  function $(ce) {
    if ((D || (ce = -ce), (i += ce), !B)) {
      const we = k.next(Math.max(0, i));
      (x = we.value), K && (x = K(x)), (B = D ? we.done : i <= 0);
    }
    h == null || h(x),
      B && (S === 0 && (C ?? (C = i)), S < l ? p1(i, C, u, D) && P() : N());
  }
  function Y() {
    c == null || c(), (w = r($)), w.start();
  }
  return (
    s && Y(),
    {
      stop: () => {
        f == null || f(), w.stop();
      },
    }
  );
}
function Qu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function m1({
  from: e = 0,
  velocity: t = 0,
  min: n,
  max: o,
  power: s = 0.8,
  timeConstant: r = 750,
  bounceStiffness: i = 500,
  bounceDamping: l = 10,
  restDelta: a = 1,
  modifyTarget: u,
  driver: c,
  onUpdate: f,
  onComplete: d,
  onStop: m,
}) {
  let h;
  function y(C) {
    return (n !== void 0 && C < n) || (o !== void 0 && C > o);
  }
  function b(C) {
    return n === void 0
      ? o
      : o === void 0 || Math.abs(n - C) < Math.abs(o - C)
      ? n
      : o;
  }
  function w(C) {
    h == null || h.stop(),
      (h = Xu(
        Object.assign(Object.assign({}, C), {
          driver: c,
          onUpdate: (x) => {
            var B;
            f == null || f(x),
              (B = C.onUpdate) === null || B === void 0 || B.call(C, x);
          },
          onComplete: d,
          onStop: m,
        })
      ));
  }
  function S(C) {
    w(
      Object.assign(
        { type: "spring", stiffness: i, damping: l, restDelta: a },
        C
      )
    );
  }
  if (y(e)) S({ from: e, velocity: t, to: b(e) });
  else {
    let C = s * t + e;
    typeof u < "u" && (C = u(C));
    const x = b(C),
      B = x === n ? -1 : 1;
    let D, K;
    const M = (k) => {
      (D = K),
        (K = k),
        (t = Qu(k - D, Pu().delta)),
        ((B === 1 && k > x) || (B === -1 && k < x)) &&
          S({ from: k, to: x, velocity: t });
    };
    w({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: r,
      power: s,
      restDelta: a,
      modifyTarget: u,
      onUpdate: y(C) ? M : void 0,
    });
  }
  return { stop: () => (h == null ? void 0 : h.stop()) };
}
const ef = (e, t) => 1 - 3 * t + 3 * e,
  tf = (e, t) => 3 * t - 6 * e,
  nf = (e) => 3 * e,
  is = (e, t, n) => ((ef(t, n) * e + tf(t, n)) * e + nf(t)) * e,
  of = (e, t, n) => 3 * ef(t, n) * e * e + 2 * tf(t, n) * e + nf(t),
  g1 = 1e-7,
  y1 = 10;
function v1(e, t, n, o, s) {
  let r,
    i,
    l = 0;
  do (i = t + (n - t) / 2), (r = is(i, o, s) - e), r > 0 ? (n = i) : (t = i);
  while (Math.abs(r) > g1 && ++l < y1);
  return i;
}
const b1 = 8,
  _1 = 0.001;
function w1(e, t, n, o) {
  for (let s = 0; s < b1; ++s) {
    const r = of(t, n, o);
    if (r === 0) return t;
    const i = is(t, n, o) - e;
    t -= i / r;
  }
  return t;
}
const Go = 11,
  Do = 1 / (Go - 1);
function C1(e, t, n, o) {
  if (e === t && n === o) return qu;
  const s = new Float32Array(Go);
  for (let i = 0; i < Go; ++i) s[i] = is(i * Do, e, n);
  function r(i) {
    let l = 0,
      a = 1;
    const u = Go - 1;
    for (; a !== u && s[a] <= i; ++a) l += Do;
    --a;
    const c = (i - s[a]) / (s[a + 1] - s[a]),
      f = l + c * Do,
      d = of(f, e, n);
    return d >= _1 ? w1(i, f, e, n) : d === 0 ? f : v1(i, l, l + Do, e, n);
  }
  return (i) => (i === 0 || i === 1 ? i : is(r(i), t, o));
}
const ir = {};
var x1 = Object.defineProperty,
  T1 = (e, t, n) =>
    t in e
      ? x1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  S1 = (e, t, n) => (T1(e, t + "", n), n);
class O1 {
  constructor() {
    S1(this, "subscriptions", new Set());
  }
  add(t) {
    return this.subscriptions.add(t), () => this.subscriptions.delete(t);
  }
  notify(t, n, o) {
    if (this.subscriptions.size) for (const s of this.subscriptions) s(t, n, o);
  }
  clear() {
    this.subscriptions.clear();
  }
}
var E1 = Object.defineProperty,
  A1 = (e, t, n) =>
    t in e
      ? E1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  at = (e, t, n) => (A1(e, typeof t != "symbol" ? t + "" : t, n), n);
function ua(e) {
  return !Number.isNaN(Number.parseFloat(e));
}
class P1 {
  constructor(t) {
    at(this, "current"),
      at(this, "prev"),
      at(this, "timeDelta", 0),
      at(this, "lastUpdated", 0),
      at(this, "updateSubscribers", new O1()),
      at(this, "stopAnimation"),
      at(this, "canTrackVelocity", !1),
      at(this, "updateAndNotify", (n) => {
        (this.prev = this.current), (this.current = n);
        const { delta: o, timestamp: s } = Pu();
        this.lastUpdated !== s &&
          ((this.timeDelta = o), (this.lastUpdated = s)),
          kr.postRender(this.scheduleVelocityCheck),
          this.updateSubscribers.notify(this.current);
      }),
      at(this, "scheduleVelocityCheck", () =>
        kr.postRender(this.velocityCheck)
      ),
      at(this, "velocityCheck", ({ timestamp: n }) => {
        this.canTrackVelocity || (this.canTrackVelocity = ua(this.current)),
          n !== this.lastUpdated && (this.prev = this.current);
      }),
      (this.prev = this.current = t),
      (this.canTrackVelocity = ua(this.current));
  }
  onChange(t) {
    return this.updateSubscribers.add(t);
  }
  clearListeners() {
    this.updateSubscribers.clear();
  }
  set(t) {
    this.updateAndNotify(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Qu(
          Number.parseFloat(this.current) - Number.parseFloat(this.prev),
          this.timeDelta
        )
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        const { stop: o } = t(n);
        this.stopAnimation = o;
      }).then(() => this.clearAnimation())
    );
  }
  stop() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation();
  }
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  destroy() {
    this.updateSubscribers.clear(), this.stop();
  }
}
function $1(e) {
  return new P1(e);
}
const { isArray: k1 } = Array;
function M1() {
  const e = ee({}),
    t = (o) => {
      const s = (r) => {
        e.value[r] &&
          (e.value[r].stop(), e.value[r].destroy(), delete e.value[r]);
      };
      o ? (k1(o) ? o.forEach(s) : s(o)) : Object.keys(e.value).forEach(s);
    },
    n = (o, s, r) => {
      if (e.value[o]) return e.value[o];
      const i = $1(s);
      return i.onChange((l) => (r[o] = l)), (e.value[o] = i), i;
    };
  return lb(t), { motionValues: e, get: n, stop: t };
}
function I1(e) {
  return Array.isArray(e);
}
function Jt() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
  };
}
function lr(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10,
  };
}
function B1(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 100 : 30,
    restDelta: 0.01,
    restSpeed: 10,
  };
}
function ar() {
  return { type: "keyframes", ease: "linear", duration: 300 };
}
function N1(e) {
  return { type: "keyframes", duration: 800, values: e };
}
const fa = {
  default: B1,
  x: Jt,
  y: Jt,
  z: Jt,
  rotate: Jt,
  rotateX: Jt,
  rotateY: Jt,
  rotateZ: Jt,
  scaleX: lr,
  scaleY: lr,
  scale: lr,
  backgroundColor: ar,
  color: ar,
  opacity: ar,
};
function sf(e, t) {
  let n;
  return I1(t) ? (n = N1) : (n = fa[e] || fa.default), { to: t, ...n(t) };
}
const da = { ...To, transform: Math.round },
  rf = {
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    borderWidth: X,
    borderTopWidth: X,
    borderRightWidth: X,
    borderBottomWidth: X,
    borderLeftWidth: X,
    borderRadius: X,
    radius: X,
    borderTopLeftRadius: X,
    borderTopRightRadius: X,
    borderBottomRightRadius: X,
    borderBottomLeftRadius: X,
    width: X,
    maxWidth: X,
    height: X,
    maxHeight: X,
    size: X,
    top: X,
    right: X,
    bottom: X,
    left: X,
    padding: X,
    paddingTop: X,
    paddingRight: X,
    paddingBottom: X,
    paddingLeft: X,
    margin: X,
    marginTop: X,
    marginRight: X,
    marginBottom: X,
    marginLeft: X,
    rotate: Zt,
    rotateX: Zt,
    rotateY: Zt,
    rotateZ: Zt,
    scale: Lo,
    scaleX: Lo,
    scaleY: Lo,
    scaleZ: Lo,
    skew: Zt,
    skewX: Zt,
    skewY: Zt,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: Zn,
    originX: ra,
    originY: ra,
    originZ: X,
    zIndex: da,
    filter: Rr,
    WebkitFilter: Rr,
    fillOpacity: Zn,
    strokeOpacity: Zn,
    numOctaves: da,
  },
  Ii = (e) => rf[e];
function Fr(e, t) {
  return t && typeof e == "number" && t.transform ? t.transform(e) : e;
}
function R1(e, t) {
  let n = Ii(e);
  return (
    n !== Rr && (n = So), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const F1 = {
  linear: qu,
  easeIn: ki,
  easeInOut: Gu,
  easeOut: Jb,
  circIn: Yu,
  circInOut: Xb,
  circOut: Zu,
  backIn: Mi,
  backInOut: e1,
  backOut: Qb,
  anticipate: t1,
  bounceIn: r1,
  bounceInOut: i1,
  bounceOut: rs,
};
function pa(e) {
  if (Array.isArray(e)) {
    const [t, n, o, s] = e;
    return C1(t, n, o, s);
  } else if (typeof e == "string") return F1[e];
  return e;
}
function L1(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}
function ha(e, t) {
  return e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" && So.test(t) && !t.startsWith("url("))
      );
}
function D1(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = [...e.to]), (e.to[0] = e.from)),
    e
  );
}
function j1({ ease: e, times: t, delay: n, ...o }) {
  const s = { ...o };
  return (
    t && (s.offset = t),
    e && (s.ease = L1(e) ? e.map(pa) : pa(e)),
    n && (s.elapsed = -n),
    s
  );
}
function V1(e, t, n) {
  return (
    Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    D1(t),
    H1(e) || (e = { ...e, ...sf(n, t.to) }),
    { ...t, ...j1(e) }
  );
}
function H1({
  delay: e,
  repeat: t,
  repeatType: n,
  repeatDelay: o,
  from: s,
  ...r
}) {
  return !!Object.keys(r).length;
}
function W1(e, t) {
  return e[t] || e.default || e;
}
function z1(e, t, n, o, s) {
  const r = W1(o, e);
  let i = r.from === null || r.from === void 0 ? t.get() : r.from;
  const l = ha(e, n);
  i === "none" && l && typeof n == "string" && (i = R1(e, n));
  const a = ha(e, i);
  function u(f) {
    const d = {
      from: i,
      to: n,
      velocity: o.velocity ? o.velocity : t.getVelocity(),
      onUpdate: (m) => t.set(m),
    };
    return r.type === "inertia" || r.type === "decay"
      ? m1({ ...d, ...r })
      : Xu({
          ...V1(r, d, e),
          onUpdate: (m) => {
            d.onUpdate(m), r.onUpdate && r.onUpdate(m);
          },
          onComplete: () => {
            s && s(), f && f();
          },
        });
  }
  function c(f) {
    return t.set(n), s && s(), f && f(), { stop: () => {} };
  }
  return !a || !l || r.type === !1 ? c : u;
}
function U1() {
  const { motionValues: e, stop: t, get: n } = M1();
  return {
    motionValues: e,
    stop: t,
    push: (s, r, i, l = {}, a) => {
      const u = i[s],
        c = n(s, u, i);
      if (l && l.immediate) {
        c.set(r);
        return;
      }
      const f = z1(s, c, r, l, a);
      c.start(f);
    },
  };
}
function K1(e, t = {}, { motionValues: n, push: o, stop: s } = U1()) {
  const r = v(t),
    i = ee(!1);
  fe(
    n,
    (f) => {
      i.value = Object.values(f).filter((d) => d.isAnimating()).length > 0;
    },
    { immediate: !0, deep: !0 }
  );
  const l = (f) => {
      if (!r || !r[f]) throw new Error(`The variant ${f} does not exist.`);
      return r[f];
    },
    a = (f) => {
      typeof f == "string" && (f = l(f));
      const d = Object.entries(f)
        .map(([h, y]) => {
          if (h !== "transition")
            return new Promise((b) =>
              o(h, y, e, f.transition || sf(h, f[h]), b)
            );
        })
        .filter(Boolean);
      async function m() {
        var h, y;
        await Promise.all(d),
          (y = (h = f.transition) == null ? void 0 : h.onComplete) == null ||
            y.call(h);
      }
      return Promise.all([m()]);
    };
  return {
    isAnimating: i,
    apply: a,
    set: (f) => {
      const d = ss(f) ? f : l(f);
      Object.entries(d).forEach(([m, h]) => {
        m !== "transition" && o(m, h, e, { immediate: !0 });
      });
    },
    leave: async (f) => {
      let d;
      if (
        (r &&
          (r.leave && (d = r.leave), !r.leave && r.initial && (d = r.initial)),
        !d)
      ) {
        f();
        return;
      }
      await a(d), f();
    },
    stop: s,
  };
}
const Bi = typeof window < "u",
  q1 = () => Bi && (window.onpointerdown === null || void 0),
  G1 = () => Bi && (window.ontouchstart === null || void 0),
  Y1 = () => Bi && (window.onmousedown === null || void 0);
function Z1({ target: e, state: t, variants: n, apply: o }) {
  const s = v(n),
    r = ee(!1),
    i = ee(!1),
    l = ee(!1),
    a = I(() => {
      let c = [...Object.keys(t.value || {})];
      return (
        s &&
          (s.hovered && (c = [...c, ...Object.keys(s.hovered)]),
          s.tapped && (c = [...c, ...Object.keys(s.tapped)]),
          s.focused && (c = [...c, ...Object.keys(s.focused)])),
        c
      );
    }),
    u = I(() => {
      const c = {};
      Object.assign(c, t.value),
        r.value && s.hovered && Object.assign(c, s.hovered),
        i.value && s.tapped && Object.assign(c, s.tapped),
        l.value && s.focused && Object.assign(c, s.focused);
      for (const f in c) a.value.includes(f) || delete c[f];
      return c;
    });
  s.hovered &&
    (lt(e, "mouseenter", () => (r.value = !0)),
    lt(e, "mouseleave", () => {
      (r.value = !1), (i.value = !1);
    })),
    s.tapped &&
      (Y1() &&
        (lt(e, "mousedown", () => (i.value = !0)),
        lt(e, "mouseup", () => (i.value = !1))),
      q1() &&
        (lt(e, "pointerdown", () => (i.value = !0)),
        lt(e, "pointerup", () => (i.value = !1))),
      G1() &&
        (lt(e, "touchstart", () => (i.value = !0)),
        lt(e, "touchend", () => (i.value = !1)))),
    s.focused &&
      (lt(e, "focus", () => (l.value = !0)),
      lt(e, "blur", () => (l.value = !1))),
    fe([r, i, l], () => {
      o(u.value);
    });
}
function J1({ set: e, target: t, variants: n, variant: o }) {
  const s = v(n);
  fe(
    () => t,
    () => {
      s &&
        (s.initial && (e("initial"), (o.value = "initial")),
        s.enter && (o.value = "enter"));
    },
    { immediate: !0, flush: "pre" }
  );
}
function X1({ state: e, apply: t }) {
  fe(
    e,
    (n) => {
      n && t(n);
    },
    { immediate: !0 }
  );
}
function lf({ target: e, variants: t, variant: n }) {
  const o = v(t);
  o &&
    (o.visible || o.visibleOnce) &&
    ub(e, ([{ isIntersecting: s }]) => {
      o.visible
        ? s
          ? (n.value = "visible")
          : (n.value = "initial")
        : o.visibleOnce &&
          (s && n.value !== "visibleOnce"
            ? (n.value = "visibleOnce")
            : n.value || (n.value = "initial"));
    });
}
function Q1(
  e,
  t = {
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0,
  }
) {
  t.lifeCycleHooks && J1(e),
    t.syncVariants && X1(e),
    t.visibilityHooks && lf(e),
    t.eventListeners && Z1(e);
}
function af(e = {}) {
  const t = wt({ ...e }),
    n = ee({});
  return (
    fe(
      t,
      () => {
        const o = {};
        for (const [s, r] of Object.entries(t)) {
          const i = Ii(s),
            l = Fr(r, i);
          o[s] = l;
        }
        n.value = o;
      },
      { immediate: !0, deep: !0 }
    ),
    { state: t, style: n }
  );
}
function Ni(e, t) {
  fe(
    () => Gn(e),
    (n) => {
      n && t(n);
    },
    { immediate: !0 }
  );
}
const e_ = { x: "translateX", y: "translateY", z: "translateZ" };
function cf(e = {}, t = !0) {
  const n = wt({ ...e }),
    o = ee("");
  return (
    fe(
      n,
      (s) => {
        let r = "",
          i = !1;
        if (t && (s.x || s.y || s.z)) {
          const l = [s.x || 0, s.y || 0, s.z || 0]
            .map((a) => Fr(a, X))
            .join(",");
          (r += `translate3d(${l}) `), (i = !0);
        }
        for (const [l, a] of Object.entries(s)) {
          if (t && (l === "x" || l === "y" || l === "z")) continue;
          const u = Ii(l),
            c = Fr(a, u);
          r += `${e_[l] || l}(${c}) `;
        }
        t && !i && (r += "translateZ(0px) "), (o.value = r.trim());
      },
      { immediate: !0, deep: !0 }
    ),
    { state: n, transform: o }
  );
}
const t_ = ["", "X", "Y", "Z"],
  n_ = ["perspective", "translate", "scale", "rotate", "skew"],
  uf = ["transformPerspective", "x", "y", "z"];
n_.forEach((e) => {
  t_.forEach((t) => {
    const n = e + t;
    uf.push(n);
  });
});
const o_ = new Set(uf);
function Ri(e) {
  return o_.has(e);
}
const s_ = new Set(["originX", "originY", "originZ"]);
function ff(e) {
  return s_.has(e);
}
function r_(e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([o, s]) => {
      Ri(o) || ff(o) ? (t[o] = s) : (n[o] = s);
    }),
    { transform: t, style: n }
  );
}
function Ds(e) {
  const { transform: t, style: n } = r_(e),
    { transform: o } = cf(t),
    { style: s } = af(n);
  return o.value && (s.value.transform = o.value), s.value;
}
function i_(e, t) {
  let n, o;
  const { state: s, style: r } = af();
  return (
    Ni(e, (i) => {
      o = i;
      for (const l of Object.keys(rf))
        i.style[l] === null ||
          i.style[l] === "" ||
          Ri(l) ||
          ff(l) ||
          (s[l] = i.style[l]);
      n && Object.entries(n).forEach(([l, a]) => (i.style[l] = a)), t && t(s);
    }),
    fe(
      r,
      (i) => {
        if (!o) {
          n = i;
          return;
        }
        for (const l in i) o.style[l] = i[l];
      },
      { immediate: !0 }
    ),
    { style: s }
  );
}
function l_(e) {
  const t = e.trim().split(/\) |\)/);
  if (t.length === 1) return {};
  const n = (o) =>
    o.endsWith("px") || o.endsWith("deg")
      ? Number.parseFloat(o)
      : Number.isNaN(Number(o))
      ? Number(o)
      : o;
  return t.reduce((o, s) => {
    if (!s) return o;
    const [r, i] = s.split("("),
      a = i
        .split(",")
        .map((c) => n(c.endsWith(")") ? c.replace(")", "") : c.trim())),
      u = a.length === 1 ? a[0] : a;
    return { ...o, [r]: u };
  }, {});
}
function a_(e, t) {
  Object.entries(l_(t)).forEach(([n, o]) => {
    const s = ["x", "y", "z"];
    if (n === "translate3d") {
      if (o === 0) {
        s.forEach((r) => (e[r] = 0));
        return;
      }
      o.forEach((r, i) => (e[s[i]] = r));
      return;
    }
    if (((o = Number.parseFloat(`${o}`)), n === "translateX")) {
      e.x = o;
      return;
    }
    if (n === "translateY") {
      e.y = o;
      return;
    }
    if (n === "translateZ") {
      e.z = o;
      return;
    }
    e[n] = o;
  });
}
function c_(e, t) {
  let n, o;
  const { state: s, transform: r } = cf();
  return (
    Ni(e, (i) => {
      (o = i),
        i.style.transform && a_(s, i.style.transform),
        n && (i.style.transform = n),
        t && t(s);
    }),
    fe(
      r,
      (i) => {
        if (!o) {
          n = i;
          return;
        }
        o.style.transform = i;
      },
      { immediate: !0 }
    ),
    { transform: s }
  );
}
function u_(e) {
  return Object.entries(e);
}
function f_(e, t) {
  const n = wt({}),
    o = (i) => Object.entries(i).forEach(([l, a]) => (n[l] = a)),
    { style: s } = i_(e, o),
    { transform: r } = c_(e, o);
  return (
    fe(
      n,
      (i) => {
        u_(i).forEach(([l, a]) => {
          const u = Ri(l) ? r : s;
          (u[l] && u[l] === a) || (u[l] = a);
        });
      },
      { immediate: !0, deep: !0 }
    ),
    Ni(e, () => t),
    { motionProperties: n, style: s, transform: r }
  );
}
function d_(e = {}) {
  const t = v(e),
    n = ee();
  return {
    state: I(() => {
      if (n.value) return t[n.value];
    }),
    variant: n,
  };
}
function df(e, t = {}, n) {
  const { motionProperties: o } = f_(e),
    { variant: s, state: r } = d_(t),
    i = K1(o, t),
    l = {
      target: e,
      variant: s,
      variants: t,
      state: r,
      motionProperties: o,
      ...i,
    };
  return Q1(l, n), l;
}
const pf = ["delay", "duration"],
  p_ = [
    "initial",
    "enter",
    "leave",
    "visible",
    "visible-once",
    "visibleOnce",
    "hovered",
    "tapped",
    "focused",
    ...pf,
  ];
function h_(e) {
  return pf.includes(e);
}
function m_(e, t) {
  const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
  if (n) {
    n.variants && ss(n.variants) && (t.value = { ...t.value, ...n.variants });
    for (let o of p_)
      if (!(!n || !n[o])) {
        if (h_(o) && typeof n[o] == "number") {
          for (const s of ["enter", "visible", "visibleOnce"]) {
            const r = t.value[s];
            r != null &&
              (r.transition ?? (r.transition = {}), (r.transition[o] = n[o]));
          }
          continue;
        }
        if (ss(n[o])) {
          const s = n[o];
          o === "visible-once" && (o = "visibleOnce"), (t.value[o] = s);
        }
      }
  }
}
function cr(e, t = !1) {
  return {
    created: (s, r, i) => {
      const l = r.value && typeof r.value == "string" ? r.value : i.key;
      l && ir[l] && ir[l].stop();
      const a = t ? structuredClone(re(e) || {}) : e || {},
        u = ee(a);
      typeof r.value == "object" && (u.value = r.value), m_(i, u);
      const f = df(s, u, {
        eventListeners: !0,
        lifeCycleHooks: !0,
        syncVariants: !0,
        visibilityHooks: !1,
      });
      (s.motionInstance = f), l && (ir[l] = f);
    },
    mounted: (s, r, i) => {
      s.motionInstance && lf(s.motionInstance);
    },
    getSSRProps(s, r) {
      let { initial: i } =
        s.value || (r && (r == null ? void 0 : r.props)) || {};
      i = v(i);
      const l = xu({}, (e == null ? void 0 : e.initial) || {}, i || {});
      return !l || Object.keys(l).length === 0 ? void 0 : { style: Ds(l) };
    },
  };
}
const g_ = { initial: { opacity: 0 }, enter: { opacity: 1 } },
  y_ = { initial: { opacity: 0 }, visible: { opacity: 1 } },
  v_ = { initial: { opacity: 0 }, visibleOnce: { opacity: 1 } },
  b_ = { initial: { scale: 0, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
  __ = { initial: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  w_ = {
    initial: { scale: 0, opacity: 0 },
    visibleOnce: { scale: 1, opacity: 1 },
  },
  C_ = {
    initial: { x: -100, rotate: 90, opacity: 0 },
    enter: { x: 0, rotate: 0, opacity: 1 },
  },
  x_ = {
    initial: { x: -100, rotate: 90, opacity: 0 },
    visible: { x: 0, rotate: 0, opacity: 1 },
  },
  T_ = {
    initial: { x: -100, rotate: 90, opacity: 0 },
    visibleOnce: { x: 0, rotate: 0, opacity: 1 },
  },
  S_ = {
    initial: { x: 100, rotate: -90, opacity: 0 },
    enter: { x: 0, rotate: 0, opacity: 1 },
  },
  O_ = {
    initial: { x: 100, rotate: -90, opacity: 0 },
    visible: { x: 0, rotate: 0, opacity: 1 },
  },
  E_ = {
    initial: { x: 100, rotate: -90, opacity: 0 },
    visibleOnce: { x: 0, rotate: 0, opacity: 1 },
  },
  A_ = {
    initial: { y: -100, rotate: -90, opacity: 0 },
    enter: { y: 0, rotate: 0, opacity: 1 },
  },
  P_ = {
    initial: { y: -100, rotate: -90, opacity: 0 },
    visible: { y: 0, rotate: 0, opacity: 1 },
  },
  $_ = {
    initial: { y: -100, rotate: -90, opacity: 0 },
    visibleOnce: { y: 0, rotate: 0, opacity: 1 },
  },
  k_ = {
    initial: { y: 100, rotate: 90, opacity: 0 },
    enter: { y: 0, rotate: 0, opacity: 1 },
  },
  M_ = {
    initial: { y: 100, rotate: 90, opacity: 0 },
    visible: { y: 0, rotate: 0, opacity: 1 },
  },
  I_ = {
    initial: { y: 100, rotate: 90, opacity: 0 },
    visibleOnce: { y: 0, rotate: 0, opacity: 1 },
  },
  B_ = { initial: { x: -100, opacity: 0 }, enter: { x: 0, opacity: 1 } },
  N_ = { initial: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  R_ = { initial: { x: -100, opacity: 0 }, visibleOnce: { x: 0, opacity: 1 } },
  F_ = { initial: { x: 100, opacity: 0 }, enter: { x: 0, opacity: 1 } },
  L_ = { initial: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  D_ = { initial: { x: 100, opacity: 0 }, visibleOnce: { x: 0, opacity: 1 } },
  j_ = { initial: { y: -100, opacity: 0 }, enter: { y: 0, opacity: 1 } },
  V_ = { initial: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  H_ = { initial: { y: -100, opacity: 0 }, visibleOnce: { y: 0, opacity: 1 } },
  W_ = { initial: { y: 100, opacity: 0 }, enter: { y: 0, opacity: 1 } },
  z_ = { initial: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  U_ = { initial: { y: 100, opacity: 0 }, visibleOnce: { y: 0, opacity: 1 } },
  ls = {
    __proto__: null,
    fade: g_,
    fadeVisible: y_,
    fadeVisibleOnce: v_,
    pop: b_,
    popVisible: __,
    popVisibleOnce: w_,
    rollBottom: k_,
    rollLeft: C_,
    rollRight: S_,
    rollTop: A_,
    rollVisibleBottom: M_,
    rollVisibleLeft: x_,
    rollVisibleOnceBottom: I_,
    rollVisibleOnceLeft: T_,
    rollVisibleOnceRight: E_,
    rollVisibleOnceTop: $_,
    rollVisibleRight: O_,
    rollVisibleTop: P_,
    slideBottom: W_,
    slideLeft: B_,
    slideRight: F_,
    slideTop: j_,
    slideVisibleBottom: z_,
    slideVisibleLeft: N_,
    slideVisibleOnceBottom: U_,
    slideVisibleOnceLeft: R_,
    slideVisibleOnceRight: D_,
    slideVisibleOnceTop: H_,
    slideVisibleRight: L_,
    slideVisibleTop: V_,
  };
function K_(e) {
  const t =
      "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",
    n =
      "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",
    o = new RegExp(t.split("").join("|"), "g");
  return e
    .toString()
    .replace(/[A-Z]/g, (s) => `-${s}`)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(o, (s) => n.charAt(t.indexOf(s)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
const hf = Symbol(import.meta.dev ? "motionCustomPresets" : ""),
  mf = {
    preset: { type: String, required: !1 },
    instance: { type: Object, required: !1 },
    variants: { type: Object, required: !1 },
    initial: { type: Object, required: !1 },
    enter: { type: Object, required: !1 },
    leave: { type: Object, required: !1 },
    visible: { type: Object, required: !1 },
    visibleOnce: { type: Object, required: !1 },
    hovered: { type: Object, required: !1 },
    tapped: { type: Object, required: !1 },
    focused: { type: Object, required: !1 },
    delay: { type: [Number, String], required: !1 },
    duration: { type: [Number, String], required: !1 },
  };
function q_(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lr(e) {
  if (Array.isArray(e)) return e.map(Lr);
  if (q_(e)) {
    const t = {};
    for (const n in e) t[n] = Lr(e[n]);
    return t;
  }
  return e;
}
function gf(e) {
  const t = wt({}),
    n = je(hf),
    o = I(() =>
      e.preset == null
        ? {}
        : n != null && e.preset in n
        ? structuredClone(re(n)[e.preset])
        : e.preset in ls
        ? structuredClone(ls[e.preset])
        : {}
    ),
    s = I(() => ({
      initial: e.initial,
      enter: e.enter,
      leave: e.leave,
      visible: e.visible,
      visibleOnce: e.visibleOnce,
      hovered: e.hovered,
      tapped: e.tapped,
      focused: e.focused,
    }));
  function r(a, u) {
    for (const c of ["delay", "duration"]) {
      if (u[c] == null) continue;
      const f = Number.parseInt(u[c]);
      for (const d of ["enter", "visible", "visibleOnce"]) {
        const m = a[d];
        m != null &&
          (m.transition ?? (m.transition = {}), (m.transition[c] = f));
      }
    }
    return a;
  }
  const i = I(() => {
    const a = xu({}, s.value, o.value, e.variants || {});
    return r({ ...a }, e);
  });
  function l(a, u, c) {
    var f;
    a.props ?? (a.props = {}),
      (f = a.props).style ?? (f.style = {}),
      (a.props.style = { ...a.props.style, ...c });
    const d = r(Lr(i.value), a.props);
    return (
      (a.props.onVnodeMounted = ({ el: m }) => {
        t[u] = df(m, d);
      }),
      (a.props.onVnodeUpdated = ({ el: m }) => {
        const h = Ds(t[u].state);
        for (const [y, b] of Object.entries(h)) m.style[y] = b;
      }),
      a
    );
  }
  return { motionConfig: i, setNodeInstance: l };
}
const G_ = ne({
    name: "Motion",
    props: { ...mf, is: { type: [String, Object], default: "div" } },
    setup(e) {
      const t = po(),
        { motionConfig: n, setNodeInstance: o } = gf(e);
      return () => {
        const s = Ds(n.value.initial || {}),
          r = As(e.is, void 0, t);
        return o(r, 0, s), r;
      };
    },
  }),
  Y_ = ne({
    name: "MotionGroup",
    props: { ...mf, is: { type: [String, Object], required: !1 } },
    setup(e) {
      const t = po(),
        { motionConfig: n, setNodeInstance: o } = gf(e);
      return () => {
        var i;
        const s = Ds(n.value.initial || {}),
          r = ((i = t.default) == null ? void 0 : i.call(t)) || [];
        for (let l = 0; l < r.length; l++) {
          const a = r[l];
          a.type === ve && Array.isArray(a.children)
            ? a.children.forEach(function u(c, f) {
                if (c != null) {
                  if (Array.isArray(c)) {
                    u(c, f);
                    return;
                  }
                  typeof c == "object" && o(c, f, s);
                }
              })
            : o(a, l, s);
        }
        return e.is ? As(e.is, void 0, r) : r;
      };
    },
  }),
  Z_ = {
    install(e, t) {
      if ((e.directive("motion", cr()), !t || (t && !t.excludePresets)))
        for (const n in ls) {
          const o = ls[n];
          e.directive(`motion-${K_(n)}`, cr(o, !0));
        }
      if (t && t.directives)
        for (const n in t.directives) {
          const o = t.directives[n];
          !o.initial &&
            __DEV__ &&
            console.warn(
              `Your directive v-motion-${n} is missing initial variant!`
            ),
            e.directive(`motion-${n}`, cr(o, !0));
        }
      e.provide(hf, t == null ? void 0 : t.directives),
        e.component("Motion", G_),
        e.component("MotionGroup", Y_);
    },
  },
  js = eh(U0);
js.use(Rv).use(Ev).use(g0).use(zv).use(Cu).use(vv);
js.use(tb);
js.use(Z_);
js.mount("#app");
