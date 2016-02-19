import React from 'react';
import AltContainer from 'alt-container';

import Notes from './Notes';
import NoteStore from '../stores/NoteStore';
import NoteActions from '../actions/NoteActions';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
          <Notes
            onEdit={this.editNote}
            onDelete={this.deleteNote}
            />
        </AltContainer>
      </div>
    );
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }

  editNote(id, task) {
    if (!task.trim) {
      return;
    }

    NoteActions.update({id, task});
  }

  addNote() {
    NoteActions.create({task: 'New Task'});
  }
}
