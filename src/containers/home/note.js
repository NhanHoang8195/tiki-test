import React from 'react';
import NoteElement from '../../common/noteElement';
import { NOTES_TITLES } from '../../constants';

function Note(props) {
  return (<div className="note-seats">
    <div className="note-left">
      {NOTES_TITLES.left.map((k, idx) => (<NoteElement className={`note-left-${idx}`} key={idx} title={k} />))}
    </div>
    <div className="note-right">
      {NOTES_TITLES.right.map((k, idx) => (<NoteElement className={`note-right-${idx}`} key={idx} title={k} />))}
    </div>
  </div>)
}

export default Note;
