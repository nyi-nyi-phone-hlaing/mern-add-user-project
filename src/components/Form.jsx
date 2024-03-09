import React, { useRef } from "react";
import "../index.css";
const Form = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const liveInputRef = useRef();

  const addUser = (e) => {
    e.preventDefault();

    if (
      !nameInputRef.current.value.trim() ||
      !emailInputRef.current.value.trim() ||
      !liveInputRef.current.value.trim()
    ) {
      alert("Please fill the form");
      return;
    }
    let user = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      live: liveInputRef.current.value,
    };
    props.getUserInfo(user);

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    liveInputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <h2 className='title'>Add a new user</h2>
        <div className='row'>
          <div className='input-field'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameInputRef} />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' ref={emailInputRef} />
          </div>
          <div className='input-field'>
            <label htmlFor='live'>Live</label>
            <input type='text' id='live' ref={liveInputRef} />
          </div>
        </div>

        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Form;
