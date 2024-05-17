"use client";
import React, { useState } from "react";
import { Schema } from "../../amplify/data/resource";

const Comments = ({
  addComment,
  postId,
  paramsId,
}: {
  addComment: (content: string, postId: string, paramsId: string) => void;
  postId: string;
  paramsId: string;
}) => {
  const [comment, setComment] = useState("");

  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComment("");
    addComment(comment, postId, paramsId);
  };
  return (
    <form onSubmit={add} className="p-4 flex flex-col items-center gap-4">
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="add comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border border-gray-200 text-gray-900 block p-2 rounded-lg"
      />
      <button type="submit" className="text-white bg-teal-600 rounded p-4">
        Submit
      </button>
    </form>
  );
};

export default Comments;