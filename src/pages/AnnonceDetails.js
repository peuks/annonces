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
import Maps from "../components/Maps";

// const url = "../images/CircleIcons/"
// const sbg =".svg"
// export const LienTest = () => `${url}${property.city}${svg}`;

// import { StyleSheet, Text, View, Image} from 'react-native';

// img react-icon
import { IoMdCalendar } from "react-icons/io";
import { MdEuroSymbol, MdLocationOn } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";

const AnnonceDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [fetchApi, setFetchApi] = useState(null);
  const [property, setProperty] = useState(null);
  // console.log("je suis ici");
  console.log(property);

  useEffect(async () => {
    if (!fetchApi) {
      const res = await axios.get(propertysUrl(id));
      setProperty(res.data);
      setFetchApi(true);
    }
  }, []);

  return (
    <React.Fragment>
      {property && (
        <Global>
          <FlecheRetour>
            <Link
              to={{
                pathname: `/annonces`,
                property: property,
              }}
              property={property}
            >
              <BiArrowBack />
            </Link>
          </FlecheRetour>

          <Detail className="card__detail">
            {/* HEADER START */}

            {/* Titre uniquement sur ordi */}
            <SectionHeaderOrdi className="card__header">
              <b>Charmant T2 meublé</b>
              <b> - </b>
              <b>{property.city}</b>
            </SectionHeaderOrdi>

            {/* SLIDER */}
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

              <ButtonStyled>
                <Link
                  layoutId={id}
                  to={{
                    pathname: `/annonces/${property.id}/connectetoi`,
                    property: property,
                  }}
                  property={property}
                >
                  <Button label="Candidater" />
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
            </SectionHeader>

            <CardDispo>
              <div>
                <div>
                  <IoMdCalendar />
                  <p>
                    Bien disponible à partir du <b>10/09/2021</b>
                  </p>
                </div>
                <div>
                  <MdLocationOn />
                  <p>
                    <b>
                      {property.address}, {property.zipcode} {property.city}
                    </b>
                  </p>
                </div>
                <div>
                  <MdEuroSymbol />
                  <p>
                    <b>{property.currentRentalWithoutCharges} €</b> / mois hors
                    charges
                  </p>
                </div>
              </div>

              {/* Liens boutton : candidature valide / connection pour candidater / contact */}
              <ButtonStyled>
                <Link
                  layoutId={id}
                  to={{
                    pathname: `/annonces/${property.id}/connectetoi`,
                    property: property,
                  }}
                  property={property}
                >
                  <Button label="Candidater" />
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
            </CardDispo>

            <SectionAccreditation className="border">
              {property.accreditations.map((e) => {
                return <Accreditation label={e.label} svgname={e.svgName} />;
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
              <div>{property && <Maps property={property.city} />}</div>
            </SectionLocalisation>

            <h3>Informations financières</h3>
            <SectionFinancial className="border">
              <tbody>
                <div>
                  <td>
                    <p>Loyers hors charges</p>
                    <b>
                      <nobr>{property.currentRentalWithoutCharges} €</nobr>
                    </b>
                  </td>
                  <td className="border marge">
                    <p>Charges</p>
                    <b>
                      <nobr>{property.rentCharges} €</nobr>
                    </b>
                  </td>
                  <td className="border">
                    <p class="loyercharge">Loyers avec charges</p>
                    <b>
                      <nobr>{property.currentRentalWithoutCharges + property.rentCharges} €</nobr>
                    </b>
                  </td>
                  <td className="border">
                    <p>Frais de dossier</p>
                    <b>
                      {/* Arrondi à 2 chiffres après la virgule */}
                      <nobr>
                        {" "}
                        {Math.round(property.bail * 0.25 * 100) / 100} €{" "}
                      </nobr>
                    </b>
                  </td>
                </div>
              </tbody>
              <tbody>
                <div>
                  <h4>Caution demandée</h4>
                  <p>
                  <nobr>{property.bail} €</nobr>
                  </p>
                  <br />
                  <i>
                    * Montant conforme à la loi ALUR. La caution vous est rendu
                    à la fin de la location sous réserve d’aucune dégradation,
                    ou d’impayé.{" "}
                  </i>
                </div>
              </tbody>
            </SectionFinancial>

            <h3>Energie</h3>

            <SectionEnergie className="BlockEnergie">
              <div>
                <h4>Diagnostic de performance énergétique</h4>
                <Scoring
                  variant="dpe"
                  test="styleComponentTest"
                  score={property.energyPerformanceCertificate}
                />
              </div>
              <div className="co2">
                <h4>Indice d'émission de gaz à effet de serre</h4>
                <Scoring
                  test="styleComponentTest"
                  score={property.greenHouseGas}
                />
              </div>
            </SectionEnergie>

            <QuestionFin>
              <h4>Vous êtes intéressé par ce bien ? </h4>
              <div>
                <p>
                  Contacter le propriétaire pour demander plus d’information et
                  planifier une visite
                </p>
                <p>
                  Candidater à cet appartement, le propriétaire étudira votre
                  dossier et reviendra vers vous.
                </p>
              </div>

              <ButtonStyled2>
                <Link
                  layoutId={id}
                  to={{
                    pathname: `/annonces/${property.id}/connectetoi`,
                    property: property,
                  }}
                  property={property}
                >
                  <Button label="Candidater" />
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
              </ButtonStyled2>
            </QuestionFin>
          </Detail>
          <Map>{property && <Maps property={property.city} />}</Map>
        </Global>
      )}
    </React.Fragment>
  );
};

const FlecheRetour = styled(motion.div)`
  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem 0rem 0rem 0.5rem;
  }

  @media (min-width: 50em) {
    svg {
      width: 3rem !important;
      height: 3rem !important;
    }
  }
`;

const ButtonStyled = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  gap: 0.1rem;
  a button {
    padding: 0.8rem 0rem;
    font-size: clamp(0.75rem, 5vw, 0.9rem);
    width: clamp(8rem, 44vw, 17rem);
  }
  @media (min-width: 37.5em) {
    gap: 1rem;
  }
`;

const ButtonStyled2 = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  gap: 0.3rem;

  a button {
    font-size: clamp(0.75rem, 5vw, 0.9rem);
    width: clamp(5rem, 18vw, 14rem);
  }
  @media (min-width: 37.5em) {
    gap: 1rem;
  }
`;

const Global = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (min-width: 68.75em) {
    flex-direction: row;
  }

  h4 {
    padding: 1.5rem 0rem;
  }
`;

const Detail = styled(motion.div)`
  width: 100%;
  padding: 2rem min(3.5vw, 5rem);

  p {
    font-size: clamp(0.8rem, 2vw, 1rem);
  }

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
    padding-bottom: 5%;
  }
  .marge {
    margin-bottom: 2rem;
  }

  @media (min-width: 68.75em) {
    width: 70%;
  }

  @media (min-width: 37.5em) {
    padding: 2rem min(7vw, 8rem);
  }
`;

const SectionHeaderOrdi = styled(motion.section)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  padding-bottom: 1rem;
  display: none;
  @media (min-width: 37.4rem) {
    display: block;
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

const CardDispo = styled(motion.div)`
  display: none;

  @media (min-width: 37.5em) {
    gap: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0rem;
    padding: 1rem;

    border: solid 1px lightgray;
    border-radius: 2rem;
    box-shadow: 0px 5px 4px lightgrey;
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
  div svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #0b3d91;
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

const SectionDescription = styled(motion.section)`
  p {
    /* text-overflow: ellipsis; */
    /* white-space: nowrap;
    overflow: hidden; */
    text-indent: 5%;
    line-height: 2em;
    text-align: justify;
  }
`;

const SectionLocalisation = styled(motion.div)`
display:none;
  @media (min-width: 37.5em) {
    display: block;
    
  }

  div {
    width: 100%;
    height: 50vh;
  }
`;

const SectionFinancial = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  tbody {
      width: 90%;
    }

  @media (min-width: 37.5em) {
    flex-direction: row;
    align-items: flex-start;
  }

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
    align-items: center;
    padding-top: 9%;
    gap: 3rem;
  }
  .loyercharge {
    font-size: clamp(0.95rem, 3vw, 1.2rem);
  }
  b {
    font-size: clamp(0.8rem, 2vw, 1rem);
  }
  i {
    font-size: clamp(0.75rem, 1vw, 0.8rem);
    color: #757575;
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

  width: 95%;
    div p {
      display: none;
    }

  @media (min-width: 37.6rem) {
    width: 80% !important;
    div p {
      display: block;
    }
  }

  div p {
    margin: 1rem 1rem;
  }

  div {
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
  h4 {
    text-align: center;
  }
`;

const Map = styled(motion.section)`
  width: 40%;
  div {
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 37.5em) {
    width: 100%;
    height: 60vh;
  }
`;

export default AnnonceDetail;
