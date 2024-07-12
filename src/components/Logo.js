import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

function Logo({ src, alt, size }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  alt: "Logo",
  size: 40,
};

export default Logo;
