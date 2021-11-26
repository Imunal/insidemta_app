import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Input from 'Components/Input/Input';
import Button from 'Components/Button/Button';

const SearchView = ({ search, fetchSearch, isAppLoading }) => {
  const [searchName, setSearchName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchSearch(searchName);
  };

  const renderResponse = () => (
    <div className="row">
      <hr className="mt-3 mb-3" />
      {search.map((player) => (
        <div className="col-md-3 mb-3" key={player.UID}>
          <div className="panel__body__element text-center h-100">
            <img
              className="panel__body__image img-fluid skin__image__width"
              src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
              alt="Skin"
              loading="lazy"
            />
            <h5 className="mt-3 text-muted text-break fw-600">{player.username}</h5>
            <Link to={`/player/${player.UID}`} className="btn btn__dark btn-lg btn-block">
              Sprawdź profil gracza
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="panel mt-5 ml-auto mr-auto">
        <div className="panel__header">
          <h1 className="mb-0">Wyszukiwarka graczy</h1>
        </div>
        <div className="panel__body">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <Input
                inputType="text"
                inputName="searchName"
                inputValue={searchName}
                inputOnChange={(e) => setSearchName(e.target.value)}
                inputPlaceHolder="Wprowadź nazwę gracza"
                inputDisabled={isAppLoading}
                inputLabel="Wprowadź nazwę gracza"
                inputRequired={true}
              />
            </div>
            <p className="text-small text-muted">Nick gracza nie musi być dokładny.</p>
            <Button isLoading={isAppLoading}>Wyszukaj gracza</Button>
          </form>
          {search.length ? renderResponse() : ''}
        </div>
      </div>
    </div>
  );
};

export default SearchView;

SearchView.propTypes = {
  search: PropTypes.array,
  fetchSearch: PropTypes.func,
  isAppLoading: PropTypes.bool,
};
