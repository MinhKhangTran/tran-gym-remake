import React from "react";
import {
  Form,
  Navbar,
  Titel,
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
      <Form></Form>
      <Footer></Footer>
    </section>
  );
}
