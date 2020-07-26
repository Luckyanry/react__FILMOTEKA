import React, { Component } from "react";
import { request, requestMovieUrl } from "../../helpers/request";
import "./Cast.css";

class Cast extends Component {
  state = {
    credits: [],
    message: "",
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
      const message = error.message;
      this.setState({ message });
    }
  }

  render() {
    const { credits, message } = this.state;

    return (
      <div className="CastWrapper">
        {message && (
          <h2 className="Error">Whoops, something went wrong: {message}</h2>
        )}
        {credits.length > 0 ? (
          <ul className="CastList">
            {credits.map((cast) => (
              <li key={cast.cast_id} className="CastCard">
                {cast.profile_path && (
                  <>
                    <div className="CastProfile">
                      <img
                        src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                        alt={cast.about}
                      />
                    </div>
                    <h3 className="CastName">{cast.name}</h3>
                    <p className="CastCharacter">Character: {cast.character}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any information about cast for this movie</p>
        )}
      </div>
    );
  }
}

export default Cast;
