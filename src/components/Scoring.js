import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Scoring = ({ type, score, variant }) => {
  // score="G"
  return (
    <ScoriStyled variant={variant} score={score} className="energie">
      {["A", "B", "C", "D", "E", "F", "G"].map((e) => {
        return (
          <div
            className={`energie__item energie_item ${e} ${
              e == score ? "energie__item ener" : ""
            }`}
          >
            {e}
          </div>
        );
      })}
    </ScoriStyled>
  );
};

export default Scoring;

const ScoriStyled = styled(motion.div)`
  &.energie {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* gap:0.5rem; */
    font-size: clamp(1rem, 7vw, 1.5rem);
    font-weight: 600;
  }
  .energie__item {
    /* position: absolute; */
    padding: 0.2rem 0.5rem;
  }

  .A {
    background-color: var(--color-A);
  }
  .B {
    background-color: var(--color-B);
  }
  .C {
    background-color: var(--color-C);
  }
  .D {
    background-color: var(--color-D);
  }
  .E {
    background-color: var(--color-E);
  }
  .F {
    background-color: var(--color-F);
  }
  .G {
    background-color: var(--color-G);
    color: white;
  }
  .ener {
    padding: 0.4rem 0.7rem;
    z-index: 100;
    border-radius: 100%;
    position: relative;
  }

  ${({ variant }) =>
    variant === "dpe"
      ? `
    --color-A:#50b68c;
    --color-B:#68b42e;
    --color-C:#bacf26;
    --color-D:#fad73a;
    --color-E:#f6a12d;
    --color-F:#ec653b;
    --color-G:#dd3c4c;
  `
      : `--color-A:#F6E3F0;
  --color-B:#F2D8EA;
  --color-C:#E2B8D7;
  --color-D:#C27FB5;
  --color-E:#B464A5;
  --color-F:#A2519A; 
  --color-G:#983B8E;
  `}

  .ener::before {
    position: absolute;
    content: "";
    position: absolute;
    border: solid 2px white;
    width: 3rem;
    left: -0.38rem;
    top: -0.32rem;
    border-radius: 100%;
    height: 3rem;

    background-color: var(--color-${(props) => props.score});

    content: "";
    z-index: -10;
  }
`;
