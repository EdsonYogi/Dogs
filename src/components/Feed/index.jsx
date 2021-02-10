import React, { Fragment, useState, useEffect } from "react";
import FeedPhotos from "./FeedPhotos/";
import FeedModal from "./FeedModal/";
import { Loading } from "./style";

const Feed = ({ getPhotos }) => {
  const [modal, setModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [lastPage, setLastPage] = useState(false);
  const [loading, setLoading] = useState(null);

  const infiniteScroll = () => {
    const currentScroll = window.scrollY;
    const currentHeight = document.body.offsetHeight - window.innerHeight;
    if (currentScroll >= currentHeight && !lastPage) {
      setPages([...pages, pages.length + 1]);
    }
  };

  useEffect(() => {
    if (!loading) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
      return () => {
        window.removeEventListener("scroll", infiniteScroll);
        window.removeEventListener("wheel", infiniteScroll);
      };
    }
  }, [pages]);

  return (
    <Fragment>
      {modal && (
        <FeedModal
          id={modal}
          onClick={({ target }) =>
            [...target.classList].includes("active") && setModal(null)
          }
        />
      )}
      {loading && <Loading />}
      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            setModal={setModal}
            getPhotos={getPhotos}
            page={page}
            setLastPage={setLastPage}
            setLoading={setLoading}
          />
        );
      })}
    </Fragment>
  );
};

export default Feed;
