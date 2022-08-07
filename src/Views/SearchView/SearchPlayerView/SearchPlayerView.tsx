import { useState } from "react";
import { Link } from "react-router-dom";

//Components
import Input from "Components/Input/Input";
import Button from "Components/Button/Button";
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

//Types
import { Player } from "Types/Player";
import toast from "react-hot-toast";

const SearchView = () => {
  const [searchName, setSearchName] = useState("");

  const { isLoading, searchedPlayers, handleFetchPlayer } = usePlayer();

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleFetchPlayer(searchName)
      .unwrap()
      .catch(() => {
        toast.error("Nie znaleziono takiego gracza");
      });
  };

  const handleSearchNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };

  const renderResponse = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <hr className="mt-3 mb-3" />
      {searchedPlayers.map((player: Player) => (
        <div className="mb-3" key={player.UID}>
          <div className="panel__body__element text-center">
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
    <Layout>
      <Panel title="Wyszukiwarka graczy">
        <div className="p-10">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
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
            <p className="mb-3 text-sm text-inside-text-light">
              Nick gracza nie musi być dokładny.
            </p>
            <Button isLoading={isLoading}>Wyszukaj gracza</Button>
          </form>
          {searchedPlayers.length ? renderResponse() : ""}
        </div>
      </Panel>
    </Layout>
  );
};

export default SearchView;
