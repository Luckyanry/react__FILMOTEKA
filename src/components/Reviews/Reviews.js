import React, { Component } from "react";
import "./Reviews.css";
import { request, getMovieReviewsUrl } from "../../helpers/request";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const URL = getMovieReviewsUrl(movieId);

    try {
      const result = await request("get", URL);
      console.log("result.revies", result.results);
      this.setState({
        reviews: [...result.results],
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  render() {
    // const { params } = this.props.match;
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
