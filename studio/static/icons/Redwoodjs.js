import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRedwoodjs = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.248-.434a.5.5 0 00-.496 0L7.5.5zM4 2.5l-.248-.434a.5.5 0 00-.142.122L4 2.5zM2 5l-.39-.312a.5.5 0 00-.09.175L2 5zM1 8.5l-.48-.137a.5.5 0 00.033.36L1 8.5zm2 4l-.447.224a.5.5 0 00.244.233L3 12.5zm4.5 2l-.203.457a.5.5 0 00.406 0L7.5 14.5zm4.5-2l.203.457a.5.5 0 00.244-.233L12 12.5zm2-4l.447.224a.5.5 0 00.034-.361L14 8.5zM13 5l.48-.137a.5.5 0 00-.09-.175L13 5zm-2-2.5l.39-.312a.499.499 0 00-.142-.122L11 2.5zM7.252.066l-3.5 2 .496.868 3.5-2-.496-.868zM3.61 2.188l-2 2.5.78.624 2-2.5-.78-.624zM1.52 4.863l-1 3.5.96.274 1-3.5-.96-.274zm-.967 3.86l2 4 .894-.447-2-4-.894.448zm2.244 4.234l4.5 2 .406-.914-4.5-2-.406.914zm4.906 2l4.5-2-.406-.914-4.5 2 .406.914zm4.744-2.233l2-4-.894-.448-2 4 .894.448zm2.034-4.361l-1-3.5-.962.274 1 3.5.962-.274zm-1.09-3.675l-2-2.5-.781.624 2 2.5.78-.624zm-2.143-2.622l-3.5-2-.496.868 3.5 2 .496-.868zm-8.011.86l10.5 6.5.526-.851-10.5-6.5-.526.85zm8-.851l-10.5 6.5.526.85 10.5-6.5-.526-.85zm-9.59 3.279l5.5 5.5.707-.708-5.5-5.5-.708.708zm5.63 5.593l4 2 .447-.894-4-2-.448.894zm5.37-6.3l-5.5 5.5.707.707 5.5-5.5-.708-.708zm-5.37 5.406l-4 2 .447.894 4-2-.448-.894z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRedwoodjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRedwoodjs.displayName = "Redwoodjs";

export default SvgRedwoodjs;