import React, { Component } from "react";
import "./Cast.css";
import { request, getMovieCreditsUrl } from "../../helpers/request";

class Cast extends Component {
  state = {
    credits: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const URL = getMovieCreditsUrl(movieId);

    try {
      const result = await request("get", URL);
      console.log("result.cast", result.cast);
      this.setState({
        credits: [...result.cast],
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  render() {
    const { url, params } = this.props.match;
    const { credits } = this.state;

    console.log("params", params.movieId);
    console.log("url", url);

    return (
      <>
        {credits.length > 0 ? (
          <ul>
            {credits.map((cast) => (
              <li key={cast.cast_id}>
                {cast.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                    alt={cast.about}
                  />
                )}
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any information about cast for this movie</p>
        )}
      </>
    );
  }
}

export default Cast;
