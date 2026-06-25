"use client";

import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";
import ProductList from "@/components/products/ProductList";

export default function HomePage() {
  const { products, loading } = useProducts();

  // For demonstration, let's take the first 4 products as "New Arrivals"
  const newProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Slider Section */}
      <section className="relative w-full h-[70vh] bg-gray-100 flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop" 
            alt="Hero Banner" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 text-center bg-white/90 p-12 max-w-2xl border border-black">
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase mb-4 text-black">
            Nouvelle Collection
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-700 mb-8">
            Découvrez l'élégance intemporelle
          </p>
          <Link 
            href="/shop" 
            className="inline-block bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Découvrir
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-2xl font-light tracking-[0.2em] uppercase mb-12 text-gray-900 font-serif">
          Catégories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Prêt-à-porter", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop" },
            { title: "Accessoires", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop" },
            { title: "Chaussures", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop" }
          ].map((cat, idx) => (
            <div key={idx} className="group relative h-96 overflow-hidden cursor-pointer border border-black">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl uppercase tracking-widest font-serif border border-white px-6 py-2 bg-black/30 backdrop-blur-sm">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Products Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full border-t border-gray-200">
        <h2 className="text-center text-2xl font-light tracking-[0.2em] uppercase mb-12 text-gray-900 font-serif">
          Nouveautés
        </h2>
        {loading ? (
          <p className="text-center text-sm uppercase tracking-widest">Chargement...</p>
        ) : (
          <ProductList products={newProducts} />
        )}
        <div className="mt-12 text-center">
          <Link 
            href="/shop" 
            className="inline-block border border-black bg-white text-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Voir toute la boutique
          </Link>
        </div>
      </section>
    </div>
  );
}
