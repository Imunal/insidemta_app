import { useState, useEffect } from "react";
import axios from "axios";


function PlayerInformation(props) {
  const [playerData, setPlayerData] = useState([]);
  useEffect(() => getPlayer(), []);
  const getPlayer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/player/get",
        {
          personalToken: props.personalToken,
        }
      );
      setPlayerData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <h5>Podstawowe informację o twoim koncie:</h5>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <img
              className="panel__body__image img-fluid"
              src={`https://api.insidemta.pl/cdn/skins/${playerData.skin}.png`}
              alt="Skin"
            />
          </div>
        </div>
        {props.personalToken}
    </>
  );
}

export default PlayerInformation;
