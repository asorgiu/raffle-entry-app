import EntryList from './EntryList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: entries,
    isPending,
    error,
  } = useFetch('http://helpmediy.org:3001/api/entries');

  // render this conditionally on entries being set via fetch
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {entries && <EntryList entries={entries} title="All Entries" />}
    </div>
  );
};

export default Home;
