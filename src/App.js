import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

const sneakersArray = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: "/img/sneakers/01.jpg" },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: "/img/sneakers/02.jpg" },
  { title: 'Мужские Кроссовки Nike Blazer High Suede', price: 8499, imageUrl: "/img/sneakers/03.jpg" },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: "/img/sneakers/04.jpg" },
  { title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: "/img/sneakers/05.jpg" },
  { title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: "/img/sneakers/06.jpg" },
  { title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: "/img/sneakers/07.jpg" },
  { title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: "/img/sneakers/08.jpg" },
  { title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: "/img/sneakers/09.jpg" },
  { title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imageUrl: "/img/sneakers/10.jpg" },
]

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)

  const onOpenCart = () => {
    setCartOpened(true)
    document.body.classList.add('nonScrollable');
  }

  const onCloseCart = () => {
    setCartOpened(false)
    document.body.classList.remove('nonScrollable');
  }

  return (
    <div className="wrapper">
      <Header onClickCart={onOpenCart} />
      <main>
        {cartOpened && <aside>
          <Cart onClickClose={onCloseCart} />
        </aside>}
        <div className="catalog">
          <div className="container">
            <div className="catalog__content">
              <div className="catalog__header">
                <h1 className="catalog__title">Все кроссовки</h1>
                <div className="catalog__search">
                  <img src="/img/search.svg" alt="search" />
                  <input placeholder="Поиск..." />
                </div>
              </div>
              <div className="catalog__cards">
                {
                  sneakersArray.map(obj => (
                    <Card title={obj.title}
                      price={obj.price}
                      imageUrl={obj.imageUrl}
                    // onClickFavorite={() => console.log('Click Fav')}
                    // onClickAdd={() => console.log('Click Add')}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
