import { Link } from 'react-router-dom';

const EntryList = ({ entries, title }) => {
  return (
    <div className="entry-list">
      <h2>{title}</h2>
      {entries.map((entry) => (
        <div className="entry-preview" key={entry._id}>
          <Link to={`/entries/${entry._id}`}>
            <h2>{entry.name}</h2>
            <p>Email: {entry.email}</p>
            <p>Entry method: {entry.method}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
