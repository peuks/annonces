import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = ({ label, variant }) => {
  return (
    <ButtonStyle
      className={`button ${
        variant === "secondary" ? "button--secondary" : "button--primary"
      }`}
    >
      {label}
    </ButtonStyle>
  );
};

const ButtonStyle = styled(motion.div)`
  border: 1px solid #0b3d91;
  border-radius: 50px;
  font-size: 0.8445rem;
  padding: 0.7em 3em;
  color: #ffffff;
  min-width: 7.375rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.375rem;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  &.button {
    &--secondary {
      background: #ffffff;
      color: #0b3d91;
    }
    &--primary {
      background: #0b3d91;
    }
  }
`;
export default Button;
