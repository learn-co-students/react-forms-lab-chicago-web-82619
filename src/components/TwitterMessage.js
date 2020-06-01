import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      length: this.props.maxChars,
    };
  }

  handleChange = (e) => {
    // e.persist();
    // this.setState((prevState) => {
    //   if (prevState.length > 0) {
    //     const charCount = [...e.target.value].length;
    //     const charsLeft = this.props.maxChars - charCount;
    //     return {
    //       [e.target.name]: e.target.value,
    //       length: charsLeft,
    //     };
    //   }
    // });
    this.setState({
      [e.target.name]: e.target.value,
      length: this.state.length - 1,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <p>Characters Left: {this.state.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
