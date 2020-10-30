import React from "react";
import { hero } from "../assets/data";
import styled from "styled-components";

export default function Hero() {
  return (
    <Wrapper>
      <header className="relative">
        <img src={hero} alt="gym" />
        <h1 className="text-white lg:absolute lg:bottom-0 lg:right-0 uppercase lg:-mb-20 lg:overflow-hidden hidden md:block">
          tran gym.
        </h1>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  h1 {
    font-size: 200px;
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
