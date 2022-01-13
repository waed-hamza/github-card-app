import axios from "axios";
import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.github.com/users/${this.state.username}`
    );
    this.props.onSubmit(res.data);
    this.setState({ username: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="GitHub username"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <button>Add</button>
      </form>
    );
  }
}

export default Form;
