import React from "react";
import { about } from "../assets/data";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <section className="relative h-screen z-10 pt-16 mt-8 md:mt-0" id="about">
        <article className="flex flex-col-reverse md:flex-row md:w-4/5 mx-auto w-11/12 flex-wrap md:flex-no-wrap">
          <div className=" md:w-1/2 tracking-wider w-full mt-8 md:mt-0">
            <h1
              className={
                "text-white md:text-black md:text-2xl text-xl font-bold"
              }
            >
              Wer sind wir?
            </h1>
            <p className="text-lg text-white md:text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              cum, dolores illum similique, consectetur natus amet ducimus
              dolorem recusandae magnam, soluta quod delectus! Sapiente
              architecto error ex expedita dolorem inventore.
            </p>
          </div>
          <div className="md:ml-4 rounded-lg overflow-hidden">
            <img src={about} alt="about-pic" />
          </div>
        </article>
        {/* <img
          className="absolute bottom-0 left-0 z-0"
          src={bcgbottom}
          alt="bcgbottom"
        /> */}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  section::after {
    content: url("https://res.cloudinary.com/dwryyoyd7/image/upload/v1603985359/TranGym/Rectangle_16_esyoxp.png");
    position: absolute;
    bottom: 0;
    left: 0vw;
    z-index: -5;
    width: 100vw;
  }
  @media (max-width: 768px) {
    section {
      background: black;
      &::after {
        content: "";
      }
    }
  }
`;
