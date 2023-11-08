import { api } from "./api";
import { Product } from "./types/product";

export async function getProductBySlug(slug: string): Promise<Product> {
  // prettier-ignore
  const response = await api(
    `/products/${slug}`, 
    { next: { revalidate: 60 * 60 /* 1 hour */ } },
  );

  return response.json();
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured");
  return response.json();
}

export async function searchProducts(query: string): Promise<Product[]> {
  // prettier-ignore
  const response = await api(
    `/products/search?q=${query}`, 
    { next: { revalidate: 60 * 60 /* 1 hour */ } },
  );

  return response.json();
}
