import { useState } from "react"
import { useDispatch } from "react-redux"
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    return(
        <div>
            <img className="dish" src={`./${dish.img}.jpg`} alt='блюда'/>
            <div className="namePrice">
                <h2>{dish.name}</h2>
                <h2 className="price">{dish.price} ₽</h2>
            </div>

            <div className="quantityCart">
                <ChangeQuantity
                quantity={quantity}
                setQuantity={setQuantity}/>
                <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}} 
                className="cartBtn">в корзину</button>
            </div>
        </div>
    )
}

export default Dish