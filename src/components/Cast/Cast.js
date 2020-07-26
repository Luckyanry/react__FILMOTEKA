import React, { Component } from "react";
import { request, requestMovieUrl } from "../../helpers/request";
import "./Cast.css";

class Cast extends Component {
  state = {
    credits: [],
  };

  async componentDidMount() {
    const { url } = this.props.match;
    const URL = requestMovieUrl(url);

    try {
      const result = await request("get", URL);

      this.setState({
        credits: [...result.cast],
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  render() {
    const { credits } = this.state;

    return (
      <>
        {credits.length > 0 ? (
          <ul>
            {credits.map((cast) => (
              <li key={cast.cast_id}>
                {cast.profile_path && (
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                      alt={cast.about}
                    />

                    <h3>{cast.name}</h3>
                    <p>Character: {cast.character}</p>
                  </>
                )}
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
