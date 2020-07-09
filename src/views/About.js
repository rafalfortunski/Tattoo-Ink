import React from "react";
import NavBar from "../molecules/NavBar";
import Title from "../components/Title/Title";
import "./About.scss";
import Paragraph from "../components/Paragraph/Paragraph";

export const About = () => {
  return (
    <>
      <header className="about-header">
        <div className="background-grey"></div>
        <div className="image-red"></div>
        <NavBar isInverted />
        <section className="about">
          <Title level="h1" className="about__title">
            About
          </Title>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            officia necessitatibus cumque esse rem porro.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            impedit incidunt ab expedita quod minima iste culpa fugit, nihil
            magnam accusamus facere excepturi. Hic illo et ab atque.
          </Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur.</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptates consequuntur, laudantium quos deleniti fugiat? Vel
            nesciunt enim sint culpa minus tenetur delectus, illum ducimus
            provident, architecto quasi expedita quis velit excepturi?
          </Paragraph>
        </section>
      </header>
    </>
  );
};

export default About;
