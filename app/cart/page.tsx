"use client";

import { useCartStore } from "@/store/cartStore";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import CartItemComponent from "@/components/cart/CartItem";

export default function CartPage() {
  const items = useCartStore(
    (state) => state.items
  );

  if (items.length === 0) {
    return (
        <div className="text-center py-20">
        <h2 className="text-xl font-bold">
            Votre panier est vide 🛒
        </h2>

        <p className="text-gray-500 mt-2">
            Ajoutez des produits pour commencer
        </p>
        </div>
    );
    }

  return (
    <div>
      <h1>Mon panier</h1>

      {items.map((item) => (
        <CartItemComponent
          key={item.id}
          item={item}
        />
      ))}

      <CartSummary />
    </div>
  );
}