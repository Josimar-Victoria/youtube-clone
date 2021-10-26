import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
import Comment from "../comment/Comment";
import "./styles.scss";
export default function Comments({ videoId, totalComments }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);
  console.log(comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  
  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return
    dispatch(addComment(videoId, text));
    setText('')
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
}
