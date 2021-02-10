import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/Feed";
import { Container } from "../../assets/GlobalStyle";
import Head from "../../components/Head";
import { User } from "./styled";

const Profile = () => {
  const { user } = useParams();
  console.log({ user });
  return (
    <Fragment>
      <Head title={`Profile: ${user}`} description="Profile" />
      <Container>
        <section>
          <User>{user}</User>
          <Feed getPhotos={{ page: 1, total: 6, user: user }} />
        </section>
      </Container>
    </Fragment>
  );
};

export default Profile;
