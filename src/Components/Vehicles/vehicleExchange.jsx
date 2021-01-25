import React from "react";

class vehicleExchange extends React.Component {
  priceFormatter = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  formatCapacity(capacity) {}

  render() {
    return (
      <div className="col-lg-3 mb-4">
        <div className="row flex-row vehicle">
          <div className="vehicle__img">
            <img
              src={`https://cdn.insidemta.pl/vehicles/${this.props.model}.png`}
              className="img-fluid"
              alt="Vehicle"
              loading="lazy"
            />
          </div>
          <div className="vehicle__details">
            <h3>{this.props.name}</h3>
            <p className="text-muted">
              <span className="detail__name">ID pojazdu:</span> {this.props.ID}{" "}
              ({this.props.plateText})<br />
              <span className="detail__name">Przebieg:</span>{" "}
              {this.props.mileage}km
              <br />
              <span className="detail__name">Silnik:</span>{" "}
              {this.props.engineCapacity}
              <br />
              <span className="detail__name">Kolor:</span>
              <i
                className="fas fa-square"
                style={{ color: "rgba(" + this.props.color1 + ",255)" }}
              ></i>
              <i
                className="fas fa-square"
                style={{ color: "rgba(" + this.props.color2 + ",255)" }}
              ></i>
              <i
                className="fas fa-square"
                style={{ color: "rgba(" + this.props.color3 + ",255)" }}
              ></i>
              <i
                className="fas fa-square"
                style={{ color: "rgba(" + this.props.color4 + ",255)" }}
              ></i>
              <br />
              <span className="detail__name">Światła:</span>
              <i
                className="fas fa-square"
                style={{ color: "rgba(" + this.props.colorLights + ",255)" }}
              ></i>
              <br />
              <span className="detail__name">Ulepszenia:</span>{" "}
              {this.props.upgrades}
              <br />
            </p>
            <h4>{this.priceFormatter().format(this.props.price)}</h4>

            <p className="text-muted text-center mb-0 mt-2 seller">
              <span>Sprzedający:</span> {this.props.seller}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default vehicleExchange;
