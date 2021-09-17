import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleInput = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;
    const MINIMUN_INPUT = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            value={ input }
            data-testid="search-artist-input"
            onChange={ this.handleInput }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ input.length < MINIMUN_INPUT }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
