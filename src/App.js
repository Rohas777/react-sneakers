import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favItems, setFavItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)


  useEffect(() => {
    axios.get('https://64874035beba6297279053e8.mockapi.io/items')
      .then(res => setItems(res.data))
    axios.get('https://64874035beba6297279053e8.mockapi.io/cart')
      .then(res => setCartItems(res.data))
    axios.get('https://6488ede30e2469c038fe8467.mockapi.io/favorite')
      .then(res => setFavItems(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64874035beba6297279053e8.mockapi.io/cart', obj)
      .then(res => setCartItems(prev => [...prev, res.data]))
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://64874035beba6297279053e8.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favItems.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://6488ede30e2469c038fe8467.mockapi.io/favorite/${obj.id}`)
        // setFavItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://6488ede30e2469c038fe8467.mockapi.io/favorite', obj)
        setFavItems(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }
  }

  const onRemoveFromFavorite = (id) => {
    axios.delete(`https://6488ede30e2469c038fe8467.mockapi.io/favorite/${id}`)
    setFavItems(prev => prev.filter(item => item.id !== id))
  }

  const onOpenCart = () => {
    setCartOpened(true)
    document.body.classList.add('nonScrollable');
  }

  const onCloseCart = () => {
    setCartOpened(false)
    document.body.classList.remove('nonScrollable');
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <aside>
        <Cart items={cartItems} onClickClose={onCloseCart} onClickRemove={onRemoveFromCart} />
      </aside>}
      <Header onClickCart={onOpenCart} />
      <main>
        <Routes>
          <Route path="/"
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                items={items}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />
            }
            exact
          />
          <Route path="/favorite"
            element={
              <Favorite
                items={favItems}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />
            }
            exact
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
