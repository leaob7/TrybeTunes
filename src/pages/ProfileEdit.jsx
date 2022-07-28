import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/ProfileEdit/profile-edit.css';
import { updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      submit: false,
    };
  }

  handleUserValues = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async () => {
    const { name, email, image, description } = this.state;
    await updateUser({ name, email, image, description });
    this.setState({ submit: true });
  }

  render() {
    const { submit } = this.state;
    if (submit) return <Redirect to="/profile" />;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        <section>

          <form className="edit-user-form">

            <label htmlFor="input-name">
              <p>Nome</p>
              <input
                type="text"
                id="input-name"
                name="name"
                placeholder="Adicione um nome"
                onChange={ this.handleUserValues }
              />
            </label>

            <label htmlFor="input-email">
              <p>Email</p>
              <input
                type="text"
                id="input-email"
                name="email"
                placeholder="Adicione um email"
                onChange={ this.handleUserValues }
              />
            </label>

            <label htmlFor="description-area">
              <p>Descrição</p>
              <textarea
                id="description-area"
                placeholder="Sobre mim"
                name="description"
                maxLength={ 50 }
                onChange={ this.handleUserValues }
              />
            </label>

            <button type="button" onClick={ this.handleSubmit }>
              Salvar
            </button>

          </form>

        </section>
      </div>
    );
  }
}

export default ProfileEdit;
