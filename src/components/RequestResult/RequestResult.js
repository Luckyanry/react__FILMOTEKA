import { Component } from "react";
import { request, requestMovieUrl } from "../../helpers/request";

class RequestResult extends Component {
  state = {
    resultQuery: [],
    loader: false,
    error: false,
    message: "",
  };

  requestResult = async (...rest) => {
    const URL = requestMovieUrl(...rest);

    try {
      this.loaderToggle(true);
      const result = await request("get", URL);
      this.errorToggle(false);
      return result;
    } catch (error) {
      this.errorToggle(true);
      const message = error.message;
      return message;
    } finally {
      this.loaderToggle(false);
    }
  };

  loaderToggle = (status) => {
    this.setState({
      loader: status,
    });
  };

  errorToggle = (status) => {
    this.setState({
      error: status,
    });
  };
}

export default RequestResult;
