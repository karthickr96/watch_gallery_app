import '../NewArrivals/newArrivalls.css';

export default function NewArrivals(props){
    const {image,title,price} = props.new
    return (
        <div className="new-arrivals-container">
            <div className="new-arrivals-img-container">
                <img src={image} alt="new-arrival-img"/>
            </div>
            <h2 className="new-arrival-items-name">{title}</h2>
            <p className="new-arrival-items-price">{price}</p>
        </div>
    )
}