import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ValidationCandidature = ({ layoutId, type }) => {
  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card--shadow")) {
      document.body.style.overflow = "scroll";
      history.push(`/annonces/${layoutId}`);
    }
  };

  //Exit Detail
  const toResearch = (e) => {
    const element = e.target;
    if (element.classList.contains("blue")) {
      document.body.style.overflow = "scroll";
      history.push(`/annonces`);
    }
  };

  return (
    <CardShadow onClick={exitDetailHander} className="card--shadow">
      <Detail>
        <div>
          <h1>Candidature instantanée</h1>
          <h2>
            Félicitation ! Vous venez de candidater à{" "}
            {type === "Maison" ? "cette maison" : "cet appartement"}.
          </h2>
          <p class="dimension dimension">
            Chez Apollo tout se passe sur une seule plateforme ! Que ce soit
            pour la signature de votre bail ou la création de votre dossier,
            nous sommes là pour vous.
          </p>

          <Incomplet>
            <h3>Dossier incomplet</h3>
            <p>
              Veuillez ajouter les documents manquants pour finaliser votre
              dossier locataire.
            </p>

            <ButtonsGroup>
              <button className="white">Ajouter des documents</button>
            </ButtonsGroup>
          </Incomplet>

          <ButtonsGroup>
            <button className="blue" onClick={toResearch}>
              Continuer mes recherches
            </button>
          </ButtonsGroup>
        </div>
      </Detail>
    </CardShadow>
  );
};

export default ValidationCandidature;

const CardShadow = styled(motion.div)`
  /** Will take all the screen */
  width: 100%;
  min-height: 100vh;
  /* when scroll , will stay on the screen */
  overflow-y: scroll;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;

  /* Custom scroll barr */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  top: 5vh;
  width: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.4rem;
  padding: 2rem min(3.5vw, 5rem);
  background: white;
  position: absolute;
  /* left: 10%; */
  color: black;
  z-index: 10;

  h1 {
    color: #225fc7;
    font-weight: bold;
    font-size: clamp(1.2rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
  }
  h2 {
    font-size: clamp(1rem, 2.3vw, 1.5rem);
  }
  h3 {
    font-size: clamp(1.2rem, 2vw, 2rem);
    font-weight: bold;
    padding: 1rem 0rem;
  }
  .dimension {
    padding: 2rem 0rem;
    text-align: justify;
    text-align-last: center;
  }
  /* p{
    font-size: clamp(0.8rem,1vw,10rem);
  } */

  @media (min-width: 43.7em) {
    width: 70%;
  }

  @media (min-width: 62.5em) {
    width: 60%;
    .dimension {
      width: 65%;
      margin: 0 auto;
    }
    p {
      width: 55%;
      margin: 0 auto;
    }
  }
`;

const Incomplet = styled(motion.div)`
  background-color: #ffda41;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  /* width:60%; */

  p {
    padding: 0.5rem 0rem;
  }
`;

const ButtonsGroup = styled(motion.div)`
  /* button {
    border: 1px solid #0b3d91;
    border-radius: 50px;
    font-size: clamp(0.8rem, 1vw, 1.5rem);
    text-align: center;
    padding: clamp(0rem, 1.5vw, 0.8rem) 0rem;
    color: #ffffff;
    width: clamp(13rem, 2vw, 0rem);

    margin-bottom: 0.375rem;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  } */

  @media (min-width: 43.7em) {
    .blue {
      margin-bottom: 2rem !important;
      margin-top: 4rem !important;
    }
  }

  .blue {
    border: 1px solid #0b3d91;
    border-radius: 50px;
    color: #ffffff;

    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    background: #0b3d91;

    margin-bottom: 0rem;
    margin-top: 2rem;

    font-size: clamp(0.75rem, 1vw, 1.5rem);
    padding: clamp(0.5rem,1.5vw,0.8rem) 0rem;
    width: clamp(15rem, 2vw, 0rem);
  }
  .white {
    border: none;
    border-radius: 50px;
    background: #ffffff;
    color: #3f3d56;

    margin-bottom: 2rem;
    margin-top: 1rem;

    font-weight: 600;
    font-size: clamp(00.9rem, 1vw, 1.5rem);
    padding: clamp(0.75rem, 1.5vw, 0.8rem) 0rem;
    width: clamp(12rem, 14vw, 13rem);
  }

  @media (min-width: 43.7em) {
    .white {
      margin-bottom: 0rem !important;
      margin-top: 1rem !important;
    }
  }
`;
