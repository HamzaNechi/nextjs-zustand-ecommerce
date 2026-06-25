"use client";

import { useCartStore } from "@/store/cartStore";
import { useProducts } from "@/hooks/useProducts";
import { useAuthStore } from "@/store/authStore";

export default function AdminPage() {
  const { products } = useProducts();
  const cartItems = useCartStore((s) => s.items);
  const user = useAuthStore((s) => s.user);

  return (
    <div>
      <h1>Dashboard Admin</h1>

      <div
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <div>
          <h3>Products</h3>
          <p>{products.length}</p>
        </div>

        <div>
          <h3>Cart Items</h3>
          <p>{cartItems.length}</p>
        </div>

        <div>
          <h3>User</h3>
          <p>{user?.name}</p>
        </div>
      </div>
    </div>
  );
}