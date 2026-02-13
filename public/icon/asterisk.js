import { jsx } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
const SvgAsterisk = (props) => {
  const $ = _c(3);
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let t5;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("path", { d: "M12 12l8 -4.5" });
    t1 = /* @__PURE__ */ jsx("path", { d: "M12 12v9" });
    t2 = /* @__PURE__ */ jsx("path", { d: "M12 12l-8 -4.5" });
    t3 = /* @__PURE__ */ jsx("path", { d: "M12 12l8 4.5" });
    t4 = /* @__PURE__ */ jsx("path", { d: "M12 3v9" });
    t5 = /* @__PURE__ */ jsx("path", { d: "M12 12l-8 4.5" });
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
    $[3] = t3;
    $[4] = t4;
    $[5] = t5;
  } else {
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
    $[3] = t3;
    $[4] = t4;
    $[5] = t5;
  }
  let t6;
  if ($[1] !== props) {
    t6 = /* @__PURE__ */ jsx("svg", {fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
      t0,
      t1,
      t2,
      t3,
      t4,
      t5
    ] });
    $[6] = props;
    $[7] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
};
export {
  SvgAsterisk as ReactComponent
};