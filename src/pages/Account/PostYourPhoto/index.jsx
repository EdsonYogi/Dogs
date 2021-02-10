import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PHOTO_POST } from "../../../services/api.js";
import Input from "../../../components/InputForm";
import Files from "../../../components/Files";
import Button from "../../../components/Button";
import LoadingButton from "../../../components/LoadingButton";
import ErrorMessage from "../../../components/ErrorMessage";
import Head from "../../../components/Head";

import { PostPhoto, Photo } from "./style";

const PostYourPhoto = () => {
  const { data, error, loading, request } = useFetch();
  const navegate = useNavigate();
  const infoPost = {
    name: useForm(),
    age: useForm("number"),
    weight: useForm("number"),
  };

  const [img, setImg] = useState({});

  useEffect(() => {
    data && navegate("/account");
  }, [data, navegate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", infoPost.name.value);
    formData.append("idade", infoPost.age.value);
    formData.append("peso", infoPost.weight.value);
    const { url, options } = PHOTO_POST(formData);
    await request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <PostPhoto>
      <Head title="Post Your Photo" descripton="Post Your Photo" />
      <form onSubmit={handleSubmit}>
        <Input label="Name" id="name" type="text" {...infoPost.name} />
        <Input label="Age" id="age" type="text" {...infoPost.age} />
        <Input label="Weight" id="weight" type="text" {...infoPost.weight} />
        <Files text="Upload" onChange={handleImgChange} nameFile="Text" />
        <ErrorMessage>{error}</ErrorMessage>
        {loading ? (
          <LoadingButton icon="spinner" disabled={true} />
        ) : (
          <Button>Send</Button>
        )}
      </form>
      {img.preview && <Photo src={img.preview} alt={img.name} />}
    </PostPhoto>
  );
};

export default PostYourPhoto;
