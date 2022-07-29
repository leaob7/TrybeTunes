import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import '../styles/MusicCard/music-card.css';

export default class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onClick = async () => {
    const { checkObj } = this.props;
    const { pathname } = window.location;

    if (pathname === '/favorites') {
      await removeSong(checkObj[0]);
      const refresh = window.location.reload();
      refresh();
    } else {
      await addSong(checkObj[0]);
    }
  }

  render() {
    const { id, trackName, previewUrl } = this.props;
    return (
      <section key={ trackName } className="music-container">

        <h4>{trackName}</h4>

        <div className="song-and-fav">

          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>

          <label htmlFor="favorita">
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
