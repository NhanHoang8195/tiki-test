/**
 * Function that update status seats when user check or uncheck.
 * @param {array} originalSeats current status of each seat.
 * @param {object} position coordination of the seat.
 * @returns {array} status of each seat after update.
 */
export function updateStatusSeats(originalSeats, position) {
  const { row, col } = position;
  const newStatusSeat = [...originalSeats];
  newStatusSeat[row] = [...originalSeats[row]];
  newStatusSeat[row][col] = !newStatusSeat[row][col];

  return newStatusSeat;
}

/**
 * Function update status of the seat user choose in a row.
 * @param {object} originalBook List seats user book in a row
 * @param {object} position coordination of the seat.
 * @returns {object} new status seats user booked.
 */
export function updateUserSeatsBooked(originalBook, position) {
  const { row, col } = position;
  const newUserBookList = {...originalBook};
  const listCol = new Set(newUserBookList[row]);

  newUserBookList[row] = listCol.has(col) ? listCol.delete(col) && listCol : listCol.add(col);

  return newUserBookList;
}
/**
 * Function check total of seats user have booked.
 * @param {object} seatsBooked user have booked seats.
 * @returns {number} Total seats user have booked.
 */
export function getSizeSeatsBook(seatsBooked) {
  return Object.keys(seatsBooked).reduce((acc, k) => acc + seatsBooked[k].size, 0);
}