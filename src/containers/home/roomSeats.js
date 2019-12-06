import React from 'react';
import PropTypes from 'prop-types';
import RowSeats from './rowSeats';
import Node from './note';

function RoomSeats(props) {
  const { seats, onChangeCheckbox, userBookList, statusSeats } = props;
  return (<div className="screen-seats">
    <div className="screen-list">
      <div className="row-list">
        {seats.map((row, idx) => (
          <RowSeats
            key={idx}
            rowTypeSeat={row}
            onChangeCheckbox={(colIdx) => onChangeCheckbox(idx, colIdx)}
            userBookList={userBookList[idx] || new Set()}
            rowId={idx}
            statusRow={statusSeats[idx]} />))}
      </div>
      <Node />
    </div>
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
