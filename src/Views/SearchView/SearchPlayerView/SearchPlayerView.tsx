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
    <>
      <hr className="mt-3 mb-3" />
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        {searchedPlayers.map((player: Player) => (
          <div className="mb-3" key={player.UID}>
            <Link to={`/player/${player.UID}`}>
              <div className="rounded-md bg-inside-bg-light p-5 text-center">
                <img
                  className="mx-auto block w-64"
                  src={`https://cdn.inside-mta.pl/skins/${player.skin}.png`}
                  alt="Skin"
                  loading="lazy"
                />
                <h5 className="mt-3 break-words font-bold text-inside-text-light">
                  {player.username}
                </h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
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
