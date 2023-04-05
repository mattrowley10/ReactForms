import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password)
    console.log(username)
    setUsername('')
    setPassword('')
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  return (
    <div id='container'>
      <div id='navbar'>
        Form.js
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <label htmlFor='password'>Password:</label>
        <input type='text' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


ReactDOM.render(
  <Form />,
  document.getElementById('app')
)