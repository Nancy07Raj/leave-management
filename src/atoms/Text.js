import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box } from "atoms/Box";

export const Text = forwardRef(({ as, children, ...rest }, ref) => (
  <Box as={as} ref={ref} {...rest}>
    {children}
  </Box>
));

Text.defaultProps = {
  as: "div",
  children: "",
};

Text.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
