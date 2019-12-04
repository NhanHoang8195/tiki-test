import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../common/checkbox';

function ListSeats(props) {
  const { statusRow, onChangeCheckbox, userBookList, rowId } = props;
  return (<div className="seat-comp">
    { props.typeSeat.map((type, idx) => {
      const disabled = statusRow[idx] && !userBookList.has(idx);
      return (<Checkbox
        key={idx}
        type={type}
        onChange={() => onChangeCheckbox(idx)}
        id={`${rowId}-${idx}`}
        seatNumber={idx + 1}
        status={statusRow[idx] || userBookList.has(idx)}
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
