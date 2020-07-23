import React from "react";
import "./Reviews.css";

const Reviews = ({ reviews }) => {
  return (
    <>
      <p>Reviews for this movie</p>
      {/* {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )} */}
    </>
  );
};

export default Reviews;
