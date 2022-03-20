const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const addQuantity = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if(quantity < 2) return
        const newQuantity = quantity - 1
        setQuantity(newQuantity)
    }

    return(
        <div>
            <button className="quantityBtn" onClick={removeQuantity}>-</button>
            <span className="quantity">{quantity} шт.</span>
            <button className="quantityBtn" onClick={addQuantity}>+</button>
        </div>
    )
}

export default ChangeQuantity