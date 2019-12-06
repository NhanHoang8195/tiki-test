import React, {useState} from 'react';
import PropTypes from 'prop-types';
import RoomSeats from './roomSeats';
import { MAX_SEAT_USER_CAN_BOOK, ERROR_MESSAGES } from '../../constants';
import Header from '../../common/header';
import Node from './note';
import { updateStatusSeats, getSizeSeatsBook, updateUserSeatsBooked } from '../../ulti';

import './App.scss';

/**
 * Init data.
 * Convert array list seat user booked to Set.
 * @param data
 * @returns {Set<...*>[]}
 */
function initUserBookedList(data) {
  const newData = { ...data };
  Object.keys(data).forEach((key) => {
    newData[key] = new Set([...newData[key]]);
  });
  return newData;
}

function App(props) {
  const { filmDetails, typeSeats, statusList, userBooked } = props.data;
  const [statusSeats, setStatusSeats] = useState(statusList);
  const [userBookList, setUserBookList] = useState(() => initUserBookedList(userBooked));
  const [error, setError] = useState('');

  /**
   * Change status of seat when user click on checkbox.
   * @param {number} row index row.
   * @param {number} col index col.
   */
  function onChangeCheckbox(row, col) {
    // if number of seats user have book equal to max, and user check a seat that available.
    // should display error.
    if (getSizeSeatsBook(userBookList) === MAX_SEAT_USER_CAN_BOOK && !statusSeats[row][col]) {
      setError(ERROR_MESSAGES.MAX_SEATS);
      return;
    }
    const newStatusSeat = updateStatusSeats(statusSeats, {row, col});
    const newUserBookList = updateUserSeatsBooked(userBookList, {row, col});

    setUserBookList(newUserBookList);
    setStatusSeats(newStatusSeat);
    setError('');
  }

  return (
    <div className="App">
      <Header filmName={filmDetails.name} note={filmDetails.note} />
      <RoomSeats
        seats={typeSeats}
        onChangeCheckbox={onChangeCheckbox}
        userBookList={userBookList}
        statusSeats={statusSeats}
      />
      <div className="error-message">{error}</div>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;
