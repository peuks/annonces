import { propertysUrl } from "../api/api";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { propertyPlaceholder } from "../images/placeholder_house.jpg";
import ImageSlider from "./ImageSlider";
import Scoring from "./Scoring";
import Button from "./Button";
import Accreditaiton from "./Accreditaiton";

const AnnonceDetail = ({ pathId }) => {
  const [fetchApi, setFetchApi] = useState(null);
  const [property, setProperty] = useState(null);
  // console.log("je suis ici");

  useEffect(async () => {
    if (!fetchApi) {
      const res = await axios.get(propertysUrl(pathId));
      setProperty(res.data);
      setFetchApi(true);
    }
  }, []);
  const history = useHistory();

  return (
    <React.Fragment>
      {property && (
        <Detail className="card__detail">
          {/* HEADER START */}
          <SectionHeader className="card__header">
            <div className="card__title">
              <h3>
                {property.address} {property.city}
              </h3>
              <h3>
                {property.currentRentalWithoutCharges + property.rentCharges}{" "}
                €/Mois
              </h3>
            </div>
          </SectionHeader>
          {/* SLIDER */}
          <ImageSlider slides={property.images} />
          {/* BUTTONS */}
          <ButtonsGroup className="buttons">
            <Button label="Candidater" />
            <Button label="Contacter" variant="secondary" />
          </ButtonsGroup>

          {/* ACCREDITATIONS */}
          <SectionAccreditation className="border">
            {property.accreditations.map((e) => {
              return (
                <figure>
                  <img src="http://placekitten.com/56/56" />
                  <figcaption>{e.label}</figcaption>
                </figure>
              );
            })}
          </SectionAccreditation>
          <h3>Les plus de l'immeuble (si appartement ?)</h3>
          <SectionAccreditation className="border">
            <Accreditaiton label="Lorem Ipsum" />
            <Accreditaiton label="Lorem Ipsum" />
          </SectionAccreditation>
          <SectionDescription className="border">
            <h3>A propos</h3>
            <p>{property.description}</p>
          </SectionDescription>
          <h3>Information financière</h3>
          <SectionFinancial className="border">
            <div>
              <p>Loyers hors charges</p>
              <b>1370 €</b>
            </div>
            <div>
              <p>Charges</p>
              <b>30 €</b>
            </div>
            <div>
              <p>Loyers avec charges</p>
              <b>1400 €</b>
            </div>
          </SectionFinancial>
          <h3>Energie</h3>
          <h4>Diagnostic de performance énergétique</h4>
          <Scoring
            score={property.energyPerformanceCertificate}
            type="energie certif"
          />
          <ButtonsGroup className="buttons">
            <Button label="Candidater" />
            <Button label="Contacter" variant="secondary" />
          </ButtonsGroup>
        </Detail>
      )}
    </React.Fragment>
  );
};

const ButtonsGroup = styled(motion.div)`
  display: flex;
  padding-top: 1rem;
  justify-content: space-around;
`;

const Detail = styled(motion.div)`
  section:not(:first-child) {
    border-bottom: solid 1px rgba(63, 61, 86, 0.1);
    padding-bottom: 3rem;
  }

  top: 5vh;
  width: 80%;
  /* width: 100%; */

  border-radius: 0.4rem;
  padding: 2rem min(3.5vw, 5rem);
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;

  .energie {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* gap:0.5rem; */
    font-size: 1.5rem;
    font-weight: 600;
  }
  .energie__item {
    /* position: absolute; */
    padding: 0.2rem 0.5rem;
  }

  .A {
    background-color: #50b68c;
  }
  .B {
    background-color: #68b42e;
  }
  .C {
    background-color: #bacf26;
  }
  .D {
    background-color: #fad73a;
  }
  .E {
    background-color: #f6a12d;
  }
  .F {
    background-color: #ec653b;
  }
  .G {
    background-color: #dd3c4c;
    color: white;
  }
  .ener {
    padding: 0.4rem 0.7rem;
    z-index: 100;
    border-radius: 100%;
    position: relative;
  }

  --color-A: #50b68c;
  --color-B: #68b42e;
  --color-C: #bacf26;
  --color-D: #fad73a;
  --color-E: #f6a12d;
  --color-F: #ec653b;
  --color-G: #dd3c4c;

  .ener::before {
    position: absolute;
    content: "";
    position: absolute;
    border: solid 2px white;
    width: 3rem;
    left: -0.35rem;
    top: -0.28rem;
    border-radius: 100%;
    height: 3rem;

    background-color: ${(property) => console.log(property)};

    content: "";
    z-index: -10;
  }

  h3 {
    padding-top: 2rem;
  }

  figure {
    display: flex;
    word-break: break-word;
    width: 70px;

    flex-direction: column;
    align-items: center;
    img {
      width: clamp(4rem, 12vw, 5rem);
      height: clamp(4rem, 12vw, 5rem);
      border-radius: 100%;
    }
  }
`;

const SectionAccreditation = styled(motion.section)`
  padding-top: 3em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem 2rem;
`;

const SectionFinancial = styled(motion.section)`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const SectionHeader = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  .card__title {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const SectionDescription = styled(motion.section)`
  /* margin: 5rem 0rem; */
  p {
    text-overflow: ellipsis;
    /* text-overflow: fade(20px); */

    white-space: nowrap;
    overflow: hidden;
  }
`;

export default AnnonceDetail;
