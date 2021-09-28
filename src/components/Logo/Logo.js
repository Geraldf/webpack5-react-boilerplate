import React from "react";
import { Icon } from "@material-ui/core";
import YourLogo from "../../assets/icons/fox_logo.svg";
import PropTypes from "prop-types";

export const Logo = ({ color, size }) => (
  /*  <Icon>
    <img src={YourLogo} fill={color} height={size} width={size} />
  </Icon> */
  <svg fill={color} width={size} height={size}>
    <use xlinkHref={`${YourLogo}#icon-FoxLogo`} />
  </svg>
);

Logo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
};

export default Logo;
