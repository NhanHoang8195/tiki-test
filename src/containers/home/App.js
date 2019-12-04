import React, {useState} from 'react';
import ListSeat from '../listSeats';
import dataMock from '../../constants/mockData.json';

import './App.css';


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
  const typeSeat = dataMock.type;
  const statusList = dataMock.statusList;
  const [userBookList, setUserBookList] = useState(() => initUserBookedList(dataMock.userBooked));

  /**
   * Change status of seat when user click on checkbox.
   * @param {number} row index row.
   * @param {number} col index col.
   */
  function onChangeCheckbox(row, col) {
    const listCol = new Set([...userBookList[row] || []]);
    // if the seat is already booked before, then remove it like cancel book.
    if (listCol.has(col)) {
      listCol.delete(col);

    } else {
      listCol.add(col);
    }
    const newUserBookList = {...userBookList};
    newUserBookList[row] = listCol;
    setUserBookList(newUserBookList);
  }
  return (
    <div className="App">
      { typeSeat.map((type, idx) => (
        <ListSeat
          key={idx}
          typeSeat={type}
          onChangeCheckbox={(colIdx) => onChangeCheckbox(idx, colIdx)}
          userBookList={userBookList[idx] || new Set()}
          rowId={idx}
          statusRow={statusList[idx]} />))
      }
    </div>
  );
}

export default App;
