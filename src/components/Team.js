import React from "react";
import Titel from "./Titel";
import { slider } from "../assets/data";
import Member from "./Member";
import { TiMediaFastForward, TiMediaRewind } from "react-icons/ti";
import styled from "styled-components";

export default function Team() {
  const [value, setValue] = React.useState(0);
  const [member, setMember] = React.useState(slider);
  React.useEffect(() => {
    if (value > slider.length - 1) {
      setValue(0);
    }
    if (value < 0) {
      setValue(slider.length - 1);
    }
  }, [value, member]);

  React.useEffect(() => {
    let timeout = setInterval(() => {
      setValue(value + 1);
    }, 9500);
    return () => {
      clearInterval(timeout);
    };
  }, [value]);
  return (
    <Wrapper>
      <section className="grid place-items-center md:p-16 p-8 mt-8" id="team">
        <div className="w-11/12 md:w-4/5 h-full mx-auto text-center relative">
          <Titel text="Unser Team" color="text-black"></Titel>
          <div className="w-full h-full overflow-hidden relative">
            {slider.map((member, index) => {
              return (
                <Member
                  key={member.id}
                  {...member}
                  index={index}
                  member={member}
                  value={value}
                />
              );
            })}
          </div>
          <button
            className="absolute md:text-4xl cursor-pointer"
            style={{ left: "5%" }}
            onClick={() => setValue(value - 1)}
          >
            <TiMediaRewind></TiMediaRewind>
          </button>
          <button
            className="absolute md:text-4xl cursor-pointer button2"
            style={{ right: "5%" }}
            onClick={() => setValue(value + 1)}
          >
            <TiMediaFastForward></TiMediaFastForward>
          </button>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  section {
    height: 100vh;
  }
  button {
    top: 50%;
  }
  @media (min-width: 768px) {
    section {
      height: 69vh;
    }
    button {
      top: 45%;
    }
  }
`;
