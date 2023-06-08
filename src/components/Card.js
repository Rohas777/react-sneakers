function Card() {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__fav">
                    <img src="/img/addToFavs.svg" alt="favorite" />
                </div>
                <img width={133} height={112} src="/img/sneakers/04.jpg" alt="sneakers" className="card__image" />
                <p className="card__desc">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="card__bottom">
                    <div className="card__price">
                        <p>Цена:</p>
                        <b>12 999 руб.</b>
                    </div>
                    <div className="card__add">
                        <img src="/img/addToCart.svg" alt="add" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card