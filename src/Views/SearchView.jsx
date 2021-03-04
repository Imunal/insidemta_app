import { useState } from 'react';
import axios from '../Configs/axios';

import { Link } from "react-router-dom";

const SearchView = () => {
    const [searchName, setSearchName] = useState('');
    const [responsePlayers, setResponsePlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchSearch = () => {
        if(!searchName) return;
        setIsLoading(true);
        axios
            .get(`/search/player/${searchName}`)
            .then((response) => {
                console.log(response.data);
                setResponsePlayers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const renderResponse = () => {
        return (
            <div className="row">
            <hr className="mt-3 mb-3"/>
            {responsePlayers.map((player) => (
                <div className="col-md-3 mb-3" key={player.UID}>
                    <div className="panel__body__element text-center h-100">
                        <img
                            className="panel__body__image img-fluid skin__image__width"
                            src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
                            alt="Skin"
                            loading="lazy"
                        />
                        <h5 className="mt-3 text-muted text-break fw-600">{player.username}</h5>
                        <Link to={`/player/${player.UID}`} className="btn btn__dark btn-lg btn-block">Sprawdź profil gracza</Link>
                    </div>
                </div>
            ))}
            </div>
        )
    };

    return (
        <div className="container">
            <div className="panel mt-5 ml-auto mr-auto">
                <div className="panel__header">
                    <h1 className="mb-0">Wyszukiwarka graczy</h1>
                </div>
                <div className="panel__body">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="searchName"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            placeholder="Wprowadź nazwę gracza"
                            disabled={isLoading}
                        />
                        <label htmlFor="searchName">Wprowadź nazwę gracza aby go wyszukać</label>
                    </div>
                    <p className="text-small text-muted">
                        Nick gracza nie musi być dokładny.
                    </p>
                    <button
                        className="btn btn__dark btn-lg btn-block"
                        onClick={() => fetchSearch()}
                    >
                        {isLoading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Wczytywanie...</span>
                            </>
                        ) : (
                            'Wyszukaj gracza'
                        )}
                    </button>
                    {responsePlayers.length ? renderResponse() : ''}
                </div>
            </div>
        </div>
    );
};

export default SearchView;
