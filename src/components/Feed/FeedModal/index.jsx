import React, { useEffect } from "react";
import { PHOTO_GET } from "../../../services/api";
import useFetch from "../../../hooks/useFetch";
import LoadingPage from "../../../components/LoadingPage/";
import ErrorMessage from "../../ErrorMessage";
import ModalContent from "./ModalContent";
import { Modal } from "./style";

const FeedModal = ({ onClick, id }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getInfoPhoto = async () => {
      const { url, options } = PHOTO_GET(id);
      await request(url, options);
    };
    getInfoPhoto();
  }, [id, request]);

  const ModalPhoto = () => {
    if (error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    } else if (loading) {
      return <LoadingPage />;
    } else if (data) {
      return <ModalContent dataPhoto={data.photo} />;
    } else {
      return null;
    }
  };

  return (
    <Modal id="modal" className={id && "active"} onClick={onClick}>
      <ModalPhoto />
    </Modal>
  );
};

export default FeedModal;
