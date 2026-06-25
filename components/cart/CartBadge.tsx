"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartBadge() {
  const items = useCartStore(
    (state) => state.items
  );

  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return <span>🛒 {count}</span>;
}