import { useEffect, useState } from "react";
import { productService } from "@/services/productService";
import { Product } from "@/types/product";


export const useProducts = () => {
  const [products, setProducts] =useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading };
};