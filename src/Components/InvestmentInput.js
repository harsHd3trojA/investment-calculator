import React, { useState } from "react";

const initialValue = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: ""
};

function InvestmentInput(props) {
  const [userInput, setUserInput] = useState(initialValue);

  const resetHandler = () => {
    setUserInput(initialValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const inputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value
      };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) => {
              inputHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) => {
              inputHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) => {
              inputHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) => {
              inputHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentInput;
