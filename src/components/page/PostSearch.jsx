import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import posts from '../../data/posts';

function PostSearch() {
  const location = useLocation();
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get('query'));
  console.log(location.search);
  function formSubmit(event) {
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search?query=${event.target.q.value}`);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label mt-3">
            Search Here:
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            placeholder="search animal here:"
            defaultValue={q}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>
      {location.pathname === '/search' && <h1>Search Results: {q}</h1>}
    </>
  );
}
export default PostSearch;
