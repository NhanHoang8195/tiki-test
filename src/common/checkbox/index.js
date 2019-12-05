import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_SEATS } from '../../constants';

import './styles.scss';

function getClassName(type) {
  return type === TYPE_SEATS.VIP.key ? 'vip-seat-checkbox'
    : type === TYPE_SEATS.DELUXE.key ? 'deluxe-seat-checkbox'
    : type === TYPE_SEATS.STANDARD.key ? 'standard-seat-checkbox'
      : 'unknown-seat';
}

function Checkbox(props) {
  const { id, onChange, status, type, disabled, seatNumber } = props;

  const typeSeatClassName = getClassName(type);
  return <div className="checkbox-comp">
    <input id={id} type="checkbox" onChange={onChange} checked={status} disabled={disabled} />
    <label htmlFor={id} className={`label-checkbox ${typeSeatClassName}`}>{seatNumber}</label>
  </div>
}

Checkbox.propTypes = {
  status: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
  seatNumber: PropTypes.number,
};
Checkbox.defaultProps = {
  seatNumber: '',
  status: false,
};

export default Checkbox;