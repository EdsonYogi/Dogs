import React, { Fragment, useState, useEffect } from "react";
import FeedPhotos from "./FeedPhotos/";
import FeedModal from "./FeedModal/";
import { Loading } from "./style";

const Feed = ({ getPhotos }) => {
  const [modal, setModal] = useState(null);
  const [id, setId] = useState(null);
  const [pages, setPages] = useState([1]);
  const [lastPage, setLastPage] = useState(false);
  const [loading, setLoading] = useState(null);

  const infiniteScroll = () => {
    const currentScrollY = window.scrollY;

    const currentHeight =
      document.body.offsetHeight -
      window.innerHeight -
      document.querySelector("footer").getBoundingClientRect().height;

    if (currentScrollY >= currentHeight && !lastPage) {
      setPages([...pages, pages.length + 1]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    window.addEventListener("wheel", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [pages]);

  useEffect(() => {
    if (id) {
      setModal(true);
    } else {
      setModal(false);
    }

    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      setModal(false);
      document.body.style.overflow = "visible";
    };
  }, [modal, id]);

  return (
    <Fragment>
      {id && (
        <FeedModal
          id={id}
          modal={modal}
          onClick={({ target }) =>
            [...target.classList].includes("active") && setId(null)
          }
        />
      )}
      {loading && <Loading />}
      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            setId={setId}
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
