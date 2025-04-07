import "./Cart.css";
function Cart({
  img,
  name,
  description,
  count,
  price,
  handleIncrement,
  handleDecrement,
  handleDeletion,
}) {
  return (
    <>
      <div className="cart__box">
        <img src={img} alt="" />
        <div className="cart__text">
          <p className="cart__name">{name}</p>
          <p className="cart__desc">{description}</p>
        </div>

        <div className="cart__operations-count">
          <button className="btn" onClick={handleIncrement}>
            +
          </button>
          <span className="cart__count">{count}</span>
          <button className="btn" disabled={!count} onClick={handleDecrement}>
            -
          </button>
        </div>

        <div className="cart__price">
          price: <span className="text-xl">${price}</span>
        </div>

        <button className="btn-red ml-auto" onClick={handleDeletion}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Cart;
