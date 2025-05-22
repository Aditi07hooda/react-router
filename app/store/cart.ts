import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CartStore {
    cartLength: number;
    setCartLength: (length: number) => void;
    increaseCartLength: () => void;
}

export const useCartStore = create<CartStore>()(
    devtools(
        (set) => ({
            cartLength: 0,
            setCartLength: (length) => set({ cartLength: length }),
            increaseCartLength: () => set((state) => ({ cartLength: state.cartLength + 1 })),
        }),
        { name: "cart-store" }
    )
);