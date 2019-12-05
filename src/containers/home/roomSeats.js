import React from 'react';
import PropTypes from 'prop-types';
import RowSeats from './rowSeats';

function RoomSeats(props) {
  const { seats, onChangeCheckbox, userBookList, statusSeats } = props;
  return (<div className="screen-seats">
    {seats.map((type, idx) => (
      <RowSeats
        key={idx}
        typeSeat={type}
        onChangeCheckbox={(colIdx) => onChangeCheckbox(idx, colIdx)}
        userBookList={userBookList[idx] || new Set()}
        rowId={idx}
        statusRow={statusSeats[idx]} />))}
  </div>);
}

RoomSeats.propsTypes = {
  seats: PropTypes.array.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  userBookList: PropTypes.object.isRequired,
  statusSeats: PropTypes.array.isRequired,
};
RoomSeats.defaultProps = {
  seats: [],
};
export default RoomSeats;
