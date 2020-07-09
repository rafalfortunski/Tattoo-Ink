import React from "react";
import NavBar from "../molecules/NavBar";
import Paragraph from "../components/Paragraph/Paragraph";
import "./ArtistsList.scss";
import { tattooers } from "../data/tattooers";
import Card from "../molecules/Card/Card";

const Artists = () => {
  return (
    <>
      <header>
        <NavBar isInverted />
      </header>
      <section className="container">
        <h1>Artists</h1>
        <Paragraph>Warsaw</Paragraph>
        <Paragraph>Sort by Rating</Paragraph>
        <div className="grid-list">
          {tattooers.map((artist) => (
            <Card data={artist} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Artists;
