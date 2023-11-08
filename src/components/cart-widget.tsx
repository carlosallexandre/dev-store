"use client";

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
  const { items } = useCart();

  const numberOfItems = items.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({numberOfItems})</span>
    </div>
  );
}
