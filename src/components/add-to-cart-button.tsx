"use client";

import { useCart } from "@/contexts/cart-context";

export function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart } = useCart();

  const addToCartWithProductId = addToCart.bind(null, productId);

  return (
    <button
      onClick={addToCartWithProductId}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
}
