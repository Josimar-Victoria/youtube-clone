import React from "react";
import Comment from "../comment/Comment";
import "./styles.scss";
export default function Comments() {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <img
          src="https://avatars.githubusercontent.com/u/78392799?v=4"
          alt="imgperson"
          className="rounded-circle me-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Agregar un comemtario publico..."
          />
          <button className="border-0 p-2">Comentar</button>
        </form>
      </div>

      <div className="comments__list">
        {[...Array(20)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
}
