import React from "react";
import { Link } from "react-router-dom";
import { CommentsList, Comment } from "./style";

const CommentsUsers = ({ comments, className }) => {
  return (
    <CommentsList className={className}>
      {comments &&
        comments
          .map(
            ({
              comment_author,
              comment_content,
              comment_ID,
              comment_date,
              user_id,
            }) => {
              const date = comment_date
                .slice(0, 10)
                .split("-")
                .reverse()
                .toString()
                .replaceAll(",", "/");
              return (
                <Comment key={comment_ID}>
                  <div>
                    <Link to={`/photo/${user_id}`} hg="20px">
                      @{comment_author}
                    </Link>
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
