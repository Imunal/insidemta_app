const ShopCard = (props) => {
    return (
        <>
            <div
                className={'card ' + props.class}
                onClick={() => props.popupOpen(props.id)}
                key={props.id}
            >
                <div className="additional">
                    <div className="shop-card">
                        <div className="level center">{props.type}</div>
                        <div className="points center">{props.time}</div>
                        <div className="center card-icon">
                            <img src={props.icon} alt="Shop icon" />
                        </div>
                    </div>

                    <div className="more-info">
                        <h2>Informacje</h2>
                        {props.info.map((text, index) => (
                            <div className="coords" key={index}>
                                <span>{text}</span>
                            </div>
                        ))}

                        {props.stats && (
                            <div className="stats">
                                {props.stats.map((data, index) => (
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
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <span className="more">Najedź na kartę po więcej informacji</span>
                </div>
            </div>
        </>
    );
};

export default ShopCard;
