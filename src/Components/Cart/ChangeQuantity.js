const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const removeQuantity = () => {
        if(quantity < 2) return
        const newQuantity = quantity - 1
        setQuantity(newQuantity)
    }

    return(
        <div>
            <button 
                className="quantityBtn" 
                onClick={removeQuantity}>-
            </button>
            <span className="quantity">{quantity} шт.</span>
            <button 
                className="quantityBtn" 
                onClick={() => setQuantity(quantity + 1)}>+
            </button>
        </div>
    )
}

export default ChangeQuantity