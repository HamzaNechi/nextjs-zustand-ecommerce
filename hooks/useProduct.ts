"use client";

import { useEffect, useState } from "react";
import { productService } from "@/services/productService";
import { Product } from "@/types/product";

export const useProduct = (id: number) => {
  const [product, setProduct] =useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const data = await productService.getById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
  };
};