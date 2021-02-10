import React from "react";
import {} from "./style";
import Feed from "../../components/Feed/";
import { Container } from "../../assets/GlobalStyle";

const Home = () => {
  return (
    <section>
      <Container>
        <Feed getPhotos={{ total: 6, user: 0 }} />
      </Container>
    </section>
  );
};

export default Home;
