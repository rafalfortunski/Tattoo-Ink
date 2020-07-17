import React from "react";
import { connect } from "react-redux";
import NavBar from "../molecules/NavBar";
import Paragraph from "../components/Paragraph/Paragraph";
import "./ArtistsList.scss";
import Card from "../molecules/Card/Card";

const Artists = ({ tattooers, ...props }) => {
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
          <Card data={tattooers[0]} />
        </div>
      </section>
    </>
  );
};

const mapStateToProps = ({ tattooers }) => ({ tattooers });

export default connect(mapStateToProps)(Artists);
