import { f as u } from "./index.package-CZRy-Swf.js";
const o = {
  config: {
    isInitialized: !0
  },
  traits: {
    isDocker: !1,
    isCI: !1,
    machineId: null,
    projectId: "b28c94b2195c8ed259f0b415aaee3f39b0b2920a4537611499fa044956917a21",
    sessionId: "c77df83dbfa1c887b7fcdf525975707f19beb8231558df835ad75bfd90d86e13",
    anonymousId: "9768ecc78695da54407ad025e2e5934bd61a9cae9a909bce25469f04ec9d615a"
  }
}, p = "__mui_x_telemetry_";
function l(e) {
  return p + btoa(e);
}
function c(e, t, n) {
  try {
    if (typeof window < "u" && window[e])
      return window[e].setItem(l(t), n), !0;
  } catch {
  }
  return !1;
}
function d(e, t) {
  try {
    if (typeof window < "u" && window[e])
      return window[e].getItem(l(t));
  } catch {
  }
  return null;
}
function a(e) {
  let t = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length;
  let i = 0;
  for (; i < e; )
    t += n.charAt(Math.floor(Math.random() * r)), i += 1;
  return t;
}
function w(e, t) {
  return t.reduce((n, r) => (n[r] = e[r], n), {});
}
const h = typeof window > "u" || process.env.NODE_ENV === "test" ? () => {
} : async () => {
  const e = "fingerprint";
  try {
    const t = d("localStorage", e);
    if (t)
      return JSON.parse(t);
    const n = await import("./fp.esm-Crx1E8_J.js"), i = await (await n.load({
      monitoring: !1
    })).get(), s = u({}, i.components);
    delete s.cookiesEnabled;
    const g = n.hashComponents(s), m = n.hashComponents(u({}, w(s, ["fonts", "audio", "languages", "deviceMemory", "timezone", "sessionStorage", "localStorage", "indexedDB", "openDatabase", "platform", "canvas", "vendor", "vendorFlavors", "colorGamut", "forcedColors", "monochrome", "contrast", "reducedMotion", "math", "videoCard", "architecture"]))), f = {
      fullHash: g,
      coreHash: m
    };
    return c("localStorage", e, JSON.stringify(f)), f;
  } catch {
    return null;
  }
};
function y() {
  const e = "anonymous_id", t = d("localStorage", e);
  if (t)
    return t;
  const n = `anid_${a(32)}`;
  return c("localStorage", e, n) ? n : "";
}
function I() {
  const e = "session_id", t = d("sessionStorage", e);
  if (t)
    return t;
  const n = `sesid_${a(32)}`;
  return c("sessionStorage", e, n) ? n : `sestp_${a(32)}`;
}
async function b() {
  return o.traits.sessionId = I(), o.config.isInitialized || (o.traits.anonymousId = y(), o.config.isInitialized = !0), o.traits.fingerprint || (o.traits.fingerprint = await h()), o;
}
export {
  b as default
};
