"use client";

import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetailPage() {
  const params = useParams();

  const id = Number(params.id);

  const { product, loading } = useProduct(id);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width={200}
      />

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>{product.price} $</h2>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}