import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQrCode = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12 8.5H8.5V12M14 8.5h1m-3 6H8m3-3h3.5V15M3 3.5h1m7 0h1m-9 8h1M1.5.5h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zm8 0h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zm-8 8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgQrCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgQrCode.displayName = "QrCode";

export default SvgQrCode;
