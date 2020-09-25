import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgJpg = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 6.5V6H6v.5h.5zm4 4H10v.5h.5v-.5zm2 0v.5h.5v-.5h-.5zm1-7h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-6 6H5V6h-.5v.5zm0 4v.5H5v-.5h-.5zm-2 0H2v.5h.5v-.5zm4-3.5h1V6h-1v1zm.5 4V8.5H6V11h1zm0-2.5v-2H6v2h1zm.5-.5h-1v1h1V8zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 009 7.5H8zM7.5 7a.5.5 0 01.5.5h1A1.5 1.5 0 007.5 6v1zM10 6v4.5h1V6h-1zm.5 5h2v-1h-2v1zm2.5-.5v-2h-1v2h1zM10.5 7H13V6h-2.5v1zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM2 7h2.5V6H2v1zm2-.5v4h1v-4H4zm.5 3.5h-2v1h2v-1zm-1.5.5V9H2v1.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgJpg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgJpg.displayName = "Jpg";

export default SvgJpg;
