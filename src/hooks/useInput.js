import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const inputHasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const inputReset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    inputValue: enteredValue,
    isInputValid: valueIsValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    inputReset,
  };
};

export default useInput;
