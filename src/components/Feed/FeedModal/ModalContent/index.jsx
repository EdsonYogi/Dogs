import React, { useContext, useEffect, useState } from "react";
import {
  Content,
  Photo,
  Comments,
  CommentFild,
  UserCommentsList,
  InfoPhoto,
  Data,
  RowOne,
  RowTwo,
  NameDog,
  DeletePhoto,
  LoadingDelete,
  Error,
} from "./style";
import { UserContext } from "../../../../UserContext.js";
import {
  COMMENT_POST,
  COMMENT_GET,
  PHOTO_DELETE,
} from "../../../../services/api";
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Views from "../../../ViewsCount";
import Button from "../../../Button";

const ModalContent = ({ dataPhoto, modal, className }) => {
  const [comment, setComment] = useState("");
  const [commentsUsers, setCommentsUsers] = useState(null);
  const { loading, request } = useFetch();

  const error = {
    comment: useFetch().error,
    delete: useFetch().error,
  };

  const { data, login } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(dataPhoto.id, { comment });
    const { responseFetch } = await request(url, options);
    if (responseFetch.ok) {
      getCommentsUsers();
      setComment("");
    }
  };

  const getCommentsUsers = async () => {
    const { url, options } = COMMENT_GET(dataPhoto.id);
    const { dataJson } = await request(url, options);
    setCommentsUsers(dataJson.reverse());
  };

  const handleDeletePhoto = async () => {
    if (window.confirm(`Do you want to delete the photo?`)) {
      const { url, options } = PHOTO_DELETE(dataPhoto.id);
      const { responseFetch } = await request(url, options);
      if (responseFetch.ok) window.location.reload();
    }
  };

  useEffect(() => {
    if (dataPhoto) getCommentsUsers();
  }, [dataPhoto]);

  return (
    <Content className={className}>
      {loading && (
        <DeletePhoto>
          <LoadingDelete />
          {error.delete && <Error>{error.delete}</Error>}
        </DeletePhoto>
      )}
      <Photo src={dataPhoto.src} alt={dataPhoto.title} />
      <InfoPhoto className="InfoPhoto">
        <Data>
          <RowOne>
            {data != null && data.username === dataPhoto.author ? (
              <Button
                title="Delete"
                hg="20px"
                wd="70px"
                onClick={handleDeletePhoto}
              >
                Delete
              </Button>
            ) : (
              <Link to={`/profile/${dataPhoto.author}`}>
                @{dataPhoto.author}
              </Link>
            )}
            <Views views={dataPhoto.acessos} />
          </RowOne>
          <Link to={`/photo/${dataPhoto.id}`}>
            <NameDog>{dataPhoto.title}</NameDog>
          </Link>
          <RowTwo>
            <span>{dataPhoto.peso} kg</span>
            <span>{dataPhoto.idade} anos</span>
          </RowTwo>
        </Data>
        {window.innerWidth > 768 || !modal ? (
          <Comments>
            <UserCommentsList
              className="commentsUsers"
              comments={commentsUsers}
            />
            {login && (
              <CommentFild
                className="commentForm"
                onSubmit={handleSubmit}
                setComment={setComment}
                error={error.comment}
                value={comment}
              />
            )}
          </Comments>
        ) : (
          ""
        )}
      </InfoPhoto>
    </Content>
  );
};

export default ModalContent;
