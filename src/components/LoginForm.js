import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const eventNew = event
    this.setState({
      [eventNew.target.name]:eventNew.target.value
    })
  }

  handleLogin = (eventNew) => {
    eventNew.preventDefault()
    const event = eventNew

    if (this.state.password && this.state.username) {
    this.props.handleLogin(this.state)
  }
  else {
    console.log("Fill out both fields please")
  }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.username} />
          </label>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} value={this.state.password} />
          </label>
          <button type="submit">Log in</button>

      </form>
    );
  }
}

export default LoginForm;
