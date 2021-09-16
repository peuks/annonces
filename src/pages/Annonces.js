import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Maps from "../components/Maps";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { propertiesUrl, propertysUrl } from "../api/api";
import propertyPlaceholder from "../images/placeholder_house.jpg";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";

import m2 from "../images/CircleIcons/m2.svg";
import meuble from "../images/CircleIcons/meuble.svg";
import chambre from "../images/CircleIcons/chambre.svg";

// img react-icon
import { GrLocation } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";

const AnnoncesTest = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

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
      <div className="menu">
        <CgMenu />
      </div>

      <Container>
        <List>
          <SearchBarStyled>
            <form id="searchbox " method="get " action="search ">
              <div>
                <BiSearch />
                <input
                  name="q "
                  type="text"
                  size="15"
                  placeholder="Où voulez-vous vivre ?"
                />
              </div>
            </form>
          </SearchBarStyled>

          <h4>
            <GrLocation /> Affichage vue carte
          </h4>

          {properties &&
            properties.map((property) => {
              return (
                <Annonce
                  key={uuid()}
                  onClick={() => {
                    setTest(property.location);
                  }}
                >
                  <div className="imgSlider">
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
                  </div>

                  <Content>
                    <div>
                      <TitreMobileStyled>
                        <h1>
                          <b>{property.city} </b>
                        </h1>
                        <h2>{property.address}</h2>
                        <h3>
                          <b>{property.bail} €</b>
                        </h3>
                      </TitreMobileStyled>

                      <TitreOrdiStyled>
                        <h2>
                          <b>{property.bail} €</b> / mois charges comprises
                        </h2>
                        <h3>
                          <MdLocationOn /> {property.address},{" "}
                          {property.zipcode} {property.city}
                        </h3>
                      </TitreOrdiStyled>

                      <div className="essentiel">
                        <div>
                          <img src={m2} alt="" />
                          <p>{property.size}m²</p>
                        </div>
                        <div>
                          <img src={meuble} alt="" />
                          <p>{property.rentalType.type}</p>
                        </div>
                        <div>
                          <img src={chambre} alt="" />
                          <p>
                            <nobr>{property.bedroom} ch.</nobr>
                          </p>
                        </div>
                      </div>
                    </div>

                    <ButtonStyled>
                      <Link
                        layoutId={id}
                        to={{
                          pathname: `/annonces/${property.id}`,
                          property: property,
                        }}
                        property={property}
                      >
                        <Button
                          // variant="secondary"
                          label="Voir plus"
                        />
                      </Link>

                      <Link
                        layoutId={id}
                        to={{
                          pathname: `/annonces/${property.id}/contact`,
                          property: property,
                        }}
                        property={property}
                      >
                        <Button variant="secondary" label="Contacter" />
                      </Link>
                    </ButtonStyled>

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

const ButtonStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: clamp(5rem, 42vw, 11rem);
    font-size: clamp(0.8rem, 1.3vw, 1rem);
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 31.25rem) {
    button {
      padding: 0.8rem 0rem;
      font-size: clamp(0.9rem, 1.4vw, 1rem);
    }
  }

  @media (min-width: 37.5rem) {
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    margin-top: 1rem;
  }

  @media (min-width: 68.75rem) {
    button {
      padding: 0.7em 0em !important;
    }
  }
`;

export default AnnoncesTest;
const Annonce = styled(motion.div)`
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px lightgray;
  border: lightgray solid 1px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  background-color: #fff;

  @media (min-width: 68.75rem) {
    display: flex;
    justify-content: space-between;

    .imgSlider img {
      width: 40% !important;
      height: 100% !important;
      border-radius: 0.5rem 0 0 0.5rem !important;
      max-height: 17rem;
      min-width: 300px;
    }
  }

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
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  .essentiel {
    gap: 0.3rem;
    display: flex;
    justify-content: space-around;
  }
  .essentiel p {
    font-size: 0.7rem;
  }

  .essentiel div {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  @media (min-width: 17.6rem) {
    div img {
      width: 35px !important;
      height: 35px !important;
    }
    .essentiel {
      gap: 1rem !important;
    }
  }

  @media (min-width: 25rem) {
    .essentiel {
      margin-left: 0.5rem;
    }
    div img {
      width: 40px !important;
      height: 40px !important;
    }
  }

  @media (min-width: 31.25rem) {
    .essentiel {
      gap: 2rem !important;
    }
    div img {
      width: 50px !important;
      height: 50px !important;
    }
  }

  @media (min-width: 37.6rem) {
    display: block;
    .essentiel p {
      color: #0b3d91;
    }
  }

  @media (min-width: 68.76rem) {
    .essentiel {
      justify-content: flex-start;
    }
  }
`;

const TitreMobileStyled = styled(motion.div)`
  @media (min-width: 37.6rem) {
    display: none;
  }
  h1 {
    font-size: 1rem;
  }
  h2 {
    font-size: clamp(0.8rem, 1vw, 1rem);
  }
  h3 {
    margin: 1rem 0rem;
    font-size: 1rem;
  }
`;
const TitreOrdiStyled = styled(motion.div)`
  display: none;

  @media (min-width: 37.5rem) {
    display: block;
  }

  h2 {
    font-size: 1rem;
  }
  b {
    font-size: 1.4rem;
  }

  h3 {
    display: flex;
    align-items: center;
    margin: 1.5rem 0rem;
    font-size: 0.9rem;
    svg {
      margin-right: 0.5rem;
      color: #0b3d91;
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

const Annonces = styled(motion.div)`
  @media (min-width: 37.5rem) {
    .menu {
      display: none;
    }
    h4 {
      display: none !important;
    }
  }
  .menu svg {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
  }
  h4 {
    display: flex;
    align-self: center;
    justify-content: center;
    svg {
      margin-right: 0.4rem;
    }
  }
`;

const Container = styled(motion.div)`
  padding: 0 min(1.3vh, 5rem) 0 min(1.3vh, 5rem);

  @media only screen and (min-width: 700px) {
    padding: 0 min(1.3vh, 5rem) 0 min(4vh, 5rem);
    grid-column-gap: 2rem;
    display: grid;
    grid-template-columns: 5fr 5fr;
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
  /* box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px; */

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

const SearchBarStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* @media (max-width: 37.5em) {
    display: block;
  } */
  @media (min-width: 37.6em) {
    margin-top: 3rem;
    padding-bottom: 2rem;
    border-bottom: solid 2px lightgray;
    /* box-shadow: 0px 0px 5px 1px lightgrey; */
  }

  div {
    padding: 0.7rem 1rem;
    width: clamp(15rem, 50vw, 25rem);
    box-shadow: 0px 0px 5px 1px lightgray;
    border: none;

    border-radius: 50px;
    color: #3f3d56;
    display: flex;
    align-items: center;
  }
  div svg {
    margin-right: 0.5rem;
  }
  input {
    outline: 0;
    border: none;
    width: clamp(8rem, 10vw, 15rem);
  }
`;
