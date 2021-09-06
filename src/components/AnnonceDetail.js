import { propertysUrl } from "../api/api";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { propertyPlaceholder } from "../images/placeholder_house.jpg";
import ImageSlider from "./ImageSlider";

const AnnonceDetail = ({ pathId }) => {
  const [fetchApi, setFetchApi] = useState(null);
  const [property, setProperty] = useState(null);
  console.log("je suis ici");

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
  console.log(property);

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
            <Media className="media">
              {/* <img
                // alt={property.images.}
                key={property.images.url}
                src={() => {
                  property.images[0].url
                    ? property.images[0].url
                    : propertyPlaceholder;
                }}
              /> */}
            </Media>
            <Description className="description">
              <p>{property.description}</p>
            </Description>
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

const Detail = styled(motion.div)`
  top: 5vh;
  width: 80%;
  border-radius: 0.4rem;
  padding: 2rem min(3.5vw, 5rem);
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  h3 {
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
  margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  img {
    padding: 1em 0;
  }
`;

export default AnnonceDetail;
