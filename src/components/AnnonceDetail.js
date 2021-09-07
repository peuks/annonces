import { propertysUrl } from "../api/api";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { propertyPlaceholder } from "../images/placeholder_house.jpg";
import ImageSlider from "./ImageSlider";
import Scoring from "./Scoring";



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

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card--shadow")) {
      document.body.style.overflow = "scroll";
      history.push("/annonces");
    }
  };
  // console.log(property);

  return (
    <div>
      {/* wait until content is ready to render */}
      {property && (
        <CardShadow onClick={exitDetailHander} className="card card--shadow">
          <Detail layoutId={pathId} className="card__detail">
            <Stats className="card__header">
              <div className="card__title">
                <h3>
                  {property.address} {property.city}
                </h3>
                <h3>
                  {property.currentRentalWithoutCharges + property.rentCharges}{" "}
                  €/Mois
                </h3>
                {/* <p>Rating: 3.4</p>
                {/* {getStars(rating)} */}
                {/* A B C D E */}
              </div>
              <Info>
                {/* <h3>Platforms</h3>
                <Platforms>
                  {property.images.map((image) => (
                    <img
                      // alt={property.images.}
                      key={image.url}
                      src={image.url}
                    />
                  ))}
                </Platforms> */}
              </Info>
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
            <h3>Les plus de l'immeuble (si appartement ?)</h3>
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
            <h4>Diagnostic de performance énergétique</h4>

            <Scoring
              test="test"
              score={property.energyPerformanceCertificate}
              type="energie certif"
            />

            <Button>
              <button className="blue">Candidater</button>
              <button className="white">Contacter</button>
            </Button>

            <Gallery className="gallery">
              {/* {property.images.map((img) => {
                return <img src={img.url} alt="" />;
              })} */}
            </Gallery>
          </Detail>
        </CardShadow>
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
    padding: 0.7em 3em;
    color: #ffffff;
    min-width: 7.375rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
  .ener{
    padding: 0.4rem 0.7rem;
    z-index:100;
    border-radius: 100%;
    position: relative;
  }


  --color-A:#50b68c;
  --color-B:#68b42e;
  --color-C:#bacf26;
  --color-D:#fad73a;
  --color-E:#f6a12d;
  --color-F:#ec653b;
  --color-G:#dd3c4c;


  .ener::before{
    position: absolute;
    content: "";
    position: absolute;
    border:solid 2px white;
    width: 3rem;
    left: -0.35rem;
    top: -0.28rem;
    border-radius: 100%;
    height: 3rem;

  background-color: ${property => console.log(property)};

    

    content: "";
    z-index:-10;
  }

  h3 {
    padding-top: 2rem;
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

    gap: 1rem 2rem;
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
    width: 100%;
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
