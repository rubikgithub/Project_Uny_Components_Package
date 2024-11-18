import { O as Zt, v as ko, j as wn } from "./index.package-CLtILxgU.js";
function pa(i, t, e, r, n, a, o) {
  try {
    var s = i[a](o), u = s.value;
  } catch (h) {
    return void e(h);
  }
  s.done ? t(u) : Promise.resolve(u).then(r, n);
}
function bt(i) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, n) {
      var a = i.apply(t, e);
      function o(u) {
        pa(a, r, n, o, s, "next", u);
      }
      function s(u) {
        pa(a, r, n, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var ce = function(i) {
  return i && i.Math === Math && i;
}, _ = (
  // eslint-disable-next-line es/no-global-this -- safe
  ce(typeof globalThis == "object" && globalThis) || ce(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  ce(typeof self == "object" && self) || ce(typeof Zt == "object" && Zt) || ce(typeof Zt == "object" && Zt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Ae = {}, D = function(i) {
  try {
    return !!i();
  } catch {
    return !0;
  }
}, Oh = D, ht = !Oh(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Ah = D, vr = !Ah(function() {
  var i = (function() {
  }).bind();
  return typeof i != "function" || i.hasOwnProperty("prototype");
}), Eh = vr, Fe = Function.prototype.call, W = Eh ? Fe.bind(Fe) : function() {
  return Fe.apply(Fe, arguments);
}, Io = {}, _o = {}.propertyIsEnumerable, Lo = Object.getOwnPropertyDescriptor, Ch = Lo && !_o.call({ 1: 2 }, 1);
Io.f = Ch ? function(i) {
  var t = Lo(this, i);
  return !!t && t.enumerable;
} : _o;
var Sn = function(i, t) {
  return {
    enumerable: !(i & 1),
    configurable: !(i & 2),
    writable: !(i & 4),
    value: t
  };
}, Do = vr, jo = Function.prototype, Xi = jo.call, Ph = Do && jo.bind.bind(Xi, Xi), j = Do ? Ph : function(i) {
  return function() {
    return Xi.apply(i, arguments);
  };
}, Bo = j, Nh = Bo({}.toString), Mh = Bo("".slice), Bt = function(i) {
  return Mh(Nh(i), 8, -1);
}, Rh = j, Vh = D, kh = Bt, $r = Object, Ih = Rh("".split), Uo = Vh(function() {
  return !$r("z").propertyIsEnumerable(0);
}) ? function(i) {
  return kh(i) === "String" ? Ih(i, "") : $r(i);
} : $r, Ut = function(i) {
  return i == null;
}, _h = Ut, Lh = TypeError, lt = function(i) {
  if (_h(i)) throw new Lh("Can't call method on " + i);
  return i;
}, Dh = Uo, jh = lt, Ee = function(i) {
  return Dh(jh(i));
}, Zr = typeof document == "object" && document.all, B = typeof Zr > "u" && Zr !== void 0 ? function(i) {
  return typeof i == "function" || i === Zr;
} : function(i) {
  return typeof i == "function";
}, Bh = B, ct = function(i) {
  return typeof i == "object" ? i !== null : Bh(i);
}, Jr = _, Uh = B, zh = function(i) {
  return Uh(i) ? i : void 0;
}, zt = function(i, t) {
  return arguments.length < 2 ? zh(Jr[i]) : Jr[i] && Jr[i][t];
}, Fh = j, xr = Fh({}.isPrototypeOf), Hh = _, da = Hh.navigator, ma = da && da.userAgent, Ce = ma ? String(ma) : "", zo = _, Kr = Ce, ya = zo.process, va = zo.Deno, xa = ya && ya.versions || va && va.version, ba = xa && xa.v8, ut, gr;
ba && (ut = ba.split("."), gr = ut[0] > 0 && ut[0] < 4 ? 1 : +(ut[0] + ut[1]));
!gr && Kr && (ut = Kr.match(/Edge\/(\d+)/), (!ut || ut[1] >= 74) && (ut = Kr.match(/Chrome\/(\d+)/), ut && (gr = +ut[1])));
var Tn = gr, wa = Tn, Xh = D, Yh = _, Wh = Yh.String, Fo = !!Object.getOwnPropertySymbols && !Xh(function() {
  var i = Symbol("symbol detection");
  return !Wh(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && wa && wa < 41;
}), qh = Fo, Ho = qh && !Symbol.sham && typeof Symbol.iterator == "symbol", Gh = zt, Qh = B, $h = xr, Zh = Ho, Jh = Object, Xo = Zh ? function(i) {
  return typeof i == "symbol";
} : function(i) {
  var t = Gh("Symbol");
  return Qh(t) && $h(t.prototype, Jh(i));
}, Kh = String, br = function(i) {
  try {
    return Kh(i);
  } catch {
    return "Object";
  }
}, tl = B, el = br, rl = TypeError, wt = function(i) {
  if (tl(i)) return i;
  throw new rl(el(i) + " is not a function");
}, il = wt, nl = Ut, oe = function(i, t) {
  var e = i[t];
  return nl(e) ? void 0 : il(e);
}, ti = W, ei = B, ri = ct, al = TypeError, sl = function(i, t) {
  var e, r;
  if (t === "string" && ei(e = i.toString) && !ri(r = ti(e, i)) || ei(e = i.valueOf) && !ri(r = ti(e, i)) || t !== "string" && ei(e = i.toString) && !ri(r = ti(e, i))) return r;
  throw new al("Can't convert object to primitive value");
}, Yo = { exports: {} }, Sa = _, ol = Object.defineProperty, On = function(i, t) {
  try {
    ol(Sa, i, { value: t, configurable: !0, writable: !0 });
  } catch {
    Sa[i] = t;
  }
  return t;
}, ul = _, hl = On, Ta = "__core-js_shared__", Oa = Yo.exports = ul[Ta] || hl(Ta, {});
(Oa.versions || (Oa.versions = [])).push({
  version: "3.39.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var An = Yo.exports, Aa = An, En = function(i, t) {
  return Aa[i] || (Aa[i] = t || {});
}, ll = lt, cl = Object, wr = function(i) {
  return cl(ll(i));
}, gl = j, fl = wr, pl = gl({}.hasOwnProperty), gt = Object.hasOwn || function(i, t) {
  return pl(fl(i), t);
}, dl = j, ml = 0, yl = Math.random(), vl = dl(1 .toString), Wo = function(i) {
  return "Symbol(" + (i === void 0 ? "" : i) + ")_" + vl(++ml + yl, 36);
}, xl = _, bl = En, Ea = gt, wl = Wo, Sl = Fo, Tl = Ho, Jt = xl.Symbol, ii = bl("wks"), Ol = Tl ? Jt.for || Jt : Jt && Jt.withoutSetter || wl, X = function(i) {
  return Ea(ii, i) || (ii[i] = Sl && Ea(Jt, i) ? Jt[i] : Ol("Symbol." + i)), ii[i];
}, Al = W, Ca = ct, Pa = Xo, El = oe, Cl = sl, Pl = X, Nl = TypeError, Ml = Pl("toPrimitive"), Rl = function(i, t) {
  if (!Ca(i) || Pa(i)) return i;
  var e = El(i, Ml), r;
  if (e) {
    if (t === void 0 && (t = "default"), r = Al(e, i, t), !Ca(r) || Pa(r)) return r;
    throw new Nl("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), Cl(i, t);
}, Vl = Rl, kl = Xo, qo = function(i) {
  var t = Vl(i, "string");
  return kl(t) ? t : t + "";
}, Il = _, Na = ct, Yi = Il.document, _l = Na(Yi) && Na(Yi.createElement), Sr = function(i) {
  return _l ? Yi.createElement(i) : {};
}, Ll = ht, Dl = D, jl = Sr, Go = !Ll && !Dl(function() {
  return Object.defineProperty(jl("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Bl = ht, Ul = W, zl = Io, Fl = Sn, Hl = Ee, Xl = qo, Yl = gt, Wl = Go, Ma = Object.getOwnPropertyDescriptor;
Ae.f = Bl ? Ma : function(i, t) {
  if (i = Hl(i), t = Xl(t), Wl) try {
    return Ma(i, t);
  } catch {
  }
  if (Yl(i, t)) return Fl(!Ul(zl.f, i, t), i[t]);
};
var St = {}, ql = ht, Gl = D, Qo = ql && Gl(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Ql = ct, $l = String, Zl = TypeError, K = function(i) {
  if (Ql(i)) return i;
  throw new Zl($l(i) + " is not an object");
}, Jl = ht, Kl = Go, tc = Qo, He = K, Ra = qo, ec = TypeError, ni = Object.defineProperty, rc = Object.getOwnPropertyDescriptor, ai = "enumerable", si = "configurable", oi = "writable";
St.f = Jl ? tc ? function(i, t, e) {
  if (He(i), t = Ra(t), He(e), typeof i == "function" && t === "prototype" && "value" in e && oi in e && !e[oi]) {
    var r = rc(i, t);
    r && r[oi] && (i[t] = e.value, e = {
      configurable: si in e ? e[si] : r[si],
      enumerable: ai in e ? e[ai] : r[ai],
      writable: !1
    });
  }
  return ni(i, t, e);
} : ni : function(i, t, e) {
  if (He(i), t = Ra(t), He(e), Kl) try {
    return ni(i, t, e);
  } catch {
  }
  if ("get" in e || "set" in e) throw new ec("Accessors not supported");
  return "value" in e && (i[t] = e.value), i;
};
var ic = ht, nc = St, ac = Sn, Pe = ic ? function(i, t, e) {
  return nc.f(i, t, ac(1, e));
} : function(i, t, e) {
  return i[t] = e, i;
}, $o = { exports: {} }, Wi = ht, sc = gt, Zo = Function.prototype, oc = Wi && Object.getOwnPropertyDescriptor, Cn = sc(Zo, "name"), uc = Cn && (function() {
}).name === "something", hc = Cn && (!Wi || Wi && oc(Zo, "name").configurable), Tr = {
  EXISTS: Cn,
  PROPER: uc,
  CONFIGURABLE: hc
}, lc = j, cc = B, qi = An, gc = lc(Function.toString);
cc(qi.inspectSource) || (qi.inspectSource = function(i) {
  return gc(i);
});
var Pn = qi.inspectSource, fc = _, pc = B, Va = fc.WeakMap, dc = pc(Va) && /native code/.test(String(Va)), mc = En, yc = Wo, ka = mc("keys"), Nn = function(i) {
  return ka[i] || (ka[i] = yc(i));
}, Mn = {}, vc = dc, Jo = _, xc = ct, bc = Pe, ui = gt, hi = An, wc = Nn, Sc = Mn, Ia = "Object already initialized", Gi = Jo.TypeError, Tc = Jo.WeakMap, fr, Se, pr, Oc = function(i) {
  return pr(i) ? Se(i) : fr(i, {});
}, Ac = function(i) {
  return function(t) {
    var e;
    if (!xc(t) || (e = Se(t)).type !== i)
      throw new Gi("Incompatible receiver, " + i + " required");
    return e;
  };
};
if (vc || hi.state) {
  var dt = hi.state || (hi.state = new Tc());
  dt.get = dt.get, dt.has = dt.has, dt.set = dt.set, fr = function(i, t) {
    if (dt.has(i)) throw new Gi(Ia);
    return t.facade = i, dt.set(i, t), t;
  }, Se = function(i) {
    return dt.get(i) || {};
  }, pr = function(i) {
    return dt.has(i);
  };
} else {
  var Wt = wc("state");
  Sc[Wt] = !0, fr = function(i, t) {
    if (ui(i, Wt)) throw new Gi(Ia);
    return t.facade = i, bc(i, Wt, t), t;
  }, Se = function(i) {
    return ui(i, Wt) ? i[Wt] : {};
  }, pr = function(i) {
    return ui(i, Wt);
  };
}
var Or = {
  set: fr,
  get: Se,
  has: pr,
  enforce: Oc,
  getterFor: Ac
}, Rn = j, Ec = D, Cc = B, Xe = gt, Qi = ht, Pc = Tr.CONFIGURABLE, Nc = Pn, Ko = Or, Mc = Ko.enforce, Rc = Ko.get, _a = String, sr = Object.defineProperty, Vc = Rn("".slice), kc = Rn("".replace), Ic = Rn([].join), _c = Qi && !Ec(function() {
  return sr(function() {
  }, "length", { value: 8 }).length !== 8;
}), Lc = String(String).split("String"), Dc = $o.exports = function(i, t, e) {
  Vc(_a(t), 0, 7) === "Symbol(" && (t = "[" + kc(_a(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!Xe(i, "name") || Pc && i.name !== t) && (Qi ? sr(i, "name", { value: t, configurable: !0 }) : i.name = t), _c && e && Xe(e, "arity") && i.length !== e.arity && sr(i, "length", { value: e.arity });
  try {
    e && Xe(e, "constructor") && e.constructor ? Qi && sr(i, "prototype", { writable: !1 }) : i.prototype && (i.prototype = void 0);
  } catch {
  }
  var r = Mc(i);
  return Xe(r, "source") || (r.source = Ic(Lc, typeof t == "string" ? t : "")), i;
};
Function.prototype.toString = Dc(function() {
  return Cc(this) && Rc(this).source || Nc(this);
}, "toString");
var tu = $o.exports, jc = B, Bc = St, Uc = tu, zc = On, Ft = function(i, t, e, r) {
  r || (r = {});
  var n = r.enumerable, a = r.name !== void 0 ? r.name : t;
  if (jc(e) && Uc(e, a, r), r.global)
    n ? i[t] = e : zc(t, e);
  else {
    try {
      r.unsafe ? i[t] && (n = !0) : delete i[t];
    } catch {
    }
    n ? i[t] = e : Bc.f(i, t, {
      value: e,
      enumerable: !1,
      configurable: !r.nonConfigurable,
      writable: !r.nonWritable
    });
  }
  return i;
}, eu = {}, Fc = Math.ceil, Hc = Math.floor, Xc = Math.trunc || function(i) {
  var t = +i;
  return (t > 0 ? Hc : Fc)(t);
}, Yc = Xc, Ar = function(i) {
  var t = +i;
  return t !== t || t === 0 ? 0 : Yc(t);
}, Wc = Ar, qc = Math.max, Gc = Math.min, Qc = function(i, t) {
  var e = Wc(i);
  return e < 0 ? qc(e + t, 0) : Gc(e, t);
}, $c = Ar, Zc = Math.min, ue = function(i) {
  var t = $c(i);
  return t > 0 ? Zc(t, 9007199254740991) : 0;
}, Jc = ue, Vn = function(i) {
  return Jc(i.length);
}, Kc = Ee, tg = Qc, eg = Vn, La = function(i) {
  return function(t, e, r) {
    var n = Kc(t), a = eg(n);
    if (a === 0) return !i && -1;
    var o = tg(r, a), s;
    if (i && e !== e) {
      for (; a > o; )
        if (s = n[o++], s !== s) return !0;
    } else for (; a > o; o++)
      if ((i || o in n) && n[o] === e) return i || o || 0;
    return !i && -1;
  };
}, ru = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: La(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: La(!1)
}, rg = j, li = gt, ig = Ee, ng = ru.indexOf, ag = Mn, Da = rg([].push), iu = function(i, t) {
  var e = ig(i), r = 0, n = [], a;
  for (a in e) !li(ag, a) && li(e, a) && Da(n, a);
  for (; t.length > r; ) li(e, a = t[r++]) && (~ng(n, a) || Da(n, a));
  return n;
}, kn = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], sg = iu, og = kn, ug = og.concat("length", "prototype");
eu.f = Object.getOwnPropertyNames || function(i) {
  return sg(i, ug);
};
var nu = {};
nu.f = Object.getOwnPropertySymbols;
var hg = zt, lg = j, cg = eu, gg = nu, fg = K, pg = lg([].concat), dg = hg("Reflect", "ownKeys") || function(i) {
  var t = cg.f(fg(i)), e = gg.f;
  return e ? pg(t, e(i)) : t;
}, ja = gt, mg = dg, yg = Ae, vg = St, xg = function(i, t, e) {
  for (var r = mg(t), n = vg.f, a = yg.f, o = 0; o < r.length; o++) {
    var s = r[o];
    !ja(i, s) && !(e && ja(e, s)) && n(i, s, a(t, s));
  }
}, bg = D, wg = B, Sg = /#|\.prototype\./, Ne = function(i, t) {
  var e = Og[Tg(i)];
  return e === Eg ? !0 : e === Ag ? !1 : wg(t) ? bg(t) : !!t;
}, Tg = Ne.normalize = function(i) {
  return String(i).replace(Sg, ".").toLowerCase();
}, Og = Ne.data = {}, Ag = Ne.NATIVE = "N", Eg = Ne.POLYFILL = "P", au = Ne, Ye = _, Cg = Ae.f, Pg = Pe, Ng = Ft, Mg = On, Rg = xg, Vg = au, tt = function(i, t) {
  var e = i.target, r = i.global, n = i.stat, a, o, s, u, h, l;
  if (r ? o = Ye : n ? o = Ye[e] || Mg(e, {}) : o = Ye[e] && Ye[e].prototype, o) for (s in t) {
    if (h = t[s], i.dontCallGetSet ? (l = Cg(o, s), u = l && l.value) : u = o[s], a = Vg(r ? s : e + (n ? "." : "#") + s, i.forced), !a && u !== void 0) {
      if (typeof h == typeof u) continue;
      Rg(h, u);
    }
    (i.sham || u && u.sham) && Pg(h, "sham", !0), Ng(o, s, h, i);
  }
}, ge = _, kg = Ce, Ig = Bt, We = function(i) {
  return kg.slice(0, i.length) === i;
}, su = function() {
  return We("Bun/") ? "BUN" : We("Cloudflare-Workers") ? "CLOUDFLARE" : We("Deno/") ? "DENO" : We("Node.js/") ? "NODE" : ge.Bun && typeof Bun.version == "string" ? "BUN" : ge.Deno && typeof Deno.version == "object" ? "DENO" : Ig(ge.process) === "process" ? "NODE" : ge.window && ge.document ? "BROWSER" : "REST";
}(), _g = su, Er = _g === "NODE", Lg = j, Dg = wt, jg = function(i, t, e) {
  try {
    return Lg(Dg(Object.getOwnPropertyDescriptor(i, t)[e]));
  } catch {
  }
}, Bg = ct, Ug = function(i) {
  return Bg(i) || i === null;
}, zg = Ug, Fg = String, Hg = TypeError, Xg = function(i) {
  if (zg(i)) return i;
  throw new Hg("Can't set " + Fg(i) + " as a prototype");
}, Yg = jg, Wg = ct, qg = lt, Gg = Xg, ou = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var i = !1, t = {}, e;
  try {
    e = Yg(Object.prototype, "__proto__", "set"), e(t, []), i = t instanceof Array;
  } catch {
  }
  return function(r, n) {
    return qg(r), Gg(n), Wg(r) && (i ? e(r, n) : r.__proto__ = n), r;
  };
}() : void 0), Qg = St.f, $g = gt, Zg = X, Ba = Zg("toStringTag"), Cr = function(i, t, e) {
  i && !e && (i = i.prototype), i && !$g(i, Ba) && Qg(i, Ba, { configurable: !0, value: t });
}, Ua = tu, Jg = St, Kg = function(i, t, e) {
  return e.get && Ua(e.get, t, { getter: !0 }), e.set && Ua(e.set, t, { setter: !0 }), Jg.f(i, t, e);
}, tf = zt, ef = Kg, rf = X, nf = ht, za = rf("species"), af = function(i) {
  var t = tf(i);
  nf && t && !t[za] && ef(t, za, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, sf = xr, of = TypeError, uf = function(i, t) {
  if (sf(t, i)) return i;
  throw new of("Incorrect invocation");
}, hf = X, lf = hf("toStringTag"), uu = {};
uu[lf] = "z";
var cf = String(uu) === "[object z]", gf = cf, ff = B, or = Bt, pf = X, df = pf("toStringTag"), mf = Object, yf = or(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", vf = function(i, t) {
  try {
    return i[t];
  } catch {
  }
}, In = gf ? or : function(i) {
  var t, e, r;
  return i === void 0 ? "Undefined" : i === null ? "Null" : typeof (e = vf(t = mf(i), df)) == "string" ? e : yf ? or(t) : (r = or(t)) === "Object" && ff(t.callee) ? "Arguments" : r;
}, xf = j, bf = D, hu = B, wf = In, Sf = zt, Tf = Pn, lu = function() {
}, cu = Sf("Reflect", "construct"), _n = /^\s*(?:class|function)\b/, Of = xf(_n.exec), Af = !_n.test(lu), fe = function(i) {
  if (!hu(i)) return !1;
  try {
    return cu(lu, [], i), !0;
  } catch {
    return !1;
  }
}, gu = function(i) {
  if (!hu(i)) return !1;
  switch (wf(i)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Af || !!Of(_n, Tf(i));
  } catch {
    return !0;
  }
};
gu.sham = !0;
var Ef = !cu || bf(function() {
  var i;
  return fe(fe.call) || !fe(Object) || !fe(function() {
    i = !0;
  }) || i;
}) ? gu : fe, Cf = Ef, Pf = br, Nf = TypeError, Mf = function(i) {
  if (Cf(i)) return i;
  throw new Nf(Pf(i) + " is not a constructor");
}, Fa = K, Rf = Mf, Vf = Ut, kf = X, If = kf("species"), fu = function(i, t) {
  var e = Fa(i).constructor, r;
  return e === void 0 || Vf(r = Fa(e)[If]) ? t : Rf(r);
}, _f = vr, pu = Function.prototype, Ha = pu.apply, Xa = pu.call, du = typeof Reflect == "object" && Reflect.apply || (_f ? Xa.bind(Ha) : function() {
  return Xa.apply(Ha, arguments);
}), Lf = Bt, Df = j, Pr = function(i) {
  if (Lf(i) === "Function") return Df(i);
}, Ya = Pr, jf = wt, Bf = vr, Uf = Ya(Ya.bind), Ln = function(i, t) {
  return jf(i), t === void 0 ? i : Bf ? Uf(i, t) : function() {
    return i.apply(t, arguments);
  };
}, zf = zt, mu = zf("document", "documentElement"), Ff = j, Hf = Ff([].slice), Xf = TypeError, Yf = function(i, t) {
  if (i < t) throw new Xf("Not enough arguments");
  return i;
}, Wf = Ce, yu = /(?:ipad|iphone|ipod).*applewebkit/i.test(Wf), it = _, qf = du, Gf = Ln, Wa = B, Qf = gt, vu = D, qa = mu, $f = Hf, Ga = Sr, Zf = Yf, Jf = yu, Kf = Er, $i = it.setImmediate, Zi = it.clearImmediate, tp = it.process, ci = it.Dispatch, ep = it.Function, Qa = it.MessageChannel, rp = it.String, gi = 0, be = {}, $a = "onreadystatechange", Te, Vt, fi, pi;
vu(function() {
  Te = it.location;
});
var Dn = function(i) {
  if (Qf(be, i)) {
    var t = be[i];
    delete be[i], t();
  }
}, di = function(i) {
  return function() {
    Dn(i);
  };
}, Za = function(i) {
  Dn(i.data);
}, Ja = function(i) {
  it.postMessage(rp(i), Te.protocol + "//" + Te.host);
};
(!$i || !Zi) && ($i = function(i) {
  Zf(arguments.length, 1);
  var t = Wa(i) ? i : ep(i), e = $f(arguments, 1);
  return be[++gi] = function() {
    qf(t, void 0, e);
  }, Vt(gi), gi;
}, Zi = function(i) {
  delete be[i];
}, Kf ? Vt = function(i) {
  tp.nextTick(di(i));
} : ci && ci.now ? Vt = function(i) {
  ci.now(di(i));
} : Qa && !Jf ? (fi = new Qa(), pi = fi.port2, fi.port1.onmessage = Za, Vt = Gf(pi.postMessage, pi)) : it.addEventListener && Wa(it.postMessage) && !it.importScripts && Te && Te.protocol !== "file:" && !vu(Ja) ? (Vt = Ja, it.addEventListener("message", Za, !1)) : $a in Ga("script") ? Vt = function(i) {
  qa.appendChild(Ga("script"))[$a] = function() {
    qa.removeChild(this), Dn(i);
  };
} : Vt = function(i) {
  setTimeout(di(i), 0);
});
var xu = {
  set: $i,
  clear: Zi
}, Ka = _, ip = ht, np = Object.getOwnPropertyDescriptor, ap = function(i) {
  if (!ip) return Ka[i];
  var t = np(Ka, i);
  return t && t.value;
}, bu = function() {
  this.head = null, this.tail = null;
};
bu.prototype = {
  add: function(i) {
    var t = { item: i, next: null }, e = this.tail;
    e ? e.next = t : this.head = t, this.tail = t;
  },
  get: function() {
    var i = this.head;
    if (i) {
      var t = this.head = i.next;
      return t === null && (this.tail = null), i.item;
    }
  }
};
var wu = bu, sp = Ce, op = /ipad|iphone|ipod/i.test(sp) && typeof Pebble < "u", up = Ce, hp = /web0s(?!.*chrome)/i.test(up), ne = _, lp = ap, ts = Ln, mi = xu.set, cp = wu, gp = yu, fp = op, pp = hp, yi = Er, es = ne.MutationObserver || ne.WebKitMutationObserver, rs = ne.document, is = ne.process, qe = ne.Promise, Ji = lp("queueMicrotask"), qt, vi, xi, Ge, ns;
if (!Ji) {
  var Qe = new cp(), $e = function() {
    var i, t;
    for (yi && (i = is.domain) && i.exit(); t = Qe.get(); ) try {
      t();
    } catch (e) {
      throw Qe.head && qt(), e;
    }
    i && i.enter();
  };
  !gp && !yi && !pp && es && rs ? (vi = !0, xi = rs.createTextNode(""), new es($e).observe(xi, { characterData: !0 }), qt = function() {
    xi.data = vi = !vi;
  }) : !fp && qe && qe.resolve ? (Ge = qe.resolve(void 0), Ge.constructor = qe, ns = ts(Ge.then, Ge), qt = function() {
    ns($e);
  }) : yi ? qt = function() {
    is.nextTick($e);
  } : (mi = ts(mi, ne), qt = function() {
    mi($e);
  }), Ji = function(i) {
    Qe.head || qt(), Qe.add(i);
  };
}
var dp = Ji, mp = function(i, t) {
  try {
    arguments.length === 1 ? console.error(i) : console.error(i, t);
  } catch {
  }
}, jn = function(i) {
  try {
    return { error: !1, value: i() };
  } catch (t) {
    return { error: !0, value: t };
  }
}, yp = _, Nr = yp.Promise, vp = _, we = Nr, xp = B, bp = au, wp = Pn, Sp = X, as = su, bi = Tn;
we && we.prototype;
var Tp = Sp("species"), Ki = !1, Su = xp(vp.PromiseRejectionEvent), Op = bp("Promise", function() {
  var i = wp(we), t = i !== String(we);
  if (!t && bi === 66) return !0;
  if (!bi || bi < 51 || !/native code/.test(i)) {
    var e = new we(function(a) {
      a(1);
    }), r = function(a) {
      a(function() {
      }, function() {
      });
    }, n = e.constructor = {};
    if (n[Tp] = r, Ki = e.then(function() {
    }) instanceof r, !Ki) return !0;
  }
  return !t && (as === "BROWSER" || as === "DENO") && !Su;
}), Me = {
  CONSTRUCTOR: Op,
  REJECTION_EVENT: Su,
  SUBCLASSING: Ki
}, he = {}, ss = wt, Ap = TypeError, Ep = function(i) {
  var t, e;
  this.promise = new i(function(r, n) {
    if (t !== void 0 || e !== void 0) throw new Ap("Bad Promise constructor");
    t = r, e = n;
  }), this.resolve = ss(t), this.reject = ss(e);
};
he.f = function(i) {
  return new Ep(i);
};
var Cp = tt, dr = Er, Et = _, ae = W, os = Ft, us = ou, Pp = Cr, Np = af, Mp = wt, ur = B, Rp = ct, Vp = uf, kp = fu, Tu = xu.set, Bn = dp, Ip = mp, _p = jn, Lp = wu, Ou = Or, mr = Nr, Un = Me, Au = he, Mr = "Promise", Eu = Un.CONSTRUCTOR, Dp = Un.REJECTION_EVENT, jp = Un.SUBCLASSING, wi = Ou.getterFor(Mr), Bp = Ou.set, $t = mr && mr.prototype, Lt = mr, Ze = $t, Cu = Et.TypeError, tn = Et.document, zn = Et.process, en = Au.f, Up = en, zp = !!(tn && tn.createEvent && Et.dispatchEvent), Pu = "unhandledrejection", Fp = "rejectionhandled", hs = 0, Nu = 1, Hp = 2, Fn = 1, Mu = 2, Je, ls, Xp, cs, Ru = function(i) {
  var t;
  return Rp(i) && ur(t = i.then) ? t : !1;
}, Vu = function(i, t) {
  var e = t.value, r = t.state === Nu, n = r ? i.ok : i.fail, a = i.resolve, o = i.reject, s = i.domain, u, h, l;
  try {
    n ? (r || (t.rejection === Mu && Wp(t), t.rejection = Fn), n === !0 ? u = e : (s && s.enter(), u = n(e), s && (s.exit(), l = !0)), u === i.promise ? o(new Cu("Promise-chain cycle")) : (h = Ru(u)) ? ae(h, u, a, o) : a(u)) : o(e);
  } catch (g) {
    s && !l && s.exit(), o(g);
  }
}, ku = function(i, t) {
  i.notified || (i.notified = !0, Bn(function() {
    for (var e = i.reactions, r; r = e.get(); )
      Vu(r, i);
    i.notified = !1, t && !i.rejection && Yp(i);
  }));
}, Iu = function(i, t, e) {
  var r, n;
  zp ? (r = tn.createEvent("Event"), r.promise = t, r.reason = e, r.initEvent(i, !1, !0), Et.dispatchEvent(r)) : r = { promise: t, reason: e }, !Dp && (n = Et["on" + i]) ? n(r) : i === Pu && Ip("Unhandled promise rejection", e);
}, Yp = function(i) {
  ae(Tu, Et, function() {
    var t = i.facade, e = i.value, r = gs(i), n;
    if (r && (n = _p(function() {
      dr ? zn.emit("unhandledRejection", e, t) : Iu(Pu, t, e);
    }), i.rejection = dr || gs(i) ? Mu : Fn, n.error))
      throw n.value;
  });
}, gs = function(i) {
  return i.rejection !== Fn && !i.parent;
}, Wp = function(i) {
  ae(Tu, Et, function() {
    var t = i.facade;
    dr ? zn.emit("rejectionHandled", t) : Iu(Fp, t, i.value);
  });
}, Kt = function(i, t, e) {
  return function(r) {
    i(t, r, e);
  };
}, ee = function(i, t, e) {
  i.done || (i.done = !0, e && (i = e), i.value = t, i.state = Hp, ku(i, !0));
}, rn = function(i, t, e) {
  if (!i.done) {
    i.done = !0, e && (i = e);
    try {
      if (i.facade === t) throw new Cu("Promise can't be resolved itself");
      var r = Ru(t);
      r ? Bn(function() {
        var n = { done: !1 };
        try {
          ae(
            r,
            t,
            Kt(rn, n, i),
            Kt(ee, n, i)
          );
        } catch (a) {
          ee(n, a, i);
        }
      }) : (i.value = t, i.state = Nu, ku(i, !1));
    } catch (n) {
      ee({ done: !1 }, n, i);
    }
  }
};
if (Eu && (Lt = function(i) {
  Vp(this, Ze), Mp(i), ae(Je, this);
  var t = wi(this);
  try {
    i(Kt(rn, t), Kt(ee, t));
  } catch (e) {
    ee(t, e);
  }
}, Ze = Lt.prototype, Je = function(i) {
  Bp(this, {
    type: Mr,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new Lp(),
    rejection: !1,
    state: hs,
    value: null
  });
}, Je.prototype = os(Ze, "then", function(i, t) {
  var e = wi(this), r = en(kp(this, Lt));
  return e.parent = !0, r.ok = ur(i) ? i : !0, r.fail = ur(t) && t, r.domain = dr ? zn.domain : void 0, e.state === hs ? e.reactions.add(r) : Bn(function() {
    Vu(r, e);
  }), r.promise;
}), ls = function() {
  var i = new Je(), t = wi(i);
  this.promise = i, this.resolve = Kt(rn, t), this.reject = Kt(ee, t);
}, Au.f = en = function(i) {
  return i === Lt || i === Xp ? new ls(i) : Up(i);
}, ur(mr) && $t !== Object.prototype)) {
  cs = $t.then, jp || os($t, "then", function(i, t) {
    var e = this;
    return new Lt(function(r, n) {
      ae(cs, e, r, n);
    }).then(i, t);
  }, { unsafe: !0 });
  try {
    delete $t.constructor;
  } catch {
  }
  us && us($t, Ze);
}
Cp({ global: !0, constructor: !0, wrap: !0, forced: Eu }, {
  Promise: Lt
});
Pp(Lt, Mr, !1);
Np(Mr);
var Re = {}, qp = X, Gp = Re, Qp = qp("iterator"), $p = Array.prototype, Zp = function(i) {
  return i !== void 0 && (Gp.Array === i || $p[Qp] === i);
}, Jp = In, fs = oe, Kp = Ut, td = Re, ed = X, rd = ed("iterator"), _u = function(i) {
  if (!Kp(i)) return fs(i, rd) || fs(i, "@@iterator") || td[Jp(i)];
}, id = W, nd = wt, ad = K, sd = br, od = _u, ud = TypeError, hd = function(i, t) {
  var e = arguments.length < 2 ? od(i) : t;
  if (nd(e)) return ad(id(e, i));
  throw new ud(sd(i) + " is not iterable");
}, ld = W, ps = K, cd = oe, gd = function(i, t, e) {
  var r, n;
  ps(i);
  try {
    if (r = cd(i, "return"), !r) {
      if (t === "throw") throw e;
      return e;
    }
    r = ld(r, i);
  } catch (a) {
    n = !0, r = a;
  }
  if (t === "throw") throw e;
  if (n) throw r;
  return ps(r), e;
}, fd = Ln, pd = W, dd = K, md = br, yd = Zp, vd = Vn, ds = xr, xd = hd, bd = _u, ms = gd, wd = TypeError, hr = function(i, t) {
  this.stopped = i, this.result = t;
}, ys = hr.prototype, Lu = function(i, t, e) {
  var r = e && e.that, n = !!(e && e.AS_ENTRIES), a = !!(e && e.IS_RECORD), o = !!(e && e.IS_ITERATOR), s = !!(e && e.INTERRUPTED), u = fd(t, r), h, l, g, f, c, d, p, m = function(b) {
    return h && ms(h, "normal", b), new hr(!0, b);
  }, y = function(b) {
    return n ? (dd(b), s ? u(b[0], b[1], m) : u(b[0], b[1])) : s ? u(b, m) : u(b);
  };
  if (a)
    h = i.iterator;
  else if (o)
    h = i;
  else {
    if (l = bd(i), !l) throw new wd(md(i) + " is not iterable");
    if (yd(l)) {
      for (g = 0, f = vd(i); f > g; g++)
        if (c = y(i[g]), c && ds(ys, c)) return c;
      return new hr(!1);
    }
    h = xd(i, l);
  }
  for (d = a ? i.next : h.next; !(p = pd(d, h)).done; ) {
    try {
      c = y(p.value);
    } catch (b) {
      ms(h, "throw", b);
    }
    if (typeof c == "object" && c && ds(ys, c)) return c;
  }
  return new hr(!1);
}, Sd = X, Du = Sd("iterator"), ju = !1;
try {
  var Td = 0, vs = {
    next: function() {
      return { done: !!Td++ };
    },
    return: function() {
      ju = !0;
    }
  };
  vs[Du] = function() {
    return this;
  }, Array.from(vs, function() {
    throw 2;
  });
} catch {
}
var Od = function(i, t) {
  try {
    if (!t && !ju) return !1;
  } catch {
    return !1;
  }
  var e = !1;
  try {
    var r = {};
    r[Du] = function() {
      return {
        next: function() {
          return { done: e = !0 };
        }
      };
    }, i(r);
  } catch {
  }
  return e;
}, Ad = Nr, Ed = Od, Cd = Me.CONSTRUCTOR, Bu = Cd || !Ed(function(i) {
  Ad.all(i).then(void 0, function() {
  });
}), Pd = tt, Nd = W, Md = wt, Rd = he, Vd = jn, kd = Lu, Id = Bu;
Pd({ target: "Promise", stat: !0, forced: Id }, {
  all: function(i) {
    var t = this, e = Rd.f(t), r = e.resolve, n = e.reject, a = Vd(function() {
      var o = Md(t.resolve), s = [], u = 0, h = 1;
      kd(i, function(l) {
        var g = u++, f = !1;
        h++, Nd(o, t, l).then(function(c) {
          f || (f = !0, s[g] = c, --h || r(s));
        }, n);
      }), --h || r(s);
    });
    return a.error && n(a.value), e.promise;
  }
});
var _d = tt, Ld = Me.CONSTRUCTOR, nn = Nr, Dd = zt, jd = B, Bd = Ft, xs = nn && nn.prototype;
_d({ target: "Promise", proto: !0, forced: Ld, real: !0 }, {
  catch: function(i) {
    return this.then(void 0, i);
  }
});
if (jd(nn)) {
  var bs = Dd("Promise").prototype.catch;
  xs.catch !== bs && Bd(xs, "catch", bs, { unsafe: !0 });
}
var Ud = tt, zd = W, Fd = wt, Hd = he, Xd = jn, Yd = Lu, Wd = Bu;
Ud({ target: "Promise", stat: !0, forced: Wd }, {
  race: function(i) {
    var t = this, e = Hd.f(t), r = e.reject, n = Xd(function() {
      var a = Fd(t.resolve);
      Yd(i, function(o) {
        zd(a, t, o).then(e.resolve, r);
      });
    });
    return n.error && r(n.value), e.promise;
  }
});
var qd = tt, Gd = he, Qd = Me.CONSTRUCTOR;
qd({ target: "Promise", stat: !0, forced: Qd }, {
  reject: function(i) {
    var t = Gd.f(this), e = t.reject;
    return e(i), t.promise;
  }
});
var $d = K, Zd = ct, Jd = he, Kd = function(i, t) {
  if ($d(i), Zd(t) && t.constructor === i) return t;
  var e = Jd.f(i), r = e.resolve;
  return r(t), e.promise;
}, tm = tt, em = zt, rm = Me.CONSTRUCTOR, im = Kd;
em("Promise");
tm({ target: "Promise", stat: !0, forced: rm }, {
  resolve: function(i) {
    return im(this, i);
  }
});
var nm = In, am = String, mt = function(i) {
  if (nm(i) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return am(i);
}, sm = K, Uu = function() {
  var i = sm(this), t = "";
  return i.hasIndices && (t += "d"), i.global && (t += "g"), i.ignoreCase && (t += "i"), i.multiline && (t += "m"), i.dotAll && (t += "s"), i.unicode && (t += "u"), i.unicodeSets && (t += "v"), i.sticky && (t += "y"), t;
}, Hn = D, om = _, Xn = om.RegExp, Yn = Hn(function() {
  var i = Xn("a", "y");
  return i.lastIndex = 2, i.exec("abcd") !== null;
}), um = Yn || Hn(function() {
  return !Xn("a", "y").sticky;
}), hm = Yn || Hn(function() {
  var i = Xn("^r", "gy");
  return i.lastIndex = 2, i.exec("str") !== null;
}), zu = {
  BROKEN_CARET: hm,
  MISSED_STICKY: um,
  UNSUPPORTED_Y: Yn
}, Fu = {}, lm = iu, cm = kn, gm = Object.keys || function(i) {
  return lm(i, cm);
}, fm = ht, pm = Qo, dm = St, mm = K, ym = Ee, vm = gm;
Fu.f = fm && !pm ? Object.defineProperties : function(i, t) {
  mm(i);
  for (var e = ym(t), r = vm(t), n = r.length, a = 0, o; n > a; ) dm.f(i, o = r[a++], e[o]);
  return i;
};
var xm = K, bm = Fu, ws = kn, wm = Mn, Sm = mu, Tm = Sr, Om = Nn, Ss = ">", Ts = "<", an = "prototype", sn = "script", Hu = Om("IE_PROTO"), Si = function() {
}, Xu = function(i) {
  return Ts + sn + Ss + i + Ts + "/" + sn + Ss;
}, Os = function(i) {
  i.write(Xu("")), i.close();
  var t = i.parentWindow.Object;
  return i = null, t;
}, Am = function() {
  var i = Tm("iframe"), t = "java" + sn + ":", e;
  return i.style.display = "none", Sm.appendChild(i), i.src = String(t), e = i.contentWindow.document, e.open(), e.write(Xu("document.F=Object")), e.close(), e.F;
}, Ke, lr = function() {
  try {
    Ke = new ActiveXObject("htmlfile");
  } catch {
  }
  lr = typeof document < "u" ? document.domain && Ke ? Os(Ke) : Am() : Os(Ke);
  for (var i = ws.length; i--; ) delete lr[an][ws[i]];
  return lr();
};
wm[Hu] = !0;
var Wn = Object.create || function(i, t) {
  var e;
  return i !== null ? (Si[an] = xm(i), e = new Si(), Si[an] = null, e[Hu] = i) : e = lr(), t === void 0 ? e : bm.f(e, t);
}, Em = D, Cm = _, Pm = Cm.RegExp, Nm = Em(function() {
  var i = Pm(".", "s");
  return !(i.dotAll && i.test(`
`) && i.flags === "s");
}), Mm = D, Rm = _, Vm = Rm.RegExp, km = Mm(function() {
  var i = Vm("(?<a>b)", "g");
  return i.exec("b").groups.a !== "b" || "b".replace(i, "$<a>c") !== "bc";
}), te = W, Rr = j, Im = mt, _m = Uu, Lm = zu, Dm = En, jm = Wn, Bm = Or.get, Um = Nm, zm = km, Fm = Dm("native-string-replace", String.prototype.replace), yr = RegExp.prototype.exec, on = yr, Hm = Rr("".charAt), Xm = Rr("".indexOf), Ym = Rr("".replace), Ti = Rr("".slice), un = function() {
  var i = /a/, t = /b*/g;
  return te(yr, i, "a"), te(yr, t, "a"), i.lastIndex !== 0 || t.lastIndex !== 0;
}(), Yu = Lm.BROKEN_CARET, hn = /()??/.exec("")[1] !== void 0, Wm = un || hn || Yu || Um || zm;
Wm && (on = function(i) {
  var t = this, e = Bm(t), r = Im(i), n = e.raw, a, o, s, u, h, l, g;
  if (n)
    return n.lastIndex = t.lastIndex, a = te(on, n, r), t.lastIndex = n.lastIndex, a;
  var f = e.groups, c = Yu && t.sticky, d = te(_m, t), p = t.source, m = 0, y = r;
  if (c && (d = Ym(d, "y", ""), Xm(d, "g") === -1 && (d += "g"), y = Ti(r, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && Hm(r, t.lastIndex - 1) !== `
`) && (p = "(?: " + p + ")", y = " " + y, m++), o = new RegExp("^(?:" + p + ")", d)), hn && (o = new RegExp("^" + p + "$(?!\\s)", d)), un && (s = t.lastIndex), u = te(yr, c ? o : t, y), c ? u ? (u.input = Ti(u.input, m), u[0] = Ti(u[0], m), u.index = t.lastIndex, t.lastIndex += u[0].length) : t.lastIndex = 0 : un && u && (t.lastIndex = t.global ? u.index + u[0].length : s), hn && u && u.length > 1 && te(Fm, u[0], o, function() {
    for (h = 1; h < arguments.length - 2; h++)
      arguments[h] === void 0 && (u[h] = void 0);
  }), u && f)
    for (u.groups = l = jm(null), h = 0; h < f.length; h++)
      g = f[h], l[g[0]] = u[g[1]];
  return u;
});
var qn = on, qm = tt, As = qn;
qm({ target: "RegExp", proto: !0, forced: /./.exec !== As }, {
  exec: As
});
var Es = W, Cs = Ft, Gm = qn, Ps = D, Wu = X, Qm = Pe, $m = Wu("species"), Oi = RegExp.prototype, Gn = function(i, t, e, r) {
  var n = Wu(i), a = !Ps(function() {
    var h = {};
    return h[n] = function() {
      return 7;
    }, ""[i](h) !== 7;
  }), o = a && !Ps(function() {
    var h = !1, l = /a/;
    return i === "split" && (l = {}, l.constructor = {}, l.constructor[$m] = function() {
      return l;
    }, l.flags = "", l[n] = /./[n]), l.exec = function() {
      return h = !0, null;
    }, l[n](""), !h;
  });
  if (!a || !o || e) {
    var s = /./[n], u = t(n, ""[i], function(h, l, g, f, c) {
      var d = l.exec;
      return d === Gm || d === Oi.exec ? a && !c ? { done: !0, value: Es(s, l, g, f) } : { done: !0, value: Es(h, g, l, f) } : { done: !1 };
    });
    Cs(String.prototype, i, u[0]), Cs(Oi, n, u[1]);
  }
  r && Qm(Oi[n], "sham", !0);
}, Qn = j, Zm = Ar, Jm = mt, Km = lt, t0 = Qn("".charAt), Ns = Qn("".charCodeAt), e0 = Qn("".slice), Ms = function(i) {
  return function(t, e) {
    var r = Jm(Km(t)), n = Zm(e), a = r.length, o, s;
    return n < 0 || n >= a ? i ? "" : void 0 : (o = Ns(r, n), o < 55296 || o > 56319 || n + 1 === a || (s = Ns(r, n + 1)) < 56320 || s > 57343 ? i ? t0(r, n) : o : i ? e0(r, n, n + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, r0 = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Ms(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Ms(!0)
}, i0 = r0.charAt, $n = function(i, t, e) {
  return t + (e ? i0(i, t).length : 1);
}, Rs = W, n0 = K, a0 = B, s0 = Bt, o0 = qn, u0 = TypeError, Zn = function(i, t) {
  var e = i.exec;
  if (a0(e)) {
    var r = Rs(e, i, t);
    return r !== null && n0(r), r;
  }
  if (s0(i) === "RegExp") return Rs(o0, i, t);
  throw new u0("RegExp#exec called on incompatible receiver");
}, h0 = W, l0 = Gn, c0 = K, g0 = Ut, f0 = ue, Ai = mt, p0 = lt, d0 = oe, m0 = $n, Vs = Zn;
l0("match", function(i, t, e) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function(r) {
      var n = p0(this), a = g0(r) ? void 0 : d0(r, i);
      return a ? h0(a, r, n) : new RegExp(r)[i](Ai(n));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(r) {
      var n = c0(this), a = Ai(r), o = e(t, n, a);
      if (o.done) return o.value;
      if (!n.global) return Vs(n, a);
      var s = n.unicode;
      n.lastIndex = 0;
      for (var u = [], h = 0, l; (l = Vs(n, a)) !== null; ) {
        var g = Ai(l[0]);
        u[h] = g, g === "" && (n.lastIndex = m0(a, f0(n.lastIndex), s)), h++;
      }
      return h === 0 ? null : u;
    }
  ];
});
var Jn = j, y0 = wr, v0 = Math.floor, Ei = Jn("".charAt), x0 = Jn("".replace), Ci = Jn("".slice), b0 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, w0 = /\$([$&'`]|\d{1,2})/g, S0 = function(i, t, e, r, n, a) {
  var o = e + i.length, s = r.length, u = w0;
  return n !== void 0 && (n = y0(n), u = b0), x0(a, u, function(h, l) {
    var g;
    switch (Ei(l, 0)) {
      case "$":
        return "$";
      case "&":
        return i;
      case "`":
        return Ci(t, 0, e);
      case "'":
        return Ci(t, o);
      case "<":
        g = n[Ci(l, 1, -1)];
        break;
      default:
        var f = +l;
        if (f === 0) return h;
        if (f > s) {
          var c = v0(f / 10);
          return c === 0 ? h : c <= s ? r[c - 1] === void 0 ? Ei(l, 1) : r[c - 1] + Ei(l, 1) : h;
        }
        g = r[f - 1];
    }
    return g === void 0 ? "" : g;
  });
}, T0 = du, ks = W, Vr = j, O0 = Gn, A0 = D, E0 = K, C0 = B, P0 = Ut, N0 = Ar, M0 = ue, Gt = mt, R0 = lt, V0 = $n, k0 = oe, I0 = S0, _0 = Zn, L0 = X, ln = L0("replace"), D0 = Math.max, j0 = Math.min, B0 = Vr([].concat), Pi = Vr([].push), Is = Vr("".indexOf), _s = Vr("".slice), U0 = function(i) {
  return i === void 0 ? i : String(i);
}, z0 = function() {
  return "a".replace(/./, "$0") === "$0";
}(), Ls = function() {
  return /./[ln] ? /./[ln]("a", "$0") === "" : !1;
}(), F0 = !A0(function() {
  var i = /./;
  return i.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(i, "$<a>") !== "7";
});
O0("replace", function(i, t, e) {
  var r = Ls ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(n, a) {
      var o = R0(this), s = P0(n) ? void 0 : k0(n, ln);
      return s ? ks(s, n, o, a) : ks(t, Gt(o), n, a);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(n, a) {
      var o = E0(this), s = Gt(n);
      if (typeof a == "string" && Is(a, r) === -1 && Is(a, "$<") === -1) {
        var u = e(t, o, s, a);
        if (u.done) return u.value;
      }
      var h = C0(a);
      h || (a = Gt(a));
      var l = o.global, g;
      l && (g = o.unicode, o.lastIndex = 0);
      for (var f = [], c; c = _0(o, s), !(c === null || (Pi(f, c), !l)); ) {
        var d = Gt(c[0]);
        d === "" && (o.lastIndex = V0(s, M0(o.lastIndex), g));
      }
      for (var p = "", m = 0, y = 0; y < f.length; y++) {
        c = f[y];
        for (var b = Gt(c[0]), x = D0(j0(N0(c.index), s.length), 0), w = [], A, O = 1; O < c.length; O++) Pi(w, U0(c[O]));
        var S = c.groups;
        if (h) {
          var C = B0([b], w, x, s);
          S !== void 0 && Pi(C, S), A = Gt(T0(a, void 0, C));
        } else
          A = I0(b, s, x, w, S, a);
        x >= m && (p += _s(s, m, x) + A, m = x + b.length);
      }
      return p + _s(s, m);
    }
  ];
}, !F0 || !z0 || Ls);
var H0 = ct, X0 = Bt, Y0 = X, W0 = Y0("match"), q0 = function(i) {
  var t;
  return H0(i) && ((t = i[W0]) !== void 0 ? !!t : X0(i) === "RegExp");
}, G0 = q0, Q0 = TypeError, Kn = function(i) {
  if (G0(i))
    throw new Q0("The method doesn't accept regular expressions");
  return i;
}, $0 = X, Z0 = $0("match"), ta = function(i) {
  var t = /./;
  try {
    "/./"[i](t);
  } catch {
    try {
      return t[Z0] = !1, "/./"[i](t);
    } catch {
    }
  }
  return !1;
}, J0 = tt, K0 = Pr, ty = Ae.f, ey = ue, Ds = mt, ry = Kn, iy = lt, ny = ta, ay = K0("".slice), sy = Math.min, qu = ny("startsWith"), oy = !qu && !!function() {
  var i = ty(String.prototype, "startsWith");
  return i && !i.writable;
}();
J0({ target: "String", proto: !0, forced: !oy && !qu }, {
  startsWith: function(i) {
    var t = Ds(iy(this));
    ry(i);
    var e = ey(sy(arguments.length > 1 ? arguments[1] : void 0, t.length)), r = Ds(i);
    return ay(t, e, e + r.length) === r;
  }
});
var uy = X, hy = Wn, ly = St.f, cn = uy("unscopables"), gn = Array.prototype;
gn[cn] === void 0 && ly(gn, cn, {
  configurable: !0,
  value: hy(null)
});
var cy = function(i) {
  gn[cn][i] = !0;
}, gy = D, fy = !gy(function() {
  function i() {
  }
  return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
}), py = gt, dy = B, my = wr, yy = Nn, vy = fy, js = yy("IE_PROTO"), fn = Object, xy = fn.prototype, Gu = vy ? fn.getPrototypeOf : function(i) {
  var t = my(i);
  if (py(t, js)) return t[js];
  var e = t.constructor;
  return dy(e) && t instanceof e ? e.prototype : t instanceof fn ? xy : null;
}, by = D, wy = B, Sy = ct, Bs = Gu, Ty = Ft, Oy = X, pn = Oy("iterator"), Qu = !1, Dt, Ni, Mi;
[].keys && (Mi = [].keys(), "next" in Mi ? (Ni = Bs(Bs(Mi)), Ni !== Object.prototype && (Dt = Ni)) : Qu = !0);
var Ay = !Sy(Dt) || by(function() {
  var i = {};
  return Dt[pn].call(i) !== i;
});
Ay && (Dt = {});
wy(Dt[pn]) || Ty(Dt, pn, function() {
  return this;
});
var $u = {
  IteratorPrototype: Dt,
  BUGGY_SAFARI_ITERATORS: Qu
}, Ey = $u.IteratorPrototype, Cy = Wn, Py = Sn, Ny = Cr, My = Re, Ry = function() {
  return this;
}, Vy = function(i, t, e, r) {
  var n = t + " Iterator";
  return i.prototype = Cy(Ey, { next: Py(+!r, e) }), Ny(i, n, !1), My[n] = Ry, i;
}, ky = tt, Iy = W, Zu = Tr, _y = B, Ly = Vy, Us = Gu, zs = ou, Dy = Cr, jy = Pe, Ri = Ft, By = X, Uy = Re, Ju = $u, zy = Zu.PROPER, Fy = Zu.CONFIGURABLE, Fs = Ju.IteratorPrototype, tr = Ju.BUGGY_SAFARI_ITERATORS, pe = By("iterator"), Hs = "keys", de = "values", Xs = "entries", Hy = function() {
  return this;
}, Xy = function(i, t, e, r, n, a, o) {
  Ly(e, t, r);
  var s = function(y) {
    if (y === n && f) return f;
    if (!tr && y && y in l) return l[y];
    switch (y) {
      case Hs:
        return function() {
          return new e(this, y);
        };
      case de:
        return function() {
          return new e(this, y);
        };
      case Xs:
        return function() {
          return new e(this, y);
        };
    }
    return function() {
      return new e(this);
    };
  }, u = t + " Iterator", h = !1, l = i.prototype, g = l[pe] || l["@@iterator"] || n && l[n], f = !tr && g || s(n), c = t === "Array" && l.entries || g, d, p, m;
  if (c && (d = Us(c.call(new i())), d !== Object.prototype && d.next && (Us(d) !== Fs && (zs ? zs(d, Fs) : _y(d[pe]) || Ri(d, pe, Hy)), Dy(d, u, !0))), zy && n === de && g && g.name !== de && (Fy ? jy(l, "name", de) : (h = !0, f = function() {
    return Iy(g, this);
  })), n)
    if (p = {
      values: s(de),
      keys: a ? f : s(Hs),
      entries: s(Xs)
    }, o) for (m in p)
      (tr || h || !(m in l)) && Ri(l, m, p[m]);
    else ky({ target: t, proto: !0, forced: tr || h }, p);
  return l[pe] !== f && Ri(l, pe, f, { name: n }), Uy[t] = f, p;
}, Yy = function(i, t) {
  return { value: i, done: t };
}, Wy = Ee, ea = cy, Ys = Re, Ku = Or, qy = St.f, Gy = Xy, er = Yy, Qy = ht, th = "Array Iterator", $y = Ku.set, Zy = Ku.getterFor(th), Jy = Gy(Array, "Array", function(i, t) {
  $y(this, {
    type: th,
    target: Wy(i),
    // target
    index: 0,
    // next index
    kind: t
    // kind
  });
}, function() {
  var i = Zy(this), t = i.target, e = i.index++;
  if (!t || e >= t.length)
    return i.target = null, er(void 0, !0);
  switch (i.kind) {
    case "keys":
      return er(e, !1);
    case "values":
      return er(t[e], !1);
  }
  return er([e, t[e]], !1);
}, "values"), Ws = Ys.Arguments = Ys.Array;
ea("keys");
ea("values");
ea("entries");
if (Qy && Ws.name !== "values") try {
  qy(Ws, "name", { value: "values" });
} catch {
}
var Ky = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, tv = Sr, Vi = tv("span").classList, qs = Vi && Vi.constructor && Vi.constructor.prototype, ev = qs === Object.prototype ? void 0 : qs, Gs = _, eh = Ky, rv = ev, ye = Jy, Qs = Pe, iv = Cr, nv = X, ki = nv("iterator"), Ii = ye.values, rh = function(i, t) {
  if (i) {
    if (i[ki] !== Ii) try {
      Qs(i, ki, Ii);
    } catch {
      i[ki] = Ii;
    }
    if (iv(i, t, !0), eh[t]) {
      for (var e in ye)
        if (i[e] !== ye[e]) try {
          Qs(i, e, ye[e]);
        } catch {
          i[e] = ye[e];
        }
    }
  }
};
for (var _i in eh)
  rh(Gs[_i] && Gs[_i].prototype, _i);
rh(rv, "DOMTokenList");
var av = wt, sv = wr, ov = Uo, uv = Vn, $s = TypeError, Zs = "Reduce of empty array with no initial value", Js = function(i) {
  return function(t, e, r, n) {
    var a = sv(t), o = ov(a), s = uv(a);
    if (av(e), s === 0 && r < 2) throw new $s(Zs);
    var u = i ? s - 1 : 0, h = i ? -1 : 1;
    if (r < 2) for (; ; ) {
      if (u in o) {
        n = o[u], u += h;
        break;
      }
      if (u += h, i ? u < 0 : s <= u)
        throw new $s(Zs);
    }
    for (; i ? u >= 0 : s > u; u += h) u in o && (n = e(n, o[u], u, a));
    return n;
  };
}, hv = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Js(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Js(!0)
}, lv = D, ih = function(i, t) {
  var e = [][i];
  return !!e && lv(function() {
    e.call(null, t || function() {
      return 1;
    }, 1);
  });
}, cv = tt, gv = hv.left, fv = ih, Ks = Tn, pv = Er, dv = !pv && Ks > 79 && Ks < 83, mv = dv || !fv("reduce");
cv({ target: "Array", proto: !0, forced: mv }, {
  reduce: function(i) {
    var t = arguments.length;
    return gv(this, i, t, t > 1 ? arguments[1] : void 0);
  }
});
var yv = tt, vv = Pr, xv = Ae.f, bv = ue, to = mt, wv = Kn, Sv = lt, Tv = ta, Ov = vv("".slice), Av = Math.min, nh = Tv("endsWith"), Ev = !nh && !!function() {
  var i = xv(String.prototype, "endsWith");
  return i && !i.writable;
}();
yv({ target: "String", proto: !0, forced: !Ev && !nh }, {
  endsWith: function(i) {
    var t = to(Sv(this));
    wv(i);
    var e = arguments.length > 1 ? arguments[1] : void 0, r = t.length, n = e === void 0 ? r : Av(bv(e), r), a = to(i);
    return Ov(t, n - a.length, n) === a;
  }
});
var Li = W, ah = j, Cv = Gn, Pv = K, Nv = Ut, Mv = lt, Rv = fu, Vv = $n, kv = ue, eo = mt, Iv = oe, ro = Zn, _v = zu, Lv = D, Qt = _v.UNSUPPORTED_Y, Dv = 4294967295, jv = Math.min, Di = ah([].push), ji = ah("".slice), Bv = !Lv(function() {
  var i = /(?:)/, t = i.exec;
  i.exec = function() {
    return t.apply(this, arguments);
  };
  var e = "ab".split(i);
  return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
}), io = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
Cv("split", function(i, t, e) {
  var r = "0".split(void 0, 0).length ? function(n, a) {
    return n === void 0 && a === 0 ? [] : Li(t, this, n, a);
  } : t;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(n, a) {
      var o = Mv(this), s = Nv(n) ? void 0 : Iv(n, i);
      return s ? Li(s, n, o, a) : Li(r, eo(o), n, a);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(n, a) {
      var o = Pv(this), s = eo(n);
      if (!io) {
        var u = e(r, o, s, a, r !== t);
        if (u.done) return u.value;
      }
      var h = Rv(o, RegExp), l = o.unicode, g = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Qt ? "g" : "y"), f = new h(Qt ? "^(?:" + o.source + ")" : o, g), c = a === void 0 ? Dv : a >>> 0;
      if (c === 0) return [];
      if (s.length === 0) return ro(f, s) === null ? [s] : [];
      for (var d = 0, p = 0, m = []; p < s.length; ) {
        f.lastIndex = Qt ? 0 : p;
        var y = ro(f, Qt ? ji(s, p) : s), b;
        if (y === null || (b = jv(kv(f.lastIndex + (Qt ? p : 0)), s.length)) === d)
          p = Vv(s, p, l);
        else {
          if (Di(m, ji(s, d, p)), m.length === c) return m;
          for (var x = 1; x <= y.length - 1; x++)
            if (Di(m, y[x]), m.length === c) return m;
          p = d = b;
        }
      }
      return Di(m, ji(s, d)), m;
    }
  ];
}, io || !Bv, Qt);
var kr = { exports: {} }, ve = { exports: {} };
(function() {
  var i, t, e, r, n, a;
  typeof performance < "u" && performance !== null && performance.now ? ve.exports = function() {
    return performance.now();
  } : typeof process < "u" && process !== null && process.hrtime ? (ve.exports = function() {
    return (i() - n) / 1e6;
  }, t = process.hrtime, i = function() {
    var o;
    return o = t(), o[0] * 1e9 + o[1];
  }, r = i(), a = process.uptime() * 1e9, n = r - a) : Date.now ? (ve.exports = function() {
    return Date.now() - e;
  }, e = Date.now()) : (ve.exports = function() {
    return (/* @__PURE__ */ new Date()).getTime() - e;
  }, e = (/* @__PURE__ */ new Date()).getTime());
}).call(Zt);
var Uv = ve.exports, zv = Uv, xt = typeof window > "u" ? Zt : window, rr = ["moz", "webkit"], re = "AnimationFrame", se = xt["request" + re], Oe = xt["cancel" + re] || xt["cancelRequest" + re];
for (var me = 0; !se && me < rr.length; me++)
  se = xt[rr[me] + "Request" + re], Oe = xt[rr[me] + "Cancel" + re] || xt[rr[me] + "CancelRequest" + re];
if (!se || !Oe) {
  var Bi = 0, no = 0, kt = [], Fv = 1e3 / 60;
  se = function(i) {
    if (kt.length === 0) {
      var t = zv(), e = Math.max(0, Fv - (t - Bi));
      Bi = e + t, setTimeout(function() {
        var r = kt.slice(0);
        kt.length = 0;
        for (var n = 0; n < r.length; n++)
          if (!r[n].cancelled)
            try {
              r[n].callback(Bi);
            } catch (a) {
              setTimeout(function() {
                throw a;
              }, 0);
            }
      }, Math.round(e));
    }
    return kt.push({
      handle: ++no,
      callback: i,
      cancelled: !1
    }), no;
  }, Oe = function(i) {
    for (var t = 0; t < kt.length; t++)
      kt[t].handle === i && (kt[t].cancelled = !0);
  };
}
kr.exports = function(i) {
  return se.call(xt, i);
};
kr.exports.cancel = function() {
  Oe.apply(xt, arguments);
};
kr.exports.polyfill = function(i) {
  i || (i = xt), i.requestAnimationFrame = se, i.cancelAnimationFrame = Oe;
};
var Hv = kr.exports;
const Ui = /* @__PURE__ */ ko(Hv);
var sh = `	
\v\f\r                　\u2028\u2029\uFEFF`, Xv = j, Yv = lt, Wv = mt, dn = sh, ao = Xv("".replace), qv = RegExp("^[" + dn + "]+"), Gv = RegExp("(^|[^" + dn + "])[" + dn + "]+$"), zi = function(i) {
  return function(t) {
    var e = Wv(Yv(t));
    return i & 1 && (e = ao(e, qv, "")), i & 2 && (e = ao(e, Gv, "$1")), e;
  };
}, Qv = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: zi(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: zi(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: zi(3)
}, $v = Tr.PROPER, Zv = D, so = sh, oo = "​᠎", Jv = function(i) {
  return Zv(function() {
    return !!so[i]() || oo[i]() !== oo || $v && so[i].name !== i;
  });
}, Kv = tt, tx = Qv.trim, ex = Jv;
Kv({ target: "String", proto: !0, forced: ex("trim") }, {
  trim: function() {
    return tx(this);
  }
});
var rx = function(i) {
  this.ok = !1, this.alpha = 1, i.charAt(0) == "#" && (i = i.substr(1, 6)), i = i.replace(/ /g, ""), i = i.toLowerCase();
  var t = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  i = t[i] || i;
  for (var e = [
    {
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3]),
          parseFloat(u[4])
        ];
      }
    },
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3])
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(u) {
        return [
          parseInt(u[1], 16),
          parseInt(u[2], 16),
          parseInt(u[3], 16)
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(u) {
        return [
          parseInt(u[1] + u[1], 16),
          parseInt(u[2] + u[2], 16),
          parseInt(u[3] + u[3], 16)
        ];
      }
    }
  ], r = 0; r < e.length; r++) {
    var n = e[r].re, a = e[r].process, o = n.exec(i);
    if (o) {
      var s = a(o);
      this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = !0;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toRGBA = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
  }, this.toHex = function() {
    var u = this.r.toString(16), h = this.g.toString(16), l = this.b.toString(16);
    return u.length == 1 && (u = "0" + u), h.length == 1 && (h = "0" + h), l.length == 1 && (l = "0" + l), "#" + u + h + l;
  }, this.getHelpXML = function() {
    for (var u = new Array(), h = 0; h < e.length; h++)
      for (var l = e[h].example, g = 0; g < l.length; g++)
        u[u.length] = l[g];
    for (var f in t)
      u[u.length] = f;
    var c = document.createElement("ul");
    c.setAttribute("id", "rgbcolor-examples");
    for (var h = 0; h < u.length; h++)
      try {
        var d = document.createElement("li"), p = new RGBColor(u[h]), m = document.createElement("div");
        m.style.cssText = "margin: 3px; border: 1px solid black; background:" + p.toHex() + "; color:" + p.toHex(), m.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(
          " " + u[h] + " -> " + p.toRGB() + " -> " + p.toHex()
        );
        d.appendChild(m), d.appendChild(y), c.appendChild(d);
      } catch {
      }
    return c;
  };
};
const mn = /* @__PURE__ */ ko(rx);
var ix = tt, nx = Pr, ax = ru.indexOf, sx = ih, yn = nx([].indexOf), oh = !!yn && 1 / yn([1], 1, -0) < 0, ox = oh || !sx("indexOf");
ix({ target: "Array", proto: !0, forced: ox }, {
  indexOf: function(i) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return oh ? yn(this, i, t) || 0 : ax(this, i, t);
  }
});
var ux = tt, hx = j, lx = Kn, cx = lt, uo = mt, gx = ta, fx = hx("".indexOf);
ux({ target: "String", proto: !0, forced: !gx("includes") }, {
  includes: function(i) {
    return !!~fx(
      uo(cx(this)),
      uo(lx(i)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var px = Bt, dx = Array.isArray || function(i) {
  return px(i) === "Array";
}, mx = tt, yx = j, vx = dx, xx = yx([].reverse), ho = [1, 2];
mx({ target: "Array", proto: !0, forced: String(ho) === String(ho.reverse()) }, {
  reverse: function() {
    return vx(this) && (this.length = this.length), xx(this);
  }
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var uh = function(i, t) {
  return (uh = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  })(i, t);
};
function hh(i, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function e() {
    this.constructor = i;
  }
  uh(i, t), i.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function bx(i) {
  var t = "";
  Array.isArray(i) || (i = [i]);
  for (var e = 0; e < i.length; e++) {
    var r = i[e];
    if (r.type === v.CLOSE_PATH) t += "z";
    else if (r.type === v.HORIZ_LINE_TO) t += (r.relative ? "h" : "H") + r.x;
    else if (r.type === v.VERT_LINE_TO) t += (r.relative ? "v" : "V") + r.y;
    else if (r.type === v.MOVE_TO) t += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === v.LINE_TO) t += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === v.CURVE_TO) t += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === v.SMOOTH_CURVE_TO) t += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === v.QUAD_TO) t += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === v.SMOOTH_QUAD_TO) t += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== v.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + e + ".");
      t += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return t;
}
function vn(i, t) {
  var e = i[0], r = i[1];
  return [e * Math.cos(t) - r * Math.sin(t), e * Math.sin(t) + r * Math.cos(t)];
}
function ot() {
  for (var i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
  for (var e = 0; e < i.length; e++) if (typeof i[e] != "number") throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof i[e] + " == typeof " + i[e]);
  return !0;
}
var Ot = Math.PI;
function Fi(i, t, e) {
  i.lArcFlag = i.lArcFlag === 0 ? 0 : 1, i.sweepFlag = i.sweepFlag === 0 ? 0 : 1;
  var r = i.rX, n = i.rY, a = i.x, o = i.y;
  r = Math.abs(i.rX), n = Math.abs(i.rY);
  var s = vn([(t - a) / 2, (e - o) / 2], -i.xRot / 180 * Ot), u = s[0], h = s[1], l = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(h, 2) / Math.pow(n, 2);
  1 < l && (r *= Math.sqrt(l), n *= Math.sqrt(l)), i.rX = r, i.rY = n;
  var g = Math.pow(r, 2) * Math.pow(h, 2) + Math.pow(n, 2) * Math.pow(u, 2), f = (i.lArcFlag !== i.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(n, 2) - g) / g)), c = r * h / n * f, d = -n * u / r * f, p = vn([c, d], i.xRot / 180 * Ot);
  i.cX = p[0] + (t + a) / 2, i.cY = p[1] + (e + o) / 2, i.phi1 = Math.atan2((h - d) / n, (u - c) / r), i.phi2 = Math.atan2((-h - d) / n, (-u - c) / r), i.sweepFlag === 0 && i.phi2 > i.phi1 && (i.phi2 -= 2 * Ot), i.sweepFlag === 1 && i.phi2 < i.phi1 && (i.phi2 += 2 * Ot), i.phi1 *= 180 / Ot, i.phi2 *= 180 / Ot;
}
function lo(i, t, e) {
  ot(i, t, e);
  var r = i * i + t * t - e * e;
  if (0 > r) return [];
  if (r === 0) return [[i * e / (i * i + t * t), t * e / (i * i + t * t)]];
  var n = Math.sqrt(r);
  return [[(i * e + t * n) / (i * i + t * t), (t * e - i * n) / (i * i + t * t)], [(i * e - t * n) / (i * i + t * t), (t * e + i * n) / (i * i + t * t)]];
}
var F, yt = Math.PI / 180;
function co(i, t, e) {
  return (1 - e) * i + e * t;
}
function go(i, t, e, r) {
  return i + Math.cos(r / 180 * Ot) * t + Math.sin(r / 180 * Ot) * e;
}
function fo(i, t, e, r) {
  var n = 1e-6, a = t - i, o = e - t, s = 3 * a + 3 * (r - e) - 6 * o, u = 6 * (o - a), h = 3 * a;
  return Math.abs(s) < n ? [-h / u] : function(l, g, f) {
    var c = l * l / 4 - g;
    if (c < -f) return [];
    if (c <= f) return [-l / 2];
    var d = Math.sqrt(c);
    return [-l / 2 - d, -l / 2 + d];
  }(u / s, h / s, n);
}
function po(i, t, e, r, n) {
  var a = 1 - n;
  return i * (a * a * a) + t * (3 * a * a * n) + e * (3 * a * n * n) + r * (n * n * n);
}
(function(i) {
  function t() {
    return n(function(s, u, h) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += u), s.y1 !== void 0 && (s.y1 += h), s.x2 !== void 0 && (s.x2 += u), s.y2 !== void 0 && (s.y2 += h), s.x !== void 0 && (s.x += u), s.y !== void 0 && (s.y += h), s.relative = !1), s;
    });
  }
  function e() {
    var s = NaN, u = NaN, h = NaN, l = NaN;
    return n(function(g, f, c) {
      return g.type & v.SMOOTH_CURVE_TO && (g.type = v.CURVE_TO, s = isNaN(s) ? f : s, u = isNaN(u) ? c : u, g.x1 = g.relative ? f - s : 2 * f - s, g.y1 = g.relative ? c - u : 2 * c - u), g.type & v.CURVE_TO ? (s = g.relative ? f + g.x2 : g.x2, u = g.relative ? c + g.y2 : g.y2) : (s = NaN, u = NaN), g.type & v.SMOOTH_QUAD_TO && (g.type = v.QUAD_TO, h = isNaN(h) ? f : h, l = isNaN(l) ? c : l, g.x1 = g.relative ? f - h : 2 * f - h, g.y1 = g.relative ? c - l : 2 * c - l), g.type & v.QUAD_TO ? (h = g.relative ? f + g.x1 : g.x1, l = g.relative ? c + g.y1 : g.y1) : (h = NaN, l = NaN), g;
    });
  }
  function r() {
    var s = NaN, u = NaN;
    return n(function(h, l, g) {
      if (h.type & v.SMOOTH_QUAD_TO && (h.type = v.QUAD_TO, s = isNaN(s) ? l : s, u = isNaN(u) ? g : u, h.x1 = h.relative ? l - s : 2 * l - s, h.y1 = h.relative ? g - u : 2 * g - u), h.type & v.QUAD_TO) {
        s = h.relative ? l + h.x1 : h.x1, u = h.relative ? g + h.y1 : h.y1;
        var f = h.x1, c = h.y1;
        h.type = v.CURVE_TO, h.x1 = ((h.relative ? 0 : l) + 2 * f) / 3, h.y1 = ((h.relative ? 0 : g) + 2 * c) / 3, h.x2 = (h.x + 2 * f) / 3, h.y2 = (h.y + 2 * c) / 3;
      } else s = NaN, u = NaN;
      return h;
    });
  }
  function n(s) {
    var u = 0, h = 0, l = NaN, g = NaN;
    return function(f) {
      if (isNaN(l) && !(f.type & v.MOVE_TO)) throw new Error("path must start with moveto");
      var c = s(f, u, h, l, g);
      return f.type & v.CLOSE_PATH && (u = l, h = g), f.x !== void 0 && (u = f.relative ? u + f.x : f.x), f.y !== void 0 && (h = f.relative ? h + f.y : f.y), f.type & v.MOVE_TO && (l = u, g = h), c;
    };
  }
  function a(s, u, h, l, g, f) {
    return ot(s, u, h, l, g, f), n(function(c, d, p, m) {
      var y = c.x1, b = c.x2, x = c.relative && !isNaN(m), w = c.x !== void 0 ? c.x : x ? 0 : d, A = c.y !== void 0 ? c.y : x ? 0 : p;
      function O(at) {
        return at * at;
      }
      c.type & v.HORIZ_LINE_TO && u !== 0 && (c.type = v.LINE_TO, c.y = c.relative ? 0 : p), c.type & v.VERT_LINE_TO && h !== 0 && (c.type = v.LINE_TO, c.x = c.relative ? 0 : d), c.x !== void 0 && (c.x = c.x * s + A * h + (x ? 0 : g)), c.y !== void 0 && (c.y = w * u + c.y * l + (x ? 0 : f)), c.x1 !== void 0 && (c.x1 = c.x1 * s + c.y1 * h + (x ? 0 : g)), c.y1 !== void 0 && (c.y1 = y * u + c.y1 * l + (x ? 0 : f)), c.x2 !== void 0 && (c.x2 = c.x2 * s + c.y2 * h + (x ? 0 : g)), c.y2 !== void 0 && (c.y2 = b * u + c.y2 * l + (x ? 0 : f));
      var S = s * l - u * h;
      if (c.xRot !== void 0 && (s !== 1 || u !== 0 || h !== 0 || l !== 1)) if (S === 0) delete c.rX, delete c.rY, delete c.xRot, delete c.lArcFlag, delete c.sweepFlag, c.type = v.LINE_TO;
      else {
        var C = c.xRot * Math.PI / 180, V = Math.sin(C), I = Math.cos(C), U = 1 / O(c.rX), N = 1 / O(c.rY), q = O(I) * U + O(V) * N, G = 2 * V * I * (U - N), H = O(V) * U + O(I) * N, Q = q * l * l - G * u * l + H * u * u, Y = G * (s * l + u * h) - 2 * (q * h * l + H * s * u), $ = q * h * h - G * s * h + H * s * s, M = (Math.atan2(Y, Q - $) + Math.PI) % Math.PI / 2, k = Math.sin(M), Z = Math.cos(M);
        c.rX = Math.abs(S) / Math.sqrt(Q * O(Z) + Y * k * Z + $ * O(k)), c.rY = Math.abs(S) / Math.sqrt(Q * O(k) - Y * k * Z + $ * O(Z)), c.xRot = 180 * M / Math.PI;
      }
      return c.sweepFlag !== void 0 && 0 > S && (c.sweepFlag = +!c.sweepFlag), c;
    });
  }
  function o() {
    return function(s) {
      var u = {};
      for (var h in s) u[h] = s[h];
      return u;
    };
  }
  i.ROUND = function(s) {
    function u(h) {
      return Math.round(h * s) / s;
    }
    return s === void 0 && (s = 1e13), ot(s), function(h) {
      return h.x1 !== void 0 && (h.x1 = u(h.x1)), h.y1 !== void 0 && (h.y1 = u(h.y1)), h.x2 !== void 0 && (h.x2 = u(h.x2)), h.y2 !== void 0 && (h.y2 = u(h.y2)), h.x !== void 0 && (h.x = u(h.x)), h.y !== void 0 && (h.y = u(h.y)), h.rX !== void 0 && (h.rX = u(h.rX)), h.rY !== void 0 && (h.rY = u(h.rY)), h;
    };
  }, i.TO_ABS = t, i.TO_REL = function() {
    return n(function(s, u, h) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= h), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= h), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= h), s.relative = !0), s;
    });
  }, i.NORMALIZE_HVZ = function(s, u, h) {
    return s === void 0 && (s = !0), u === void 0 && (u = !0), h === void 0 && (h = !0), n(function(l, g, f, c, d) {
      if (isNaN(c) && !(l.type & v.MOVE_TO)) throw new Error("path must start with moveto");
      return u && l.type & v.HORIZ_LINE_TO && (l.type = v.LINE_TO, l.y = l.relative ? 0 : f), h && l.type & v.VERT_LINE_TO && (l.type = v.LINE_TO, l.x = l.relative ? 0 : g), s && l.type & v.CLOSE_PATH && (l.type = v.LINE_TO, l.x = l.relative ? c - g : c, l.y = l.relative ? d - f : d), l.type & v.ARC && (l.rX === 0 || l.rY === 0) && (l.type = v.LINE_TO, delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag), l;
    });
  }, i.NORMALIZE_ST = e, i.QT_TO_C = r, i.INFO = n, i.SANITIZE = function(s) {
    s === void 0 && (s = 0), ot(s);
    var u = NaN, h = NaN, l = NaN, g = NaN;
    return n(function(f, c, d, p, m) {
      var y = Math.abs, b = !1, x = 0, w = 0;
      if (f.type & v.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : c - u, w = isNaN(h) ? 0 : d - h), f.type & (v.CURVE_TO | v.SMOOTH_CURVE_TO) ? (u = f.relative ? c + f.x2 : f.x2, h = f.relative ? d + f.y2 : f.y2) : (u = NaN, h = NaN), f.type & v.SMOOTH_QUAD_TO ? (l = isNaN(l) ? c : 2 * c - l, g = isNaN(g) ? d : 2 * d - g) : f.type & v.QUAD_TO ? (l = f.relative ? c + f.x1 : f.x1, g = f.relative ? d + f.y1 : f.y2) : (l = NaN, g = NaN), f.type & v.LINE_COMMANDS || f.type & v.ARC && (f.rX === 0 || f.rY === 0 || !f.lArcFlag) || f.type & v.CURVE_TO || f.type & v.SMOOTH_CURVE_TO || f.type & v.QUAD_TO || f.type & v.SMOOTH_QUAD_TO) {
        var A = f.x === void 0 ? 0 : f.relative ? f.x : f.x - c, O = f.y === void 0 ? 0 : f.relative ? f.y : f.y - d;
        x = isNaN(l) ? f.x1 === void 0 ? x : f.relative ? f.x : f.x1 - c : l - c, w = isNaN(g) ? f.y1 === void 0 ? w : f.relative ? f.y : f.y1 - d : g - d;
        var S = f.x2 === void 0 ? 0 : f.relative ? f.x : f.x2 - c, C = f.y2 === void 0 ? 0 : f.relative ? f.y : f.y2 - d;
        y(A) <= s && y(O) <= s && y(x) <= s && y(w) <= s && y(S) <= s && y(C) <= s && (b = !0);
      }
      return f.type & v.CLOSE_PATH && y(c - p) <= s && y(d - m) <= s && (b = !0), b ? [] : f;
    });
  }, i.MATRIX = a, i.ROTATE = function(s, u, h) {
    u === void 0 && (u = 0), h === void 0 && (h = 0), ot(s, u, h);
    var l = Math.sin(s), g = Math.cos(s);
    return a(g, l, -l, g, u - u * g + h * l, h - u * l - h * g);
  }, i.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), ot(s, u), a(1, 0, 0, 1, s, u);
  }, i.SCALE = function(s, u) {
    return u === void 0 && (u = s), ot(s, u), a(s, 0, 0, u, 0, 0);
  }, i.SKEW_X = function(s) {
    return ot(s), a(1, 0, Math.atan(s), 1, 0, 0);
  }, i.SKEW_Y = function(s) {
    return ot(s), a(1, Math.atan(s), 0, 1, 0, 0);
  }, i.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), ot(s), a(-1, 0, 0, 1, s, 0);
  }, i.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), ot(s), a(1, 0, 0, -1, 0, s);
  }, i.A_TO_C = function() {
    return n(function(s, u, h) {
      return v.ARC === s.type ? function(l, g, f) {
        var c, d, p, m;
        l.cX || Fi(l, g, f);
        for (var y = Math.min(l.phi1, l.phi2), b = Math.max(l.phi1, l.phi2) - y, x = Math.ceil(b / 90), w = new Array(x), A = g, O = f, S = 0; S < x; S++) {
          var C = co(l.phi1, l.phi2, S / x), V = co(l.phi1, l.phi2, (S + 1) / x), I = V - C, U = 4 / 3 * Math.tan(I * yt / 4), N = [Math.cos(C * yt) - U * Math.sin(C * yt), Math.sin(C * yt) + U * Math.cos(C * yt)], q = N[0], G = N[1], H = [Math.cos(V * yt), Math.sin(V * yt)], Q = H[0], Y = H[1], $ = [Q + U * Math.sin(V * yt), Y - U * Math.cos(V * yt)], M = $[0], k = $[1];
          w[S] = { relative: l.relative, type: v.CURVE_TO };
          var Z = function(at, pt) {
            var Tt = vn([at * l.rX, pt * l.rY], l.xRot), Xt = Tt[0], ke = Tt[1];
            return [l.cX + Xt, l.cY + ke];
          };
          c = Z(q, G), w[S].x1 = c[0], w[S].y1 = c[1], d = Z(M, k), w[S].x2 = d[0], w[S].y2 = d[1], p = Z(Q, Y), w[S].x = p[0], w[S].y = p[1], l.relative && (w[S].x1 -= A, w[S].y1 -= O, w[S].x2 -= A, w[S].y2 -= O, w[S].x -= A, w[S].y -= O), A = (m = [w[S].x, w[S].y])[0], O = m[1];
        }
        return w;
      }(s, s.relative ? 0 : u, s.relative ? 0 : h) : s;
    });
  }, i.ANNOTATE_ARCS = function() {
    return n(function(s, u, h) {
      return s.relative && (u = 0, h = 0), v.ARC === s.type && Fi(s, u, h), s;
    });
  }, i.CLONE = o, i.CALCULATE_BOUNDS = function() {
    var s = function(f) {
      var c = {};
      for (var d in f) c[d] = f[d];
      return c;
    }, u = t(), h = r(), l = e(), g = n(function(f, c, d) {
      var p = l(h(u(s(f))));
      function m(k) {
        k > g.maxX && (g.maxX = k), k < g.minX && (g.minX = k);
      }
      function y(k) {
        k > g.maxY && (g.maxY = k), k < g.minY && (g.minY = k);
      }
      if (p.type & v.DRAWING_COMMANDS && (m(c), y(d)), p.type & v.HORIZ_LINE_TO && m(p.x), p.type & v.VERT_LINE_TO && y(p.y), p.type & v.LINE_TO && (m(p.x), y(p.y)), p.type & v.CURVE_TO) {
        m(p.x), y(p.y);
        for (var b = 0, x = fo(c, p.x1, p.x2, p.x); b < x.length; b++)
          0 < (M = x[b]) && 1 > M && m(po(c, p.x1, p.x2, p.x, M));
        for (var w = 0, A = fo(d, p.y1, p.y2, p.y); w < A.length; w++)
          0 < (M = A[w]) && 1 > M && y(po(d, p.y1, p.y2, p.y, M));
      }
      if (p.type & v.ARC) {
        m(p.x), y(p.y), Fi(p, c, d);
        for (var O = p.xRot / 180 * Math.PI, S = Math.cos(O) * p.rX, C = Math.sin(O) * p.rX, V = -Math.sin(O) * p.rY, I = Math.cos(O) * p.rY, U = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], N = U[0], q = U[1], G = function(k) {
          var Z = k[0], at = k[1], pt = 180 * Math.atan2(at, Z) / Math.PI;
          return pt < N ? pt + 360 : pt;
        }, H = 0, Q = lo(V, -S, 0).map(G); H < Q.length; H++)
          (M = Q[H]) > N && M < q && m(go(p.cX, S, V, M));
        for (var Y = 0, $ = lo(I, -C, 0).map(G); Y < $.length; Y++) {
          var M;
          (M = $[Y]) > N && M < q && y(go(p.cY, C, I, M));
        }
      }
      return f;
    });
    return g.minX = 1 / 0, g.maxX = -1 / 0, g.minY = 1 / 0, g.maxY = -1 / 0, g;
  };
})(F || (F = {}));
var st, lh = function() {
  function i() {
  }
  return i.prototype.round = function(t) {
    return this.transform(F.ROUND(t));
  }, i.prototype.toAbs = function() {
    return this.transform(F.TO_ABS());
  }, i.prototype.toRel = function() {
    return this.transform(F.TO_REL());
  }, i.prototype.normalizeHVZ = function(t, e, r) {
    return this.transform(F.NORMALIZE_HVZ(t, e, r));
  }, i.prototype.normalizeST = function() {
    return this.transform(F.NORMALIZE_ST());
  }, i.prototype.qtToC = function() {
    return this.transform(F.QT_TO_C());
  }, i.prototype.aToC = function() {
    return this.transform(F.A_TO_C());
  }, i.prototype.sanitize = function(t) {
    return this.transform(F.SANITIZE(t));
  }, i.prototype.translate = function(t, e) {
    return this.transform(F.TRANSLATE(t, e));
  }, i.prototype.scale = function(t, e) {
    return this.transform(F.SCALE(t, e));
  }, i.prototype.rotate = function(t, e, r) {
    return this.transform(F.ROTATE(t, e, r));
  }, i.prototype.matrix = function(t, e, r, n, a, o) {
    return this.transform(F.MATRIX(t, e, r, n, a, o));
  }, i.prototype.skewX = function(t) {
    return this.transform(F.SKEW_X(t));
  }, i.prototype.skewY = function(t) {
    return this.transform(F.SKEW_Y(t));
  }, i.prototype.xSymmetry = function(t) {
    return this.transform(F.X_AXIS_SYMMETRY(t));
  }, i.prototype.ySymmetry = function(t) {
    return this.transform(F.Y_AXIS_SYMMETRY(t));
  }, i.prototype.annotateArcs = function() {
    return this.transform(F.ANNOTATE_ARCS());
  }, i;
}(), wx = function(i) {
  return i === " " || i === "	" || i === "\r" || i === `
`;
}, mo = function(i) {
  return 48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57;
}, Sx = function(i) {
  function t() {
    var e = i.call(this) || this;
    return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e;
  }
  return hh(t, i), t.prototype.finish = function(e) {
    if (e === void 0 && (e = []), this.parse(" ", e), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return e;
  }, t.prototype.parse = function(e, r) {
    var n = this;
    r === void 0 && (r = []);
    for (var a = function(g) {
      r.push(g), n.curArgs.length = 0, n.canParseCommandOrComma = !0;
    }, o = 0; o < e.length; o++) {
      var s = e[o], u = !(this.curCommandType !== v.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), h = mo(s) && (this.curNumber === "0" && s === "0" || u);
      if (!mo(s) || h) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var l = Number(this.curNumber);
          if (isNaN(l)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === v.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > l) throw new SyntaxError('Expected positive number, got "' + l + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(l), this.curArgs.length === Tx[this.curCommandType] && (v.HORIZ_LINE_TO === this.curCommandType ? a({ type: v.HORIZ_LINE_TO, relative: this.curCommandRelative, x: l }) : v.VERT_LINE_TO === this.curCommandType ? a({ type: v.VERT_LINE_TO, relative: this.curCommandRelative, y: l }) : this.curCommandType === v.MOVE_TO || this.curCommandType === v.LINE_TO || this.curCommandType === v.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), v.MOVE_TO === this.curCommandType && (this.curCommandType = v.LINE_TO)) : this.curCommandType === v.CURVE_TO ? a({ type: v.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === v.SMOOTH_CURVE_TO ? a({ type: v.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === v.QUAD_TO ? a({ type: v.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === v.ARC && a({ type: v.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!wx(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (s !== "+" && s !== "-" && s !== ".") if (h) this.curNumber = s, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + o + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, s !== "z" && s !== "Z") if (s === "h" || s === "H") this.curCommandType = v.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
          else if (s === "v" || s === "V") this.curCommandType = v.VERT_LINE_TO, this.curCommandRelative = s === "v";
          else if (s === "m" || s === "M") this.curCommandType = v.MOVE_TO, this.curCommandRelative = s === "m";
          else if (s === "l" || s === "L") this.curCommandType = v.LINE_TO, this.curCommandRelative = s === "l";
          else if (s === "c" || s === "C") this.curCommandType = v.CURVE_TO, this.curCommandRelative = s === "c";
          else if (s === "s" || s === "S") this.curCommandType = v.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
          else if (s === "q" || s === "Q") this.curCommandType = v.QUAD_TO, this.curCommandRelative = s === "q";
          else if (s === "t" || s === "T") this.curCommandType = v.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
          else {
            if (s !== "a" && s !== "A") throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ".");
            this.curCommandType = v.ARC, this.curCommandRelative = s === "a";
          }
          else r.push({ type: v.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = s, this.curNumberHasDecimal = s === ".";
      } else this.curNumber += s, this.curNumberHasDecimal = !0;
      else this.curNumber += s;
      else this.curNumber += s, this.curNumberHasExp = !0;
      else this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, t.prototype.transform = function(e) {
    return Object.create(this, { parse: { value: function(r, n) {
      n === void 0 && (n = []);
      for (var a = 0, o = Object.getPrototypeOf(this).parse.call(this, r); a < o.length; a++) {
        var s = o[a], u = e(s);
        Array.isArray(u) ? n.push.apply(n, u) : n.push(u);
      }
      return n;
    } } });
  }, t;
}(lh), v = function(i) {
  function t(e) {
    var r = i.call(this) || this;
    return r.commands = typeof e == "string" ? t.parse(e) : e, r;
  }
  return hh(t, i), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var e = F.CALCULATE_BOUNDS();
    return this.transform(e), e;
  }, t.prototype.transform = function(e) {
    for (var r = [], n = 0, a = this.commands; n < a.length; n++) {
      var o = e(a[n]);
      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
    }
    return this.commands = r, this;
  }, t.encode = function(e) {
    return bx(e);
  }, t.parse = function(e) {
    var r = new Sx(), n = [];
    return r.parse(e, n), r.finish(n), n;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(lh), Tx = ((st = {})[v.MOVE_TO] = 2, st[v.LINE_TO] = 2, st[v.HORIZ_LINE_TO] = 1, st[v.VERT_LINE_TO] = 1, st[v.CLOSE_PATH] = 0, st[v.QUAD_TO] = 4, st[v.SMOOTH_QUAD_TO] = 2, st[v.CURVE_TO] = 6, st[v.SMOOTH_CURVE_TO] = 4, st[v.ARC] = 7, st), Ox = W, Ax = gt, Ex = xr, Cx = Uu, yo = RegExp.prototype, Px = function(i) {
  var t = i.flags;
  return t === void 0 && !("flags" in yo) && !Ax(i, "flags") && Ex(yo, i) ? Ox(Cx, i) : t;
}, Nx = Tr.PROPER, Mx = Ft, Rx = K, vo = mt, Vx = D, kx = Px, ra = "toString", ch = RegExp.prototype, gh = ch[ra], Ix = Vx(function() {
  return gh.call({ source: "a", flags: "b" }) !== "/a/b";
}), _x = Nx && gh.name !== ra;
(Ix || _x) && Mx(ch, ra, function() {
  var i = Rx(this), t = vo(i.source), e = vo(kx(i));
  return "/" + t + "/" + e;
}, { unsafe: !0 });
function cr(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cr = function(t) {
    return typeof t;
  } : cr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(i);
}
function Lx(i, t) {
  if (!(i instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Dx = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], jx = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function Bx(i, t, e, r, n) {
  if (typeof i == "string" && (i = document.getElementById(i)), !i || cr(i) !== "object" || !("getContext" in i))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var a = i.getContext("2d");
  try {
    return a.getImageData(t, e, r, n);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function Ux(i, t, e, r, n, a) {
  if (!(isNaN(a) || a < 1)) {
    a |= 0;
    var o = Bx(i, t, e, r, n);
    o = zx(o, t, e, r, n, a), i.getContext("2d").putImageData(o, t, e);
  }
}
function zx(i, t, e, r, n, a) {
  for (var o = i.data, s = 2 * a + 1, u = r - 1, h = n - 1, l = a + 1, g = l * (l + 1) / 2, f = new xo(), c = f, d, p = 1; p < s; p++)
    c = c.next = new xo(), p === l && (d = c);
  c.next = f;
  for (var m = null, y = null, b = 0, x = 0, w = Dx[a], A = jx[a], O = 0; O < n; O++) {
    c = f;
    for (var S = o[x], C = o[x + 1], V = o[x + 2], I = o[x + 3], U = 0; U < l; U++)
      c.r = S, c.g = C, c.b = V, c.a = I, c = c.next;
    for (var N = 0, q = 0, G = 0, H = 0, Q = l * S, Y = l * C, $ = l * V, M = l * I, k = g * S, Z = g * C, at = g * V, pt = g * I, Tt = 1; Tt < l; Tt++) {
      var Xt = x + ((u < Tt ? u : Tt) << 2), ke = o[Xt], aa = o[Xt + 1], sa = o[Xt + 2], oa = o[Xt + 3], Ie = l - Tt;
      k += (c.r = ke) * Ie, Z += (c.g = aa) * Ie, at += (c.b = sa) * Ie, pt += (c.a = oa) * Ie, N += ke, q += aa, G += sa, H += oa, c = c.next;
    }
    m = f, y = d;
    for (var jr = 0; jr < r; jr++) {
      var Br = pt * w >>> A;
      if (o[x + 3] = Br, Br !== 0) {
        var Ur = 255 / Br;
        o[x] = (k * w >>> A) * Ur, o[x + 1] = (Z * w >>> A) * Ur, o[x + 2] = (at * w >>> A) * Ur;
      } else
        o[x] = o[x + 1] = o[x + 2] = 0;
      k -= Q, Z -= Y, at -= $, pt -= M, Q -= m.r, Y -= m.g, $ -= m.b, M -= m.a;
      var Pt = jr + a + 1;
      Pt = b + (Pt < u ? Pt : u) << 2, N += m.r = o[Pt], q += m.g = o[Pt + 1], G += m.b = o[Pt + 2], H += m.a = o[Pt + 3], k += N, Z += q, at += G, pt += H, m = m.next;
      var _e = y, ua = _e.r, ha = _e.g, la = _e.b, ca = _e.a;
      Q += ua, Y += ha, $ += la, M += ca, N -= ua, q -= ha, G -= la, H -= ca, y = y.next, x += 4;
    }
    b += r;
  }
  for (var Yt = 0; Yt < r; Yt++) {
    x = Yt << 2;
    var Nt = o[x], Mt = o[x + 1], Rt = o[x + 2], et = o[x + 3], zr = l * Nt, Fr = l * Mt, Hr = l * Rt, Xr = l * et, Le = g * Nt, De = g * Mt, je = g * Rt, Be = g * et;
    c = f;
    for (var ga = 0; ga < l; ga++)
      c.r = Nt, c.g = Mt, c.b = Rt, c.a = et, c = c.next;
    for (var fa = r, Yr = 0, Wr = 0, qr = 0, Gr = 0, Ue = 1; Ue <= a; Ue++) {
      x = fa + Yt << 2;
      var ze = l - Ue;
      Le += (c.r = Nt = o[x]) * ze, De += (c.g = Mt = o[x + 1]) * ze, je += (c.b = Rt = o[x + 2]) * ze, Be += (c.a = et = o[x + 3]) * ze, Gr += Nt, Yr += Mt, Wr += Rt, qr += et, c = c.next, Ue < h && (fa += r);
    }
    x = Yt, m = f, y = d;
    for (var Qr = 0; Qr < n; Qr++) {
      var rt = x << 2;
      o[rt + 3] = et = Be * w >>> A, et > 0 ? (et = 255 / et, o[rt] = (Le * w >>> A) * et, o[rt + 1] = (De * w >>> A) * et, o[rt + 2] = (je * w >>> A) * et) : o[rt] = o[rt + 1] = o[rt + 2] = 0, Le -= zr, De -= Fr, je -= Hr, Be -= Xr, zr -= m.r, Fr -= m.g, Hr -= m.b, Xr -= m.a, rt = Yt + ((rt = Qr + l) < h ? rt : h) * r << 2, Le += Gr += m.r = o[rt], De += Yr += m.g = o[rt + 1], je += Wr += m.b = o[rt + 2], Be += qr += m.a = o[rt + 3], m = m.next, zr += Nt = y.r, Fr += Mt = y.g, Hr += Rt = y.b, Xr += et = y.a, Gr -= Nt, Yr -= Mt, Wr -= Rt, qr -= et, y = y.next, x += r;
    }
  }
  return i;
}
var xo = (
  /**
   * Set properties.
   */
  function i() {
    Lx(this, i), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function Fx() {
  var {
    DOMParser: i
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: i,
    createCanvas(e, r) {
      return new OffscreenCanvas(e, r);
    },
    createImage(e) {
      return bt(function* () {
        var r = yield fetch(e), n = yield r.blob(), a = yield createImageBitmap(n);
        return a;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof i > "u") && Reflect.deleteProperty(t, "DOMParser"), t;
}
function Hx(i) {
  var {
    DOMParser: t,
    canvas: e,
    fetch: r
  } = i;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: t,
    fetch: r,
    createCanvas: e.createCanvas,
    createImage: e.loadImage
  };
}
var eb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: Fx,
  node: Hx
});
function le(i) {
  return i.replace(/(?!\u3000)\s+/gm, " ");
}
function Xx(i) {
  return i.replace(/^[\n \t]+/, "");
}
function Yx(i) {
  return i.replace(/[\n \t]+$/, "");
}
function nt(i) {
  var t = (i || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return t.map(parseFloat);
}
var Wx = /^[A-Z-]+$/;
function qx(i) {
  return Wx.test(i) ? i.toLowerCase() : i;
}
function fh(i) {
  var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(i) || [];
  return t[2] || t[3] || t[4];
}
function Gx(i) {
  if (!i.startsWith("rgb"))
    return i;
  var t = 3, e = i.replace(/\d+(\.\d+)?/g, (r, n) => t-- && n ? String(Math.round(parseFloat(r))) : r);
  return e;
}
var Qx = /(\[[^\]]+\])/g, $x = /(#[^\s+>~.[:]+)/g, Zx = /(\.[^\s+>~.[:]+)/g, Jx = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, Kx = /(:[\w-]+\([^)]*\))/gi, t1 = /(:[^\s+>~.[:]+)/g, e1 = /([^\s+>~.[:]+)/g;
function It(i, t) {
  var e = t.exec(i);
  return e ? [i.replace(t, " "), e.length] : [i, 0];
}
function r1(i) {
  var t = [0, 0, 0], e = i.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [e, r] = It(e, Qx), t[1] += r, [e, r] = It(e, $x), t[0] += r, [e, r] = It(e, Zx), t[1] += r, [e, r] = It(e, Jx), t[2] += r, [e, r] = It(e, Kx), t[1] += r, [e, r] = It(e, t1), t[1] += r, e = e.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [e, r] = It(e, e1), t[2] += r, t.join("");
}
var ie = 1e-8;
function bo(i) {
  return Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2));
}
function xn(i, t) {
  return (i[0] * t[0] + i[1] * t[1]) / (bo(i) * bo(t));
}
function wo(i, t) {
  return (i[0] * t[1] < i[1] * t[0] ? -1 : 1) * Math.acos(xn(i, t));
}
function So(i) {
  return i * i * i;
}
function To(i) {
  return 3 * i * i * (1 - i);
}
function Oo(i) {
  return 3 * i * (1 - i) * (1 - i);
}
function Ao(i) {
  return (1 - i) * (1 - i) * (1 - i);
}
function Eo(i) {
  return i * i;
}
function Co(i) {
  return 2 * i * (1 - i);
}
function Po(i) {
  return (1 - i) * (1 - i);
}
class T {
  constructor(t, e, r) {
    this.document = t, this.name = e, this.value = r, this.isNormalizedColor = !1;
  }
  static empty(t) {
    return new T(t, "EMPTY", "");
  }
  split() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: e,
      name: r
    } = this;
    return le(this.getString()).trim().split(t).map((n) => new T(e, r, n));
  }
  hasValue(t) {
    var {
      value: e
    } = this;
    return e !== null && e !== "" && (t || e !== 0) && typeof e < "u";
  }
  isString(t) {
    var {
      value: e
    } = this, r = typeof e == "string";
    return !r || !t ? r : t.test(e);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue())
      return !1;
    var t = this.getString();
    switch (!0) {
      case t.endsWith("px"):
      case /^[0-9]+$/.test(t):
        return !0;
      default:
        return !1;
    }
  }
  setValue(t) {
    return this.value = t, this;
  }
  getValue(t) {
    return typeof t > "u" || this.hasValue() ? this.value : t;
  }
  getNumber(t) {
    if (!this.hasValue())
      return typeof t > "u" ? 0 : parseFloat(t);
    var {
      value: e
    } = this, r = parseFloat(e);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(t) {
    return typeof t > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(t);
  }
  getColor(t) {
    var e = this.getString(t);
    return this.isNormalizedColor || (this.isNormalizedColor = !0, e = Gx(e), this.value = e), e;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue())
      return 0;
    var [r, n] = typeof t == "boolean" ? [void 0, t] : [t], {
      viewPort: a
    } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * a.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * a.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && n):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * a.computeSize(r);
      default: {
        var o = this.getNumber();
        return e && o < 1 ? o * a.computeSize(r) : o;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue())
      return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var t = this.getString(), e = /#([^)'"]+)/.exec(t);
    return e && (e = e[1]), e || (e = t), this.document.definitions[e];
  }
  getFillStyleDefinition(t, e) {
    var r = this.getDefinition();
    if (!r)
      return null;
    if (typeof r.createGradient == "function")
      return r.createGradient(this.document.ctx, t, e);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var n = r.getAttribute("patternTransform");
        r = r.getHrefAttribute().getDefinition(), n.hasValue() && r.getAttribute("patternTransform", !0).setValue(n.value);
      }
      return r.createPattern(this.document.ctx, t, e);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? T.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(t) {
    for (var e = this.getColor(), r = e.length, n = 0, a = 0; a < r && (e[a] === "," && n++, n !== 3); a++)
      ;
    if (t.hasValue() && this.isString() && n !== 3) {
      var o = new mn(e);
      o.ok && (o.alpha = t.getNumber(), e = o.toRGBA());
    }
    return new T(this.document, this.name, e);
  }
}
T.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
class i1 {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(t, e) {
    this.viewPorts.push({
      width: t,
      height: e
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: t
    } = this;
    return t[t.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(t) {
    return typeof t == "number" ? t : t === "x" ? this.width : t === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
}
class L {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  static parse(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = e, n = e] = nt(t);
    return new L(r, n);
  }
  static parseScale(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = e, n = r] = nt(t);
    return new L(r, n);
  }
  static parsePath(t) {
    for (var e = nt(t), r = e.length, n = [], a = 0; a < r; a += 2)
      n.push(new L(e[a], e[a + 1]));
    return n;
  }
  angleTo(t) {
    return Math.atan2(t.y - this.y, t.x - this.x);
  }
  applyTransform(t) {
    var {
      x: e,
      y: r
    } = this, n = e * t[0] + r * t[2] + t[4], a = e * t[1] + r * t[3] + t[5];
    this.x = n, this.y = a;
  }
}
class n1 {
  constructor(t) {
    this.screen = t, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: t,
        onClick: e,
        onMouseMove: r
      } = this, n = t.ctx.canvas;
      n.onclick = e, n.onmousemove = r, this.working = !0;
    }
  }
  stop() {
    if (this.working) {
      var t = this.screen.ctx.canvas;
      this.working = !1, t.onclick = null, t.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: t,
        events: e,
        eventElements: r
      } = this, {
        style: n
      } = t.ctx.canvas;
      n && (n.cursor = ""), e.forEach((a, o) => {
        for (var {
          run: s
        } = a, u = r[o]; u; )
          s(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(t, e) {
    if (!(!this.working || !e)) {
      var {
        events: r,
        eventElements: n
      } = this;
      r.forEach((a, o) => {
        var {
          x: s,
          y: u
        } = a;
        !n[o] && e.isPointInPath && e.isPointInPath(s, u) && (n[o] = t);
      });
    }
  }
  checkBoundingBox(t, e) {
    if (!(!this.working || !e)) {
      var {
        events: r,
        eventElements: n
      } = this;
      r.forEach((a, o) => {
        var {
          x: s,
          y: u
        } = a;
        !n[o] && e.isPointInBox(s, u) && (n[o] = t);
      });
    }
  }
  mapXY(t, e) {
    for (var {
      window: r,
      ctx: n
    } = this.screen, a = new L(t, e), o = n.canvas; o; )
      a.x -= o.offsetLeft, a.y -= o.offsetTop, o = o.offsetParent;
    return r.scrollX && (a.x += r.scrollX), r.scrollY && (a.y += r.scrollY), a;
  }
  onClick(t) {
    var {
      x: e,
      y: r
    } = this.mapXY(t.clientX, t.clientY);
    this.events.push({
      type: "onclick",
      x: e,
      y: r,
      run(n) {
        n.onClick && n.onClick();
      }
    });
  }
  onMouseMove(t) {
    var {
      x: e,
      y: r
    } = this.mapXY(t.clientX, t.clientY);
    this.events.push({
      type: "onmousemove",
      x: e,
      y: r,
      run(n) {
        n.onMouseMove && n.onMouseMove();
      }
    });
  }
}
var ph = typeof window < "u" ? window : null, dh = typeof fetch < "u" ? fetch.bind(void 0) : null;
class Ir {
  constructor(t) {
    var {
      fetch: e = dh,
      window: r = ph
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new i1(), this.mouse = new n1(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = e;
  }
  wait(t) {
    this.waits.push(t);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock)
      return !0;
    var t = this.waits.every((e) => e());
    return t && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = t, t;
  }
  setDefaults(t) {
    t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4;
  }
  setViewBox(t) {
    var {
      document: e,
      ctx: r,
      aspectRatio: n,
      width: a,
      desiredWidth: o,
      height: s,
      desiredHeight: u,
      minX: h = 0,
      minY: l = 0,
      refX: g,
      refY: f,
      clip: c = !1,
      clipX: d = 0,
      clipY: p = 0
    } = t, m = le(n).replace(/^defer\s/, ""), [y, b] = m.split(" "), x = y || "xMidYMid", w = b || "meet", A = a / o, O = s / u, S = Math.min(A, O), C = Math.max(A, O), V = o, I = u;
    w === "meet" && (V *= S, I *= S), w === "slice" && (V *= C, I *= C);
    var U = new T(e, "refX", g), N = new T(e, "refY", f), q = U.hasValue() && N.hasValue();
    if (q && r.translate(-S * U.getPixels("x"), -S * N.getPixels("y")), c) {
      var G = S * d, H = S * p;
      r.beginPath(), r.moveTo(G, H), r.lineTo(a, H), r.lineTo(a, s), r.lineTo(G, s), r.closePath(), r.clip();
    }
    if (!q) {
      var Q = w === "meet" && S === O, Y = w === "slice" && C === O, $ = w === "meet" && S === A, M = w === "slice" && C === A;
      x.startsWith("xMid") && (Q || Y) && r.translate(a / 2 - V / 2, 0), x.endsWith("YMid") && ($ || M) && r.translate(0, s / 2 - I / 2), x.startsWith("xMax") && (Q || Y) && r.translate(a - V, 0), x.endsWith("YMax") && ($ || M) && r.translate(0, s - I);
    }
    switch (!0) {
      case x === "none":
        r.scale(A, O);
        break;
      case w === "meet":
        r.scale(S, S);
        break;
      case w === "slice":
        r.scale(C, C);
        break;
    }
    r.translate(-h, -l);
  }
  start(t) {
    var {
      enableRedraw: e = !1,
      ignoreMouse: r = !1,
      ignoreAnimation: n = !1,
      ignoreDimensions: a = !1,
      ignoreClear: o = !1,
      forceRedraw: s,
      scaleWidth: u,
      scaleHeight: h,
      offsetX: l,
      offsetY: g
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: f,
      mouse: c
    } = this, d = 1e3 / f;
    if (this.frameDuration = d, this.readyPromise = new Promise((x) => {
      this.resolveReady = x;
    }), this.isReady() && this.render(t, a, o, u, h, l, g), !!e) {
      var p = Date.now(), m = p, y = 0, b = () => {
        p = Date.now(), y = p - m, y >= d && (m = p - y % d, this.shouldUpdate(n, s) && (this.render(t, a, o, u, h, l, g), c.runEvents())), this.intervalId = Ui(b);
      };
      r || c.start(), this.intervalId = Ui(b);
    }
  }
  stop() {
    this.intervalId && (Ui.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(t, e) {
    if (!t) {
      var {
        frameDuration: r
      } = this, n = this.animations.reduce((a, o) => o.update(r) || a, !1);
      if (n)
        return !0;
    }
    return !!(typeof e == "function" && e() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(t, e, r, n, a, o, s) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: h,
      viewPort: l,
      ctx: g,
      isFirstRender: f
    } = this, c = g.canvas;
    l.clear(), c.width && c.height ? l.setCurrent(c.width, c.height) : l.setCurrent(u, h);
    var d = t.getStyle("width"), p = t.getStyle("height");
    !e && (f || typeof n != "number" && typeof a != "number") && (d.hasValue() && (c.width = d.getPixels("x"), c.style && (c.style.width = "".concat(c.width, "px"))), p.hasValue() && (c.height = p.getPixels("y"), c.style && (c.style.height = "".concat(c.height, "px"))));
    var m = c.clientWidth || c.width, y = c.clientHeight || c.height;
    if (e && d.hasValue() && p.hasValue() && (m = d.getPixels("x"), y = p.getPixels("y")), l.setCurrent(m, y), typeof o == "number" && t.getAttribute("x", !0).setValue(o), typeof s == "number" && t.getAttribute("y", !0).setValue(s), typeof n == "number" || typeof a == "number") {
      var b = nt(t.getAttribute("viewBox").getString()), x = 0, w = 0;
      if (typeof n == "number") {
        var A = t.getStyle("width");
        A.hasValue() ? x = A.getPixels("x") / n : isNaN(b[2]) || (x = b[2] / n);
      }
      if (typeof a == "number") {
        var O = t.getStyle("height");
        O.hasValue() ? w = O.getPixels("y") / a : isNaN(b[3]) || (w = b[3] / a);
      }
      x || (x = w), w || (w = x), t.getAttribute("width", !0).setValue(n), t.getAttribute("height", !0).setValue(a);
      var S = t.getStyle("transform", !0, !0);
      S.setValue("".concat(S.getString(), " scale(").concat(1 / x, ", ").concat(1 / w, ")"));
    }
    r || g.clearRect(0, 0, m, y), t.render(g), f && (this.isFirstRender = !1);
  }
}
Ir.defaultWindow = ph;
Ir.defaultFetch = dh;
var {
  defaultFetch: a1
} = Ir, s1 = typeof DOMParser < "u" ? DOMParser : null;
class Hi {
  constructor() {
    var {
      fetch: t = a1,
      DOMParser: e = s1
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = t, this.DOMParser = e;
  }
  parse(t) {
    var e = this;
    return bt(function* () {
      return t.startsWith("<") ? e.parseFromString(t) : e.load(t);
    })();
  }
  parseFromString(t) {
    var e = new this.DOMParser();
    try {
      return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
    } catch {
      return this.checkDocument(e.parseFromString(t, "text/xml"));
    }
  }
  checkDocument(t) {
    var e = t.getElementsByTagName("parsererror")[0];
    if (e)
      throw new Error(e.textContent);
    return t;
  }
  load(t) {
    var e = this;
    return bt(function* () {
      var r = yield e.fetch(t), n = yield r.text();
      return e.parseFromString(n);
    })();
  }
}
class o1 {
  constructor(t, e) {
    this.type = "translate", this.point = null, this.point = L.parse(e);
  }
  apply(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.translate(e || 0, r || 0);
  }
  unapply(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.translate(-1 * e || 0, -1 * r || 0);
  }
  applyToPoint(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
  }
}
class u1 {
  constructor(t, e, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var n = nt(e);
    this.angle = new T(t, "angle", n[0]), this.originX = r[0], this.originY = r[1], this.cx = n[1] || 0, this.cy = n[2] || 0;
  }
  apply(t) {
    var {
      cx: e,
      cy: r,
      originX: n,
      originY: a,
      angle: o
    } = this, s = e + n.getPixels("x"), u = r + a.getPixels("y");
    t.translate(s, u), t.rotate(o.getRadians()), t.translate(-s, -u);
  }
  unapply(t) {
    var {
      cx: e,
      cy: r,
      originX: n,
      originY: a,
      angle: o
    } = this, s = e + n.getPixels("x"), u = r + a.getPixels("y");
    t.translate(s, u), t.rotate(-1 * o.getRadians()), t.translate(-s, -u);
  }
  applyToPoint(t) {
    var {
      cx: e,
      cy: r,
      angle: n
    } = this, a = n.getRadians();
    t.applyTransform([
      1,
      0,
      0,
      1,
      e || 0,
      r || 0
      // this.p.y
    ]), t.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]), t.applyTransform([
      1,
      0,
      0,
      1,
      -e || 0,
      -r || 0
      // -this.p.y
    ]);
  }
}
class h1 {
  constructor(t, e, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var n = L.parseScale(e);
    (n.x === 0 || n.y === 0) && (n.x = ie, n.y = ie), this.scale = n, this.originX = r[0], this.originY = r[1];
  }
  apply(t) {
    var {
      scale: {
        x: e,
        y: r
      },
      originX: n,
      originY: a
    } = this, o = n.getPixels("x"), s = a.getPixels("y");
    t.translate(o, s), t.scale(e, r || e), t.translate(-o, -s);
  }
  unapply(t) {
    var {
      scale: {
        x: e,
        y: r
      },
      originX: n,
      originY: a
    } = this, o = n.getPixels("x"), s = a.getPixels("y");
    t.translate(o, s), t.scale(1 / e, 1 / r || e), t.translate(-o, -s);
  }
  applyToPoint(t) {
    var {
      x: e,
      y: r
    } = this.scale;
    t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
  }
}
class mh {
  constructor(t, e, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = nt(e), this.originX = r[0], this.originY = r[1];
  }
  apply(t) {
    var {
      originX: e,
      originY: r,
      matrix: n
    } = this, a = e.getPixels("x"), o = r.getPixels("y");
    t.translate(a, o), t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), t.translate(-a, -o);
  }
  unapply(t) {
    var {
      originX: e,
      originY: r,
      matrix: n
    } = this, a = n[0], o = n[2], s = n[4], u = n[1], h = n[3], l = n[5], g = 0, f = 0, c = 1, d = 1 / (a * (h * c - l * f) - o * (u * c - l * g) + s * (u * f - h * g)), p = e.getPixels("x"), m = r.getPixels("y");
    t.translate(p, m), t.transform(d * (h * c - l * f), d * (l * g - u * c), d * (s * f - o * c), d * (a * c - s * g), d * (o * l - s * h), d * (s * u - a * l)), t.translate(-p, -m);
  }
  applyToPoint(t) {
    t.applyTransform(this.matrix);
  }
}
class yh extends mh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skew", this.angle = null, this.angle = new T(t, "angle", e);
  }
}
class l1 extends yh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class c1 extends yh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function g1(i) {
  return le(i).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function f1(i) {
  var [t, e] = i.split("(");
  return [t.trim(), e.trim().replace(")", "")];
}
class jt {
  constructor(t, e, r) {
    this.document = t, this.transforms = [];
    var n = g1(e);
    n.forEach((a) => {
      if (a !== "none") {
        var [o, s] = f1(a), u = jt.transformTypes[o];
        typeof u < "u" && this.transforms.push(new u(this.document, s, r));
      }
    });
  }
  static fromElement(t, e) {
    var r = e.getStyle("transform", !1, !0), [n, a = n] = e.getStyle("transform-origin", !1, !0).split(), o = [n, a];
    return r.hasValue() ? new jt(t, r.getString(), o) : null;
  }
  apply(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = 0; n < r; n++)
      e[n].apply(t);
  }
  unapply(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = r - 1; n >= 0; n--)
      e[n].unapply(t);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = 0; n < r; n++)
      e[n].applyToPoint(t);
  }
}
jt.transformTypes = {
  translate: o1,
  rotate: u1,
  scale: h1,
  matrix: mh,
  skewX: l1,
  skewY: c1
};
class R {
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = t, this.node = e, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!e || e.nodeType !== 1)) {
      if (Array.from(e.attributes).forEach((s) => {
        var u = qx(s.nodeName);
        this.attributes[u] = new T(t, u, s.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var n = this.getAttribute("style").getString().split(";").map((s) => s.trim());
        n.forEach((s) => {
          if (s) {
            var [u, h] = s.split(":").map((l) => l.trim());
            this.styles[u] = new T(t, u, h);
          }
        });
      }
      var {
        definitions: a
      } = t, o = this.getAttribute("id");
      o.hasValue() && (a[o.getString()] || (a[o.getString()] = this)), Array.from(e.childNodes).forEach((s) => {
        if (s.nodeType === 1)
          this.addChild(s);
        else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
          var u = t.createTextNode(s);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.attributes[t];
    if (!r && e) {
      var n = new T(this.document, t, "");
      return this.attributes[t] = n, n;
    }
    return r || T.empty(this.document);
  }
  getHrefAttribute() {
    for (var t in this.attributes)
      if (t === "href" || t.endsWith(":href"))
        return this.attributes[t];
    return T.empty(this.document);
  }
  getStyle(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = this.styles[t];
    if (n)
      return n;
    var a = this.getAttribute(t);
    if (a != null && a.hasValue())
      return this.styles[t] = a, a;
    if (!r) {
      var {
        parent: o
      } = this;
      if (o) {
        var s = o.getStyle(t);
        if (s != null && s.hasValue())
          return s;
      }
    }
    if (e) {
      var u = new T(this.document, t, "");
      return this.styles[t] = u, u;
    }
    return n || T.empty(this.document);
  }
  render(t) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (t.save(), this.getStyle("mask").hasValue()) {
        var e = this.getStyle("mask").getDefinition();
        e && (this.applyEffects(t), e.apply(t, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(t), r.apply(t, this));
      } else
        this.setContext(t), this.renderChildren(t), this.clearContext(t);
      t.restore();
    }
  }
  setContext(t) {
  }
  applyEffects(t) {
    var e = jt.fromElement(this.document, this);
    e && e.apply(t);
    var r = this.getStyle("clip-path", !1, !0);
    if (r.hasValue()) {
      var n = r.getDefinition();
      n && n.apply(t);
    }
  }
  clearContext(t) {
  }
  renderChildren(t) {
    this.children.forEach((e) => {
      e.render(t);
    });
  }
  addChild(t) {
    var e = t instanceof R ? t : this.document.createElement(t);
    e.parent = this, R.ignoreChildTypes.includes(e.type) || this.children.push(e);
  }
  matchesSelector(t) {
    var e, {
      node: r
    } = this;
    if (typeof r.matches == "function")
      return r.matches(t);
    var n = (e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, "class");
    return !n || n === "" ? !1 : n.split(" ").some((a) => ".".concat(a) === t);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: t,
      stylesSpecificity: e
    } = this.document;
    for (var r in t)
      if (!r.startsWith("@") && this.matchesSelector(r)) {
        var n = t[r], a = e[r];
        if (n)
          for (var o in n) {
            var s = this.stylesSpecificity[o];
            typeof s > "u" && (s = "000"), a >= s && (this.styles[o] = n[o], this.stylesSpecificity[o] = a);
          }
      }
  }
  removeStyles(t, e) {
    var r = e.reduce((n, a) => {
      var o = t.getStyle(a);
      if (!o.hasValue())
        return n;
      var s = o.getString();
      return o.setValue(""), [...n, [a, s]];
    }, []);
    return r;
  }
  restoreStyles(t, e) {
    e.forEach((r) => {
      var [n, a] = r;
      t.getStyle(n, !0).setValue(a);
    });
  }
  isFirstChild() {
    var t;
    return ((t = this.parent) === null || t === void 0 ? void 0 : t.children.indexOf(this)) === 0;
  }
}
R.ignoreChildTypes = ["title"];
class p1 extends R {
  constructor(t, e, r) {
    super(t, e, r);
  }
}
function d1(i) {
  var t = i.trim();
  return /^('|")/.test(t) ? t : '"'.concat(t, '"');
}
function m1(i) {
  return typeof process > "u" ? i : i.trim().split(",").map(d1).join(",");
}
function y1(i) {
  if (!i)
    return "";
  var t = i.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(t) ? t : "";
  }
}
function v1(i) {
  if (!i)
    return "";
  var t = i.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^[\d.]+$/.test(t) ? t : "";
  }
}
class J {
  constructor(t, e, r, n, a, o) {
    var s = o ? typeof o == "string" ? J.parse(o) : o : {};
    this.fontFamily = a || s.fontFamily, this.fontSize = n || s.fontSize, this.fontStyle = t || s.fontStyle, this.fontWeight = r || s.fontWeight, this.fontVariant = e || s.fontVariant;
  }
  static parse() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, r = "", n = "", a = "", o = "", s = "", u = le(t).trim().split(" "), h = {
      fontSize: !1,
      fontStyle: !1,
      fontWeight: !1,
      fontVariant: !1
    };
    return u.forEach((l) => {
      switch (!0) {
        case (!h.fontStyle && J.styles.includes(l)):
          l !== "inherit" && (r = l), h.fontStyle = !0;
          break;
        case (!h.fontVariant && J.variants.includes(l)):
          l !== "inherit" && (n = l), h.fontStyle = !0, h.fontVariant = !0;
          break;
        case (!h.fontWeight && J.weights.includes(l)):
          l !== "inherit" && (a = l), h.fontStyle = !0, h.fontVariant = !0, h.fontWeight = !0;
          break;
        case !h.fontSize:
          l !== "inherit" && ([o] = l.split("/")), h.fontStyle = !0, h.fontVariant = !0, h.fontWeight = !0, h.fontSize = !0;
          break;
        default:
          l !== "inherit" && (s += l);
      }
    }), new J(r, n, a, o, s, e);
  }
  toString() {
    return [
      y1(this.fontStyle),
      this.fontVariant,
      v1(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      m1(this.fontFamily)
    ].join(" ").trim();
  }
}
J.styles = "normal|italic|oblique|inherit";
J.variants = "normal|small-caps|inherit";
J.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class ft {
  constructor() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = t, this.y1 = e, this.x2 = r, this.y2 = n, this.addPoint(t, e), this.addPoint(r, n);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(t, e) {
    typeof t < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), typeof e < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
  }
  addX(t) {
    this.addPoint(t, null);
  }
  addY(t) {
    this.addPoint(null, t);
  }
  addBoundingBox(t) {
    if (t) {
      var {
        x1: e,
        y1: r,
        x2: n,
        y2: a
      } = t;
      this.addPoint(e, r), this.addPoint(n, a);
    }
  }
  sumCubic(t, e, r, n, a) {
    return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * n + Math.pow(t, 3) * a;
  }
  bezierCurveAdd(t, e, r, n, a) {
    var o = 6 * e - 12 * r + 6 * n, s = -3 * e + 9 * r - 9 * n + 3 * a, u = 3 * r - 3 * e;
    if (s === 0) {
      if (o === 0)
        return;
      var h = -u / o;
      0 < h && h < 1 && (t ? this.addX(this.sumCubic(h, e, r, n, a)) : this.addY(this.sumCubic(h, e, r, n, a)));
      return;
    }
    var l = Math.pow(o, 2) - 4 * u * s;
    if (!(l < 0)) {
      var g = (-o + Math.sqrt(l)) / (2 * s);
      0 < g && g < 1 && (t ? this.addX(this.sumCubic(g, e, r, n, a)) : this.addY(this.sumCubic(g, e, r, n, a)));
      var f = (-o - Math.sqrt(l)) / (2 * s);
      0 < f && f < 1 && (t ? this.addX(this.sumCubic(f, e, r, n, a)) : this.addY(this.sumCubic(f, e, r, n, a)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(t, e, r, n, a, o, s, u) {
    this.addPoint(t, e), this.addPoint(s, u), this.bezierCurveAdd(!0, t, r, a, s), this.bezierCurveAdd(!1, e, n, o, u);
  }
  addQuadraticCurve(t, e, r, n, a, o) {
    var s = t + 0.6666666666666666 * (r - t), u = e + 2 / 3 * (n - e), h = s + 1 / 3 * (a - t), l = u + 1 / 3 * (o - e);
    this.addBezierCurve(t, e, s, h, u, l, a, o);
  }
  isPointInBox(t, e) {
    var {
      x1: r,
      y1: n,
      x2: a,
      y2: o
    } = this;
    return r <= t && t <= a && n <= e && e <= o;
  }
}
class E extends v {
  constructor(t) {
    super(t.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new L(0, 0), this.control = new L(0, 0), this.current = new L(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: t,
      commands: e
    } = this;
    return t >= e.length - 1;
  }
  next() {
    var t = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = t, t;
  }
  getPoint() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new L(this.command[t], this.command[e]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(t, e) {
    var r = this.getPoint(t, e);
    return this.control = r, r;
  }
  getAsCurrentPoint(t, e) {
    var r = this.getPoint(t, e);
    return this.current = r, r;
  }
  getReflectedControlPoint() {
    var t = this.previousCommand.type;
    if (t !== v.CURVE_TO && t !== v.SMOOTH_CURVE_TO && t !== v.QUAD_TO && t !== v.SMOOTH_QUAD_TO)
      return this.current;
    var {
      current: {
        x: e,
        y: r
      },
      control: {
        x: n,
        y: a
      }
    } = this, o = new L(2 * e - n, 2 * r - a);
    return o;
  }
  makeAbsolute(t) {
    if (this.command.relative) {
      var {
        x: e,
        y: r
      } = this.current;
      t.x += e, t.y += r;
    }
    return t;
  }
  addMarker(t, e, r) {
    var {
      points: n,
      angles: a
    } = this;
    r && a.length > 0 && !a[a.length - 1] && (a[a.length - 1] = n[n.length - 1].angleTo(r)), this.addMarkerAngle(t, e ? e.angleTo(t) : null);
  }
  addMarkerAngle(t, e) {
    this.points.push(t), this.angles.push(e);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: t
    } = this, e = t.length, r = 0; r < e; r++)
      if (!t[r]) {
        for (var n = r + 1; n < e; n++)
          if (t[n]) {
            t[r] = t[n];
            break;
          }
      }
    return t;
  }
}
class Ht extends R {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = !1;
  }
  calculateOpacity() {
    for (var t = 1, e = this; e; ) {
      var r = e.getStyle("opacity", !1, !0);
      r.hasValue(!0) && (t *= r.getNumber()), e = e.parent;
    }
    return t;
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!e) {
      var r = this.getStyle("fill"), n = this.getStyle("fill-opacity"), a = this.getStyle("stroke"), o = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, n);
        s && (t.fillStyle = s);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (t.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (n.hasValue()) {
        var h = new T(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
        t.fillStyle = h;
      }
      if (a.isUrlDefinition()) {
        var l = a.getFillStyleDefinition(this, o);
        l && (t.strokeStyle = l);
      } else if (a.hasValue()) {
        a.getString() === "currentColor" && a.setValue(this.getStyle("color").getColor());
        var g = a.getString();
        g !== "inherit" && (t.strokeStyle = g === "none" ? "rgba(0,0,0,0)" : g);
      }
      if (o.hasValue()) {
        var f = new T(this.document, "stroke", t.strokeStyle).addOpacity(o).getString();
        t.strokeStyle = f;
      }
      var c = this.getStyle("stroke-width");
      if (c.hasValue()) {
        var d = c.getPixels();
        t.lineWidth = d || ie;
      }
      var p = this.getStyle("stroke-linecap"), m = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), b = this.getStyle("stroke-dasharray"), x = this.getStyle("stroke-dashoffset");
      if (p.hasValue() && (t.lineCap = p.getString()), m.hasValue() && (t.lineJoin = m.getString()), y.hasValue() && (t.miterLimit = y.getNumber()), b.hasValue() && b.getString() !== "none") {
        var w = nt(b.getString());
        typeof t.setLineDash < "u" ? t.setLineDash(w) : typeof t.webkitLineDash < "u" ? t.webkitLineDash = w : typeof t.mozDash < "u" && !(w.length === 1 && w[0] === 0) && (t.mozDash = w);
        var A = x.getPixels();
        typeof t.lineDashOffset < "u" ? t.lineDashOffset = A : typeof t.webkitLineDashOffset < "u" ? t.webkitLineDashOffset = A : typeof t.mozDashOffset < "u" && (t.mozDashOffset = A);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof t.font < "u") {
      var O = this.getStyle("font"), S = this.getStyle("font-style"), C = this.getStyle("font-variant"), V = this.getStyle("font-weight"), I = this.getStyle("font-size"), U = this.getStyle("font-family"), N = new J(S.getString(), C.getString(), V.getString(), I.hasValue() ? "".concat(I.getPixels(!0), "px") : "", U.getString(), J.parse(O.getString(), t.font));
      S.setValue(N.fontStyle), C.setValue(N.fontVariant), V.setValue(N.fontWeight), I.setValue(N.fontSize), U.setValue(N.fontFamily), t.font = N.toString(), I.isPixels() && (this.document.emSize = I.getPixels(), this.modifiedEmSizeStack = !0);
    }
    e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity());
  }
  clearContext(t) {
    super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class P extends Ht {
  constructor(t, e, r) {
    super(t, e, r), this.type = "path", this.pathParser = null, this.pathParser = new E(this.getAttribute("d").getString());
  }
  path(t) {
    var {
      pathParser: e
    } = this, r = new ft();
    for (e.reset(), t && t.beginPath(); !e.isEnd(); )
      switch (e.next().type) {
        case E.MOVE_TO:
          this.pathM(t, r);
          break;
        case E.LINE_TO:
          this.pathL(t, r);
          break;
        case E.HORIZ_LINE_TO:
          this.pathH(t, r);
          break;
        case E.VERT_LINE_TO:
          this.pathV(t, r);
          break;
        case E.CURVE_TO:
          this.pathC(t, r);
          break;
        case E.SMOOTH_CURVE_TO:
          this.pathS(t, r);
          break;
        case E.QUAD_TO:
          this.pathQ(t, r);
          break;
        case E.SMOOTH_QUAD_TO:
          this.pathT(t, r);
          break;
        case E.ARC:
          this.pathA(t, r);
          break;
        case E.CLOSE_PATH:
          this.pathZ(t, r);
          break;
      }
    return r;
  }
  getBoundingBox(t) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: t
    } = this, e = t.getMarkerPoints(), r = t.getMarkerAngles(), n = e.map((a, o) => [a, r[o]]);
    return n;
  }
  renderChildren(t) {
    this.path(t), this.document.screen.mouse.checkPath(this, t);
    var e = this.getStyle("fill-rule");
    t.fillStyle !== "" && (e.getString("inherit") !== "inherit" ? t.fill(e.getString()) : t.fill()), t.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore()) : t.stroke());
    var r = this.getMarkers();
    if (r) {
      var n = r.length - 1, a = this.getStyle("marker-start"), o = this.getStyle("marker-mid"), s = this.getStyle("marker-end");
      if (a.isUrlDefinition()) {
        var u = a.getDefinition(), [h, l] = r[0];
        u.render(t, h, l);
      }
      if (o.isUrlDefinition())
        for (var g = o.getDefinition(), f = 1; f < n; f++) {
          var [c, d] = r[f];
          g.render(t, c, d);
        }
      if (s.isUrlDefinition()) {
        var p = s.getDefinition(), [m, y] = r[n];
        p.render(t, m, y);
      }
    }
  }
  static pathM(t) {
    var e = t.getAsCurrentPoint();
    return t.start = t.current, {
      point: e
    };
  }
  pathM(t, e) {
    var {
      pathParser: r
    } = this, {
      point: n
    } = P.pathM(r), {
      x: a,
      y: o
    } = n;
    r.addMarker(n), e.addPoint(a, o), t && t.moveTo(a, o);
  }
  static pathL(t) {
    var {
      current: e
    } = t, r = t.getAsCurrentPoint();
    return {
      current: e,
      point: r
    };
  }
  pathL(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = P.pathL(r), {
      x: o,
      y: s
    } = a;
    r.addMarker(a, n), e.addPoint(o, s), t && t.lineTo(o, s);
  }
  static pathH(t) {
    var {
      current: e,
      command: r
    } = t, n = new L((r.relative ? e.x : 0) + r.x, e.y);
    return t.current = n, {
      current: e,
      point: n
    };
  }
  pathH(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = P.pathH(r), {
      x: o,
      y: s
    } = a;
    r.addMarker(a, n), e.addPoint(o, s), t && t.lineTo(o, s);
  }
  static pathV(t) {
    var {
      current: e,
      command: r
    } = t, n = new L(e.x, (r.relative ? e.y : 0) + r.y);
    return t.current = n, {
      current: e,
      point: n
    };
  }
  pathV(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = P.pathV(r), {
      x: o,
      y: s
    } = a;
    r.addMarker(a, n), e.addPoint(o, s), t && t.lineTo(o, s);
  }
  static pathC(t) {
    var {
      current: e
    } = t, r = t.getPoint("x1", "y1"), n = t.getAsControlPoint("x2", "y2"), a = t.getAsCurrentPoint();
    return {
      current: e,
      point: r,
      controlPoint: n,
      currentPoint: a
    };
  }
  pathC(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a,
      controlPoint: o,
      currentPoint: s
    } = P.pathC(r);
    r.addMarker(s, o, a), e.addBezierCurve(n.x, n.y, a.x, a.y, o.x, o.y, s.x, s.y), t && t.bezierCurveTo(a.x, a.y, o.x, o.y, s.x, s.y);
  }
  static pathS(t) {
    var {
      current: e
    } = t, r = t.getReflectedControlPoint(), n = t.getAsControlPoint("x2", "y2"), a = t.getAsCurrentPoint();
    return {
      current: e,
      point: r,
      controlPoint: n,
      currentPoint: a
    };
  }
  pathS(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a,
      controlPoint: o,
      currentPoint: s
    } = P.pathS(r);
    r.addMarker(s, o, a), e.addBezierCurve(n.x, n.y, a.x, a.y, o.x, o.y, s.x, s.y), t && t.bezierCurveTo(a.x, a.y, o.x, o.y, s.x, s.y);
  }
  static pathQ(t) {
    var {
      current: e
    } = t, r = t.getAsControlPoint("x1", "y1"), n = t.getAsCurrentPoint();
    return {
      current: e,
      controlPoint: r,
      currentPoint: n
    };
  }
  pathQ(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      controlPoint: a,
      currentPoint: o
    } = P.pathQ(r);
    r.addMarker(o, a, a), e.addQuadraticCurve(n.x, n.y, a.x, a.y, o.x, o.y), t && t.quadraticCurveTo(a.x, a.y, o.x, o.y);
  }
  static pathT(t) {
    var {
      current: e
    } = t, r = t.getReflectedControlPoint();
    t.control = r;
    var n = t.getAsCurrentPoint();
    return {
      current: e,
      controlPoint: r,
      currentPoint: n
    };
  }
  pathT(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      controlPoint: a,
      currentPoint: o
    } = P.pathT(r);
    r.addMarker(o, a, a), e.addQuadraticCurve(n.x, n.y, a.x, a.y, o.x, o.y), t && t.quadraticCurveTo(a.x, a.y, o.x, o.y);
  }
  static pathA(t) {
    var {
      current: e,
      command: r
    } = t, {
      rX: n,
      rY: a,
      xRot: o,
      lArcFlag: s,
      sweepFlag: u
    } = r, h = o * (Math.PI / 180), l = t.getAsCurrentPoint(), g = new L(Math.cos(h) * (e.x - l.x) / 2 + Math.sin(h) * (e.y - l.y) / 2, -Math.sin(h) * (e.x - l.x) / 2 + Math.cos(h) * (e.y - l.y) / 2), f = Math.pow(g.x, 2) / Math.pow(n, 2) + Math.pow(g.y, 2) / Math.pow(a, 2);
    f > 1 && (n *= Math.sqrt(f), a *= Math.sqrt(f));
    var c = (s === u ? -1 : 1) * Math.sqrt((Math.pow(n, 2) * Math.pow(a, 2) - Math.pow(n, 2) * Math.pow(g.y, 2) - Math.pow(a, 2) * Math.pow(g.x, 2)) / (Math.pow(n, 2) * Math.pow(g.y, 2) + Math.pow(a, 2) * Math.pow(g.x, 2)));
    isNaN(c) && (c = 0);
    var d = new L(c * n * g.y / a, c * -a * g.x / n), p = new L((e.x + l.x) / 2 + Math.cos(h) * d.x - Math.sin(h) * d.y, (e.y + l.y) / 2 + Math.sin(h) * d.x + Math.cos(h) * d.y), m = wo([1, 0], [(g.x - d.x) / n, (g.y - d.y) / a]), y = [(g.x - d.x) / n, (g.y - d.y) / a], b = [(-g.x - d.x) / n, (-g.y - d.y) / a], x = wo(y, b);
    return xn(y, b) <= -1 && (x = Math.PI), xn(y, b) >= 1 && (x = 0), {
      currentPoint: l,
      rX: n,
      rY: a,
      sweepFlag: u,
      xAxisRotation: h,
      centp: p,
      a1: m,
      ad: x
    };
  }
  pathA(t, e) {
    var {
      pathParser: r
    } = this, {
      currentPoint: n,
      rX: a,
      rY: o,
      sweepFlag: s,
      xAxisRotation: u,
      centp: h,
      a1: l,
      ad: g
    } = P.pathA(r), f = 1 - s ? 1 : -1, c = l + f * (g / 2), d = new L(h.x + a * Math.cos(c), h.y + o * Math.sin(c));
    if (r.addMarkerAngle(d, c - f * Math.PI / 2), r.addMarkerAngle(n, c - f * Math.PI), e.addPoint(n.x, n.y), t && !isNaN(l) && !isNaN(g)) {
      var p = a > o ? a : o, m = a > o ? 1 : a / o, y = a > o ? o / a : 1;
      t.translate(h.x, h.y), t.rotate(u), t.scale(m, y), t.arc(0, 0, p, l, l + g, !!(1 - s)), t.scale(1 / m, 1 / y), t.rotate(-u), t.translate(-h.x, -h.y);
    }
  }
  static pathZ(t) {
    t.current = t.start;
  }
  pathZ(t, e) {
    P.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
  }
}
class vh extends P {
  constructor(t, e, r) {
    super(t, e, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class Ct extends Ht {
  constructor(t, e, r) {
    super(t, e, new.target === Ct ? !0 : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(t, e);
    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    r && (t.textBaseline = r);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(t) {
    if (this.type !== "text")
      return this.getTElementBoundingBox(t);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
    var e = null;
    return this.children.forEach((r, n) => {
      var a = this.getChildBoundingBox(t, this, this, n);
      e ? e.addBoundingBox(a) : e = a;
    }), e;
  }
  getFontSize() {
    var {
      document: t,
      parent: e
    } = this, r = J.parse(t.ctx.font).fontSize, n = e.getStyle("font-size").getNumber(r);
    return n;
  }
  getTElementBoundingBox(t) {
    var e = this.getFontSize();
    return new ft(this.x, this.y - e, this.x + this.measureText(t), this.y);
  }
  getGlyph(t, e, r) {
    var n = e[r], a = null;
    if (t.isArabic) {
      var o = e.length, s = e[r - 1], u = e[r + 1], h = "isolated";
      if ((r === 0 || s === " ") && r < o - 1 && u !== " " && (h = "terminal"), r > 0 && s !== " " && r < o - 1 && u !== " " && (h = "medial"), r > 0 && s !== " " && (r === o - 1 || u === " ") && (h = "initial"), typeof t.glyphs[n] < "u") {
        var l = t.glyphs[n];
        a = l instanceof vh ? l : l[h];
      }
    } else
      a = t.glyphs[n];
    return a || (a = t.missingGlyph), a;
  }
  getText() {
    return "";
  }
  getTextFromNode(t) {
    var e = t || this.node, r = Array.from(e.parentNode.childNodes), n = r.indexOf(e), a = r.length - 1, o = le(
      // textNode.value
      // || textNode.text
      e.textContent || ""
    );
    return n === 0 && (o = Xx(o)), n === a && (o = Yx(o)), o;
  }
  renderChildren(t) {
    if (this.type !== "text") {
      this.renderTElementChildren(t);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t), this.children.forEach((r, n) => {
      this.renderChild(t, this, this, n);
    });
    var {
      mouse: e
    } = this.document.screen;
    e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
  }
  renderTElementChildren(t) {
    var {
      document: e,
      parent: r
    } = this, n = this.getText(), a = r.getStyle("font-family").getDefinition();
    if (a) {
      for (var {
        unitsPerEm: o
      } = a.fontFace, s = J.parse(e.ctx.font), u = r.getStyle("font-size").getNumber(s.fontSize), h = r.getStyle("font-style").getString(s.fontStyle), l = u / o, g = a.isRTL ? n.split("").reverse().join("") : n, f = nt(r.getAttribute("dx").getString()), c = g.length, d = 0; d < c; d++) {
        var p = this.getGlyph(a, g, d);
        t.translate(this.x, this.y), t.scale(l, -l);
        var m = t.lineWidth;
        t.lineWidth = t.lineWidth * o / u, h === "italic" && t.transform(1, 0, 0.4, 1, 0, 0), p.render(t), h === "italic" && t.transform(1, 0, -0.4, 1, 0, 0), t.lineWidth = m, t.scale(1 / l, -1 / l), t.translate(-this.x, -this.y), this.x += u * (p.horizAdvX || a.horizAdvX) / o, typeof f[d] < "u" && !isNaN(f[d]) && (this.x += f[d]);
      }
      return;
    }
    var {
      x: y,
      y: b
    } = this;
    t.fillStyle && t.fillText(n, y, b), t.strokeStyle && t.strokeText(n, y, b);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var t = this.leafTexts[this.textChunkStart], e = t.getStyle("text-anchor").getString("start"), r = !1, n = 0;
      e === "start" && !r || e === "end" && r ? n = t.x - this.minX : e === "end" && !r || e === "start" && r ? n = t.x - this.maxX : n = t.x - (this.minX + this.maxX) / 2;
      for (var a = this.textChunkStart; a < this.leafTexts.length; a++)
        this.leafTexts[a].x += n;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(t) {
    this.children.forEach((e, r) => {
      this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(t, e, r, n) {
    var a = r.children[n];
    a.children.length > 0 ? a.children.forEach((o, s) => {
      e.adjustChildCoordinatesRecursiveCore(t, e, a, s);
    }) : this.adjustChildCoordinates(t, e, r, n);
  }
  adjustChildCoordinates(t, e, r, n) {
    var a = r.children[n];
    if (typeof a.measureText != "function")
      return a;
    t.save(), a.setContext(t, !0);
    var o = a.getAttribute("x"), s = a.getAttribute("y"), u = a.getAttribute("dx"), h = a.getAttribute("dy"), l = a.getStyle("font-family").getDefinition(), g = !!l && l.isRTL;
    n === 0 && (o.hasValue() || o.setValue(a.getInheritedAttribute("x")), s.hasValue() || s.setValue(a.getInheritedAttribute("y")), u.hasValue() || u.setValue(a.getInheritedAttribute("dx")), h.hasValue() || h.setValue(a.getInheritedAttribute("dy")));
    var f = a.measureText(t);
    return g && (e.x -= f), o.hasValue() ? (e.applyAnchoring(), a.x = o.getPixels("x"), u.hasValue() && (a.x += u.getPixels("x"))) : (u.hasValue() && (e.x += u.getPixels("x")), a.x = e.x), e.x = a.x, g || (e.x += f), s.hasValue() ? (a.y = s.getPixels("y"), h.hasValue() && (a.y += h.getPixels("y"))) : (h.hasValue() && (e.y += h.getPixels("y")), a.y = e.y), e.y = a.y, e.leafTexts.push(a), e.minX = Math.min(e.minX, a.x, a.x + f), e.maxX = Math.max(e.maxX, a.x, a.x + f), a.clearContext(t), t.restore(), a;
  }
  getChildBoundingBox(t, e, r, n) {
    var a = r.children[n];
    if (typeof a.getBoundingBox != "function")
      return null;
    var o = a.getBoundingBox(t);
    return o ? (a.children.forEach((s, u) => {
      var h = e.getChildBoundingBox(t, e, a, u);
      o.addBoundingBox(h);
    }), o) : null;
  }
  renderChild(t, e, r, n) {
    var a = r.children[n];
    a.render(t), a.children.forEach((o, s) => {
      e.renderChild(t, e, a, s);
    });
  }
  measureText(t) {
    var {
      measureCache: e
    } = this;
    if (~e)
      return e;
    var r = this.getText(), n = this.measureTargetText(t, r);
    return this.measureCache = n, n;
  }
  measureTargetText(t, e) {
    if (!e.length)
      return 0;
    var {
      parent: r
    } = this, n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (var a = this.getFontSize(), o = n.isRTL ? e.split("").reverse().join("") : e, s = nt(r.getAttribute("dx").getString()), u = o.length, h = 0, l = 0; l < u; l++) {
        var g = this.getGlyph(n, o, l);
        h += (g.horizAdvX || n.horizAdvX) * a / n.fontFace.unitsPerEm, typeof s[l] < "u" && !isNaN(s[l]) && (h += s[l]);
      }
      return h;
    }
    if (!t.measureText)
      return e.length * 10;
    t.save(), this.setContext(t, !0);
    var {
      width: f
    } = t.measureText(e);
    return this.clearContext(t), t.restore(), f;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(t) {
    for (var e = this; e instanceof Ct && e.isFirstChild(); ) {
      var r = e.parent.getAttribute(t);
      if (r.hasValue(!0))
        return r.getValue("0");
      e = e.parent;
    }
    return null;
  }
}
class _r extends Ct {
  constructor(t, e, r) {
    super(t, e, new.target === _r ? !0 : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class x1 extends _r {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class Ve extends Ht {
  constructor() {
    super(...arguments), this.type = "svg", this.root = !1;
  }
  setContext(t) {
    var e, {
      document: r
    } = this, {
      screen: n,
      window: a
    } = r, o = t.canvas;
    if (n.setDefaults(t), o.style && typeof t.font < "u" && a && typeof a.getComputedStyle < "u") {
      t.font = a.getComputedStyle(o).getPropertyValue("font");
      var s = new T(r, "fontSize", J.parse(t.font).fontSize);
      s.hasValue() && (r.rootEmSize = s.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: h
    } = n.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var l = this.getAttribute("refX"), g = this.getAttribute("refY"), f = this.getAttribute("viewBox"), c = f.hasValue() ? nt(f.getString()) : null, d = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", p = 0, m = 0, y = 0, b = 0;
    c && (p = c[0], m = c[1]), this.root || (u = this.getStyle("width").getPixels("x"), h = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = p, b = m, p = 0, m = 0)), n.viewPort.setCurrent(u, h), this.node && (!this.parent || ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), c && (u = c[2], h = c[3]), r.setViewBox({
      ctx: t,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: n.viewPort.width,
      desiredWidth: u,
      height: n.viewPort.height,
      desiredHeight: h,
      minX: p,
      minY: m,
      refX: l.getValue(),
      refY: g.getValue(),
      clip: d,
      clipX: y,
      clipY: b
    }), c && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(u, h));
  }
  clearContext(t) {
    super.clearContext(t), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = this.getAttribute("width", !0), a = this.getAttribute("height", !0), o = this.getAttribute("viewBox"), s = this.getAttribute("style"), u = n.getNumber(0), h = a.getNumber(0);
    if (r)
      if (typeof r == "string")
        this.getAttribute("preserveAspectRatio", !0).setValue(r);
      else {
        var l = this.getAttribute("preserveAspectRatio");
        l.hasValue() && l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (n.setValue(t), a.setValue(e), o.hasValue() || o.setValue("0 0 ".concat(u || t, " ").concat(h || e)), s.hasValue()) {
      var g = this.getStyle("width"), f = this.getStyle("height");
      g.hasValue() && g.setValue("".concat(t, "px")), f.hasValue() && f.setValue("".concat(e, "px"));
    }
  }
}
class xh extends P {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(t) {
    var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), n = this.getStyle("width", !1, !0).getPixels("x"), a = this.getStyle("height", !1, !0).getPixels("y"), o = this.getAttribute("rx"), s = this.getAttribute("ry"), u = o.getPixels("x"), h = s.getPixels("y");
    if (o.hasValue() && !s.hasValue() && (h = u), s.hasValue() && !o.hasValue() && (u = h), u = Math.min(u, n / 2), h = Math.min(h, a / 2), t) {
      var l = 4 * ((Math.sqrt(2) - 1) / 3);
      t.beginPath(), a > 0 && n > 0 && (t.moveTo(e + u, r), t.lineTo(e + n - u, r), t.bezierCurveTo(e + n - u + l * u, r, e + n, r + h - l * h, e + n, r + h), t.lineTo(e + n, r + a - h), t.bezierCurveTo(e + n, r + a - h + l * h, e + n - u + l * u, r + a, e + n - u, r + a), t.lineTo(e + u, r + a), t.bezierCurveTo(e + u - l * u, r + a, e, r + a - h + l * h, e, r + a - h), t.lineTo(e, r + h), t.bezierCurveTo(e, r + h - l * h, e + u - l * u, r, e + u, r), t.closePath());
    }
    return new ft(e, r, e + n, r + a);
  }
  getMarkers() {
    return null;
  }
}
class b1 extends P {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(t) {
    var e = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), n = this.getAttribute("r").getPixels();
    return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, Math.PI * 2, !1), t.closePath()), new ft(e - n, r - n, e + n, r + n);
  }
  getMarkers() {
    return null;
  }
}
class w1 extends P {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(t) {
    var e = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), n = this.getAttribute("ry").getPixels("y"), a = this.getAttribute("cx").getPixels("x"), o = this.getAttribute("cy").getPixels("y");
    return t && r > 0 && n > 0 && (t.beginPath(), t.moveTo(a + r, o), t.bezierCurveTo(a + r, o + e * n, a + e * r, o + n, a, o + n), t.bezierCurveTo(a - e * r, o + n, a - r, o + e * n, a - r, o), t.bezierCurveTo(a - r, o - e * n, a - e * r, o - n, a, o - n), t.bezierCurveTo(a + e * r, o - n, a + r, o - e * n, a + r, o), t.closePath()), new ft(a - r, o - n, a + r, o + n);
  }
  getMarkers() {
    return null;
  }
}
class S1 extends P {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new L(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new L(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(t) {
    var [{
      x: e,
      y: r
    }, {
      x: n,
      y: a
    }] = this.getPoints();
    return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(n, a)), new ft(e, r, n, a);
  }
  getMarkers() {
    var [t, e] = this.getPoints(), r = t.angleTo(e);
    return [[t, r], [e, r]];
  }
}
class bh extends P {
  constructor(t, e, r) {
    super(t, e, r), this.type = "polyline", this.points = [], this.points = L.parsePath(this.getAttribute("points").getString());
  }
  path(t) {
    var {
      points: e
    } = this, [{
      x: r,
      y: n
    }] = e, a = new ft(r, n);
    return t && (t.beginPath(), t.moveTo(r, n)), e.forEach((o) => {
      var {
        x: s,
        y: u
      } = o;
      a.addPoint(s, u), t && t.lineTo(s, u);
    }), a;
  }
  getMarkers() {
    var {
      points: t
    } = this, e = t.length - 1, r = [];
    return t.forEach((n, a) => {
      a !== e && r.push([n, n.angleTo(t[a + 1])]);
    }), r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]), r;
  }
}
class T1 extends bh {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(t) {
    var e = super.path(t), [{
      x: r,
      y: n
    }] = this.points;
    return t && (t.lineTo(r, n), t.closePath()), e;
  }
}
class O1 extends R {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(t, e, r) {
    var n = this.getStyle("width").getPixels("x", !0), a = this.getStyle("height").getPixels("y", !0), o = new Ve(this.document, null);
    o.attributes.viewBox = new T(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.width = new T(this.document, "width", "".concat(n, "px")), o.attributes.height = new T(this.document, "height", "".concat(a, "px")), o.attributes.transform = new T(this.document, "transform", this.getAttribute("patternTransform").getValue()), o.children = this.children;
    var s = this.document.createCanvas(n, a), u = s.getContext("2d"), h = this.getAttribute("x"), l = this.getAttribute("y");
    h.hasValue() && l.hasValue() && u.translate(h.getPixels("x", !0), l.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var g = -1; g <= 1; g++)
      for (var f = -1; f <= 1; f++)
        u.save(), o.attributes.x = new T(this.document, "x", g * s.width), o.attributes.y = new T(this.document, "y", f * s.height), o.render(u), u.restore();
    var c = t.createPattern(s, "repeat");
    return c;
  }
}
class A1 extends R {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(t, e, r) {
    if (e) {
      var {
        x: n,
        y: a
      } = e, o = this.getAttribute("orient").getString("auto"), s = this.getAttribute("markerUnits").getString("strokeWidth");
      t.translate(n, a), o === "auto" && t.rotate(r), s === "strokeWidth" && t.scale(t.lineWidth, t.lineWidth), t.save();
      var u = new Ve(this.document, null);
      u.type = this.type, u.attributes.viewBox = new T(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new T(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new T(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new T(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new T(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new T(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new T(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new T(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(t), t.restore(), s === "strokeWidth" && t.scale(1 / t.lineWidth, 1 / t.lineWidth), o === "auto" && t.rotate(-r), t.translate(-n, -a);
    }
  }
}
class E1 extends R {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class ia extends Ht {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(t) {
    var e = new ft();
    return this.children.forEach((r) => {
      e.addBoundingBox(r.getBoundingBox(t));
    }), e;
  }
}
class wh extends R {
  constructor(t, e, r) {
    super(t, e, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: n,
      children: a
    } = this;
    a.forEach((o) => {
      o.type === "stop" && n.push(o);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(t, e, r) {
    var n = this;
    this.getHrefAttribute().hasValue() && (n = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(n));
    var {
      stops: a
    } = n, o = this.getGradient(t, e);
    if (!o)
      return this.addParentOpacity(r, a[a.length - 1].color);
    if (a.forEach((m) => {
      o.addColorStop(m.offset, this.addParentOpacity(r, m.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: s
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: h
      } = s.screen, [l] = h.viewPorts, g = new xh(s, null);
      g.attributes.x = new T(s, "x", -u / 3), g.attributes.y = new T(s, "y", -u / 3), g.attributes.width = new T(s, "width", u), g.attributes.height = new T(s, "height", u);
      var f = new ia(s, null);
      f.attributes.transform = new T(s, "transform", this.getAttribute("gradientTransform").getValue()), f.children = [g];
      var c = new Ve(s, null);
      c.attributes.x = new T(s, "x", 0), c.attributes.y = new T(s, "y", 0), c.attributes.width = new T(s, "width", l.width), c.attributes.height = new T(s, "height", l.height), c.children = [f];
      var d = s.createCanvas(l.width, l.height), p = d.getContext("2d");
      return p.fillStyle = o, c.render(p), p.createPattern(d, "no-repeat");
    }
    return o;
  }
  inheritStopContainer(t) {
    this.attributesToInherit.forEach((e) => {
      !this.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
    });
  }
  addParentOpacity(t, e) {
    if (t.hasValue()) {
      var r = new T(this.document, "color", e);
      return r.addOpacity(t).getColor();
    }
    return e;
  }
}
class C1 extends wh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === "objectBoundingBox", n = r ? e.getBoundingBox(t) : null;
    if (r && !n)
      return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
    var a = r ? n.x + n.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), o = r ? n.y + n.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), s = r ? n.x + n.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = r ? n.y + n.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return a === s && o === u ? null : t.createLinearGradient(a, o, s, u);
  }
}
class P1 extends wh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === "objectBoundingBox", n = e.getBoundingBox(t);
    if (r && !n)
      return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
    var a = r ? n.x + n.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), o = r ? n.y + n.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), s = a, u = o;
    this.getAttribute("fx").hasValue() && (s = r ? n.x + n.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? n.y + n.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var h = r ? (n.width + n.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), l = this.getAttribute("fr").getPixels();
    return t.createRadialGradient(s, u, l, a, o, h);
  }
}
class N1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "stop";
    var n = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), a = this.getStyle("stop-opacity"), o = this.getStyle("stop-color", !0);
    o.getString() === "" && o.setValue("#000"), a.hasValue() && (o = o.addOpacity(a)), this.offset = n, this.color = o.getColor();
  }
}
class na extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, t.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new T(t, "values", null);
    var n = this.getAttribute("values");
    n.hasValue() && this.values.setValue(n.getString().split(";"));
  }
  getProperty() {
    var t = this.getAttribute("attributeType").getString(), e = this.getAttribute("attributeName").getString();
    return t === "CSS" ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
  }
  calcValue() {
    var {
      initialUnits: t
    } = this, {
      progress: e,
      from: r,
      to: n
    } = this.getProgress(), a = r.getNumber() + (n.getNumber() - r.getNumber()) * e;
    return t === "%" && (a *= 100), "".concat(a).concat(t);
  }
  update(t) {
    var {
      parent: e
    } = this, r = this.getProperty();
    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
      var n = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite")
        this.duration = 0;
      else if (n === "freeze" && !this.frozen)
        this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
      else if (n === "remove" && !this.removed)
        return this.removed = !0, r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), !0;
      return !1;
    }
    this.duration += t;
    var a = !1;
    if (this.begin < this.duration) {
      var o = this.calcValue(), s = this.getAttribute("type");
      if (s.hasValue()) {
        var u = s.getString();
        o = "".concat(u, "(").concat(o, ")");
      }
      r.setValue(o), a = !0;
    }
    return a;
  }
  getProgress() {
    var {
      document: t,
      values: e
    } = this, r = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (e.hasValue()) {
      var n = r.progress * (e.getValue().length - 1), a = Math.floor(n), o = Math.ceil(n);
      r.from = new T(t, "from", parseFloat(e.getValue()[a])), r.to = new T(t, "to", parseFloat(e.getValue()[o])), r.progress = (n - a) / (o - a);
    } else
      r.from = this.from, r.to = this.to;
    return r;
  }
}
class M1 extends na {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = new mn(e.getColor()), a = new mn(r.getColor());
    if (n.ok && a.ok) {
      var o = n.r + (a.r - n.r) * t, s = n.g + (a.g - n.g) * t, u = n.b + (a.b - n.b) * t;
      return "rgb(".concat(Math.floor(o), ", ").concat(Math.floor(s), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class R1 extends na {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = nt(e.getString()), a = nt(r.getString()), o = n.map((s, u) => {
      var h = a[u];
      return s + (h - s) * t;
    }).join(" ");
    return o;
  }
}
class V1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: n
    } = t, {
      children: a
    } = this;
    for (var o of a)
      switch (o.type) {
        case "font-face": {
          this.fontFace = o;
          var s = o.getStyle("font-family");
          s.hasValue() && (n[s.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = o;
          break;
        case "glyph": {
          var u = o;
          u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
          break;
        }
      }
  }
  render() {
  }
}
class k1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class I1 extends P {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class _1 extends Ct {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var t = this.getHrefAttribute().getDefinition();
    if (t) {
      var e = t.children[0];
      if (e)
        return e.getText();
    }
    return "";
  }
}
class L1 extends Ct {
  constructor(t, e, r) {
    super(t, e, r), this.type = "a";
    var {
      childNodes: n
    } = e, a = n[0], o = n.length > 0 && Array.from(n).every((s) => s.nodeType === 3);
    this.hasText = o, this.text = o ? this.getTextFromNode(a) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(t) {
    if (this.hasText) {
      super.renderChildren(t);
      var {
        document: e,
        x: r,
        y: n
      } = this, {
        mouse: a
      } = e.screen, o = new T(e, "fontSize", J.parse(e.ctx.font).fontSize);
      a.isWorking() && a.checkBoundingBox(this, new ft(r, n - o.getPixels("y"), r + this.measureText(t), n));
    } else if (this.children.length > 0) {
      var s = new ia(this.document, null);
      s.children = this.children, s.parent = this, s.render(t);
    }
  }
  onClick() {
    var {
      window: t
    } = this.document;
    t && t.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var t = this.document.ctx;
    t.canvas.style.cursor = "pointer";
  }
}
function No(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function ir(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? No(Object(e), !0).forEach(function(r) {
      wn(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : No(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class D1 extends Ct {
  constructor(t, e, r) {
    super(t, e, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var n = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(n);
  }
  getText() {
    return this.text;
  }
  path(t) {
    var {
      dataArray: e
    } = this;
    t && t.beginPath(), e.forEach((r) => {
      var {
        type: n,
        points: a
      } = r;
      switch (n) {
        case E.LINE_TO:
          t && t.lineTo(a[0], a[1]);
          break;
        case E.MOVE_TO:
          t && t.moveTo(a[0], a[1]);
          break;
        case E.CURVE_TO:
          t && t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case E.QUAD_TO:
          t && t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
          break;
        case E.ARC: {
          var [o, s, u, h, l, g, f, c] = a, d = u > h ? u : h, p = u > h ? 1 : u / h, m = u > h ? h / u : 1;
          t && (t.translate(o, s), t.rotate(f), t.scale(p, m), t.arc(0, 0, d, l, l + g, !!(1 - c)), t.scale(1 / p, 1 / m), t.rotate(-f), t.translate(-o, -s));
          break;
        }
        case E.CLOSE_PATH:
          t && t.closePath();
          break;
      }
    });
  }
  renderChildren(t) {
    this.setTextData(t), t.save();
    var e = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
      glyphInfo: n
    } = this, a = t.fillStyle;
    e === "underline" && t.beginPath(), n.forEach((o, s) => {
      var {
        p0: u,
        p1: h,
        rotation: l,
        text: g
      } = o;
      t.save(), t.translate(u.x, u.y), t.rotate(l), t.fillStyle && t.fillText(g, 0, 0), t.strokeStyle && t.strokeText(g, 0, 0), t.restore(), e === "underline" && (s === 0 && t.moveTo(u.x, u.y + r / 8), t.lineTo(h.x, h.y + r / 5));
    }), e === "underline" && (t.lineWidth = r / 20, t.strokeStyle = a, t.stroke(), t.closePath()), t.restore();
  }
  getLetterSpacingAt() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[t] || 0;
  }
  findSegmentToFitChar(t, e, r, n, a, o, s, u, h) {
    var l = o, g = this.measureText(t, u);
    u === " " && e === "justify" && r < n && (g += (n - r) / a), h > -1 && (l += this.getLetterSpacingAt(h));
    var f = this.textHeight / 20, c = this.getEquidistantPointOnPath(l, f, 0), d = this.getEquidistantPointOnPath(l + g, f, 0), p = {
      p0: c,
      p1: d
    }, m = c && d ? Math.atan2(d.y - c.y, d.x - c.x) : 0;
    if (s) {
      var y = Math.cos(Math.PI / 2 + m) * s, b = Math.cos(-m) * s;
      p.p0 = ir(ir({}, c), {}, {
        x: c.x + y,
        y: c.y + b
      }), p.p1 = ir(ir({}, d), {}, {
        x: d.x + y,
        y: d.y + b
      });
    }
    return l += g, {
      offset: l,
      segment: p,
      rotation: m
    };
  }
  measureText(t, e) {
    var {
      measuresCache: r
    } = this, n = e || this.getText();
    if (r.has(n))
      return r.get(n);
    var a = this.measureTargetText(t, n);
    return r.set(n, a), a;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(t) {
    if (!this.glyphInfo) {
      var e = this.getText(), r = e.split(""), n = e.split(" ").length - 1, a = this.parent.getAttribute("dx").split().map((w) => w.getPixels("x")), o = this.parent.getAttribute("dy").getPixels("y"), s = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), h = this.parent.getStyle("letter-spacing"), l = 0;
      !u.hasValue() || u.getValue() === "inherit" ? l = h.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (l = u.getPixels());
      var g = [], f = e.length;
      this.letterSpacingCache = g;
      for (var c = 0; c < f; c++)
        g.push(typeof a[c] < "u" ? a[c] : l);
      var d = g.reduce((w, A, O) => O === 0 ? 0 : w + A || 0, 0), p = this.measureText(t), m = Math.max(p + d, 0);
      this.textWidth = p, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), b = this.getStyle("startOffset").getNumber(0) * y, x = 0;
      (s === "middle" || s === "center") && (x = -m / 2), (s === "end" || s === "right") && (x = -m), x += b, r.forEach((w, A) => {
        var {
          offset: O,
          segment: S,
          rotation: C
        } = this.findSegmentToFitChar(t, s, m, y, n, x, o, w, A);
        x = O, !(!S.p0 || !S.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[A],
          p0: S.p0,
          p1: S.p1,
          rotation: C
        });
      });
    }
  }
  parsePathData(t) {
    if (this.pathLength = -1, !t)
      return [];
    var e = [], {
      pathParser: r
    } = t;
    for (r.reset(); !r.isEnd(); ) {
      var {
        current: n
      } = r, a = n ? n.x : 0, o = n ? n.y : 0, s = r.next(), u = s.type, h = [];
      switch (s.type) {
        case E.MOVE_TO:
          this.pathM(r, h);
          break;
        case E.LINE_TO:
          u = this.pathL(r, h);
          break;
        case E.HORIZ_LINE_TO:
          u = this.pathH(r, h);
          break;
        case E.VERT_LINE_TO:
          u = this.pathV(r, h);
          break;
        case E.CURVE_TO:
          this.pathC(r, h);
          break;
        case E.SMOOTH_CURVE_TO:
          u = this.pathS(r, h);
          break;
        case E.QUAD_TO:
          this.pathQ(r, h);
          break;
        case E.SMOOTH_QUAD_TO:
          u = this.pathT(r, h);
          break;
        case E.ARC:
          h = this.pathA(r);
          break;
        case E.CLOSE_PATH:
          P.pathZ(r);
          break;
      }
      s.type !== E.CLOSE_PATH ? e.push({
        type: u,
        points: h,
        start: {
          x: a,
          y: o
        },
        pathLength: this.calcLength(a, o, u, h)
      }) : e.push({
        type: E.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return e;
  }
  pathM(t, e) {
    var {
      x: r,
      y: n
    } = P.pathM(t).point;
    e.push(r, n);
  }
  pathL(t, e) {
    var {
      x: r,
      y: n
    } = P.pathL(t).point;
    return e.push(r, n), E.LINE_TO;
  }
  pathH(t, e) {
    var {
      x: r,
      y: n
    } = P.pathH(t).point;
    return e.push(r, n), E.LINE_TO;
  }
  pathV(t, e) {
    var {
      x: r,
      y: n
    } = P.pathV(t).point;
    return e.push(r, n), E.LINE_TO;
  }
  pathC(t, e) {
    var {
      point: r,
      controlPoint: n,
      currentPoint: a
    } = P.pathC(t);
    e.push(r.x, r.y, n.x, n.y, a.x, a.y);
  }
  pathS(t, e) {
    var {
      point: r,
      controlPoint: n,
      currentPoint: a
    } = P.pathS(t);
    return e.push(r.x, r.y, n.x, n.y, a.x, a.y), E.CURVE_TO;
  }
  pathQ(t, e) {
    var {
      controlPoint: r,
      currentPoint: n
    } = P.pathQ(t);
    e.push(r.x, r.y, n.x, n.y);
  }
  pathT(t, e) {
    var {
      controlPoint: r,
      currentPoint: n
    } = P.pathT(t);
    return e.push(r.x, r.y, n.x, n.y), E.QUAD_TO;
  }
  pathA(t) {
    var {
      rX: e,
      rY: r,
      sweepFlag: n,
      xAxisRotation: a,
      centp: o,
      a1: s,
      ad: u
    } = P.pathA(t);
    return n === 0 && u > 0 && (u -= 2 * Math.PI), n === 1 && u < 0 && (u += 2 * Math.PI), [o.x, o.y, e, r, s, u, a, n];
  }
  calcLength(t, e, r, n) {
    var a = 0, o = null, s = null, u = 0;
    switch (r) {
      case E.LINE_TO:
        return this.getLineLength(t, e, n[0], n[1]);
      case E.CURVE_TO:
        for (a = 0, o = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnCubicBezier(u, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return a;
      case E.QUAD_TO:
        for (a = 0, o = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnQuadraticBezier(u, t, e, n[0], n[1], n[2], n[3]), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return a;
      case E.ARC: {
        a = 0;
        var h = n[4], l = n[5], g = n[4] + l, f = Math.PI / 180;
        if (Math.abs(h - g) < f && (f = Math.abs(h - g)), o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), l < 0)
          for (u = h - f; u > g; u -= f)
            s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        else
          for (u = h + f; u < g; u += f)
            s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], g, 0), a += this.getLineLength(o.x, o.y, s.x, s.y), a;
      }
    }
    return 0;
  }
  getPointOnLine(t, e, r, n, a) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (a - r) / (n - e + ie), h = Math.sqrt(t * t / (1 + u * u));
    n < e && (h *= -1);
    var l = u * h, g = null;
    if (n === e)
      g = {
        x: o,
        y: s + l
      };
    else if ((s - r) / (o - e + ie) === u)
      g = {
        x: o + h,
        y: s + l
      };
    else {
      var f = 0, c = 0, d = this.getLineLength(e, r, n, a);
      if (d < ie)
        return null;
      var p = (o - e) * (n - e) + (s - r) * (a - r);
      p /= d * d, f = e + p * (n - e), c = r + p * (a - r);
      var m = this.getLineLength(o, s, f, c), y = Math.sqrt(t * t - m * m);
      h = Math.sqrt(y * y / (1 + u * u)), n < e && (h *= -1), l = u * h, g = {
        x: f + h,
        y: c + l
      };
    }
    return g;
  }
  getPointOnPath(t) {
    var e = this.getPathLength(), r = 0, n = null;
    if (t < -5e-5 || t - 5e-5 > e)
      return null;
    var {
      dataArray: a
    } = this;
    for (var o of a) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)) {
        r += o.pathLength;
        continue;
      }
      var s = t - r, u = 0;
      switch (o.type) {
        case E.LINE_TO:
          n = this.getPointOnLine(s, o.start.x, o.start.y, o.points[0], o.points[1], o.start.x, o.start.y);
          break;
        case E.ARC: {
          var h = o.points[4], l = o.points[5], g = o.points[4] + l;
          if (u = h + s / o.pathLength * l, l < 0 && u < g || l >= 0 && u > g)
            break;
          n = this.getPointOnEllipticalArc(o.points[0], o.points[1], o.points[2], o.points[3], u, o.points[6]);
          break;
        }
        case E.CURVE_TO:
          u = s / o.pathLength, u > 1 && (u = 1), n = this.getPointOnCubicBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3], o.points[4], o.points[5]);
          break;
        case E.QUAD_TO:
          u = s / o.pathLength, u > 1 && (u = 1), n = this.getPointOnQuadraticBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3]);
          break;
      }
      if (n)
        return n;
      break;
    }
    return null;
  }
  getLineLength(t, e, r, n) {
    return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((t, e) => e.pathLength > 0 ? t + e.pathLength : t, 0)), this.pathLength;
  }
  getPointOnCubicBezier(t, e, r, n, a, o, s, u, h) {
    var l = u * So(t) + o * To(t) + n * Oo(t) + e * Ao(t), g = h * So(t) + s * To(t) + a * Oo(t) + r * Ao(t);
    return {
      x: l,
      y: g
    };
  }
  getPointOnQuadraticBezier(t, e, r, n, a, o, s) {
    var u = o * Eo(t) + n * Co(t) + e * Po(t), h = s * Eo(t) + a * Co(t) + r * Po(t);
    return {
      x: u,
      y: h
    };
  }
  getPointOnEllipticalArc(t, e, r, n, a, o) {
    var s = Math.cos(o), u = Math.sin(o), h = {
      x: r * Math.cos(a),
      y: n * Math.sin(a)
    };
    return {
      x: t + (h.x * s - h.y * u),
      y: e + (h.x * u + h.y * s)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(t, e) {
    var r = this.getPathLength(), n = e || 0.25, a = t || r / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== a || this.equidistantCache.precision !== n) {
      this.equidistantCache = {
        step: a,
        precision: n,
        points: []
      };
      for (var o = 0, s = 0; s <= r; s += n) {
        var u = this.getPointOnPath(s), h = this.getPointOnPath(s + n);
        !u || !h || (o += this.getLineLength(u.x, u.y, h.x, h.y), o >= a && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: s
        }), o -= a));
      }
    }
  }
  getEquidistantPointOnPath(t, e, r) {
    if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5)
      return null;
    var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[n] || null;
  }
}
var j1 = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class B1 extends Ht {
  constructor(t, e, r) {
    super(t, e, r), this.type = "image", this.loaded = !1;
    var n = this.getHrefAttribute().getString();
    if (n) {
      var a = n.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(n);
      t.images.push(this), a ? this.loadSvg(n) : this.loadImage(n), this.isSvg = a;
    }
  }
  loadImage(t) {
    var e = this;
    return bt(function* () {
      try {
        var r = yield e.document.createImage(t);
        e.image = r;
      } catch (n) {
        console.error('Error while loading image "'.concat(t, '":'), n);
      }
      e.loaded = !0;
    })();
  }
  loadSvg(t) {
    var e = this;
    return bt(function* () {
      var r = j1.exec(t);
      if (r) {
        var n = r[5];
        r[4] === "base64" ? e.image = atob(n) : e.image = decodeURIComponent(n);
      } else
        try {
          var a = yield e.document.fetch(t), o = yield a.text();
          e.image = o;
        } catch (s) {
          console.error('Error while loading image "'.concat(t, '":'), s);
        }
      e.loaded = !0;
    })();
  }
  renderChildren(t) {
    var {
      document: e,
      image: r,
      loaded: n
    } = this, a = this.getAttribute("x").getPixels("x"), o = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!n || !r || !s || !u)) {
      if (t.save(), t.translate(a, o), this.isSvg) {
        var h = e.canvg.forkString(t, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u
        });
        h.document.documentElement.parent = this, h.render();
      } else {
        var l = this.image;
        e.setViewBox({
          ctx: t,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: s,
          desiredWidth: l.width,
          height: u,
          desiredHeight: l.height
        }), this.loaded && (typeof l.complete > "u" || l.complete) && t.drawImage(l, 0, 0);
      }
      t.restore();
    }
  }
  getBoundingBox() {
    var t = this.getAttribute("x").getPixels("x"), e = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), n = this.getStyle("height").getPixels("y");
    return new ft(t, e, t + r, e + n);
  }
}
class U1 extends Ht {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(t) {
  }
}
class z1 {
  constructor(t) {
    this.document = t, this.loaded = !1, t.fonts.push(this);
  }
  load(t, e) {
    var r = this;
    return bt(function* () {
      try {
        var {
          document: n
        } = r, a = yield n.canvg.parser.load(e), o = a.getElementsByTagName("font");
        Array.from(o).forEach((s) => {
          var u = n.createElement(s);
          n.definitions[t] = u;
        });
      } catch (s) {
        console.error('Error while loading font "'.concat(e, '":'), s);
      }
      r.loaded = !0;
    })();
  }
}
class Sh extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "style";
    var n = le(
      Array.from(e.childNodes).map((o) => o.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), a = n.split("}");
    a.forEach((o) => {
      var s = o.trim();
      if (s) {
        var u = s.split("{"), h = u[0].split(","), l = u[1].split(";");
        h.forEach((g) => {
          var f = g.trim();
          if (f) {
            var c = t.styles[f] || {};
            if (l.forEach((m) => {
              var y = m.indexOf(":"), b = m.substr(0, y).trim(), x = m.substr(y + 1, m.length - y).trim();
              b && x && (c[b] = new T(t, b, x));
            }), t.styles[f] = c, t.stylesSpecificity[f] = r1(f), f === "@font-face") {
              var d = c["font-family"].getString().replace(/"|'/g, ""), p = c.src.getString().split(",");
              p.forEach((m) => {
                if (m.indexOf('format("svg")') > 0) {
                  var y = fh(m);
                  y && new z1(t).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
Sh.parseExternalUrl = fh;
class F1 extends Ht {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(t) {
    super.setContext(t);
    var e = this.getAttribute("x"), r = this.getAttribute("y");
    e.hasValue() && t.translate(e.getPixels("x"), 0), r.hasValue() && t.translate(0, r.getPixels("y"));
  }
  path(t) {
    var {
      element: e
    } = this;
    e && e.path(t);
  }
  renderChildren(t) {
    var {
      document: e,
      element: r
    } = this;
    if (r) {
      var n = r;
      if (r.type === "symbol" && (n = new Ve(e, null), n.attributes.viewBox = new T(e, "viewBox", r.getAttribute("viewBox").getString()), n.attributes.preserveAspectRatio = new T(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), n.attributes.overflow = new T(e, "overflow", r.getAttribute("overflow").getString()), n.children = r.children, r.styles.opacity = new T(e, "opacity", this.calculateOpacity())), n.type === "svg") {
        var a = this.getStyle("width", !1, !0), o = this.getStyle("height", !1, !0);
        a.hasValue() && (n.attributes.width = new T(e, "width", a.getString())), o.hasValue() && (n.attributes.height = new T(e, "height", o.getString()));
      }
      var s = n.parent;
      n.parent = this, n.render(t), n.parent = s;
    }
  }
  getBoundingBox(t) {
    var {
      element: e
    } = this;
    return e ? e.getBoundingBox(t) : null;
  }
  elementTransform() {
    var {
      document: t,
      element: e
    } = this;
    return jt.fromElement(t, e);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function nr(i, t, e, r, n, a) {
  return i[e * r * 4 + t * 4 + a];
}
function ar(i, t, e, r, n, a, o) {
  i[e * r * 4 + t * 4 + a] = o;
}
function z(i, t, e) {
  var r = i[t];
  return r * e;
}
function vt(i, t, e, r) {
  return t + Math.cos(i) * e + Math.sin(i) * r;
}
class Th extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feColorMatrix";
    var n = nt(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var a = n[0];
        n = [0.213 + 0.787 * a, 0.715 - 0.715 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 + 0.285 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 - 0.715 * a, 0.072 + 0.928 * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var o = n[0] * Math.PI / 180;
        n = [vt(o, 0.213, 0.787, -0.213), vt(o, 0.715, -0.715, -0.715), vt(o, 0.072, -0.072, 0.928), 0, 0, vt(o, 0.213, -0.213, 0.143), vt(o, 0.715, 0.285, 0.14), vt(o, 0.072, -0.072, -0.283), 0, 0, vt(o, 0.213, -0.213, -0.787), vt(o, 0.715, -0.715, 0.715), vt(o, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = n, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(t, e, r, n, a) {
    for (var {
      includeOpacity: o,
      matrix: s
    } = this, u = t.getImageData(0, 0, n, a), h = 0; h < a; h++)
      for (var l = 0; l < n; l++) {
        var g = nr(u.data, l, h, n, a, 0), f = nr(u.data, l, h, n, a, 1), c = nr(u.data, l, h, n, a, 2), d = nr(u.data, l, h, n, a, 3), p = z(s, 0, g) + z(s, 1, f) + z(s, 2, c) + z(s, 3, d) + z(s, 4, 1), m = z(s, 5, g) + z(s, 6, f) + z(s, 7, c) + z(s, 8, d) + z(s, 9, 1), y = z(s, 10, g) + z(s, 11, f) + z(s, 12, c) + z(s, 13, d) + z(s, 14, 1), b = z(s, 15, g) + z(s, 16, f) + z(s, 17, c) + z(s, 18, d) + z(s, 19, 1);
        o && (p = 0, m = 0, y = 0, b *= d / 255), ar(u.data, l, h, n, a, 0, p), ar(u.data, l, h, n, a, 1, m), ar(u.data, l, h, n, a, 2, y), ar(u.data, l, h, n, a, 3, b);
      }
    t.clearRect(0, 0, n, a), t.putImageData(u, 0, 0);
  }
}
class Lr extends R {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(t, e) {
    var {
      document: r
    } = this, n = this.getAttribute("x").getPixels("x"), a = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), s = this.getStyle("height").getPixels("y");
    if (!o && !s) {
      var u = new ft();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(t));
      }), n = Math.floor(u.x1), a = Math.floor(u.y1), o = Math.floor(u.width), s = Math.floor(u.height);
    }
    var h = this.removeStyles(e, Lr.ignoreStyles), l = r.createCanvas(n + o, a + s), g = l.getContext("2d");
    r.screen.setDefaults(g), this.renderChildren(g), new Th(r, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(g, 0, 0, n + o, a + s);
    var f = r.createCanvas(n + o, a + s), c = f.getContext("2d");
    r.screen.setDefaults(c), e.render(c), c.globalCompositeOperation = "destination-in", c.fillStyle = g.createPattern(l, "no-repeat"), c.fillRect(0, 0, n + o, a + s), t.fillStyle = c.createPattern(f, "no-repeat"), t.fillRect(0, 0, n + o, a + s), this.restoreStyles(e, h);
  }
  render(t) {
  }
}
Lr.ignoreStyles = ["mask", "transform", "clip-path"];
var Mo = () => {
};
class H1 extends R {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(t) {
    var {
      document: e
    } = this, r = Reflect.getPrototypeOf(t), {
      beginPath: n,
      closePath: a
    } = t;
    r && (r.beginPath = Mo, r.closePath = Mo), Reflect.apply(n, t, []), this.children.forEach((o) => {
      if (!(typeof o.path > "u")) {
        var s = typeof o.elementTransform < "u" ? o.elementTransform() : null;
        s || (s = jt.fromElement(e, o)), s && s.apply(t), o.path(t), r && (r.closePath = a), s && s.unapply(t);
      }
    }), Reflect.apply(a, t, []), t.clip(), r && (r.beginPath = n, r.closePath = a);
  }
  render(t) {
  }
}
class Dr extends R {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(t, e) {
    var {
      document: r,
      children: n
    } = this, a = e.getBoundingBox(t);
    if (a) {
      var o = 0, s = 0;
      n.forEach((y) => {
        var b = y.extraFilterDistance || 0;
        o = Math.max(o, b), s = Math.max(s, b);
      });
      var u = Math.floor(a.width), h = Math.floor(a.height), l = u + 2 * o, g = h + 2 * s;
      if (!(l < 1 || g < 1)) {
        var f = Math.floor(a.x), c = Math.floor(a.y), d = this.removeStyles(e, Dr.ignoreStyles), p = r.createCanvas(l, g), m = p.getContext("2d");
        r.screen.setDefaults(m), m.translate(-f + o, -c + s), e.render(m), n.forEach((y) => {
          typeof y.apply == "function" && y.apply(m, 0, 0, l, g);
        }), t.drawImage(p, 0, 0, l, g, f - o, c - s, l, g), this.restoreStyles(e, d);
      }
    }
  }
  render(t) {
  }
}
Dr.ignoreStyles = ["filter", "transform", "clip-path"];
class X1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(t, e, r, n, a) {
  }
}
class Y1 extends R {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(t, e, r, n, a) {
  }
}
class W1 extends R {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(t, e, r, n, a) {
  }
}
class q1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(t, e, r, n, a) {
    var {
      document: o,
      blurRadius: s
    } = this, u = o.window ? o.window.document.body : null, h = t.canvas;
    h.id = o.getUniqueId(), u && (h.style.display = "none", u.appendChild(h)), Ux(h, e, r, n, a, s), u && u.removeChild(h);
  }
}
class G1 extends R {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class Q1 extends R {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var $1 = {
  svg: Ve,
  rect: xh,
  circle: b1,
  ellipse: w1,
  line: S1,
  polyline: bh,
  polygon: T1,
  path: P,
  pattern: O1,
  marker: A1,
  defs: E1,
  linearGradient: C1,
  radialGradient: P1,
  stop: N1,
  animate: na,
  animateColor: M1,
  animateTransform: R1,
  font: V1,
  "font-face": k1,
  "missing-glyph": I1,
  glyph: vh,
  text: Ct,
  tspan: _r,
  tref: _1,
  a: L1,
  textPath: D1,
  image: B1,
  g: ia,
  symbol: U1,
  style: Sh,
  use: F1,
  mask: Lr,
  clipPath: H1,
  filter: Dr,
  feDropShadow: X1,
  feMorphology: Y1,
  feComposite: W1,
  feColorMatrix: Th,
  feGaussianBlur: q1,
  title: G1,
  desc: Q1
};
function Ro(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Z1(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ro(Object(e), !0).forEach(function(r) {
      wn(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Ro(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
function J1(i, t) {
  var e = document.createElement("canvas");
  return e.width = i, e.height = t, e;
}
function K1(i) {
  return bn.apply(this, arguments);
}
function bn() {
  return bn = bt(function* (i) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = document.createElement("img");
    return t && (e.crossOrigin = "Anonymous"), new Promise((r, n) => {
      e.onload = () => {
        r(e);
      }, e.onerror = (a, o, s, u, h) => {
        n(h);
      }, e.src = i;
    });
  }), bn.apply(this, arguments);
}
class At {
  constructor(t) {
    var {
      rootEmSize: e = 12,
      emSize: r = 12,
      createCanvas: n = At.createCanvas,
      createImage: a = At.createImage,
      anonymousCrossOrigin: o
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = t, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = e, this.emSize = r, this.createCanvas = n, this.createImage = this.bindCreateImage(a, o), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(t, e) {
    return typeof e == "boolean" ? (r, n) => t(r, typeof n == "boolean" ? n : e) : t;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: t
    } = this;
    return t[t.length - 1];
  }
  set emSize(t) {
    var {
      emSizeStack: e
    } = this;
    e.push(t);
  }
  popEmSize() {
    var {
      emSizeStack: t
    } = this;
    t.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((t) => t.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((t) => t.loaded);
  }
  createDocumentElement(t) {
    var e = this.createElement(t.documentElement);
    return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, e;
  }
  createElement(t) {
    var e = t.nodeName.replace(/^[^:]+:/, ""), r = At.elementTypes[e];
    return typeof r < "u" ? new r(this, t) : new p1(this, t);
  }
  createTextNode(t) {
    return new x1(this, t);
  }
  setViewBox(t) {
    this.screen.setViewBox(Z1({
      document: this
    }, t));
  }
}
At.createCanvas = J1;
At.createImage = K1;
At.elementTypes = $1;
function Vo(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function _t(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vo(Object(e), !0).forEach(function(r) {
      wn(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Vo(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class xe {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new Hi(r), this.screen = new Ir(t, r), this.options = r;
    var n = new At(this, r), a = n.createDocumentElement(e);
    this.document = n, this.documentElement = a;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(t, e) {
    var r = arguments;
    return bt(function* () {
      var n = r.length > 2 && r[2] !== void 0 ? r[2] : {}, a = new Hi(n), o = yield a.parse(e);
      return new xe(t, o, n);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = new Hi(r), a = n.parseFromString(e);
    return new xe(t, a, r);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xe.from(t, e, _t(_t({}, this.options), r));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xe.fromString(t, e, _t(_t({}, this.options), r));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var t = arguments, e = this;
    return bt(function* () {
      var r = t.length > 0 && t[0] !== void 0 ? t[0] : {};
      e.start(_t({
        enableRedraw: !0,
        ignoreAnimation: !0,
        ignoreMouse: !0
      }, r)), yield e.ready(), e.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: e,
      screen: r,
      options: n
    } = this;
    r.start(e, _t(_t({
      enableRedraw: !0
    }, n), t));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(t, e, r);
  }
}
export {
  L1 as AElement,
  M1 as AnimateColorElement,
  na as AnimateElement,
  R1 as AnimateTransformElement,
  ft as BoundingBox,
  So as CB1,
  To as CB2,
  Oo as CB3,
  Ao as CB4,
  xe as Canvg,
  b1 as CircleElement,
  H1 as ClipPathElement,
  E1 as DefsElement,
  Q1 as DescElement,
  At as Document,
  R as Element,
  w1 as EllipseElement,
  Th as FeColorMatrixElement,
  W1 as FeCompositeElement,
  X1 as FeDropShadowElement,
  q1 as FeGaussianBlurElement,
  Y1 as FeMorphologyElement,
  Dr as FilterElement,
  J as Font,
  V1 as FontElement,
  k1 as FontFaceElement,
  ia as GElement,
  vh as GlyphElement,
  wh as GradientElement,
  B1 as ImageElement,
  S1 as LineElement,
  C1 as LinearGradientElement,
  A1 as MarkerElement,
  Lr as MaskElement,
  mh as Matrix,
  I1 as MissingGlyphElement,
  n1 as Mouse,
  ie as PSEUDO_ZERO,
  Hi as Parser,
  P as PathElement,
  E as PathParser,
  O1 as PatternElement,
  L as Point,
  T1 as PolygonElement,
  bh as PolylineElement,
  T as Property,
  Eo as QB1,
  Co as QB2,
  Po as QB3,
  P1 as RadialGradientElement,
  xh as RectElement,
  Ht as RenderedElement,
  u1 as Rotate,
  Ve as SVGElement,
  z1 as SVGFontLoader,
  h1 as Scale,
  Ir as Screen,
  yh as Skew,
  l1 as SkewX,
  c1 as SkewY,
  N1 as StopElement,
  Sh as StyleElement,
  U1 as SymbolElement,
  _1 as TRefElement,
  _r as TSpanElement,
  Ct as TextElement,
  D1 as TextPathElement,
  G1 as TitleElement,
  jt as Transform,
  o1 as Translate,
  p1 as UnknownElement,
  F1 as UseElement,
  i1 as ViewPort,
  le as compressSpaces,
  xe as default,
  r1 as getSelectorSpecificity,
  qx as normalizeAttributeName,
  Gx as normalizeColor,
  fh as parseExternalUrl,
  eb as presets,
  nt as toNumbers,
  Xx as trimLeft,
  Yx as trimRight,
  bo as vectorMagnitude,
  wo as vectorsAngle,
  xn as vectorsRatio
};
