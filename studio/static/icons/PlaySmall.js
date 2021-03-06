import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlaySmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 9.5v-4l3.5 2-3.5 2z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgPlaySmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlaySmall.displayName = "PlaySmall";

export default SvgPlaySmall;
