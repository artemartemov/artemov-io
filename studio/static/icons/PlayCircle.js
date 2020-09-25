import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlayCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 5.5l.248-.434A.5.5 0 006 5.5h.5zm0 4H6a.5.5 0 00.748.434L6.5 9.5zm3.5-2l.248.434a.5.5 0 000-.868L10 7.5zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM6 5.5v4h1v-4H6zm.748 4.434l3.5-2-.496-.868-3.5 2 .496.868zm3.5-2.868l-3.5-2-.496.868 3.5 2 .496-.868z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlayCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlayCircle.displayName = "PlayCircle";

export default SvgPlayCircle;
