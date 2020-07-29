import React from "react";
import { connect } from "react-redux";
import NavBar from "../molecules/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import "./Profile.scss";

import { useVisibility } from "../hooks/useVisibility";
import Modal from "../molecules/Modal/Modal";

const Profile = ({ user }) => {
  const { isVisible, visibilityHandler } = useVisibility();

  return (
    <>
      <NavBar></NavBar>
      <section className="profile">
        <div className="profile__details">
          <div className="profile__top">
            <h1 className="profile__title">My profile</h1>
            <button className="profile__edit" onClick={visibilityHandler}>
              <FontAwesomeIcon icon={faPenSquare} size="3x" />
            </button>
          </div>

          <h2 className="profile__subheading">{user.fullName}</h2>
          <p>Followers: </p>
          <p>Following: </p>
          <p>Favorites tattoos: </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            molestiae nesciunt adipisci quis neque iusto recusandae voluptates
            porro aut mollitia tenetur explicabo repudiandae quidem odio aperiam
            error nam itaque, eveniet officia molestias debitis esse! Eligendi
            mollitia qui reiciendis facilis, voluptatum consequuntur quas alias
            numquam officia eum ab omnis ex in!
          </p>
          <button className="profile__button">Upload tattoo +</button>
        </div>
        <div className="profile__image">
          <img src={user.avatar} alt="user avatar"></img>
        </div>
      </section>
      {isVisible ? <Modal visibilityHandler={visibilityHandler} /> : null}
    </>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Profile);
