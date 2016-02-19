import Note from './Note';

export default ({notes, onEdit, onDelete}) =>
  <ul className="notes">{notes.map(note =>
    <li className="note" key={note.id}>
      <Note
        task={note.task}
        onEdit={onEdit.bind(null, note.id)}
        onDelete={onDelete.bind(null, note.id)}
      />
    </li>
  )}</ul>;
