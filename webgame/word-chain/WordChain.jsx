const React = require("react");

class WordChain extends React.Component {
  state = {
    word: "애자일",
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "Pass!",
        word: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "Fail!",
        value: "",
      });
    }
    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;
  refInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeInput}
            ref={this.refInput}
          />{" "}
          {/* value, onChange는 세트, 아니면 defaultValue */}
          <button>입력</button>
          <div>{this.state.result}</div>
        </form>
      </>
    );
  }
}

module.exports = WordChain;
