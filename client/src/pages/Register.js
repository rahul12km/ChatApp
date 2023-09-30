import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import styled from "styled-components";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8001/auth/register", {
        username,
        password,
      });
      navigate("/login");
      setPassword("")
      setUsername("")
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="REGISTER"
      onSubmit={onSubmit}
    />
  );
};

const Login = () => {
  const { currentUser, setCurrentUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [, setCookies] = useCookies(["access_token"]);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/auth/login", {
        username,
        password,
      });

      if (response.data.status) {
        // setCookies("access_token", response.data.token);
        setCurrentUser(response.data.user);
      response.data.user.isAvatarImageSet? navigate("/"):navigate("/setAvatar")
      setPassword("")
      setUsername("")
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="LOGIN"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <Container>
    <div className="auth-body">
      <div className="auth-container">
        <form onSubmit={onSubmit}>
          <h1 className="h1">{label}</h1>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username" className="reg-text">
                Username
              </label>
              <input
                className="reg-inp"
                type="text"
                id="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="reg-text">
                Password
              </label>
              <input
                className="reg-inp"
                type="password"
                id="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="reg-btn">
              {label}
            </button>
            {label==="LOGIN"?( <span>
              already have an account ? <Link to="/login">Login</Link>
            </span>):(<></>)}
          
          </div>
        </form>
      </div>
    </div>
    </Container>
  );
};

const Container = styled.div`

.auth-body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #00000076;
  border-radius: 2rem;
  padding: 3rem 5rem;
}
.reg-inp {
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid #4e0eff;
  margin-top:0.2rem;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;
}

.reg-inp:focus {
  outline: none;
  border: 0.1rem solid #998af0;
}

.reg-btn {
  background-color: #997af0;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
}

.reg-btn:hover {
  background-color: #4e0eff;
  color: white;
}

span {
  color: white;
  text-transform: uppercase;
}
`;


export { Register, Login };
