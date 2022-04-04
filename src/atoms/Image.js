import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img``;

export function Image({ src, alt, width, height, ...rest }) {
  return <Img src={src} alt={alt} width={width} height={height} {...rest} />;
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
