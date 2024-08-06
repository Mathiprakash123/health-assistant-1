import React, { useState } from 'react';

const RatingPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log({ rating, comment });
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Rate Your Experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`w-12 h-12 text-lg font-bold rounded-full mr-2 ${
                  value <= rating ? 'bg-green-500 text-white' : 'bg-gray-300'
                }`}
                onClick={() => handleRatingChange(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Leave a comment..."
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RatingPage;
