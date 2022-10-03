import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const items = Object.keys(cart);
  const total = items.reduce(
    (acc, item) => acc + cart[item].amount * cart[item].price,
    0
  );
  useEffect(() => {
    document.title = `LMJ: ${total}$ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}$ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}$</h3>
          <button onClick={() => updateCart([])}>
            Vide le panier si ça devient trop chère
          </button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
