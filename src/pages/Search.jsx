import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import '../styles/Search/search.css';
import AlbumCard from '../components/AlbumCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchDone: false,
      input: '',
      loading: false,
      albumList: [],
      isClicked: false,
      resultText: '',
    };
  }

  makeLi = (coId, artName, coName, artUrl100) => (
    <li key={ coId }>
      <h1>{`Resultado de álbuns de: ${artName}`}</h1>
      <img src={ artUrl100 } alt={ coName } />
      <h3>{coName}</h3>
      <p>{artName}</p>
    </li>
  )

  handleInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async () => {
    const { input } = this.state;
    this.setState({
      loading: true,
    });
    const albuns = await searchAlbumsAPI(input);
    const lista = albuns.map((album) => album);
    this.setState({
      searchDone: true,
      loading: false,
      albumList: lista,
      isClicked: true,
      resultText: `Resultado de álbuns de: ${input}`,
      input: '',
    });
  }

  render() {
    const { input, loading, searchDone, albumList, isClicked, resultText } = this.state;
    const MINIMUN_INPUT = 2;
    // if (loading === true) { return <Loading />; }
    return (
      <>
        <Header />
        <body className="search-body">
          <div data-testid="page-search">
            {loading === true ? <Loading /> : (
              <form className="form-container">
                <input
                  type="text"
                  value={ input }
                  placeholder="Procure por um artista"
                  data-testid="search-artist-input"
                  onChange={ this.handleInput }
                />
                <button
                  type="button"
                  data-testid="search-artist-button"
                  disabled={ input.length < MINIMUN_INPUT }
                  onClick={ this.handleSubmit }
                >
                  Pesquisar
                </button>
              </form>
            )}
          </div>

          {/* Resultados titulo */}
          {isClicked === true ? (
            <p>
              { resultText }
            </p>
          ) : null}

          {/* Card de albuns */}
          {searchDone === true && albumList.length === 0 ? (
            <p>Nenhum álbum foi encontrado</p>
          ) : (
            <section>
              <AlbumCard albumList={ albumList } />
            </section>
          )}
        </body>
      </>
    );
  }
}

export default Search;
