import React, { useState } from "react";

interface Variant {
  id: string;
  name: string;
  price: number;
  offerPrice: number;
  [key: string]: any;
}

interface ProductData {
  id: string;
  name: string;
  oneImg: string;
  variants: Variant[];
  variantMatrix: {
    [key: string]: string[];
  };
  variantTypes: string[];
  [key: string]: any;
}

interface ProductProps {
  p: ProductData;
  fetchCart: () => void;
  selectedVariants: Record<string, Variant>;
}

const Product: React.FC<ProductProps> = ({ p, fetchCart, selectedVariants }) => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const brand_id = import.meta.env.VITE_BRAND_ID;
  const sessionId = localStorage.getItem("sessionID");

  const [state, setState] = useState<{
    selectedVariants: Record<string, Variant>;
  }>({
    selectedVariants: selectedVariants,
  });

  const addingItemToCart = async (productId: string) => {
    const variantId = state.selectedVariants[productId].id;
    const res = await fetch(
      `${base_url}/store/${brand_id}/cart?id=${variantId}`,
      {
        method: "POST",
        headers: {
          session: sessionId || "",
        },
      }
    );
    const data = await res.json();
    console.log("add item to cart", data);
    fetchCart();
  };

  const calculateVariantPrice = (variantName: string, product: ProductData) => {
    const selectedVariant = product.variants.find(
      (v) => v.name === variantName
    );
    if (!selectedVariant) return;

    setState((prev) => ({
      ...prev,
      selectedVariants: {
        ...prev.selectedVariants,
        [product.id]: selectedVariant,
      },
    }));
  };

  return (
    <div
      className="bg-[#80011F]/80 rounded-3xl px-2 py-6 flex h-fit w-fit justify-self-center flex-col items-center text-center text-white shadow-lg"
      key={p.id}
    >
      <img
        src={p.oneImg}
        alt={p.name}
        className="h-28 object-contain mb-4 rounded-3xl"
      />
      <div className="mb-2">
        <p className="text-sm font-bold">{p.name}</p>
      </div>
      <div className="flex w-full justify-between items-center bg-white/20 rounded-lg px-2 py-2 mt-4 mb-4">
        <p className="text-[11px]">Select size</p>
        <select
          className="bg-transparent text-sm focus:outline-none"
          onChange={(e) => calculateVariantPrice(e.target.value, p)}
        >
          {p.variantMatrix[p.variantTypes[0]]?.map((variant, index) => (
            <option
              className="bg-white text-black text-[10px]"
              key={index}
              value={variant}
            >
              {variant}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex items-center justify-between text-sm mb-6">
        <p className="text-[#FFD700] font-semibold text-[10px]">10% off</p>
        <p className="line-through text-white/70 text-[10px]">
          ₹{state.selectedVariants[p.id]?.price ?? p.variants[0]?.price}
        </p>
        <p className="text-sm font-bold text-white">
          ₹{state.selectedVariants[p.id]?.offerPrice ?? p.variants[0]?.offerPrice}
        </p>
      </div>
      <button
        onClick={() => addingItemToCart(p.id)}
        className="bg-white text-[#80011F] text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-2 hover:bg-white/90 transition"
      >
        🛒 Add to cart
      </button>
    </div>
  );
};

export default Product;