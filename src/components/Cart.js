function Cart() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="cart">
                <div className="cart__head">
                    <h1>Корзина</h1>
                    <div className="cart-item__remove">
                        <img src="/img/delFromCart.svg" alt="remove" />
                    </div>
                </div>
                <div className="cart__items">
                    <div className="cart-item">
                        <div style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }} className="cart-item__image"></div>
                        <div className="cart-item__wrapper">
                            <p className="cart-item__desc">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b className="cart-item__price">12 999 руб.</b>
                        </div>
                        <div className="cart-item__remove">
                            <img src="/img/delFromCart.svg" alt="remove" />
                        </div>
                    </div>
                    <div className="cart-item">
                        <div style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }} className="cart-item__image"></div>
                        <div className="cart-item__wrapper">
                            <p className="cart-item__desc">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b className="cart-item__price">12 999 руб.</b>
                        </div>
                        <div className="cart-item__remove">
                            <img src="/img/delFromCart.svg" alt="remove" />
                        </div>
                    </div>
                </div>
                <div className="cart__bottom">
                    <ul className="cart__summary">
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <div className="cart__checkout">
                        <span>Оформить заказ</span>
                        <img width={14} height={12} src="/img/arrow.svg" alt="Go" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart