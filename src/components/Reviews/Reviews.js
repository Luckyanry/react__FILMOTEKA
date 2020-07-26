import React, { Component } from "react";
import { request, requestMovieUrl } from "../../helpers/request";
import "./Reviews.css";

class Reviews extends Component {
  state = {
    reviews: [],
    message: "",
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
      const message = error.message;
      this.setState({ message });
    }
  }

  render() {
    const { reviews, message } = this.state;

    return (
      <div className="ReviewsWrapper">
        {message && (
          <h2 className="Error">Whoops, something went wrong: {message}</h2>
        )}
        {reviews.length > 0 ? (
          <ul className="ReviewsList">
            {reviews.map((review) => (
              <li key={review.id} className="ReviewsItem">
                <h3 className="ReviewsTitle">Author: {review.author}</h3>
                <p className="ReviewsDesc">{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default Reviews;
