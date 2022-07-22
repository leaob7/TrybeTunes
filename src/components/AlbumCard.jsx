import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/AlbumCard/album-card.css';

export default class AlbumCard extends React.Component {
  render() {
    const { albumList } = this.props;

    return (
      albumList.map((card) => (
        <li key={ card.collectionId } className="album-card">

          <div className="banner">

            <img src={ card.artworkUrl100 } alt={ card.collectionName } />

          </div>

          <div className="album-infos">

            <h3>{card.collectionName}</h3>

            <p>{card.artistName}</p>

            <Link
              to={ { pathname: `/album/${card.collectionId}`,
                state: `${card.collectionId}` } }
              data-testid={ `link-to-album-${card.collectionId}` }
            >
              Álbum completo
            </Link>

          </div>

        </li>
      ))
    );
  }
}

AlbumCard.propTypes = {
  albumList: PropTypes.arrayOf('objects').isRequired,
};
