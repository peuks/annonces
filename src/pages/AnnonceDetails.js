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
  // console.log("je suis ici");
  // console.log(property);

  useEffect(async () => {
    if (!fetchApi) {
      const res = await axios.get(propertysUrl(id));
      setProperty(res.data);
      setFetchApi(true);

      console.log(res);
    }
  }, []);

  return (
    <React.Fragment>
      {property && (
        <Detail className="card__detail">
          {/* HEADER START */}
          <SectionHeader className="card__header">
            <div className="card__title">
              <div>
                <h1>
                  <b>{property.city}</b>
                </h1>
                <h1>{property.address}</h1>
              </div>

              <h1>
                <b>
                  {property.currentRentalWithoutCharges + property.rentCharges}{" "}
                  €/Mois
                </b>
              </h1>
            </div>
          </SectionHeader>
          {/* SLIDER */}
          <ImageSlider slides={property.images} />

          <AdresseStyled>
            <h1>{property.city}</h1>
            <h1> - </h1>
            <h1>{property.address}</h1>
          </AdresseStyled>

          {/* BUTTONS */}
          <Button/>



          <SectionAccreditation className="border">
            {property.accreditations.map((e) => {
              return (
                <Accreditation/>
              );
            })}
            </SectionAccreditation>
          

          <h3>
            Les plus de{" "}
            {property.constructionType.name === "Maison"
              ? "la maison"
              : "l'immeuble"}
          </h3>

          <SectionAccreditation>
            <Accreditation className="border"/>
          </SectionAccreditation>

          <SectionDescription className="border">
            <h3>A propos</h3>
            <p>{property.description}</p>
          </SectionDescription>

          <h3>Information financière</h3>
          <SectionFinancial className="border">
            <div>
            <p>Loyers hors charges</p>
            <p>Charges</p>
            <p>Loyers avec charges</p>
            </div>
            <div className="FinanceRight">
            <b>1370 €</b>
            <b>30 €</b>
            <b>1400 €</b>
            </div>
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

          <Button/>
        </Detail>
      )}
    </React.Fragment>
  );
};

const SectionAccreditation = styled(motion.section)`
  padding-top: 3em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  gap: clamp(1rem, 1vw, 5rem) clamp(0.6rem, 1vw, 5rem);
`;

const AdresseStyled = styled(motion.section)`

@media (max-width: 70em) {
    display:none;
  }

  font-size:0.8rem;
    text-align:center;
    display: flex;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
    margin-top:2rem;
    margin-bottom:1rem;

    gap: 1rem;

    padding:1.5rem 0rem;

    border-top:solid 1px #000000;
    border-bottom:solid 1px #000000;
`;


const Detail = styled(motion.div)`
  /* top: 5vh; */
  /* width: 80%; */
  width: 100%;

  /* border-radius: 0.4rem; */

  padding: 2rem min(3.5vw, 5rem);

  @media (min-width: 37.5em) {
    padding: 2rem min(7vw, 8rem);
  }

  @media (min-width: 75em) {
    padding: 2rem min(15vw, 9rem);
  }

  @media (min-width: 70em) {
    padding: 2rem min(20vw,15rem);
  }

  background: white;
  position: absolute;
  /* left: 10%; */
  color: black;
  z-index: 10;

  h3 {
    font-size: clamp(0.2rem, 5vw, 1rem);
    padding: 1.5rem 0rem;
    font-weight: 700;
  }

  h4 {
    padding-top: 0rem;
    font-size: clamp(0.7rem, 2.5vw, 0.8rem);
  }
 
  .co2 {
    padding-top: 2rem;
  }

  .border {
    border-bottom: solid 1px rgba(63, 61, 86, 0.1);
    padding-bottom: 3rem;
  }


`;



const SectionFinancial = styled(motion.section)`
display: flex;
justify-content: space-around;
align-items: center;
div{
  display: flex;
  flex-direction: column;

}
.FinanceRight{
    align-items:flex-end;
    display:flex;
  }
  b {
    font-size: clamp(0.6rem, 4vw, 0.8rem);
    line-height: 200%;
    color: #3f3d56;
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
    align-items: flex-end;
    width: 100%;
    padding: 1em 0em;
  }
  h1 {
    font-size: clamp(0.9rem, 1vw, 2rem);
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

const SectionEnergie = styled(motion.section)`
  padding-left: 1rem;
  padding-bottom: 4rem;
`;


export default AnnonceDetail;
