import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../common/checkbox';
import { KEYS_MAP } from '../../constants';

function ListSeats(props) {
  const { statusRow, onChangeCheckbox, userBookList, rowId } = props;
  return (<div className="seat-comp">
    <label className="row-label">{KEYS_MAP[rowId]}</label>
    { props.typeSeat.map((type, idx) => {
      const isUserSeat = userBookList.has(idx);
      const disabled = statusRow[idx] && !isUserSeat;
      return (<Checkbox
        key={idx}
        type={type}
        onChange={() => onChangeCheckbox(idx)}
        id={`${rowId}-${idx}`}
        status={isUserSeat || statusRow[idx]}
        seatNumber={isUserSeat ? idx + 1 : null}
        disabled={disabled} />);
    })
    }
  </div>);
}
ListSeats.propTypes = {
  typeSeat: PropTypes.array.isRequired,
  statusRow: PropTypes.array.isRequired,
  // this is a Set.
  userBookList: PropTypes.object.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  rowId: PropTypes.number.isRequired,
};

export default ListSeats;
