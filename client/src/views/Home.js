import React from "react";
import Title from "../components/Title/Title";
import NavBar from "../molecules/NavBar";
import "./Home.scss";
import Input from "../components/Input/Input";
import Paragraph from "../components/Paragraph/Paragraph";

const Home = () => {
  return (
    <header className="fullscreen-header">
      <div className="background"></div>
      <NavBar />
      <div className="wrapper is-flex is-center">
        <Title level="h1" className="is-light">
          Find Your Tatoo Artist
        </Title>
        <Input
          placeholder="Search for tattoos, cities, studios & artists"
          className="search"
        />
        <button className="search__button">Search</button>
        <div className="location">
          <Paragraph>Near to:</Paragraph>
          <Paragraph className="is-bold">Warsaw</Paragraph>
        </div>
      </div>
    </header>
  );
};

export default Home;
