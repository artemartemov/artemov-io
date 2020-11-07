import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGhost = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.914 14.086l.354.353-.354-.353zM4 14l-.354-.354L4 14zm2.5 0l.354-.354L6.5 14zm.146.146l-.353.354.353-.354zm1.708 0L8 13.793l.354.353zM8.5 14l.354.354L8.5 14zm2.5 0l-.354.354L11 14zm.086.086l-.354.353.354-.353zM5 6h1V5H5v1zm4 0h1V5H9v1zm1.1 1.7a3.25 3.25 0 01-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0l-.8-.6zm-5.832 6.74l.086-.086-.708-.708-.085.086.707.707zm.94-.44h.085v-1h-.086v1zm.938.354l.147.146.707-.707-.146-.147-.708.708zm2.561.146l.147-.146-.708-.708-.146.147.707.707zm1-.5h.086v-1h-.086v1zm.94.354l.085.085.707-.707-.085-.086-.708.708zm1.439.646A1.914 1.914 0 0014 13.086h-1c0 .505-.41.914-.914.914v1zm-1.354-.56c.36.358.846.56 1.354.56v-1a.914.914 0 01-.647-.268l-.707.707zm-.94-.44c.321 0 .628.127.854.354l.708-.708A2.207 2.207 0 009.793 13v1zm-.938.354c.226-.227.533-.354.853-.354v-1c-.585 0-1.147.232-1.56.646l.707.708zM7.5 15c.453 0 .887-.18 1.207-.5L8 13.793a.707.707 0 01-.5.207v1zm-1.207-.5c.32.32.754.5 1.207.5v-1a.707.707 0 01-.5-.207l-.707.707zm-1-.5c.32 0 .627.127.853.354l.708-.708A2.207 2.207 0 005.293 13v1zm-.94.354c.227-.227.534-.354.854-.354v-1c-.585 0-1.147.232-1.56.646l.707.708zM2.915 15c.508 0 .995-.202 1.354-.56l-.707-.708a.914.914 0 01-.647.268v1zM1 13.086C1 14.143 1.857 15 2.914 15v-1A.914.914 0 012 13.086H1zM7.5 1A5.5 5.5 0 0113 6.5h1A6.5 6.5 0 007.5 0v1zM2 6.5A5.5 5.5 0 017.5 1V0A6.5 6.5 0 001 6.5h1zm-1 0v6.586h1V6.5H1zm13 6.586V6.5h-1v6.586h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGhost.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGhost.displayName = "Ghost";

export default SvgGhost;