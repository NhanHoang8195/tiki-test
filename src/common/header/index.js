import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Header(props) {
  return (<div className="header-screen">
    <p className="film-name">{props.filmName}</p>
    <p className="film-note">{props.note}</p>
  </div>);
}

Header.propTypes = {
  filmName: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export default Header;
