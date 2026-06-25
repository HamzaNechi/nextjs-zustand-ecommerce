"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductList from "@/components/products/ProductList";

export default function ShopPage() {
  const { products, loading } = useProducts();
  
  // Minimalist filters state (for demonstration)
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (loading) {
    return <p className="text-center py-20 text-sm uppercase tracking-widest">Chargement...</p>;
  }

  return (
    <div className="py-8 w-full">
      <h1 className="text-center text-4xl font-light tracking-[0.2em] uppercase mb-16 text-gray-900 font-serif">
        Boutique
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Sidebar Filter */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-8 border border-black p-6 bg-white">
            <h2 className="text-lg uppercase tracking-widest font-serif mb-6 border-b border-gray-200 pb-2">
              Filtres
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3">Catégories</h3>
              <ul className="space-y-2 text-sm">
                {["All", "Prêt-à-porter", "Accessoires", "Chaussures"].map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`uppercase tracking-wider text-xs transition-colors ${selectedCategory === cat ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3">Prix</h3>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-gray-600">
                  <input type="checkbox" className="accent-black" />
                  <span>Moins de 100$</span>
                </label>
                <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-gray-600">
                  <input type="checkbox" className="accent-black" />
                  <span>100$ - 300$</span>
                </label>
                <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-gray-600">
                  <input type="checkbox" className="accent-black" />
                  <span>Plus de 300$</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-black text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Appliquer
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
