import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Test from "./Test";
// import test from {`../images/CircleIcons/${svgname}.svg`};
// import test from "../images/CircleIcons/fibre.svg";

const Accreditation = ({ label, svgname }) => {
  return (
    <SectionAcred>
      <figure>
      <img src={require(`../images/CircleIcons/${svgname}.svg`)} />
        <figcaption>{label}</figcaption>
      </figure>
    </SectionAcred>
  );
};

export default Accreditation;

const SectionAcred = styled(motion.section)`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  gap: clamp(1rem,9vw,15rem) clamp(1rem,6vw,9rem);

  figure {
    display: flex;
    word-break: break-word;
    width: clamp(6rem, 5vw, 11rem);

    flex-direction: column;
    align-items: center;
    img {
      width: clamp(4rem, 5.5vw, 4.5rem);
      height: clamp(4rem, 5.5vw, 4.5rem);

      border-radius: 100%;
    }
  }
  figcaption {
    font-size: clamp(0.7rem, 1vw, 0.8rem);
    text-align: center;
    padding-top: 0.5rem;
  }
`;
