import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import { addSong } from '../services/favoriteSongsAPI';
import '../styles/MusicCard/music-card.css';

export default class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  onClick = async () => {
    const { checkObj } = this.props;
    this.setState({ loading: true });
    await addSong(checkObj[0]);
    this.setState({
      loading: false,
    });
  }

  render() {
    const { id, trackName, previewUrl } = this.props;
    const { loading } = this.state;
    return (
      <section key={ trackName } className="music-container">

        {loading && <Loading />}

        <h4>{trackName}</h4>

        <div className="song-and-fav">

          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>

          <label htmlFor="favorita">
            Favorita
            <input
              id="favorita"
              data-testid={ `checkbox-music-${id}` }
              type="checkbox"
              onChange={ this.onClick }
            />
          </label>

        </div>

      </section>
    );
  }
}

MusicCard.propTypes = {
  checkObj: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};
