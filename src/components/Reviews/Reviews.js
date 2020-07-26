import React, { Component } from "react";
import { request, requestMovieUrl } from "../../helpers/request";
import "./Reviews.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { url } = this.props.match;
    const URL = requestMovieUrl(url);

    try {
      const result = await request("get", URL);

      this.setState({
        reviews: [...result.results],
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  render() {
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
