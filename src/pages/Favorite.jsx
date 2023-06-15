import Card from "./../components/Card";

export default function Favorite({ items, onAddToFavorite, onAddToCart }) {
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__header">
                        <h1 className="catalog__title">Мои закладки</h1>
                    </div>
                    <div className="catalog__cards">
                        {
                            items.map((item) => (
                                <Card
                                    key={item.id}
                                    onClickFavorite={obj => onAddToFavorite(obj)}
                                    onClickAdd={obj => onAddToCart(obj)}
                                    favorited={true}
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