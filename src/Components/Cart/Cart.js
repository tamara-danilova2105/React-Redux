import { useSelector } from 'react-redux'
import { getCartItems, getTotalPrice } from '../../redux/cartSlice'
import cart from './cart.png'
import wallet from './wallet.png'
import CartItem from './CartItem'

const Cart = () => {

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)

    return(
        <div>
            <img src={cart} alt='корзина' width='100px'/>
            {cartItems.map( (cartItem, id) => <CartItem key={id} cartItem={cartItem}/>)}
            <div className='totalPrice'>
                <img src={wallet} width='45px' height='45px' alt='итого к оплате'/>
                <h2 className='totalTitle'>ИТОГО К ОПЛАТЕ:</h2>
                <h2 className="totalSum price"> {totalPrice} ₽</h2>
            </div>
        </div>
    )
}

export default Cart


