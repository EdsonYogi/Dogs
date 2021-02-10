import React from "react";
import { Container } from "../../assets/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterDogs, Content } from "./style";

const Footer = () => {
  return (
    <FooterDogs>
      <Container>
        <Content>
          <FontAwesomeIcon icon="paw" />
          <span>Dogs {new Date().getFullYear()} | Some rights reserved</span>
        </Content>
      </Container>
    </FooterDogs>
  );
};

export default Footer;
