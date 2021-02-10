import React from "react";
import { CommentsList, Comment } from "./style";

const CommentsUsers = ({ comments, className }) => {
  return (
    <CommentsList className={className}>
      {comments &&
        comments
          .map(
            ({ comment_author, comment_content, comment_ID, comment_date }) => {
              const date = comment_date
                .slice(0, 10)
                .split("-")
                .reverse()
                .toString()
                .replaceAll(",", "/");
              return (
                <Comment key={comment_ID}>
                  <div>
                    <span>{`@${comment_author}`}</span>
                    <span>{date}</span>
                  </div>
                  <p>{comment_content}</p>
                </Comment>
              );
            }
          )
          .reverse()}
    </CommentsList>
  );
};

export default CommentsUsers;
