import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
import '../styles/Header/header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      nome: '',
    };
  }

  componentDidMount() {
    this.forGetUser();
  }

  setName = async () => {
    await getUser().then((response) => this.setState({
      nome: response.name,
    }));
  }

  forGetUser = async () => {
    this.setState({
      loading: true,
    });
    await this.setName();
    this.setState({
      loading: false,
    });
  }

  render() {
    const { nome, loading } = this.state;
    if (loading === true) { return <Loading />; }

    return (
      <header data-testid="header-component" className="header">
        <p data-testid="header-user-name">
          { nome }
        </p>
        <nav className="nav-container">
          <Link to="/search" data-testid="link-to-search"> Pesquisa </Link>
          <Link to="/favorites" data-testid="link-to-favorites"> Favoritas </Link>
          <Link to="/profile" data-testid="link-to-profile"> Perfil </Link>
        </nav>

      </header>
    );
  }
}

export default Header;
