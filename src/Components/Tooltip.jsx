import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "green" }}>Collerd Component</span>;
};
const CustomeChild = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

const Tooltips = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy arrow={false} delay={1000} placement="left" content="Tooltip Example">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="right" content={<span style={{ color: "orange" }}>Coloured</span>}>
          <button>Html content</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-start" content={<ColoredTooltip />}>
          <button>component</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="bottom-end" content={<ColoredTooltip />}>
          <CustomeChild></CustomeChild>
        </Tippy>
      </div>
    </div>
  );
};

export default Tooltips;
