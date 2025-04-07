import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import pizzaImg from "./assets/Rectangle 19.png";
import comboImg from "./assets/Rectangle 21.png";
import riceImg from "./assets/Rectangle 23.png";
import "./App.css";
import Menu from "./components/Menu.jsx";
function App() {
  const productTemplates = {
    pizza: {
      id: 1,
      img: pizzaImg,
      name: "Italian Pizza",
      description: "Extra cheese and topping",
      count: 1,
      basePrice: 681,
      price: 681,
    },
    combo: {
      id: 2,
      img: comboImg,
      name: "Combo Plate",
      description: "Extra cheese and topping",
      count: 1,
      basePrice: 681,
      price: 681,
    },
    rice: {
      id: 3,
      img: riceImg,
      name: "Spanish Rice",
      description: "Extra cheese and topping",
      count: 1,
      basePrice: 681,
      price: 681,
    },
  };
  const [products, setProducts] = useState([
    productTemplates.pizza,
    productTemplates.combo,
    productTemplates.rice,
  ]);

  function increment(id) {
    // console.log("btn clicked");
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1, //this is here would get updated after the function is done due to re-rendering
          price: product.basePrice * (product.count + 1), //so here we must add 1 here for the newCount not the old one before rendering
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  function decrement(id) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count - 1, //this is here would get updated after the function is done due to re-rendering
          price: product.basePrice * (product.count - 1), //so here we must -1 here for the newCount not the old one before rendering
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  function Delete(id) {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  }

  function Empty() {
    setProducts([]);
  }

  function Reset() {
    console.log("btn Clicked");
    setProducts([
      productTemplates.pizza,
      productTemplates.combo,
      productTemplates.rice,
    ]);
  }

  function AddProduct(option) {
    const optionObj = productTemplates[option];
    setProducts((prevProducts) => {
      const exist = prevProducts.some((product) => product.id === optionObj.id);
      if (exist) {
        return prevProducts;
      }
      return [optionObj, ...prevProducts];
    });
  }

  const summary = products.reduce((total, product) => total + product.price, 0);

  return (
    <main className="">
      <h1 className="cart__title">Shopping Cart</h1>
      <p className="cart__paragraph">
        You have {products.length} items in your cart
      </p>
      <Menu onEmpty={Empty} onAdd={AddProduct} onReset={Reset} />{" "}
      <section className="cart__section">
        {products.map((product) => (
          <Cart
            key={product.id}
            {...product}
            handleIncrement={() => increment(product.id)}
            handleDecrement={() => decrement(product.id)}
            handleDeletion={() => Delete(product.id)}
          />
        ))}
        <div className="cart__summary">You will pay Total of: ${summary}</div>
        <p>Lots of money haha</p>
      </section>
    </main>
  );
}

export default App;
