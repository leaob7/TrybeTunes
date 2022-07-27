/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import '../styles/Profile/profile.css';
import UserLogo from '../utils/profileLogo';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      editClicked: false,
    };
  }

  componentDidMount() {
    this.setUsername();
  }

  setUsername = async () => {
    const { name, email, description } = await getUser();
    this.setState({ username: name, email, description });
  }

  render() {
    const { username, email, description, editClicked } = this.state;

    if (editClicked) return <Redirect to="/profile/edit" />;

    return (
      <div data-testid="page-profile">
        <Header />
        <section className="profile-section">

          <div className="edit-and-logo">
            <img src={ UserLogo } alt="" />
            <button type="button" onClick={ () => this.setState({ editClicked: true }) }>
              Editar perfil
            </button>
          </div>

          <h4>{ username }</h4>

          { email ? <h4>{ `Email: ${email}` }</h4>
            : <h4>{ `Email: ${username}@email.com` }</h4>}

          <div className="description">
            <h4>
              Descrição:
            </h4>
            { description
              ? <h4>{description}</h4>
              : <p>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed mattis commodo tortor,
              ac mattis tortor tristique in.
              Donec efficitur pellentesque lectus, ut dignissim nisl.
              Suspendisse potenti.
              Integer euismod porta massa sed mattis. Suspendisse sagittis diam est.`}
              </p> }
          </div>

        </section>
      </div>
    );
  }
}

export default Profile;
