import Filter from "./Filter"

const AllCategories = () => {
    return(
        <div>
            <h1>Вкусно! Быстро! Дешево!</h1>

            <div className="filterBtn-block">
            {['ЗАКУСКИ', 'САЛАТЫ', 'ПАСТА', 'ГОРЯЧЕЕ', 'ВСE']
            .map((category, index) => <Filter key={index} category={category}/>)}
            </div>
        </div>
    )
}

export default AllCategories