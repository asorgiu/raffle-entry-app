import { Link } from 'react-router-dom';

// Use react routing links.
// React intercepts the calls to the server and routes them itself.
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Raffle Entry App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Entry</Link>
        <Link to="/youtube">YouTube sub</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
