import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../common/checkbox';

function HorizontalSeat(props) {
  return (<div>
    { props.data.map(s => (
      <Checkbox onChange={} id={}
      />)) }
  </div>);
}

HorizontalSeat.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HorizontalSeat;
