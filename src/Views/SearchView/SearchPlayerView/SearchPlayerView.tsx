import { useState } from "react";
import { Link } from "react-router-dom";

//Components
import Input from "Components/Input/Input";
import Button from "Components/Button/Button";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

//Types
import { Player } from "Types/Player";

const SearchView = () => {
  const [searchName, setSearchName] = useState("");

  const { isLoading, searchedPlayers, handleFetchPlayer } = usePlayer();

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleFetchPlayer(searchName);
  };

  const handleSearchNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };

  const renderResponse = () => (
    <div className="row">
      <hr className="mt-3 mb-3" />
      {searchedPlayers.map((player: Player) => (
        <div className="col-md-3 mb-3" key={player.UID}>
          <div className="panel__body__element h-100 text-center">
            <img
              className="panel__body__image img-fluid skin__image__width"
              src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
              alt="Skin"
              loading="lazy"
            />
            <h5 className="text-muted text-break fw-600 mt-3">
              {player.username}
            </h5>
            <Link
              to={`/player/${player.UID}`}
              className="btn btn__dark btn-lg btn-block"
            >
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
                type="text"
                name="searchName"
                value={searchName}
                onChange={handleSearchNameChange}
                placeholder="Wprowadź nazwę gracza"
                disabled={isLoading}
                label="Wprowadź nazwę gracza"
                required={true}
              />
            </div>
            <p className="text-small text-muted">
              Nick gracza nie musi być dokładny.
            </p>
            <Button isLoading={isLoading}>Wyszukaj gracza</Button>
          </form>
          {searchedPlayers.length ? renderResponse() : ""}
        </div>
      </div>
    </div>
  );
};

export default SearchView;
