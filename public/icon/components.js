import { jsx } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
const SvgComponents = (props) => {
  const $ = _c(3);
  let t0;
  let t1;
  let t2;
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("path", { d: "M3 12l3 3l3 -3l-3 -3l-3 3" });
    t1 = /* @__PURE__ */ jsx("path", { d: "M15 12l3 3l3 -3l-3 -3l-3 3" });
    t2 = /* @__PURE__ */ jsx("path", { d: "M9 6l3 3l3 -3l-3 -3l-3 3" });
    t3 = /* @__PURE__ */ jsx("path", { d: "M9 18l3 3l3 -3l-3 -3l-3 3" });
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
    $[3] = t3;
  } else {
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
    $[3] = t3;
  }
  let t4;
  if ($[1] !== props) {
    t4 = /* @__PURE__ */ jsx("svg", {fill: "currentColor", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
      t0,
      t1,
      t2,
      t3
    ] });
    $[4] = props;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
};
export {
  SvgComponents as ReactComponent
};