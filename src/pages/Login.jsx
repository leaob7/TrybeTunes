import React from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

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
      <div data-testid="page-login">
        <form>
          <input
            value={ input }
            type="text"
            data-testid="login-name-input"
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
    );
  }
}

export default Login;
