import React from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import '../styles/Profile/profile.css';
import UserLogo from '../utils/profileLogo';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    this.setUsername();
  }

  setUsername = async () => {
    const { name } = await getUser();
    this.setState({ username: name });
  }

  render() {
    const { username } = this.state;
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

          <h4>{ username }</h4>
          <h4>{ `Email: ${username}@email.com` }</h4>

          <div className="description">
            <h4>
              Descrição:
            </h4>
            <p>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed mattis commodo tortor,
              ac mattis tortor tristique in.
              Donec efficitur pellentesque lectus, ut dignissim nisl.
              Suspendisse potenti.
              Integer euismod porta massa sed mattis. Suspendisse sagittis diam est.`}
            </p>
          </div>

        </section>
      </div>
    );
  }
}

export default Profile;
