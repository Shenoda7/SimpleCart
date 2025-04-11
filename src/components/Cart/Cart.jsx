import "./Cart.css";
function Cart({
  handleIncrement,
  handleDecrement,
  handleDeletion,
  ...product
}) {
  return (
    <>
      <div className="cart__box">
        <div className="cart__text">
          <p className="cart__name">{product.name}</p>
        </div>

        <div className="cart__operations-count">
          <button className="btn" onClick={handleIncrement}>
            +
          </button>
          <span className="cart__count">{product.count}</span>
          <button
            className="btn"
            disabled={product.count === 1}
            onClick={handleDecrement}
          >
            -
          </button>
        </div>

        <div className="cart__price">
          price:{" "}
          <span className="text-xl">${product.price * product.count}</span>
        </div>

        <button className="btn-red ml-auto" onClick={handleDeletion}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Cart;
