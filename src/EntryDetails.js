import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const EntryDetails = () => {
  const { id } = useParams(); // allows us to use route parameters from the route
  const {
    data: entry,
    error,
    isPending,
  } = useFetch('http://helpmediy.org:3001/api/entries/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://helpmediy.org:3001/api/entries/' + entry._id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/'); // redirect to home page after deleting
    });
  };

  return (
    <div className="entry-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {entry && (
        <article>
          <h2>{entry.name}</h2>
          <p>Email: {entry.email}</p>
          <p>Entry method: {entry.method}</p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default EntryDetails;
