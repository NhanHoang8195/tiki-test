import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


function NoteElement(props) {
  return (<div className={`note-type ${props.className}`}>
    {props.title}
  </div>);
}

NoteElement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default NoteElement;
