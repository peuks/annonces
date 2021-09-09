import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ConnectionCandidature = (layoutId) => {
  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card--shadow")) {
      document.body.style.overflow = "scroll";
      history.push(`/annonces/${layoutId}`);
    }
  };

  return (
    <CardShadow onClick={exitDetailHander} className="card--shadow">
      <Detail>
        <div className="defined">
          <Titre>
            <h1>Emménagez avec Apollo Immo</h1>
            <h2>Votre candidature n’aura jamais été aussi facile.</h2>
          </Titre>
          <ol>
            <li>Créez votre dossier</li>
            <p>
              Nous vous accompagnons dans la création de votre dossier, vous
              pouvez candidater aux annonces Apollo, envoyer votre dossier à des
              propriétaires extérieurs (leboncoin, agence) ou profitez de nos
              garants. Toutes vos données sont cryptées et détruites au bout de
              1 mois.
            </p>
            <li>Candidatez aux appartements en un éclair </li>
            <p>
              Vous gérez plus facilement vos candidatures en bénéficiant d’un
              suivi en temps réel. Le propriétaire vous contacte pour prendre
              rendez-vous. Vous ne louperez plus aucune visite !{" "}
            </p>
            <li>Signez votre contrat depuis votre canapé</li>
            <p>
              Vous recevez votre bail directement sur la plateforme : vous
              n’avez plus qu’à le signer électroniquement. Nous vous
              accompagnons dans la création de vos contrats d’habitation. Louer
              un appartement n’a jamais été aussi facile.
            </p>
            <li>Emménagez dans l’appartement de vos rêves</li>
            <p>
              Votre nouveau propriétaire vous accueil et vous donne les clefs.
              En cas de litige ou de questions, nous restons présents. Profitez
              de votre nouvel appartement sans stress.{" "}
            </p>
          </ol>
        </div>

        <ButtonsGroup>
            <button className="blue">
              Se connecter
            </button>
          </ButtonsGroup>

      </Detail>
    </CardShadow>
  );
};

export default ConnectionCandidature;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.4rem;
  padding: 2rem min(3.5vw, 5rem);
  background: white;
  position: absolute;
  color: black;
  z-index: 10;

  p{
    text-align: left;
    font-size: clamp(0.9rem, 2vw, 1rem);
    margin-bottom:2rem;
  }

  h3 {
    font-size: clamp(1.2rem, 2vw, 2rem);
    font-weight: bold;
  }

  li {
    color: #3f3d56;
    font-weight: bold;
    font-size: clamp(0.9em, 2vw, 1.2em);
  }
  .defined{
      width:91%;
  }
  @media (min-width: 43.7em) {
    width: 70%;

    .defined{
      width:70%;
      text-align:justify;
  }
  }

`;

const Titre = styled(motion.div)`
  text-align: center;
  h1 {
    color: #225fc7;
    font-weight: bold;
    font-size: clamp(1.2rem, 3vw, 2.25rem);
    margin-bottom: 1rem;
  }
  h2 {
    font-size: clamp(1rem, 2.3vw, 1.125rem);
    font-weight: bold;
    margin-bottom:2rem;
  }
`;

const ButtonsGroup = styled(motion.div)`

  @media (min-width: 43.7em) {
    .blue {
      margin-bottom: 1rem !important;
      margin-top: 1rem !important;
    }
  }

  .blue {
    border: 1px solid #0b3d91;
    border-radius: 50px;
    color: #ffffff;

    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    background: #0b3d91;


    font-size: clamp(0.75rem, 1vw, 1.5rem);
    padding: clamp(0.5rem,1.5vw,0.8rem) 0rem;
    width: clamp(15rem, 2vw, 0rem);
  }
`;