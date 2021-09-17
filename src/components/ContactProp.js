import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ContactProp = (layoutId) => {
  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card--shadow")) {
      document.body.style.overflow = "scroll";
      history.push(`/annonces/${layoutId}`);
    }
  };
  return (
    <CardShadow onClick={exitDetailHander} className="card--shadow">
      <Detail>
        <h1>Contacter le propriétaire</h1>
        <p>
          <b>Adresse de la propriété : </b>32, Rue des Champs 75000 Paris
        </p>
        <p>
          <b>Loyer : </b> 550€ CC
        </p>
        <br/>
        <div className="defined">
        <ButtonsGroup className="ici">
              <button className="blue">Messagerie Apollo</button>
        </ButtonsGroup>
          <div>
            <p>
              Marie PRIEUR
            </p>
            <p>
               marie.prieur@gmail.com
            </p>
            <p>
              06.26.73.95.64
            </p>
            <ButtonsGroup className="pasici">
              <button className="blue">Messagerie Apollo</button>
            </ButtonsGroup>
          </div>

          <img src="https://dummyimage.com/118x118.jpg" />
        </div>
      </Detail>
    </CardShadow>
  );
};

export default ContactProp;

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
  display: flex;
  justify-content: center;

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
  top: 10vh;
  width: 95%;
  border-radius: 0.4rem;
  padding: 2rem min(3.5vw, 5rem);
  background: white;
  position: absolute;
  /* left: 10%; */
  color: black;
  z-index: 10;
  .defined {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  @media (max-width: 31.25em) {
    .defined {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
  }
  h1 {
    color: #474562;
    font-weight: bold;
    font-size: clamp(1.1rem, 2.3vw, 1.4rem);
    margin-bottom: 2rem;
    text-align: center;
  }
  h2 {
    font-size: clamp(1rem, 2.3vw, 1.5rem);
  }
  img {
    border-radius: 100%;
    margin-bottom:1rem;
  }
  p{
    font-size: clamp(0.9rem,2vw,0.97rem);

  }

  @media (max-width: 9000rem) {
    width: 40%;
    .ici{
        display:none;
    }
  }

  @media (max-width: 75rem) {
    width: 60%;
    .ici{
        display:none;
    }
  }

  @media (max-width: 40rem) {
    width: 95%;
    img{
        align-self:center;
    }
  }

  @media (max-width: 31.25rem) {
    width: 95%;
    img{
        align-self:center;
    }
    .ici{
        display:inline;
        align-self:center;
    }
    .pasici{
        display:none;
    }
  }
`;

const ButtonsGroup = styled(motion.div)`
  @media (min-width: 43.7em) {
    .blue {
      margin-bottom: 1rem !important;
      margin-top: 1rem !important;
    }
  }

  .blue {
    border: 1px solid #0b3d91;
    border-radius: 50px;
    color: #ffffff;

    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    background: #0b3d91;

    margin-top: 1rem;

    font-size: clamp(1rem,1vw,1.5rem);
    padding: clamp(0.7rem,1.5vw,0.9rem) 0rem;
    width: clamp(15rem, 2vw, 0rem);
  }
`;
