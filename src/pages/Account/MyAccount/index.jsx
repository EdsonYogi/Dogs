import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import Feed from "../../../components/Feed";
import { Container } from "../../../assets/GlobalStyle";
import Head from "../../../components/Head";
import {} from "./style";

const MyAccount = () => {
  const { data } = useContext(UserContext);
  return (
    <section>
      <Container>
        <Head title="My Account" descripton="My Account" />
        <Feed getPhotos={{ page: 1, total: 6, user: data.id }} />
      </Container>
    </section>
  );
};

export default MyAccount;
