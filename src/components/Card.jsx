export default function Card(props) {
    return (
        <>
        
        <div className="itemCard">
            <img className="imgCard" src={props.img} alt="T-shirt" />
            <div className="cardTitle">{props.title}</div>
            <div className="starsRating">
                <div className="star">
                    <img style={{width: 20, height: 20}} src="img/star.svg" alt="star" />
                </div>
                <div className="star">
                    <img style={{width: 20, height: 20}} src="img/star.svg" alt="star" />
                </div>
                <div className="star">
                    <img style={{width: 20, height: 20}} src="img/star.svg" alt="star" />
                </div>
                <div className="star">
                    <img style={{width: 20, height: 20}} src="img/star.svg" alt="star" />
                </div>
                <div className="starHalf">
                    <img style={{width: 20, height: 20}} src="img/star.svg" alt="star" />
                </div>
                <div className="rating">4.5/ <span style={{opacity: 0.8, textDecorationLine: 'none'}}>5</span></div>
            </div>
            <div style={{gap: 10, alignItems: 'center'}} className="price d-flex">${props.price} <span className="pastPrice">{props.lastPrice}</span> <span className={props.discount && 'discount'}>{props.discount}</span></div>
        </div>
        
        </>
    )
}