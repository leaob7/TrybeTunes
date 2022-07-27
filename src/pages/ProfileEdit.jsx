import React from 'react';
import Header from '../components/Header';
import '../styles/ProfileEdit/profile-edit.css';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <section>

          <form action="" className="edit-user-form">

            <label htmlFor="input-name">
              <p>Nome</p>
              <input type="text" id="input-name" placeholder="Adicione um nome" />
            </label>

            <label htmlFor="input-email">
              <p>Email</p>
              <input type="text" id="input-email" placeholder="Adicione um email" />
            </label>

            <label htmlFor="description-area">
              <p>Descrição</p>
              <textarea id="description-area" placeholder="Adicione uma descrição " />
            </label>

            <button type="button">
              Salvar
            </button>

          </form>

        </section>
      </div>
    );
  }
}

export default ProfileEdit;
