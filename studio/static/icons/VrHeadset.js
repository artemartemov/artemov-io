import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVrHeadset = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.851 5.4l.137.48-.137-.48zm13.298 0l.137-.481-.137.48zM4.58 12.352l.44.24-.44-.24zm5.84 0l.438-.239-.439.24zM2.996 3.757l-.464-.185.464.185zm-.961 1.057a.5.5 0 00.928.372l-.928-.372zm9.967-1.057l.464-.185-.464.185zm.033 1.429a.5.5 0 10.928-.372l-.928.372zm1.964.68V9.21h1V5.865h-1zM11.21 12h-.542v1h.542v-1zm-6.878 0H3.79v1h.542v-1zM1 9.21V5.865H0V9.21h1zM.988 5.88a23.703 23.703 0 0113.024 0l.274-.961a24.703 24.703 0 00-13.572 0l.274.961zM3.79 12A2.79 2.79 0 011 9.21H0A3.79 3.79 0 003.79 13v-1zm.352.113a.217.217 0 01.19-.113v1c.287 0 .55-.156.687-.408l-.877-.479zm.877.479c1.071-1.963 3.89-1.963 4.962 0l.877-.479c-1.45-2.658-5.267-2.658-6.716 0l.877.479zM10.668 12c.08 0 .152.043.19.113l-.877.479c.137.252.4.408.687.408v-1zM14 9.21A2.79 2.79 0 0111.21 12v1A3.79 3.79 0 0015 9.21h-1zm1-3.345a.984.984 0 00-.714-.946l-.274.961A.016.016 0 0114 5.865h1zm-14 0a.016.016 0 01-.012.015L.714 4.92A.984.984 0 000 5.865h1zm1.533-2.293l-.497 1.242.928.372.497-1.243-.928-.371zm9.006.37l.497 1.244.928-.372-.497-1.242-.928.37zM4.854 3h5.292V2H4.854v1zm7.613.572A2.5 2.5 0 0010.146 2v1a1.5 1.5 0 011.393.943l.928-.371zm-9.006.37A1.5 1.5 0 014.854 3V2a2.5 2.5 0 00-2.321 1.572l.928.37z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVrHeadset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVrHeadset.displayName = "VrHeadset";

export default SvgVrHeadset;
