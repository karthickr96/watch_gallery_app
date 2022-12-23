import './popularItem.css'

export default function PopularItems (props){
    const {image,title,price} = props.new
    return(
        <div className="popular-items-container">
            <div className="popular-item-image">
            <img src={image} alt="watch-img"/>
            </div>
            <div className="add-to-cart-section">
                <button className="add-to-cart">Add To Cart</button>
            </div>
            <h2>{title}</h2>
            <p>{price}</p>           
        </div>
    )
}