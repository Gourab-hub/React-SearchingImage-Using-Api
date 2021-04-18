import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
 

    

    <nav className=" search">
  <form className="form-inline" onSubmit={onSubmit}>
    <input className="control mr-sm-2" onChange={e => setText(e.target.value)} placeholder="Search Image" aria-label="Search"/>
    <button className="btn btn-color my-2 my-sm-0" type="submit">Search </button>
  </form>
      </nav>
  )
}

export default ImageSearch;
