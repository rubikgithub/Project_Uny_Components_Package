import { j as a, A as H, U as Q, F as i, a as v, S as w, C as X, D as C, b as o, c as ee, d as se, P as x } from "./index.package-Bii6id4L.js";
import { useState as B, useRef as Y, useMemo as te, useEffect as k } from "react";
import "react-router-dom";
import "react-dom";
import "axios";
import "antd";
function de({
  filtersListArr: _,
  filterOptions: y,
  onFiltersApplied: I,
  onResetFilters: N,
  taskFieldsArray: r,
  logicalOperator: M,
  setViewConfig: W,
  viewConfig: s,
  onDemandFilters: L,
  openFiltersDrawer: O,
  setOpenFiltersDrawer: A,
  DataSource: R,
  groupBy: z,
  groupByOption: D
}) {
  var G, V;
  const [U, m] = B([]), [ae, ne] = B("fixed"), E = Y("show"), [g, K] = B(null), [F, f] = B(
    (r == null ? void 0 : r.filter((d) => (d == null ? void 0 : d.type) === "singleSelect")) || []
  ), J = Y([]);
  function P(d) {
    const p = (n) => n.replace(/([A-Z])/g, "_$1").toLowerCase(), S = d.id.endsWith("Text") ? d.id.slice(0, -4) : d.id;
    return {
      field: d.value,
      headerName: d.label,
      field_id: d != null && d.key ? d == null ? void 0 : d.key : p(S),
      type: d.type,
      valueOptions: d == null ? void 0 : d.valueOptions
    };
  }
  const c = te(() => {
    var p, S, n, l;
    return [
      {
        key: "fixed",
        label: "Fixed",
        children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(H, { message: "The filter options in the below section are the criteria applied at the server level while loading the page. User can however change the values as needed and apply filters." }),
          /* @__PURE__ */ a.jsx(
            Q,
            {
              filtersListArr: _,
              appliedFilters: (JSON.stringify(y == null ? void 0 : y.fixedFilters) !== JSON.stringify(J.current), y == null ? void 0 : y.fixedFilters),
              onFiltersApplied: I,
              onResetFilters: N,
              fieldsData: r == null ? void 0 : r.map((e) => ({
                id: (e == null ? void 0 : e.key) || (e == null ? void 0 : e.id),
                title: e == null ? void 0 : e.label,
                type: e == null ? void 0 : e.type,
                valueOptions: e == null ? void 0 : e.valueOptions,
                field_id: e == null ? void 0 : e.field_id
              })),
              setFilterFooter: K,
              taskFields: r.reduce((e, t) => (e != null && e[t.id] || (t.type || (t.type = 1), e[t.id] = P(t)), e), {}),
              isFixed: !0,
              operator: M,
              filterCriteriaVisibility: E
            }
          )
        ] })
      },
      {
        key: "onDemand",
        label: "On Demand",
        children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(H, { message: "The filter options in the below section can be applied by the end users as needed." }),
          /* @__PURE__ */ a.jsx(
            Q,
            {
              appliedFilters: L,
              onFiltersApplied: I,
              onResetFilters: N,
              filtersListArr: _,
              fieldsData: r == null ? void 0 : r.map((e) => ({
                id: (e == null ? void 0 : e.key) || (e == null ? void 0 : e.id),
                title: e == null ? void 0 : e.label,
                type: e == null ? void 0 : e.type,
                valueOptions: e == null ? void 0 : e.valueOptions,
                field_id: e == null ? void 0 : e.field_id
              })),
              setFilterFooter: K,
              taskFields: r.reduce((e, t) => (e != null && e[t.id] || (t.type || (t.type = 1), e[t.id] = P(t)), e), {}),
              operator: M,
              filterCriteriaVisibility: E
            }
          )
        ] })
      },
      {
        key: "sortBy",
        label: "Sort By",
        children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(i, { fieldAlign: "side", cols: "1", children: /* @__PURE__ */ a.jsx(v, { label: "Sort By", children: /* @__PURE__ */ a.jsx(
            w,
            {
              name: "sortBy",
              defaultValue: (S = (p = s == null ? void 0 : s.json) == null ? void 0 : p.TargetSettings) == null ? void 0 : S.sortBy,
              selectOptions: F,
              onChange: (e) => {
                W((t) => {
                  var b;
                  return {
                    ...t,
                    json: {
                      ...t == null ? void 0 : t.json,
                      TargetSettings: {
                        ...(b = t == null ? void 0 : t.json) == null ? void 0 : b.TargetSettings,
                        sortBy: e,
                        cardSequence: void 0
                      }
                    }
                  };
                });
              }
            }
          ) }) }),
          ((l = (n = s == null ? void 0 : s.json) == null ? void 0 : n.TargetSettings) == null ? void 0 : l.sortBy) !== void 0 ? /* @__PURE__ */ a.jsx(
            X,
            {
              items: [
                {
                  key: "1",
                  label: "Card Sequence",
                  children: /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
                    C,
                    {
                      items: U,
                      itemsRenderer: (e) => /* @__PURE__ */ a.jsx(
                        ee,
                        {
                          className: "draggableList_item_content",
                          justify: "between",
                          align: "center",
                          children: /* @__PURE__ */ a.jsx("span", { className: "draggableList_title", children: e == null ? void 0 : e.name })
                        }
                      ),
                      indexKey: "value",
                      onDragEnd: ({ active: e, over: t }) => {
                        !t || e.id === t.id || m((b) => {
                          const j = b.findIndex(
                            (h) => h.value === e.id
                          ), u = b.findIndex(
                            (h) => h.value === t.id
                          );
                          if (j === -1 || u === -1)
                            return b;
                          const q = o(
                            b,
                            j,
                            u
                          );
                          return W((h) => {
                            var T;
                            return {
                              ...h,
                              json: {
                                ...h == null ? void 0 : h.json,
                                TargetSettings: {
                                  ...(T = h == null ? void 0 : h.json) == null ? void 0 : T.TargetSettings,
                                  cardSequence: q
                                }
                              }
                            };
                          }), q;
                        });
                      }
                    }
                  ) })
                }
              ]
            }
          ) : ""
        ] })
      }
    ];
  }, [
    _,
    y == null ? void 0 : y.fixedFilters,
    J,
    I,
    N,
    r,
    K,
    M,
    E,
    L,
    (V = (G = s == null ? void 0 : s.json) == null ? void 0 : G.TargetSettings) == null ? void 0 : V.sortBy,
    F,
    U,
    W,
    m
  ]);
  return k(() => {
    var d, p, S, n, l, e;
    if (((p = (d = s == null ? void 0 : s.json) == null ? void 0 : d.TargetSettings) == null ? void 0 : p.sortBy) !== void 0) {
      const t = R == null ? void 0 : R.map((j) => {
        var u, q, h, T, Z, $;
        return {
          label: j == null ? void 0 : j[(q = (u = s == null ? void 0 : s.json) == null ? void 0 : u.TargetSettings) == null ? void 0 : q.sortBy],
          value: j == null ? void 0 : j[(T = (h = s == null ? void 0 : s.json) == null ? void 0 : h.TargetSettings) == null ? void 0 : T.sortBy],
          name: j == null ? void 0 : j[($ = (Z = s == null ? void 0 : s.json) == null ? void 0 : Z.TargetSettings) == null ? void 0 : $.sortBy]
        };
      }), b = Array.from(
        new Map(t.map((j) => [j.value, j])).values()
      );
      m(b);
    }
    ((n = (S = s == null ? void 0 : s.json) == null ? void 0 : S.TargetSettings) == null ? void 0 : n.cardSequence) !== void 0 && m((e = (l = s == null ? void 0 : s.json) == null ? void 0 : l.TargetSettings) == null ? void 0 : e.cardSequence);
  }, [s, R]), k(() => {
    var d;
    if ((r == null ? void 0 : r.length) > 0) {
      let p = r.filter(
        (n) => (n == null ? void 0 : n.type) === "singleSelect"
      ), S = (d = D == null ? void 0 : D.find((n) => (n == null ? void 0 : n.value) === z)) == null ? void 0 : d.key;
      z !== void 0 && (p = p.filter((n) => (n == null ? void 0 : n.key) !== S)), f(p);
    }
  }, [z, D, r]), /* @__PURE__ */ a.jsx(
    se,
    {
      defaultWidth: "50%",
      maxWidthSize: "99.99%",
      minWidthSize: "30%",
      title: "Filters & Sort",
      onClose: () => {
        A(!1);
      },
      resizable: !0,
      placement: "right",
      isOpen: O,
      footer: g,
      children: /* @__PURE__ */ a.jsx(X, { items: c })
    }
  );
}
de.propTypes = {
  filtersListArr: x.array.isRequired,
  filterOptions: x.object.isRequired,
  onFiltersApplied: x.func.isRequired,
  onResetFilters: x.func.isRequired,
  taskFieldsArray: x.array.isRequired,
  logicalOperator: x.string.isRequired,
  setViewConfig: x.func.isRequired,
  viewConfig: x.object.isRequired,
  headerSettings: x.object,
  onDemandFilters: x.array.isRequired,
  openFiltersDrawer: x.array.isRequired,
  setOpenFiltersDrawer: x.func.isRequired,
  DataSource: x.array.isRequired,
  groupBy: x.string.isRequired,
  groupByOption: x.array.isRequired
};
export {
  de as default
};
