import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
  const [story, setStory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("ID:", id); 
    fetch(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then(response => response.json())
      .then(data => setStory(data));
  }, [id]);

  return (
    <div className="container">
      {story && (
        <div className="story-details">
          <h2>{story.Title}</h2>
          <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.Title} />
          <p>{story.Content}</p>
        </div>
      )}
    </div>
  );
}

export default Description;
