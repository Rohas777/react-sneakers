import Card from "./../components/Card";

export default function Home(
    { searchValue,
        setSearchValue,
        onChangeSearchInput,
        items,
        onAddToFavorite,
        onAddToCart }
) {
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__header">
                        <h1 className="catalog__title">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                        <div className="catalog__search">
                            <img src="/img/search.svg" alt="search" className="search" />
                            {searchValue && <img onClick={() => setSearchValue('')} src="/img/delFromCart.svg" alt="clear" className="clear" />}
                            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                        </div>
                    </div>
                    <div className="catalog__cards">
                        {
                            items
                                .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase().trim()))
                                .map((item) => (
                                    <Card
                                        key={item.id}
                                        onClickFavorite={obj => onAddToFavorite(obj)}
                                        onClickAdd={obj => onAddToCart(obj)}
                                        {...item}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}