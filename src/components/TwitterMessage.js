import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.props = props
    this.state = {
      remainingChars: this.props.maxChars,
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.message}</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        <i>remaining characters: {this.state.remainingChars}</i>
      </div>
    );
  }

  handleChange = (event) => {
    const newInput = event.target.value
    this.setState((prevState, props) =>
  {
    return {
      message: newInput,
      remainingChars: this.props.maxChars - newInput.length
    }
  })
  }
}

export default TwitterMessage;
