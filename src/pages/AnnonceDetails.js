import { propertysUrl } from "../api/api";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { propertyPlaceholder } from "../images/placeholder_house.jpg";
import Scoring from "../components/Scoring";
import { Link, useLocation } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Button from "../components/Button";
import Accreditation from "../components/Accreditation";

const AnnonceDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [fetchApi, setFetchApi] = useState(null);
  const [property, setProperty] = useState(null);
  console.log("je suis ici");
  console.log(property);

  useEffect(async () => {
    if (!fetchApi) {
      const res = await axios.get(propertysUrl(id));
      setProperty(res.data);
      setFetchApi(true);

      // console.log(res);
    }
  }, []);

  return (
    <React.Fragment>
      {property && (
        <Global>
          <Detail className="card__detail">
            {/* HEADER START */}

            {/* SLIDER */}
            <SectionHeaderOrdi className="card__header">
              <b>Charmant T2 meublé</b>
              <b> - </b>
              <b>{property.city}</b>
            </SectionHeaderOrdi>

            <ImageSlider slides={property.images} />
            <SectionHeader className="card__header">
              <div className="card__title">
                <div>
                  <h1>
                    <b>{property.city}</b>
                  </h1>
                  <h2>{property.address}</h2>
                </div>

                <h2>
                  <b>
                    {property.currentRentalWithoutCharges +
                      property.rentCharges}{" "}
                    €
                  </b>
                </h2>
              </div>
              <Button />
            </SectionHeader>

            {/* BUTTONS */}
            {/* <Link
            layoutId={id}
            type={property.constructionType.name}
            to={{
              pathname: `/annonces/${property.id}/candidature`,
              property: property,
            }}
            property={property}
          >
            <Button />
          </Link> */}

            <CardDispo>
              <div>
                <div>
                  <img src="http://placekitten.com/g/22/22" alt="" />
                  <p>Bien disponible à partir du 10/09/2021</p>
                </div>
                <div>
                  <img src="http://placekitten.com/g/22/22" alt="" />
                  <p>11 place de la République, 67000 Strasbourg</p>
                </div>
                <div>
                  <img src="http://placekitten.com/g/22/22" alt="" />
                  <p>800€ / mois hors charges</p>
                </div>
              </div>
              <Link
                layoutId={id}
                to={{
                  pathname: `/annonces/${property.id}/connectetoi`,
                  property: property,
                }}
                property={property}
              >
                <Button />
              </Link>
            </CardDispo>

            {/* <Link
            layoutId={id}
            type={property.constructionType.name}
            to={{
              pathname: `/annonces/${property.id}/contact`,
              property: property,
            }}
            property={property}
          >
            <Button />
          </Link> */}

            <h3>A propos du bien</h3>

            <SectionAccreditation className="border">
              {property.accreditations.map((e) => {
                return <Accreditation />;
              })}
            </SectionAccreditation>

            <h3>
              Les plus de{" "}
              {property.constructionType.name === "Maison"
                ? "la maison"
                : "l'immeuble"}
            </h3>
            <SectionAccreditation className="border">
              <Accreditation />
            </SectionAccreditation>

            <SectionDescription className="border">
              <h3>A propos</h3>
              <p>{property.description}</p>
            </SectionDescription>

            <SectionLocalisation className="border">
              <h3>Localisation</h3>
              <h3>{property.address}</h3>
              <div></div>
            </SectionLocalisation>

            <h3>Information financière</h3>
            <SectionFinancial className="border">
              <tbody>
                <div>
                  <td className="border">
                    <p>Loyers hors charges</p>
                    <b>1370 €</b>
                  </td>
                  <td className="border">
                    <p>Charges</p>
                    <b>30 €</b>
                  </td>
                  <td className="border">
                    <p>Loyers avec charges</p>
                    <b>1400 €</b>
                  </td>
                  <td className="border">
                    <p>Frais de dossier</p>
                    <b>300 €</b>
                  </td>
                </div>
              </tbody>
              <tbody>
                <div>
                  <h4>Caution demandée</h4>
                  <p>1600 €*</p>
                  <br />
                  <i>
                    * Montant conforme à la loi ALUR. La caution vous est rendu
                    à la fin de la location sous réserve d’aucune dégradation,
                    ou d’impayé.{" "}
                  </i>
                </div>
              </tbody>
              {/*
              <div>
                <td>
                <p>Loyers hors charges</p>
                <p>Charges</p>
                <p>Loyers avec charges</p>
                <p>Frais de dossier</p>
                </td>
              </div>
              <div className="FinanceRight">
                <p>1370 €</p>
                <p>30 €</p>
                <p>1400 €</p>
                <p>300 €</p>
              </div>
              */}
            </SectionFinancial>

            <h3>Energie</h3>

            <SectionEnergie className="BlockEnergie">
              <div>
                <h4>Diagnostic de performance énergétique</h4>
                <Scoring
                  variant="dpe"
                  test="styleComponentTest"
                  score={property.energyPerformanceCertificate}
                  type="energie certif"
                />
              </div>
              <div className="co2">
                <h4>Indice d'émission de gaz à effet de serre</h4>
                <Scoring
                  test="styleComponentTest"
                  score={property.greenHouseGas}
                  type="energie certif"
                />
              </div>
            </SectionEnergie>

            <QuestionFin>
              <h4>Vous êtes intéressé par ce bien ? </h4>
              <div>
                <p>
                Contacter le propriétaire pour demander plus d’information et planifier une visite
                </p>
                <p>
                  Candidater à cet appartement, le propriétaire étudira votre
                  dossier et reviendra vers vous.
                </p>
              </div>

              <Button />
            </QuestionFin>
          </Detail>
          <Map></Map>
        </Global>
      )}
    </React.Fragment>
  );
};

const CardDispo = styled(motion.div)`
  @media (max-width: 37.5em) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0rem;
  padding: 1rem;

  border: solid 1px lightgray;
  border-radius: 2rem;
  box-shadow: 0px 5px 4px lightgrey;

  a .buttons {
    gap: 1rem;
    button {
      font-size: clamp(0.8rem, 1.3vw, 1rem);
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
  div div {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.6rem;
    padding: 0.6rem;
  }
`;

const Global = styled(motion.div)`
  display: flex;
  @media (max-width: 68.75em) {
    flex-direction: column;
  }
`;

const SectionLocalisation = styled(motion.div)`
  @media (max-width: 37.5em) {
    display: none;
  }

  div {
    background-color: green;
    width: 100%;
    height: 30vh;
  }
`;

const Map = styled(motion.section)`
  background-color: green;
  width: 30%;

  @media (max-width: 68.75em) {
    width: 100%;
    height: 40vh;
  }
`;

const SectionAccreditation = styled(motion.section)`
  padding-top: 1em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  gap: clamp(1rem, 1vw, 5rem) clamp(0.75rem, 1vw, 5rem);
`;

const Detail = styled(motion.div)`
  /* top: 5vh; */
  /* width: 80%; */
  width: 70%;

  @media (max-width: 68.75em) {
    width: 100%;
  }

  /* border-radius: 0.4rem; */

  padding: 2rem min(3.5vw, 5rem);
  p {
    font-size: clamp(0.8rem, 2vw, 1rem);
  }

  @media (min-width: 37.5em) {
    padding: 2rem min(7vw, 8rem);
  }

  /* 
  @media (min-width: 75em) {
    padding: 2rem min(15vw, 9rem);
  } */

  /* @media (min-width: 70em) {
    padding: 2rem min(20vw, 15rem);
  } */

  h3 {
    font-size: clamp(0.75rem, 5vw, 1.25rem);
    padding: 3% 0%;
    font-weight: 700;
  }

  h4 {
    padding-top: 0rem;
    font-size: clamp(0.9rem, 2vw, 0.95rem);
  }

  .co2 {
    padding-top: 2rem;
  }

  .border {
    border-bottom: solid 1px rgba(63, 61, 86, 0.1);
    padding-bottom: 9%;
  }
`;

const SectionFinancial = styled(motion.section)`
  display: flex;
  gap: 2rem;
  @media (max-width: 37.5em) {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
  }
  /* tbody{
    width:50%;
  } */

  @media (min-width: 37.5em) {
    tbody {
      width: 50%;
    }
  }

  tbody div {
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 10px 10px lightgray;
    border-top: none;
  }
  td {
    display: flex;
    justify-content: space-between;
    padding-top: 9%;
    gap: 3rem;
  }
  b {
    font-size: clamp(0.75rem, 4vw, 0.8rem);
  }
  i {
    font-size: clamp(0.75rem, 1vw, 0.8rem);
    color: #757575;
  }

  /* display: flex;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;

    gap: 1rem 1rem;
  }
  .FinanceRight {
    align-items: flex-end;
    display: flex;
    font-weight: bold;
  } */
`;

const SectionHeaderOrdi = styled(motion.section)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  padding-bottom: 1rem;
  @media (max-width: 37.4rem) {
    display: none;
  }
`;

const SectionHeader = styled(motion.section)`
  @media (min-width: 37.6rem) {
    display: none;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  .card__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 1em 0em;
  }
  h1 {
    font-size: clamp(1.1rem, 2vw, 2rem);
  }
  h2 {
    font-size: clamp(1.05rem, 2vw, 2rem);
  }
`;

const SectionDescription = styled(motion.section)`
  /* margin: 5rem 0rem; */
  p {
    /* text-overflow: ellipsis; */
    /* white-space: nowrap;
    overflow: hidden; */
    text-indent: 5%;
    line-height: 2em;
    text-align: justify;
  }
`;

const SectionEnergie = styled(motion.section)`
  padding-left: 1rem;
  padding-bottom: 4rem;
`;

const QuestionFin = styled(motion.section)`
  margin: 0 auto;
  width: 80%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px lightgray;
  border-top: none;
  
  button {
    font-size: clamp(0.8rem, 1.3vw, 1rem);
  }

  @media (max-width: 37.6rem) {
    width: 90%;
    div p{
    display:none;
  }
  }

  div{
    display:flex;
    text-align: center;
    justify-content:space-around;
  }
  h4 {
    text-align: center;
  }

`;

export default AnnonceDetail;
