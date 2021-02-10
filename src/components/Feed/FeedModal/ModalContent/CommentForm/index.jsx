import React from "react";
import { CommentField } from "./style";
import Button from "../../../../Button";

const CommentForm = ({ onSubmit, setComment, value, error, className }) => {
  return (
    <CommentField onSubmit={onSubmit} className={className}>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="4"
        value={value}
        onChange={({ target }) => setComment(target.value)}
        className={error && "error"}
        placeholder={error ? error : "Comment Here"}
      />
      <Button icon="dog" wd="75px" hg="75px" title="Post Comment" />
    </CommentField>
  );
};

export default CommentForm;
