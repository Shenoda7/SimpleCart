import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import "./App.css";
import Menu from "./components/Menu.jsx";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 1 },
    { id: 2, name: "pepsi", price: 200, count: 1 },
    { id: 3, name: "cigarets", price: 300, count: 1 },
    { id: 4, name: "baneh", price: 400, count: 1 },
  ]);
  const [addedProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 1 },
    { id: 2, name: "pepsi", price: 200, count: 1 },
    { id: 3, name: "cigarets", price: 300, count: 1 },
    { id: 4, name: "baneh", price: 400, count: 1 },
  ]);

  const [theme, setTheme] = useState(true);

  function handleTheme() {
    setTheme((theme) => !theme);
  }

  function increment(id) {
    // console.log("btn clicked");
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1, //this is here would get updated after the function is done due to re-rendering
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
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  function AddProduct(option) {
    const productExist = products.find((product) => product.name === option); //لو مش موجود هيرجعلي undefined ولو موجود هيرجعلي ال object

    if (productExist) {
      //طب لو الاوبجكت موجود تعالي زودلي الcount بتاعه
      const updatedProducts = products.map((product) =>
        product.id === productExist.id
          ? { ...product, count: productExist.count + 1 }
          : product,
      );
      setProducts(updatedProducts);
    } else {
      //طب لو مش موجود شوفلي الاوبجكت ده من الaddedProducts وهاته وحطه تاني زي ما كان موجود
      const productToAdd = addedProducts.find(
        (product) => product.name === option,
      );
      setProducts([productToAdd, ...products]);
    }
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
    setProducts(addedProducts);
  }

  const summary = products.reduce(
    (total, product) => total + product.price * product.count,
    0,
  );

  return (
    <div className="bg-[#739AFF] min-h-screen">
      <main className={theme ? "bg-[#fff}" : "bg-[#000] !text-white"}>
        <div className="flex justify-between">
          <div>
            <h1 className="cart__title">Shopping Cart</h1>
            <p className="cart__paragraph">
              You have{" "}
              <span className="font-bold text-xl">{products.length}</span> items
              in your cart
            </p>
          </div>
          <button className="btn h-[100%] !w-[100px]" onClick={handleTheme}>
            Toggle
          </button>
        </div>
        <Menu onEmpty={Empty} onReset={Reset} onAdd={AddProduct} />{" "}
        {products.length === 0 ? (
          <h1 className="text-5xl p-8">CART IS EMPTY</h1>
        ) : null}
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
        </section>
      </main>
    </div>
  );
}

export default App;
