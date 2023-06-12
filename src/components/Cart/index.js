import styles from './Cart.module.scss'

function Cart(props) {
    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <div className={styles.head}>
                    <h1>Корзина</h1>
                    <div className={styles.remove} onClick={props.onClickClose}>
                        <img src="/img/delFromCart.svg" alt="remove" />
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.cartItem}>
                        <div style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }} className={styles.image}></div>
                        <div className={styles.wrapper}>
                            <p className={styles.desc}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b className={styles.price}>12 999 руб.</b>
                        </div>
                        <div className={styles.remove}>
                            <img src="/img/delFromCart.svg" alt="remove" />
                        </div>
                    </div>
                    <div className={styles.cartItem}>
                        <div style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }} className="cart-item__image"></div>
                        <div className={styles.wrapper}>
                            <p className={styles.desc}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b className={styles.price}>12 999 руб.</b>
                        </div>
                        <div className={styles.remove}>
                            <img src="/img/delFromCart.svg" alt="remove" />
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <ul className={styles.summary}>
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
                    <div className={styles.checkout}>
                        <span>Оформить заказ</span>
                        <img width={14} height={12} src="/img/arrow.svg" alt="Go" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart