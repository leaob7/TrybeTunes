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
      <section key={ trackName }>
        {loading && <Loading />}
        <p>{trackName}</p>
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
      </section>
    );
  }
}
