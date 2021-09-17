import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

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
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          { nome }
        </p>
      </header>
    );
  }
}

export default Header;
