import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState('YouTube');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    // prevent default action of form being submitted (page refresh)
    e.preventDefault();
    const entry = { name, email, method };

    setIsPending(true);

    fetch('https://helpmediy.org:3001/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    }).then(() => {
      setIsPending(false);
      history.push('/'); // go back to the home page
    });
  };

  return (
    <div className="create">
      <h2>Add a New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Entry method:</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="YouTube">YouTube</option>
          <option value="Instagram">Instagram</option>
          <option value="FaceBook">FaceBook</option>
        </select>
        {!isPending && <button>Add Entry</button>}
        {isPending && <button disabled>Adding Entry...</button>}
      </form>
    </div>
  );
};

export default Create;
