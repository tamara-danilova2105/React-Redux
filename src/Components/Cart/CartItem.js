import { useDispatch } from "react-redux"
import dishesData from "../../data/dishesData"
import { removeItemFromCart } from "../../redux/cartSlice"
import deleteIcon from './delete.png'

const CartItem = ({cartItem}) => {

    const dishes = dishesData.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()

    return(
        <div className="cartItem">
            <img onClick={() => dispatch(removeItemFromCart({cartItemsId: cartItem.id}))} 
            className="deleteIcon" src={deleteIcon} width='25px' height='25px' alt="удалить"/>
            <h3 className="nameOder">{dishes.name}</h3>
            <h3 className="quantityOder">{cartItem.quantity} шт.</h3>
            <h3 className="sumOder">{dishes.price * cartItem.quantity} ₽ </h3>
        </div>
    )
}

export default CartItem