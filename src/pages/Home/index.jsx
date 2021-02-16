import React from "react";
import { Section } from "./style";
import Feed from "../../components/Feed/";
import { Container } from "../../assets/GlobalStyle";

const Home = () => {
  return (
    <Section>
      <Container>
        <Feed getPhotos={{ total: 6, user: 0 }} />
      </Container>
    </Section>
  );
};

export default Home;
