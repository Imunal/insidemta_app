//Configs
import axios from "Configs/axios";

//Hooks
import { usePlayer } from "Hooks/usePlayer";
import toast from "react-hot-toast";

type VehicleExchangeTypes = {
  vehicleModel: any;
  vehicleName: any;
  vehicleID: any;
  vehiclePlateText: any;
  vehicleMileage: any;
  vehicleEngineCapacity: any;
  vehicleColor1: any;
  vehicleColor2: any;
  vehicleColor3: any;
  vehicleColor4: any;
  vehicleColorLights: any;
  vehicleUpgrades: any;
  vehiclePrice: any;
  vehicleSeller: any;
};

const VehicleExchange = ({
  vehicleModel,
  vehicleName,
  vehicleID,
  vehiclePlateText,
  vehicleMileage,
  vehicleEngineCapacity,
  vehicleColor1,
  vehicleColor2,
  vehicleColor3,
  vehicleColor4,
  vehicleColorLights,
  vehicleUpgrades,
  vehiclePrice,
  vehicleSeller,
}: VehicleExchangeTypes) => {
  const { player } = usePlayer();

  //const [vehiclePrice, setVehiclePrice] = useState(props.price);

  const priceFormatter = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const buyVehicle = () => {
    if (!vehiclePrice) {
      return toast.error("Wystąpił nieznany problem.");
    }
    if (!player.personal_token) {
      return toast.error("Aby zakupić pojazd musisz się najpierw zalogować.");
    }
    axios
      .put("vehicle/buy", {
        vehicleID: vehicleID,
        personalToken: player.personal_token,
      })
      .then(() => {
        //setVehiclePrice(null);
        toast.success("Pomyślnie zakupiłeś pojazd z giełdy!");
      })
      .catch((error) => {
        console.log(error);
        toast.success("Wystąpił problem z zakupem pojazdu.");
      });
  };

  const renderVehicle = () => {
    return (
      <div className="col-lg-3 mb-4">
        <div className="row vehicle flex-row">
          <div className="vehicle__img">
            <img
              src={`https://cdn.inside-mta.pl/webp/vehicles/${vehicleModel}.webp`}
              className="img-fluid"
              alt="Vehicle"
              loading="lazy"
            />
          </div>
          <div className="vehicle__details">
            <h3>{vehicleName}</h3>
            <span className="text-muted">
              <span className="detail__name">ID pojazdu:</span> {vehicleID} (
              {vehiclePlateText})
              <br />
              <span className="detail__name">Przebieg:</span> {vehicleMileage}km
              <br />
              <span className="detail__name">Silnik:</span>{" "}
              {vehicleEngineCapacity}
              <br />
              <span className="detail__name">Kolor:</span>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: "rgba(" + vehicleColor1 + ",255)",
                }}
              ></div>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: "rgba(" + vehicleColor2 + ",255)",
                }}
              ></div>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: "rgba(" + vehicleColor3 + ",255)",
                }}
              ></div>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: "rgba(" + vehicleColor4 + ",255)",
                }}
              ></div>
              <br />
              <span className="detail__name">Światła:</span>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: "rgba(" + vehicleColorLights + ",255)",
                }}
              ></div>
              <br />
              <span className="detail__name">Ulepszenia:</span>{" "}
              {vehicleUpgrades}
              <br />
            </span>
            <h4 className="mt-3">{priceFormatter().format(vehiclePrice)}</h4>

            <p className="text-muted seller mb-0 mt-2 text-center">
              <span>Sprzedający:</span> {vehicleSeller}
            </p>
          </div>
          <div className="mt-3">
            <button
              className="btn btn__insidemta d-block mx-auto"
              onClick={() => buyVehicle()}
            >
              Kup pojazd offline
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <>{vehiclePrice ? renderVehicle() : ""}</>;
};

export default VehicleExchange;
