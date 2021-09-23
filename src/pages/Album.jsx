import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

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
      <section data-testid="page-album">
        <Header />
        {isCalled && (
          <section>
            <h3 data-testid="artist-name">
              {infoList[0].artistName}
            </h3>
            <h3 data-testid="album-name">
              {infoList[0].collectionName}
            </h3>
          </section>
        )}
        {/* slice returns a copy of a section of an array */}
        {isCalled === true ? infoList.slice(1).map((music, index) => (
          <MusicCard
            key={ index }
            id={ music.trackId }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
            checkObj={ infoList.filter((song) => song === music) }
          />
        )) : null}
      </section>
    );
  }
}

export default Album;
