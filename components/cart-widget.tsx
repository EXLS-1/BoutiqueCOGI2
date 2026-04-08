"use client";

import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";

export default function CartWidget() {
  const [isMounted, setIsMounted] = useState(false);
  
  const { items, getTotal } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Skeleton loader silencieux pendant l'hydratation
    return (
      <div className="sticky top-24 border rounded-2xl p-6 bg-white shadow-sm border-slate-100 animate-pulse">
        <div className="h-6 w-32 bg-slate-200 rounded mb-4"></div>
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="sticky top-24 border rounded-2xl p-6 bg-white shadow-sm border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4">Panier Rapide</h3>
      
      {items.length === 0 ? (
        <p className="text-sm text-slate-500">Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="truncate pr-2">{item.quantity}x {item.name}</span>
              <span className="font-medium">{(item.price / 100).toFixed(2)}$</span>
            </div>
          ))}
          <div className="pt-4 border-t border-slate-100 flex justify-between font-bold text-turquoise">
            <span>Total:</span>
            <span>{(getTotal() / 100).toFixed(2)}$</span>
          </div>
        </div>
      )}
    </div>
  );
}