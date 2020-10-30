import React from "react";
import { questions } from "../assets/data";
import Titel from "./Titel";
import styled from "styled-components";

import Question from "./Question";

export default function Questions() {
  return (
    <Wrapper>
      <section className="">
        <div
          className=" w-11/12 md:w-4/5 mx-auto h-screen grid place-items-center z-10 "
          id="faq"
        >
          <div className="" style={{ width: "75vw", height: "75vh" }}>
            <Titel text="FAQ" color="text-white"></Titel>
            <article className="grid content-center h-full w-full overflow-y-auto md:overflow-y-visible">
              {questions.map((question, index) => {
                return (
                  <Question
                    key={question.id}
                    {...question}
                    index={index}
                  ></Question>
                );
              })}
            </article>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  section {
    position: relative;
  }
  section::after {
    content: url("https://res.cloudinary.com/dwryyoyd7/image/upload/v1603985359/TranGym/Rectangle_16_1_wyijxd.png");
    position: absolute;
    top: -100px;
    left: 0;
    z-index: -10;
  }
`;
