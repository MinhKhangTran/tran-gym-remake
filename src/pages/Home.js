import React from "react";
import {
  Navbar,
  Footer,
  Hero,
  Questions,
  About,
  Team,
  Info,
} from "../components";
export default function Home() {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Hero />
      <Info />
      <About></About>
      <Questions></Questions>
      <Team></Team>
      <Footer></Footer>
    </section>
  );
}
