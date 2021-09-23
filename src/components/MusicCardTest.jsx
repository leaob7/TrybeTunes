// import React from 'react';
// import Loading from '../pages/Loading';
// import { addSong } from '../services/favoriteSongsAPI';

// export default class MusicCardTest extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: false,
//     };
//   }

//   forAddSong = async (music) => {
//     this.setState({
//       loading: true,
//     });
//     await addSong(music);
//     this.setState({
//       loading: false,
//     });
//   };

//   card = () => {
//     const { infoList } = this.props;
//     const audio = infoList.map((music) => (
//       // if (music.wrapperType === 'collection') { return null; }
//       <section key={ music.trackId }>
//         <p>{music.trackName}</p>
//         <audio data-testid="audio-component" src={ music.previewUrl } controls>
//           <track kind="captions" />
//           O seu navegador não suporta o elemento
//           <code>audio</code>
//         </audio>

//         <label htmlFor="favorite" data-testid={ `checkbox-music-${music.trackId}` }>
//           Favorita
//           <input id="favorite" type="checkbox" />
//         </label>

//       </section>
//     ));
//     console.log(audio);
//     return audio;
//   }

//   render() {
//     const { infoList } = this.props;
//     const { loading } = this.state;
//     return (
//       <div>
//         {this.card()}
//       </div>
//     );
//   }
// }
