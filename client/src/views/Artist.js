import React from "react";
import { connect } from "react-redux";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Paragraph from "../components/Paragraph/Paragraph";
import NavBar from "../molecules/NavBar";
import Loader from "../components/Loader/Loader";
import "./Artist.scss";

const Artist = ({ tattooers, ...props }) => {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://run.mocky.io/v3/98cf16f5-ced6-40c2-b9c1-a4f684625e48"
  //     );

  //     setData(response.data.tattooers[0]);
  //   };

  //   fetchData();
  // });

  const { fullName, category, bio, avatar, reviews, rating } = tattooers[0];
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
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapStateToProps = ({ tattooers }) => ({ tattooers });

export default connect(mapStateToProps)(Artist);
