import React, { useState } from "react";
import "../index.css";
const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [live, setLive] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLive = (e) => {
    setLive(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !live.trim()) {
      alert("Please fill the form");
      return;
    }
    let user = {
      name: name,
      email: email,
      live: live,
    };
    props.getUserInfo(user);
    setName("");
    setEmail("");
    setLive("");
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <h2 className='title'>Add a new user</h2>
        <div className='row'>
          <div className='input-field'>
            <label htmlFor='name'>Name</label>
            <input type='text' value={name} onChange={handleName} />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='text' value={email} onChange={handleEmail} />
          </div>
          <div className='input-field'>
            <label htmlFor='live'>Live</label>
            <input type='text' value={live} onChange={handleLive} />
          </div>
        </div>

        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Form;
