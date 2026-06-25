"use client";

import { useProducts } from "@/hooks/useProducts";

export default function AdminProductsPage() {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Products</h1>

      {products.map((p: any) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            marginBottom: 10,
            padding: 10,
          }}
        >
          <p>{p.title}</p>
          <p>{p.price}$</p>
        </div>
      ))}
    </div>
  );
}