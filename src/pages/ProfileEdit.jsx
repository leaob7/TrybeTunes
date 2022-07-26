import React from 'react';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <section className="edit-form">

          <form action="">

            <label htmlFor="input-name">
              Nome
              <input type="text" id="input-name" />
            </label>

            <label htmlFor="input-email">
              Email
              <input type="text" id="input-email" />
            </label>

            <label htmlFor="description-area">
              Descrição
              <textarea id="description-area" />
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
