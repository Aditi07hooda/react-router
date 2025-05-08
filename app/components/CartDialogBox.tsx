import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface CartItem {
  variantId: string;
  name: string;
  variantName: string;
  qty: number;
  price: number;
}

interface CartDialogBoxProps {
  dialogClose: () => void;
}

const CartDialogBox: React.FC<CartDialogBoxProps> = ({ dialogClose }) => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const brand_id = import.meta.env.VITE_BRAND_ID;
  const sessionId = localStorage.getItem("sessionID");

  const [state, setState] = useState<{ cartItems: CartItem[] }>({
    cartItems: [],
  });

  const fetchCart = async () => {
    const res = await fetch(`${base_url}/store/${brand_id}/cart/full`, {
      headers: {
        session: sessionId!,
      },
    });
    const data = await res.json();
    console.log(data.cart.items);
    setState((prev) => ({
      ...prev,
      cartItems: data.cart?.items || [],
    }));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <div className="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4 w-full md:w-fit mx-5">
        <div className="sm:flex sm:items-start">
          <div className="mt-1 sm:mt-0 sm:ml-4 sm:text-left">
            <div className="flex justify-between px-4 items-center">
              <p className="text-xl font-semibold text-gray-900">Cart</p>
              <IoCloseSharp
                className="h-6 w-6 cursor-pointer"
                onClick={dialogClose}
              />
            </div>
            <div className="mt-2">
              {state.cartItems.length !== 0 ? (
                state.cartItems.map((item) => (
                  <div
                    key={item.variantId}
                    className="py-2 px-6 bg-[#80011F]/60 rounded-2xl my-3"
                  >
                    <p className="text-white">{item.name}</p>
                    <p className="text-white">Size: {item.variantName}</p>
                    <p className="text-white">Quantity: {item.qty}</p>
                    <p className="text-white">Price: Rs. {item.price}</p>
                  </div>
                ))
              ) : (
                <div className="text-center">Cart is empty!!</div>
              )}
            </div>
            <button
              disabled={state.cartItems.length === 0}
              className="disabled:bg-[#80011F]/60 disabled:cursor-default flex cursor-pointer justify-between mt-3 gap-2 align-middle items-center py-2 px-4 bg-[#80011F] text-white rounded-2xl shadow-2xl font-[NovaRound] font-[400] font-xl tracking-tight"
            >
              <a href="https://themilletstore.in/user/checkout" target="_blank" rel="noopener noreferrer">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDialogBox;