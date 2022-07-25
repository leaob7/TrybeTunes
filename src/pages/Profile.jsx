import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <section className="profile-section">

          <div className="username-and-logo">
            <img src="" alt="" />
            <h4>User</h4>
          </div>

          <h4>Email</h4>
          <h4>Descrição</h4>
        </section>
      </div>
    );
  }
}

export default Profile;
