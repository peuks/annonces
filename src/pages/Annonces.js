import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Maps from "../components/Maps";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { propertiesUrl } from "../api/api";
import propertyPlaceholder from "../images/placeholder_house.jpg";

const AnnoncesTest = () => {
  const [properties, setProperties] = useState(null);
  const [fetchApi, setFetchApi] = useState(null);
  const [test, setTest] = useState(undefined);

  useEffect(async () => {
    if (!fetchApi) {
      const res = await axios.get(propertiesUrl());
      setProperties(res.data["hydra:member"]);
      setFetchApi(true);
    }
  }, []);

  return (
    <Annonces>
      <h1>
        Où acheter le meilleur <strong>chocopain</strong>
      </h1>

      <Container className="container">
        <List className="list">
          {properties &&
            properties.map((property) => {
              return (
                <Annonce
                  key={uuid()}
                  onClick={() => {
                    setTest(property.location);
                  }}
                >
                  <img
                    src={
                      property.images.length > 0
                        ? property.images[
                            ~~(Math.random() * property.images.length)
                          ].url
                        : propertyPlaceholder
                    }
                    alt="property image"
                  />
                  <Content className="content">
                    <div className="content__left">
                      <div className="content__adress">
                        <h4>
                          {property.city} <span>{property.address}</span>
                        </h4>
                      </div>
                      <p>{property.currentRentalWithoutCharges} €</p>
                      <div className="content__icon">
                        <p>{property.size}m²</p>
                        <p>{property.rentalType.type}</p>
                        <p>4 ch</p>
                      </div>
                    </div>
                    <div className="content__right">
                      <Button className="button button--primary">
                        Candidater
                      </Button>
                      <Button className="button button--secondary">
                        Contacter
                      </Button>
                    </div>
                  </Content>
                </Annonce>
              );
            })}
        </List>

        <Map className="map" id="map">
          {properties && <Maps properties={properties} centerMap={test} />}
        </Map>
      </Container>
    </Annonces>
  );
};

export default AnnoncesTest;
const Annonce = styled(motion.div)`
  /*  */
  border-radius: 0.5rem;
  min-height: 42.8785607196vh;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  background-color: #fff;

  border-radius: 0.5rem;
  min-height: 42.8785607196vh;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  background-color: #fff;
  img {
    display: block;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: max(23.2383808096vh, 10rem);
    object-fit: cover;
  }
  /*  */
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
`;

const Content = styled(motion.div)`
  .content__icon {
    display: flex;
    flex-direction: row;
    p {
      padding-right: 0.2rem;
    }
  }
  padding: 0.75em 1em 1em 1em;
  min-height: 19.64017991vh;
  min-width: 18.140929535232384vh;
  display: flex;
  align-items: flex-end;
  /* flex-wrap: wrap; */
  justify-content: center;
  @media only screen and (min-width: 280px) {
    justify-content: space-between;
  }
  .content__left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 16vh;
  }
  .content__right {
    height: 6em;
    /* min-height: 16vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .button {
      &--primary {
        background: #0b3d91;
      }
      &--secondary {
        background: #ffffff;
        color: #0b3d91;
      }
    }
  }
  .content__adress {
    min-height: 4.197901049475262vh;
    font-size: clamp(1.3rem, 1.6vw, 2rem);
    span {
      display: block;
    }
  }
`;

const Button = styled(motion.div)`
  /* background: #0b3d91; */
  border: 1px solid #0b3d91;
  border-radius: 50px;
  font-size: 0.8445rem;
  padding: 0.7em 3em;
  color: #ffffff;
  min-width: 7.375rem;
  display: flex;
  margin-bottom: 0.375rem;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
`;

const Annonces = styled(motion.div)``;
const Container = styled(motion.div)`
  padding: 0 min(1.3vh, 5rem) 0 min(1.3vh, 5rem);

  @media only screen and (min-width: 700px) {
    padding: 0 min(1.3vh, 5rem) 0 min(4vh, 5rem);
    grid-column-gap: 1rem;
    display: grid;
    grid-template-columns: 5fr 7fr;
  }
`;
const List = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, minmax(clamp(248px, 50vw, 350px), 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Map = styled(motion.div)`
  border-radius: 3px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  @media only screen and (min-width: 700px) {
    position: sticky !important;
    left: 0;
    top: 2.4rem;
    background-color: #cccccc;
    height: calc(97vh - 2.4rem);
    transition: all 500ms linear 0s;
    /* height: 100vh; */
  }
`;
