import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const baseURL = "http://localhost:5000";
const loginEndpoint = '/api/login';
console.log(`${baseURL}${loginEndpoint}`);

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        // login to retreive JWT token
        // add the token to localstorage
        // route to /protected (whatever landing page)
        axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/FriendList");
        })
        .catch(err => console.log(err.response));
    };
    render() {
        return (
          <div className="formCSS">
            <form onSubmit={this.login}>
              <input
              className="inputCSS"
                type="text"
                name="username"
                placeHolder="Username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <input
              className="inputCSS"
                type="password"
                name="password"
                placeHolder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button className="buttonCSS">Log in</button>
            </form>
          </div>
        );
      }
    }
    
    export default Login;
