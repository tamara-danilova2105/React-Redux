import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cartSlice"
import deleteIcon from './delete.png'

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    return(
        <div className="cartItem">
            <h3 className="nameOder">{cartItem.name}</h3>
            <h3 className="quantityOder">{cartItem.quantity} шт.</h3>
            <h3 className="sumOder">{cartItem.totalPrice} ₽ </h3>
            <img onClick={() => dispatch(removeItemFromCart({cartItemsId: cartItem.id}))}
            className="deleteIcon" src={deleteIcon} width='25px' height='25px' alt="удалить"/>
        </div>
    )
}

export default CartItem