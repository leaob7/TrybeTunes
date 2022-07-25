import React from 'react';
import Header from '../components/Header';
import '../styles/Profile/profile.css';
import UserLogo from '../utils/profileLogo';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <section className="profile-section">

          <div className="edit-and-logo">
            <img src={ UserLogo } alt="" />
            <button type="button">
              Editar perfil
            </button>
          </div>

          <h4>Nome</h4>
          <h4>Email: </h4>
          <h4>Descrição: </h4>
        </section>
      </div>
    );
  }
}

export default Profile;
