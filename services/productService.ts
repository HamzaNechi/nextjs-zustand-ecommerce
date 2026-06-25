import { api } from "@/lib/api";
import { Product } from "@/types/product";

export const productService = {

  async getAll() : Promise<Product[]> {
    const res = await api.get("/products");
    return res.data;
  },


  async getById(id: number) : Promise<Product> {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },


  async getByCategory(category: string): Promise<Product[]>  {
    const res = await api.get(`/products/category/${category}`);
    return res.data;
  },
};