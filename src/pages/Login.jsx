import React from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import '../styles/Login/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      loading: false,
      redirect: false,
    };
  }

  handleInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async () => {
    const { input } = this.state;
    this.setState({ loading: true });
    await createUser({ name: input });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { input, loading, redirect } = this.state;
    const inputMin = 3;
    if (redirect === true) { return <Redirect to="/search" />; }
    if (loading === true) { return <Loading />; }
    return (
      <body className="login-body">
        <div data-testid="page-login" className="login-container">

          <form className="login-form">
            <h2>Trybetunes</h2>
            <input
              value={ input }
              type="text"
              data-testid="login-name-input"
              placeholder="username"
              onChange={ this.handleInput }
            />
            <button
              type="submit"
              data-testid="login-submit-button"
              disabled={ input.length < inputMin }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </form>

        </div>

      </body>
    );
  }
}

export default Login;
