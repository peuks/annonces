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



const ButtonStyle = styled(motion.button)`
  border: 1px solid #0b3d91;
  border-radius: 50px;
  /* font-size: clamp(0.8rem, 1.3vw, 2rem); */
  text-align: center;
  padding: 0.7em 0em;
  color: #ffffff;
  width: clamp(10rem, 15vw, 25rem);

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
