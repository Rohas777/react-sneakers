import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <aside>
          <Cart />
        </aside>
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
