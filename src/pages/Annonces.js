import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Maps from "../components/Maps";
import { v4 as uuid } from "uuid";
const AnnoncesTest = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 32 ||
      document.documentElement.scrollTop > 32
    ) {
      // document.getElementById("map").style.height = "calc(10vh - 2rem)";
      document.getElementById("map").style.top = "1rem";
      document.getElementById("map").style.bottom = "1rem";
      document.getElementById("map").style.height = "calc(100vh - 2rem)"; //100vh -top and bottom position
    } else {
      // All theses values are defaults values in map
      document.getElementById("map").style.top = "2.4rem";
      document.getElementById("map").style.bottom = "1rem";
      document.getElementById("map").style.height = "calc(97vh - 2.4rem)";
    }
  };

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
                key={uuid()}
                className="item js-marker"
                data-lat="48.423530"
                data-lng="	7.663260"
                data-price="450"
              >
                <img src="https://via.placeholder.com/400x260" alt=""></img>
                <Content className="content">
                  <h4>3 barres de chocolat pour le prix de 2 !</h4>
                  <p>
                    Ici une petite description qui explique pourquoi c'est mieux
                    ici
                  </p>
                </Content>
              </Annonce>
            );
          })}
        </List>

        <Map className="map" id="map">
          <Maps />
        </Map>
      </Container>
    </Annonces>
  );
};

export default AnnoncesTest;

const Content = styled(motion.div)`
  padding: 0.5rem;
`;

const Annonce = styled(motion.div)`
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  padding: 0.4rem 0.8rem 0 0.8rem;
  h4 {
    margin: 1rem 0 0.5rem 0;
  }
  p {
    margin: 0 0 1rem 0;
  }
  img {
    display: block;
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
`;

const Annonces = styled(motion.div)``;
const Container = styled(motion.div)`
  padding: 0 min(1.3vh, 5rem) 0 min(1.3vh, 5rem);

  @media only screen and (min-width: 1100px) {
    padding: 0 min(1.3vh, 5rem) 0 min(4vh, 5rem);
    grid-column-gap: 1rem;
    display: grid;
    grid-template-columns: 7fr 5fr;
  }
`;
const List = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(248px, 50vw, 350px), 1fr)
  );
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  @media only screen and (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Map = styled(motion.div)`
  border-radius: 3px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  @media only screen and (min-width: 1100px) {
    position: sticky !important;
    left: 0;
    top: 2.4rem;
    background-color: #cccccc;
    height: calc(97vh - 2.4rem);
    transition: all 500ms linear 0s;
    /* height: 100vh; */
  }
`;
