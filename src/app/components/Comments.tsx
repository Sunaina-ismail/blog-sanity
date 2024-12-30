"use client";

import { useState } from "react";


interface Comment {
  name: string;
  text: string;
}

export default function CommentsSection() {
 
  const [comments, setComments] = useState<Comment[]>([]); 
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      setComments([...comments, { name, text: newComment }]); 
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-900 font-playfair mb-4">Comments</h2>
      <ul className="space-y-2">
        {comments.length === 0 ? (
          <li className="text-sm text-gray-500">No comments yet... Be the first to comment!</li>
        ) : (
          comments.map((comment, index) => (
            <li key={index} className="bg-[#EAEAEA] text-[#333333] p-2 rounded">
              <p className="font-bold text-black">{comment.name}</p>
              <p>{comment.text}</p>
            </li>
          ))
        )}
      </ul>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded  p-2"
          placeholder="Your name"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded p-1 md:p-2"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-[#cbb4a9] hover:bg-[#bea194]   text-black px-4 py-2 rounded-full"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
