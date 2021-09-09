import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Button = () => {
    return (
        <ButtonsGroup className="buttons">
            <button className="blue">Candidater</button>
            <button className="white">Contacter</button>
        </ButtonsGroup>
    )
}

export default Button
const ButtonsGroup = styled(motion.div)`

    display:flex;
    padding-top: 1rem;
    justify-content: space-around;

  @media (min-width: 31.25em) {
    gap:2rem;
    justify-content: center;
  }

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