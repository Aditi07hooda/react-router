import React, { useState } from "react";
import AddShoppingCart from "/images/collection/AddShoppingCart.png";
import CartDialogBox from "./CartDialogBox";

interface CartIconBtnProps {
  cartLength: number;
}

const CartIconBtn: React.FC<CartIconBtnProps> = ({ cartLength }) => {
  const [state, setState] = useState({
    isCartDialogOpen: false,
  });

  const setCartDialogStateOpen = () => {
    setState((prev) => ({
      ...prev,
      isCartDialogOpen: true,
    }));
  };

  const setCartDialogStateClose = () => {
    setState((prev) => ({
      ...prev,
      isCartDialogOpen: false,
    }));
  };

  return (
    <>
      <div
        className="flex z-[100] relative justify-between p-3 bg-[#80011F] shadow-2xl rounded-full w-fit cursor-pointer gap-1 items-center border-3 border-[#BF7D86]"
        onClick={setCartDialogStateOpen}
      >
        <img src={AddShoppingCart as string} className="h-7" alt="cart icon" />
        <p className="text-white text-2xl font-[ultima-bold] flex items-center mt-1">
          {cartLength}
        </p>
      </div>
      {state.isCartDialogOpen && (
        <div className="inset-0 bg-black/80 z-50 fixed flex items-center justify-center">
          <CartDialogBox dialogClose={setCartDialogStateClose} />
        </div>
      )}
    </>
  );
};

export default CartIconBtn;
