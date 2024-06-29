"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { RootState } from "@/redux/store/store";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const CartIcon = (props: Props) => {
  const totalCartItems = useAppSelector((state: RootState) => state.cart.items);

  return (
    <div className="relative">
      <Link href={"/cart"}>
        <ShoppingBasket className="hover:text-primary" />
      </Link>
      <span className="absolute -right-5 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white">
        {totalCartItems.length}
      </span>
    </div>
  );
};

export default CartIcon;
