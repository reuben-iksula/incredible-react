import React, { useState } from "react";
import useInput from "../hooks/useInput";

function Contact({ contactSectionRef }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    inputHasError: nameHasError,
    isInputValid: nameIsValid,
    inputValue: enteredName,
    inputReset: nameReset,
  } = useInput((value) => value.trim().length > 0);

  const {
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputHasError: emailHasError,
    isInputValid: emailIsValid,
    inputValue: enteredEmail,
    inputReset: emailReset,
  } = useInput(
    (value) =>
      !!String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
  );

  const {
    inputChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    inputHasError: messageHasError,
    isInputValid: messageIsValid,
    inputValue: enteredMessage,
    inputReset: messageReset,
  } = useInput((value) => value.trim().length > 0);

  let isFormValid = false;

  if (
    nameIsValid &&
    !nameHasError &&
    emailIsValid &&
    !emailHasError &&
    messageIsValid &&
    !messageHasError
  ) {
    isFormValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    nameReset();
    emailReset();
    messageReset();
    setShowSuccessMessage(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccessMessage(false);
  };

  const invalidClasses =
    "border border-red-400 active:shadow-red-500 focus:shadow-red-500";

  return (
    <section
      ref={contactSectionRef}
      className="section-padding max-w-[var(--section-max-width)] mx-auto bg-[#fafafa] border-y border-[#e1e1e1]"
    >
      <div className="text-center mb-[3.875rem]">
        <h2 className="uppercase text-[2rem] mb-4 leading-[2.25rem]">
          CONTACT FORM
        </h2>
        <p className="subtitle">This is some text inside of a div block.</p>
      </div>

      <form
        onSubmit={submitHandler}
        className="w-[75%] mx-auto text-primaryDark"
      >
        <fieldset className="flex w-full">
          <div className="form-control w-1/2">
            <input
              className={`input-styles ${nameHasError ? invalidClasses : ""}`}
              type="text"
              name="name"
              placeholder="Name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />

            {nameHasError && (
              <p className="error-text">Name must not be empty.</p>
            )}
          </div>
          <div className="form-control w-1/2">
            <input
              className={`input-styles ${emailHasError && invalidClasses}`}
              type="text"
              name="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className="error-text">Email is invalid.</p>}
          </div>
        </fieldset>
        <fieldset>
          <div className="form-control">
            <textarea
              className={`input-styles min-h-[6.875rem] ${
                messageHasError && invalidClasses
              }`}
              name="message"
              placeholder="Message"
              cols="10"
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            ></textarea>
            {messageHasError && <p className="error-text">Email is invalid.</p>}
          </div>
        </fieldset>
        <div>
          <div className="form-control">
            <button
              className="btn w-full bg-primaryFocus text-primaryLight hover:bg-black button-transition-config disabled:bg-primaryGray disabled:cursor-not-allowed"
              type="submit"
              disabled={!isFormValid}
            >
              Send Message
            </button>
          </div>
        </div>

        {showSuccessMessage && (
          <div className=" relative form-control text-primaryDark p-4 bg-green-400">
            Data was submitted sucessfully!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="absolute w-3 h-3 right-2 top-2 text-primaryLight cursor-pointer"
              onClick={handleCloseSuccess}
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;
