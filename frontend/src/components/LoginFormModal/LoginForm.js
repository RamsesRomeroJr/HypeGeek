import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import styled from 'styled-components'

const LoginButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  background-color:#FCFAF0;
  border:solid 0.5px lightgrey;
  color:grey;
  &:hover{
    background-color:green;
    color:#FCFAF0;
    border:solid 0.5px lightgrey;
  }
`;

const Input = styled.input`
  margin-top:10px;
  margin-bottom:10px;
`

const LoginTitle = styled.h1`
  color: grey;
  margin: 0;
  font-family: 'Staatliches', cursive;
  font-weight:3;
`

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='formModal'>
      <LoginTitle>Log In</LoginTitle>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          <Input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder='Username or Email'
            required
          />
        </label>
        <label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </label>
        <LoginButton type="submit">Log In</LoginButton>
        <LoginButton type="submit" onClick={(e) =>{
          setCredential('demo@user.io')
          setPassword('password')
        }}>Demo</LoginButton>
      </form>
    </div>
  );
}

export default LoginForm;
