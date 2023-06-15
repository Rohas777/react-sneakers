import styles from './Cart.module.scss'

function Cart({ onClickClose, onClickRemove, items = [] }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <div className={styles.head}>
                    <h1>Корзина</h1>
                    <div className={styles.remove} onClick={onClickClose}>
                        <img src="/img/delFromCart.svg" alt="remove" />
                    </div>
                </div>
                {items.length > 0 ?
                    (
                        <>
                            <div className={styles.items}>
                                {items.map((obj) => (
                                    <div div className={styles.cartItem} >
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.image}></div>
                                        <div className={styles.wrapper}>
                                            <p className={styles.desc}>{obj.title}</p>
                                            <b className={styles.price}>{obj.price.toLocaleString()} руб.</b>
                                        </div>
                                        <div className={styles.remove} onClick={() => onClickRemove(obj.id)}>
                                            <img src="/img/delFromCart.svg" alt="remove" />
                                        </div>
                                    </div>
                                ))}
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
                        </>
                    ) :
                    (<div className={styles.cartEmpty}>
                        <img src="/img/cartEmpty.png" alt="Cart Empty" />
                        <h1>Корзина пустая</h1>
                        <p className={styles.subtitle}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <div className={styles.back} onClick={onClickClose}>
                            <img src="/img/arrow.svg" alt="Arrow" />
                            <p>Вернуться назад</p>
                        </div>
                    </div>)
                }


            </div>
        </div >
    )
}

export default Cart