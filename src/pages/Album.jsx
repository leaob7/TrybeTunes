import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import '../styles/Album/album.css';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
      isCalled: false,
      loading: false,
    };

    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  async getSongs() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    const albumInfo = await getMusics(id);
    this.setState({
      infoList: albumInfo,
      isCalled: true,
      loading: false,
    });
  }

  render() {
    const { infoList, isCalled, loading } = this.state;

    if (loading) { <Loading />; }

    return (
      <section data-testid="page-album" className="page-album">
        <Header />
        {isCalled && (
          <section className="album-section">
            <img src={ infoList[0].artworkUrl100 } alt="album-logo" />

            <div className="album-titles">
              <h3 data-testid="artist-name">
                {infoList[0].collectionName}
              </h3>

              <h4 data-testid="album-name">
                {infoList[0].artistName}
              </h4>
            </div>

          </section>
        )}
        {/* slice returns a copy of a section of an array */}
        {isCalled === true ? infoList.slice(1).map((music, index) => (
          <MusicCard
            key={ index }
            id={ music.trackId }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
            artworkUrl100={ music.artworkUrl100 }
            checkObj={ infoList.filter((song) => song === music) }
          />
        )) : null}
      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Album;
