"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";




export default function CartSummary() {
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

  const totalItems = items.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h2>Résumé</h2>

      <p>Articles : {totalItems}</p>

      <p>Total : {total.toFixed(2)}$</p>

      <button onClick={clearCart}>
        Vider panier
      </button>

      <Link href="/checkout">
        Passer commande
      </Link>
    </div>
  );
}