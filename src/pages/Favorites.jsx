import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import '../styles/Favorites/favorites.css';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteSongs: [],
      loading: false,
      searchDone: false,
    };
  }

  componentDidMount() {
    this.searchFav();
  }

  searchFav = async () => {
    this.setState({ loading: true });
    const favorites = await getFavoriteSongs();
    this.setState({
      favoriteSongs: favorites,
      loading: false,
      searchDone: true,
    });
  }

  render() {
    const { searchDone, loading, favoriteSongs } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="page-favorites">
        <Header />

        <section className="favorite-list">
          {searchDone && favoriteSongs.map((music, index) => (
            <MusicCard
              key={ index }
              id={ music.trackId }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
              artworkUrl100={ music.artworkUrl100 }
              checkObj={ favoriteSongs.filter((song) => song === music) }
            />
          ))}
        </section>

      </div>
    );
  }
}

export default Favorites;
