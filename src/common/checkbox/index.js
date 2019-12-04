import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_SEATS } from '../../constants';

import './styles.scss';

function Checkbox(props) {
  const { id, onChange, status, seatNumber, type, disabled } = props;

  const typeSeatClassName =
    type === TYPE_SEATS.VIP.key ? 'vip-seat-checkbox'
    : type === TYPE_SEATS.DELUXE.key ? 'deluxe-seat-checkbox'
                                 : 'standard-seat-checkbox';
  return <div className="checkbox-comp">
    <input id={id} type="checkbox" onChange={onChange} checked={status} disabled={disabled} />
    <label htmlFor={id} className={`label-checkbox ${typeSeatClassName}`}>{status && seatNumber}</label>
  </div>
}

Checkbox.propTypes = {
  seatNumber: PropTypes.number,
  status: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
};
Checkbox.defaultProps = {
  seatNumber: '',
  status: false,
};

export default Checkbox;