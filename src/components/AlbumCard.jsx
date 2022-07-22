import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AlbumCard extends React.Component {
  render() {
    const { albumList } = this.props;

    return (
      albumList.map((card) => (
        <li key={ card.collectionId }>

          <img src={ card.artworkUrl100 } alt={ card.collectionName } />

          <h3>{card.collectionName}</h3>

          <p>{card.artistName}</p>

          <Link
            to={ { pathname: `/album/${card.collectionId}`,
              state: `${card.collectionId}` } }
            data-testid={ `link-to-album-${card.collectionId}` }
          >
            Álbum completo
          </Link>

        </li>
      ))
    );
  }
}

AlbumCard.propTypes = {
  albumList: PropTypes.arrayOf('objects').isRequired,
};
