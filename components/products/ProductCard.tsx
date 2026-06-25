"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";


type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  return (
    <div className="group border border-black bg-white p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
      <div className="relative w-full h-64 mb-6 overflow-hidden">
        <img
          src={product.image}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          alt={product.title}
        />
      </div>

      <div className="text-center flex flex-col flex-grow">
        <h3 className="font-semibold text-xs tracking-widest uppercase mb-2 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-gray-900 font-bold mb-6">
          {product.price} $
        </p>

        <div className="mt-auto flex flex-col space-y-3">
          <Link
            className="text-xs uppercase tracking-widest text-black border-b border-transparent hover:border-black transition-colors mx-auto pb-1"
            href={`/product/${product.id}`}
          >
            View Details
          </Link>

          <button
            className="w-full bg-black text-white px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}