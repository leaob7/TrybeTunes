import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchDone: false,
    };
  }

  componentDidMount() {
    this.searchFav();
  }

  searchFav = async () => {
    this.setState({ loading: true });
    await getFavoriteSongs;
    this.setState({
      loading: false,
      searchDone: true,
    });
  }

  render() {
    const { searchDone, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="page-favorites">
        <Header />
        {searchDone && <MusicCard />}
      </div>
    );
  }
}

export default Favorites;
