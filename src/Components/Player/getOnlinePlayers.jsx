import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../Configs/axios';
import Loader from 'react-loader-spinner';
import Sadface from '../../Assets/Images/Player/no-found.png';

class getOnlinePlayers extends React.Component {
    _isMounted = true;
    constructor(props) {
        super(props);
        this.state = {
            onlinePlayers: [],
            onlinePlayersLoaded: false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this.getOnlinePlayers();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getOnlinePlayers = async () => {
        try {
            const response = await axiosInstance.get('server/onlinePlayers');
            if (this._isMounted) {
                this.setState({
                    onlinePlayers: response.data,
                    onlinePlayersLoaded: true,
                });

                this.props.updateParent(response.data.length);
            }
        } catch (error) {
            this.setState({ onlinePlayersLoaded: true });
        }
    };

    renderOnlinePlayers = () => {
        if (this.state.onlinePlayersLoaded) {
            if (this.state.onlinePlayers.length > 0) {
                return (
                    <>
                        {this.state.onlinePlayers.map((player, index) => (
                            <div className="col-4 col-md-2 mt-2" key={index}>
                                <div className="text-center">
                                    <Link to={`/player/${player.UID}`}>
                                        <div className="player">
                                            <div className="player__circle block__center">
                                                <img
                                                    src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
                                                    className="img-fluid"
                                                    alt="Skin"
                                                    loading="lazy"
                                                />
                                                <span className="player__cricle__online"></span>
                                            </div>
                                            <h6 className="mt-2 text-muted text-break text-center">
                                                {player.username}
                                            </h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </>
                );
            } else {
                return (
                    <div className="block__center w-100 h-100">
                        <img
                            src={Sadface}
                            className="img-fluid mx-auto d-block m-2"
                            alt="No found"
                            height={80}
                            width={80}
                        />
                        <p className="text-small text-center text-muted mb-0">
                            Na serwerze nie ma nikogo.
                        </p>
                        <p className="text-small text-center text-muted mb-0">
                            Może chcesz wejść i to zmienić?
                        </p>
                    </div>
                );
            }
        } else {
            return (
                <div className="block__center w-100 h-100 mt-5 mb-5">
                    <Loader type="Bars" color="#ccc" height={50} width={50} />
                    <p className="text-small text-center text-muted m-0">
                        Trwa pobieranie danych z serwera
                    </p>
                </div>
            );
        }
    };

    render() {
        return <>{this.renderOnlinePlayers()}</>;
    }
}

export default getOnlinePlayers;
