import React, { Fragment, useEffect, useState } from "react";
import { PhotoContent } from "./style";
import { Container } from "../../assets/GlobalStyle";
import { PHOTO_GET } from "../../services/api";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../../components/LoadingPage";
import Head from "../../components/Head";
import { useParams } from "react-router-dom";

const Photo = () => {
  const { id } = useParams();
  const { loading, request } = useFetch();
  const [dataPhoto, setDataPhoto] = useState(null);
  const { url, options } = PHOTO_GET(id);

  useEffect(() => {
    const fetchData = async () => {
      const { dataJson, responseFetch } = await request(url, options);
      if (responseFetch.ok) {
        setDataPhoto(dataJson.photo);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Head title="Photo" description="Photo" />
      {loading && <Loading />}
      <Container>
        {dataPhoto && <PhotoContent dataPhoto={dataPhoto} />}
      </Container>
    </Fragment>
  );
};

export default Photo;
