const { useState, useRef } = require("react");
const React = require("react");

const WordChain = () => {
  const [word, setWord] = useState("애자일");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const refInput = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("Pass!");
      setWord(value);
      setValue("");
    } else {
      setResult("Fail!");
      setValue("");
    }
    refInput.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={value}
          onChange={onChangeInput}
          ref={refInput}
        />{" "}
        {/* value, onChange는 세트, 아니면 defaultValue */}
        <button>입력</button>
        <div>{result}</div>
      </form>
    </>
  );
};

module.exports = WordChain;
