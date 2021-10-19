import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCommentsOfVideoById } from "../../redux/actions/comments.action";
import Comment from "../comment/Comment";
import "./styles.scss";
export default function Comments({videoId}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>100 Comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <img
          src="https://avatars.githubusercontent.com/u/78392799?v=4"
          alt="avatar"
          className="mr-3 rounded-circle"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="p-2 border-0">Comment</button>
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
