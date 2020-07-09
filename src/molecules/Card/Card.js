import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./Card.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const Card = ({ data, type, ...props }) => {
  const { fullName, rating, category, reviews, avatar, id } = data;
  return (
    <div className="card" key={id}>
      <Link to={`/artists/${id}`} className="card__link">
        <BackgroundImage
          className="card__avatar is-grey"
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></BackgroundImage>
      </Link>
      <div className="card__details">
        <Title level="h2">{fullName}</Title>
        <p>{`Rating ${rating}`}</p>
      </div>
      <div className="card__details">
        <p>{category}</p>
        <p>{`${reviews} reviews`}</p>
      </div>
    </div>
  );
};

export default Card;
