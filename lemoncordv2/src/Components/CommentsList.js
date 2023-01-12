import React from "react";
import Comment from "./Comment";

export default function CommentsList(comments) {
    const commentsTbr = comments.comments
  const renderedComments = commentsTbr.map((c) => {
    return <Comment 
        content={c.content} 
        />;
  });
  return (
    {renderedComments}
    )
    
}
