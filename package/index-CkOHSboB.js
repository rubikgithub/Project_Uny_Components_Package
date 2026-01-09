import { j as U } from "./index.package-DlxaK-aN.js";
import { useState as d, useCallback as K, useEffect as z, createContext as x, useContext as R } from "react";
const F = "https://api.employees.curiousrubik.com";
function P() {
  return typeof window > "u" ? null : new URLSearchParams(window.location.search).get("sso_token");
}
function T() {
  if (typeof window > "u") return;
  const t = new URL(window.location.href);
  t.searchParams.delete("sso_token"), window.history.replaceState({}, "", t.toString());
}
async function I(t, r) {
  if (!t)
    return {
      valid: !1,
      data: null,
      message: "No token provided"
    };
  if (!r)
    return {
      valid: !1,
      data: null,
      message: "App secret is required. Get it from Kenzo App Store after registering your app."
    };
  try {
    const n = await (await fetch(`${F}/api/sso/validate-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: t, app_secret: r })
    })).json();
    return n.success && n.valid && n.data ? {
      valid: !0,
      data: n.data,
      message: n.message || "Token is valid"
    } : {
      valid: !1,
      data: null,
      message: n.message || "Token validation failed"
    };
  } catch (s) {
    return console.error("[Kenzo SSO] Token validation error:", s), {
      valid: !1,
      data: null,
      message: s.message || "Network error during token validation"
    };
  }
}
async function q(t) {
  if (!t)
    return console.error("[Kenzo SSO] appSecret is required. Get it from Kenzo App Store."), null;
  const r = P();
  if (!r)
    return null;
  try {
    const s = await I(r, t);
    return s.valid && s.data ? (T(), s.data) : (T(), null);
  } catch (s) {
    return console.error("[Kenzo SSO] SSO handling error:", s), T(), null;
  }
}
async function C(t, r, s = {}) {
  var o, u, c, g, p;
  const {
    onSuccess: n,
    onError: e,
    createUserIfNotExists: f = !0
  } = s;
  if (!t) {
    const a = "Clerk instance is required";
    return e == null || e(a), { success: !1, error: a };
  }
  if (!(r != null && r.email)) {
    const a = "User email is required";
    return e == null || e(a), { success: !1, error: a };
  }
  const { signIn: i, setActive: S } = t;
  try {
    const a = await i.create({
      identifier: r.email,
      strategy: "ticket"
    });
    if (a.status === "complete")
      return await S({ session: a.createdSessionId }), n == null || n(a), { success: !0, session: a };
    if (a.status === "needs_identifier" || a.status === "needs_first_factor")
      try {
        if (((o = (await i.create({
          identifier: r.email
        })).supportedFirstFactors) == null ? void 0 : o.find(
          (y) => y.strategy === "email_code"
        )) && f)
          return await A(t, r, s);
      } catch (O) {
        if (f)
          return await A(t, r, s);
        throw O;
      }
    const l = `Sign-in incomplete: ${a.status}`;
    return e == null || e(l), { success: !1, error: l };
  } catch (a) {
    if (console.error("[Kenzo SSO] Clerk sign-in error:", a), ((c = (u = a.errors) == null ? void 0 : u[0]) == null ? void 0 : c.code) === "form_identifier_not_found" && f)
      return await A(t, r, s);
    const l = ((p = (g = a.errors) == null ? void 0 : g[0]) == null ? void 0 : p.message) || a.message || "Sign-in failed";
    return e == null || e(l), { success: !1, error: l };
  }
}
async function A(t, r, s = {}) {
  var S, o, u;
  const { onSuccess: n, onError: e } = s, { signUp: f, setActive: i } = t;
  try {
    const c = (r.name || "").trim().split(" "), g = c[0] || "", p = c.slice(1).join(" ") || "", a = await f.create({
      emailAddress: r.email,
      firstName: g,
      lastName: p,
      unsafeMetadata: {
        kenzoEmployeeId: r.employee_id,
        createdViaSSO: !0
      }
    });
    if (a.status === "missing_requirements" && (S = a.unverifiedFields) != null && S.includes("email_address")) {
      await a.prepareEmailAddressVerification({ strategy: "email_code" });
      const O = "Email verification required. Please configure Clerk for SSO-compatible authentication.";
      return e == null || e(O), { success: !1, error: O, needsVerification: !0 };
    }
    if (a.status === "complete")
      return await i({ session: a.createdSessionId }), n == null || n(a), { success: !0, session: a };
    const l = `User creation incomplete: ${a.status}`;
    return e == null || e(l), { success: !1, error: l };
  } catch (c) {
    console.error("[Kenzo SSO] Create user error:", c);
    const g = ((u = (o = c.errors) == null ? void 0 : o[0]) == null ? void 0 : u.message) || c.message || "User creation failed";
    return e == null || e(g), { success: !1, error: g };
  }
}
async function L(t) {
  if (t)
    try {
      await t.signOut();
    } catch (r) {
      console.error("[Kenzo SSO] Sign out error:", r);
    }
}
function j(t) {
  return !!(t != null && t.user);
}
const _ = x({
  isProcessing: !1,
  isAuthenticated: !1,
  userData: null,
  error: null,
  retrySSO: () => {
  }
});
function G() {
  return R(_);
}
function N({
  children: t,
  appSecret: r,
  clerk: s,
  onSuccess: n,
  onError: e,
  autoProcess: f = !0,
  createUserIfNotExists: i = !0
}) {
  const [S, o] = d(!1), [u, c] = d(!1), [g, p] = d(null), [a, l] = d(null), O = K(async (h) => {
    if (!r) {
      l("appSecret is required. Get it from Kenzo App Store."), e == null || e({ error: "appSecret is required" });
      return;
    }
    o(!0), l(null);
    try {
      const m = await q(r);
      if (!m) {
        o(!1);
        return;
      }
      if (p(m), h) {
        const w = await C(h, m, {
          createUserIfNotExists: i,
          onSuccess: (k) => {
            c(!0), n == null || n({ userData: m, session: k });
          },
          onError: (k) => {
            l(k), e == null || e({ userData: m, error: k });
          }
        });
        w.success || l(w.error);
      } else
        c(!1), n == null || n({ userData: m, session: null });
    } catch (m) {
      console.error("[Kenzo SSO] Provider error:", m), l(m.message || "SSO processing failed"), e == null || e({ error: m.message });
    } finally {
      o(!1);
    }
  }, [r, i, n, e]), v = K(() => {
    O(s);
  }, [O, s]);
  z(() => {
    f && O(s);
  }, [f, s, O]);
  const y = {
    isProcessing: S,
    isAuthenticated: u,
    userData: g,
    error: a,
    retrySSO: v
  };
  return /* @__PURE__ */ U.jsx(_.Provider, { value: y, children: t });
}
function W({
  appSecret: t,
  onSuccess: r,
  onError: s,
  createUserIfNotExists: n = !0
}) {
  const [e, f] = d(!1);
  return z(() => {
    if (e) return;
    if (!t) {
      console.error("[Kenzo SSO] appSecret is required. Get it from Kenzo App Store."), s == null || s({ error: "appSecret is required" });
      return;
    }
    async function i() {
      try {
        const S = window.Clerk, o = await q(t);
        if (!o)
          return;
        S ? await C(S, o, {
          createUserIfNotExists: n,
          onSuccess: r,
          onError: s
        }) : r == null || r({ userData: o, session: null });
      } catch (S) {
        console.error("[Kenzo SSO] Handler error:", S), s == null || s(S);
      } finally {
        f(!0);
      }
    }
    i();
  }, [e, t, n, r, s]), null;
}
function M(t = {}) {
  const {
    appSecret: r,
    autoProcess: s = !0
  } = t, [n, e] = d(null), [f, i] = d(!1), [S, o] = d(null), [u, c] = d(!1);
  z(() => {
    const p = P();
    c(!!p);
  }, []);
  const g = K(async () => {
    if (!r)
      return o("appSecret is required. Get it from Kenzo App Store."), null;
    i(!0), o(null);
    try {
      const p = await q(r);
      return e(p), c(!1), p;
    } catch (p) {
      return o(p.message || "SSO processing failed"), null;
    } finally {
      i(!1);
    }
  }, [r]);
  return z(() => {
    s && u && g();
  }, [s, u, g]), {
    userData: n,
    isLoading: f,
    error: S,
    hasToken: u,
    processSSO: g
  };
}
function b(t, r = {}) {
  const {
    appSecret: s,
    autoProcess: n = !0,
    createUserIfNotExists: e = !0,
    onSuccess: f,
    onError: i
  } = r, [S, o] = d(!1), [u, c] = d(!1), [g, p] = d(null), [a, l] = d(null), [O, v] = d(!1), y = K(async () => {
    if (!s)
      return l("appSecret is required. Get it from Kenzo App Store."), null;
    if (!t)
      return l("Clerk instance is required"), null;
    o(!0), l(null);
    try {
      const h = await q(s);
      if (!h)
        return o(!1), null;
      p(h);
      const m = await C(t, h, {
        createUserIfNotExists: e,
        onSuccess: (w) => {
          c(!0), f == null || f({ userData: h, session: w });
        },
        onError: (w) => {
          l(w), i == null || i({ userData: h, error: w });
        }
      });
      return m.success || l(m.error), h;
    } catch (h) {
      const m = h.message || "SSO processing failed";
      return l(m), i == null || i({ error: m }), null;
    } finally {
      o(!1), v(!0);
    }
  }, [s, t, e, f, i]);
  return z(() => {
    n && !O && t && P() && y();
  }, [n, O, t, y]), {
    isProcessing: S,
    isAuthenticated: u,
    userData: g,
    error: a,
    processSSO: y
  };
}
function D() {
  const [t, r] = d(!1), [s, n] = d(null);
  return z(() => {
    const e = P();
    r(!!e), n(e);
  }, []), { hasToken: t, token: s };
}
function $(t) {
  const [r, s] = d(!1), [n, e] = d(null), [f, i] = d(null);
  return {
    validate: K(async (o) => {
      if (!o)
        return i("Token is required"), null;
      if (!t)
        return i("App secret is required"), null;
      s(!0), i(null);
      try {
        const u = await I(o, t);
        return e(u), u.valid || i(u.message), u;
      } catch (u) {
        const c = u.message || "Validation failed";
        return i(c), { valid: !1, data: null, message: c };
      } finally {
        s(!1);
      }
    }, [t]),
    isValidating: r,
    result: n,
    error: f
  };
}
const J = {
  // Core functions
  handleKenzoSSO: require("./validate").handleKenzoSSO,
  validateSSOToken: require("./validate").validateSSOToken,
  signInWithClerk: require("./clerk-auth").signInWithClerk,
  // React components
  KenzoSSOProvider: require("./provider").KenzoSSOProvider,
  KenzoSSOHandler: require("./provider").KenzoSSOHandler,
  // React hooks
  useKenzoSSO: require("./hooks").useKenzoSSO,
  useKenzoSSOWithClerk: require("./hooks").useKenzoSSOWithClerk
};
export {
  W as KenzoSSOHandler,
  N as KenzoSSOProvider,
  J as default,
  P as getSSOTokenFromURL,
  q as handleKenzoSSO,
  j as isSignedIn,
  T as removeSSOTokenFromURL,
  C as signInWithClerk,
  L as signOutFromClerk,
  M as useKenzoSSO,
  G as useKenzoSSOContext,
  D as useKenzoSSOToken,
  b as useKenzoSSOWithClerk,
  $ as useKenzoTokenValidation,
  I as validateSSOToken
};
