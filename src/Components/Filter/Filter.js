import { useDispatch, useSelector } from "react-redux"
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice"

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch()
    return(
        <div className="filterBtn-block">
            <button
            onClick={() =>{dispatch(filterCategory(category))}}
            className={selectedCategory === category ? 'filterBtnSelected' : 'filterBtn'}>{category}</button>
        </div>
    )
}

export default Filter