import React from "react";

class shopCard extends React.Component {
  render() {
    return (
      <>
        <div
          className={"card " + this.props.class}
          onClick={() => this.props.popupOpen(this.props.id)}
          key={this.props.id}
        >
          <div className="additional">
            <div className="shop-card">
              <div className="level center">{this.props.type}</div>
              <div className="points center">{this.props.time}</div>
              <div className="center card-icon">
                <img src={this.props.icon} alt="Shop icon" />
              </div>
            </div>

            <div className="more-info">
              <h2>Informacje</h2>
              {this.props.info.map((text, index) => (
                <div className="coords" key={index}>
                  <span>{text}</span>
                </div>
              ))}

              {this.props.stats && (
                <div className="stats">
                  {this.props.stats.map((data, index) => (
                    <div key={index}>
                      <div className="title">{data[0]}</div>
                      <i className={data[1]}></i>
                      <div className="value">{data[2]}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="general">
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
            <span className="more">Najedź na kartę po więcej informacji</span>
          </div>
        </div>
      </>
    );
  }
}

export default shopCard;
