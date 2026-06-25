"use client";

import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const items = useCartStore(
    (state) => state.items
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("Paiement simulé ✅");

    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>

      <p>Total : {total.toFixed(2)}$</p>

      <button onClick={handlePayment}>
        Payer
      </button>
    </div>
  );
}