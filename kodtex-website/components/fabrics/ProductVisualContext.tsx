"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ColourOption } from "@/data/products";

interface ProductVisualContextValue {
  selectedColour: ColourOption | null;
  setSelectedColour: (colour: ColourOption | null) => void;
}

const ProductVisualContext = createContext<ProductVisualContextValue | null>(null);

export function ProductVisualProvider({ children }: { children: ReactNode }) {
  const [selectedColour, setSelectedColour] = useState<ColourOption | null>(null);
  return (
    <ProductVisualContext.Provider value={{ selectedColour, setSelectedColour }}>
      {children}
    </ProductVisualContext.Provider>
  );
}

export function useProductVisual() {
  const ctx = useContext(ProductVisualContext);
  if (!ctx) {
    throw new Error("useProductVisual must be used within a ProductVisualProvider");
  }
  return ctx;
}
