import React from 'react';
import Loading from '../pages/Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  audioCards = () => {
    const { id, trackName, previewUrl } = this.props;
    return (
      <section key={ trackName }>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>

        <label htmlFor={ id } data-testid={ `checkbox-music-${id}` }>
          Favorita
          <input value={ id } type="checkbox" />
        </label>

      </section>
    );
  }

  render() {
    return (
      <>
        {this.audioCards()}
      </>
    );
  }
}
