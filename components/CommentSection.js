// components/CommentSection.js
import { useState } from 'react';

const CommentSection = ({ imageId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    const newComment = {
      id: comments.length + 1,
      text: comment,
      imageId,
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <div>
      <h3>Commenti</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Aggiungi un commento..."
      />
      <button onClick={handleAddComment}>Aggiungi</button>
    </div>
  );
};

export default CommentSection;
