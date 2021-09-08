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

  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card--shadow")) {
      document.body.style.overflow = "scroll";
      history.push("/annonces");
    }
  };
  console.log(property);

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
          <ButtonsGroup className="buttons">
            <button className="blue">Candidater</button>
            <button className="white">Contacter</button>
          </ButtonsGroup>



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

          <h3>
            Les plus de{" "}
            {property.constructionType.name === "Maison"
              ? "la maison"
              : "l'immeuble"}
          </h3>

          <SectionAccreditation className="border">
            <figure>
              <img src="http://placekitten.com/56/56" />
              <figcaption>Coucou</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/56/56" />
              <figcaption>Coucou</figcaption>
            </figure>
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

          <ButtonsGroup className="buttons">
            <button className="blue">Candidater</button>
            <button className="white">Contacter</button>
          </ButtonsGroup>
        </Detail>
      )}
    </React.Fragment>
  );
};

const CardShadow = styled(motion.div)`
  /* &.energie{
    &.__item{
      &.--A{
        background-color: yellow;
      }
    }
  } */

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
const ButtonsGroup = styled(motion.div)`

  @media (max-width: 31.25em) {
    display:flex;
    padding-top: 1rem;
    justify-content: space-around;
  }
  @media (min-width: 31.25em) {
    display:flex;
    padding-top: 1rem;
    gap:2rem;
    justify-content: center;
  }

    display:flex;
    padding-top: 1rem;
    justify-content: space-around;

    button{
    border: 1px solid #0b3d91;
    border-radius: 50px;
    font-size: clamp(0.8rem,1.3vw,2rem);
    text-align:center;
    padding: 0.7em 0em;
    color: #ffffff;
    width: clamp(10rem,15vw,25rem);

    margin-bottom: 0.375rem;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    }

    .blue{
      background: #0b3d91;
    }
    .white{
      background: #ffffff;
      color: #0b3d91;
    }


}
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

  figure {
    display: flex;
    word-break: break-word;
    width: clamp(6rem, 5vw, 11rem);

    flex-direction: column;
    align-items: center;
    img {
      width: clamp(4rem, 5.5vw, 5rem);
      height: clamp(4rem, 5.5vw, 5rem);

      border-radius: 100%;
    }
  }
  figcaption {
    font-size: clamp(0.7rem, 1vw, 0.8rem);
    text-align: center;
    padding-top: 0.5rem;
  }
`;

const SectionAccreditation = styled(motion.section)`
  padding-top: 3em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  gap: clamp(1rem, 1vw, 5rem) clamp(0.6rem, 1vw, 5rem);
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

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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

const Gallery = styled(motion.div)`
  img {
    padding: 1em 0;
  }
`;

export default AnnonceDetail;
