import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "react-photo-gallery";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Paragraph from "../components/Paragraph/Paragraph";
import NavBar from "../molecules/NavBar";
import Loader from "../components/Loader/Loader";
import "./Artist.scss";

const Artist = () => {
  const photos = [
    {
      src:
        "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://images.unsplash.com/photo-1507251217843-301ac7bf2afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=426&q=80",
      width: 5,
      height: 3,
    },
    {
      src:
        "https://images.unsplash.com/photo-1557286581-db6c124a6e2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      width: 3,
      height: 2,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 3,
      height: 4,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 3,
      height: 2,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 3,
      height: 3,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 5,
      height: 3,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 3,
      height: 3,
    },
    {
      src:
        "https://images.unsplash.com/photo-1542851040-f68f85a424ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      width: 2,
      height: 3,
    },
  ];

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://run.mocky.io/v3/98cf16f5-ced6-40c2-b9c1-a4f684625e48"
      );

      setData(response.data.tattooers[0]);
    };

    fetchData();
  });

  const { fullName, category, bio, avatar, reviews, rating } = data;
  return (
    <>
      <header>
        <NavBar isInverted />
      </header>
      {fullName ? (
        <div className="artist">
          <BackgroundImage
            className="artist__avatar--is-red"
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          ></BackgroundImage>
          <div className="details">
            <div className="details__head">
              <div>
                <Paragraph className="details__rating">{`Rating: ${rating}`}</Paragraph>
                <Title level="h1" className="details__title">
                  {fullName}
                </Title>
              </div>
              <div className="details__studio">
                <Title level="h2">Mysteria studio</Title>
                <Paragraph>Rating 5.0</Paragraph>
              </div>
            </div>
            <Paragraph>{category}</Paragraph>
            <div className="details__numbers">
              <Paragraph>Followers: 231</Paragraph>
              <Paragraph>Following: 10</Paragraph>
              <Paragraph>{`Reviews: ${reviews}`}</Paragraph>
            </div>
            <Paragraph className="details__bio">{bio}</Paragraph>
            <Button className="button--is-main is-first">Book Now</Button>
            <Button className="button">Follow</Button>
          </div>
          <Gallery style={{ width: "100vw" }} photos={photos} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Artist;
