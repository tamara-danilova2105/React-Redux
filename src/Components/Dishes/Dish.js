import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart, changeQuantity, getCartItems } from "../../redux/cartSlice"

const Dish = ({ dish }) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const cartItems = useSelector(getCartItems)
    const dishInCart = cartItems.some(item => item.id === dish.id)

    const handleBuy = () => {
        if(!dishInCart) {
            dispatch(addItemToCart({dish, quantity}))
        } else {
            dispatch(changeQuantity({dish, quantity}))
        }
    }

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
                    setQuantity={setQuantity}
                />
                <button 
                    onClick={handleBuy} 
                    className="cartBtn"
                >
                    в корзину
                </button>
            </div>
        </div>
    )
}

export default Dish