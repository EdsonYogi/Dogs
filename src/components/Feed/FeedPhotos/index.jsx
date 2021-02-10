import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import { PHOTOS_GET } from "../../../services/api";
import { PhotoList } from "./style";
import FeedPhotosItem from "./FeedPhotosItem";
import ErrorMessage from "../../../components/ErrorMessage";

const FeedPhotos = ({ setModal, getPhotos, page, setLastPage, setLoading }) => {
  const { data, error, loading, request } = useFetch();
  const [newPhotos, setNewPhotos] = useState("");
  const fetchPhotos = async () => {
    setLoading(true);
    const { url, options } = PHOTOS_GET({ ...getPhotos, page });
    const { responseFetch, dataJson } = await request(url, options);
    if (responseFetch.ok) {
      setLoading(loading);
      if (dataJson.length > 0) {
        const newPage = (
          <PhotoList enterAnimetion={data} key={page} id={page}>
            {dataJson.map(({ id, ...props }) => {
              return (
                <FeedPhotosItem
                  key={id}
                  id={id}
                  setModal={setModal}
                  {...props}
                />
              );
            })}
          </PhotoList>
        );
        setNewPhotos(newPage);
      } else {
        setNewPhotos(null);
        setLastPage(true);
      }
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <Fragment>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {newPhotos}
    </Fragment>
  );
};

export default FeedPhotos;
