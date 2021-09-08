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
    <div>
      {/* wait until content is ready to render */}
      {property && (
        // <CardShadow onClick={exitDetailHander} className="card card--shadow">
        <Detail className="card__detail">
          <Stats className="card__header">
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
              {/* <p>Rating: 3.4</p>
                {/* {getStars(rating)} */}
              {/* A B C D E */}
            </div>
          </Stats>
          <ImageSlider slides={property.images} />
          
          <Button>
            <button className="blue">Candidater</button>
            <button className="white">Contacter</button>
          </Button>
          <div className="acred border">
            {property.accreditations.map((e) => {
              return (
                <figure>
                  <img src="http://placekitten.com/56/56" />
                  <figcaption>{e.label}</figcaption>
                </figure>
              );
            })}
          </div>
          
          <h3>Les plus de {property.constructionType.name === "Maison" ? 'la maison':'l\'immeuble'}</h3>
          <div className="acred border">
            <figure>
              <img src="http://placekitten.com/56/56" />
              <figcaption>Coucou</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/56/56" />
              <figcaption>Coucou</figcaption>
            </figure>
          </div>

          <Description className="description border">
            <h3>A propos</h3>
            <p>{property.description}</p>
          </Description>

          <h3>Information financière</h3>
          <div className="financier border">
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
          </div>

          <h3>Energie</h3>
          <div className="BlockEnergie">
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
          </div>

          <Button>
            <button className="blue">Candidater</button>
            <button className="white">Contacter</button>
          </Button>
        </Detail>
      )}
    </div>
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

const Button = styled(motion.div)`

    display:flex;
    padding-top: 1rem;
    justify-content: space-around;

    button{
    border: 1px solid #0b3d91;
    border-radius: 50px;
    font-size: 0.8445rem;
    text-align:center;
    padding: 0.7em 0em;
    color: #ffffff;
    width: clamp(7.375rem, 15vw, 25rem);

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
  background: white;
  position: absolute;
  /* left: 10%; */
  color: black;
  z-index: 10;

  h4 {
    padding-top: 0rem;
  }
  .co2 {
    padding-top: 2rem;
  }
  .BlockEnergie{
    padding-left:1rem; 
  }

  .border {
    border-bottom: solid 1px rgba(63, 61, 86, 0.1);
    padding-bottom: 3rem;
  }

  .acred {
    padding-top: 3em;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    gap: clamp(1rem,1vw,5rem) clamp(0.6rem,1vw,5rem);
  }

  figure {
    display: flex;
    word-break: break-word;
    width: clamp(6rem, 5vw, 11rem);

    flex-direction: column;
    align-items: center;
    img {
      width: clamp(4rem, 12vw, 5rem);
      height: clamp(4rem, 12vw, 5rem);
      border-radius: 100%;
    }
  }
  figcaption {
    font-size: clamp(0.2rem, 5vw, 1rem);
    text-align: center;
    padding-top: 0.5rem;
  }
  .financier {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Stats = styled(motion.div)`
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
    font-size: 0.95em;
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

const Description = styled(motion.div)`
  /* margin: 5rem 0rem; */
  p {
    text-overflow: ellipsis;
    /* text-overflow: fade(20px); */

    white-space: nowrap;
    overflow: hidden;
  }
`;

const Gallery = styled(motion.div)`
  img {
    padding: 1em 0;
  }
`;

export default AnnonceDetail;
