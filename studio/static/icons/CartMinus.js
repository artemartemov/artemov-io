import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCartMinus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5.5l.6 2m0 0l2.4 8h11v-6a2 2 0 00-2-2H1.1zm4.9 4h5m1.5 8a1 1 0 110-2 1 1 0 010 2zm-8-1a1 1 0 112 0 1 1 0 01-2 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCartMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCartMinus.displayName = "CartMinus";

export default SvgCartMinus;
