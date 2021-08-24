import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
const AnnoncesTest = () => {
  return (
    <Annonces>
      <h1>
        Où acheter le meilleur <strong>chocopain</strong>
      </h1>

      <Container className="container">
        <List className="list">
          {[...Array(40).keys()].map((e) => {
            return (
              <Annonce
                className="item js-marker"
                data-lat="48.423530"
                data-lng="	7.663260"
                data-price="450"
              >
                <img src="https://via.placeholder.com/400x260" alt=""></img>
                <h4>3 barres de chocolat pour le prix de 2 !</h4>
                <p>
                  Ici une petite description qui explique pourquoi c'est mieux
                  ici
                </p>
              </Annonce>
            );
          })}
        </List>

        <Map className="map" id="map"></Map>
      </Container>
    </Annonces>
  );
};

export default AnnoncesTest;

const Annonce = styled(motion.div)`
  cursor: pointer;
  margin-bottom: 2rem;
  transition: box-shadow 0.3s;
  padding: 0 20px;

  h4 {
    margin: 1rem 0 0.5rem 0;
  }
  p {
    margin: 0 0 1rem 0;
  }
  img {
    width: calc(100% + 40px);
    margin-left: -20px;
    display: block;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
`;

const Annonces = styled(motion.div)``;
const Container = styled(motion.div)`
  @media only screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: 7fr 4fr;
  }
`;
const List = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(248px, 50vw, 350px), 1fr)
  );

  grid-column-gap: 30px;
  padding: 0 30px;
  @media only screen and (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Map = styled(motion.div)`
  @media only screen and (min-width: 1100px) {
    position: sticky !important;
    left: 0;
    top: 0;
    background-color: #cccccc;
    /* height: 100vh; */
  }
`;
