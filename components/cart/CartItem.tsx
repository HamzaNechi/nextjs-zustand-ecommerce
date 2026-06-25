"use client";

import { useCartStore } from "@/store/cartStore";
import { CartItem } from "@/types/cart";


type Props = {
  item: CartItem;
};

export default function CartItemComponent({ item }: Props) {
  const increaseQty = useCartStore(
    (state) => state.increaseQty
  );

  const decreaseQty = useCartStore(
    (state) => state.decreaseQty
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        width={80}
      />

      <h3>{item.title}</h3>

      <p>Prix : {item.price}$</p>

      <p>Quantité : {item.quantity}</p>

      <p>
        Sous-total :
        {(item.price * item.quantity).toFixed(2)}$
      </p>

      <button
        onClick={() => increaseQty(item.id)}
      >
        +
      </button>

      <button
        onClick={() => decreaseQty(item.id)}
      >
        -
      </button>

      <button
        onClick={() => removeFromCart(item.id)}
      >
        Supprimer
      </button>
    </div>
  );
}