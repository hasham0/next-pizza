"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type Props = {};

const CartButton = (props: Props) => {
  return (
    <div>
      <div className="mt-12 flex items-center justify-between">
        <span className="font-bold">₹400</span>
        <Button
          onClick={() => {
            console.log("s");
          }}
        >
          <ShoppingCart size={20} />
          <span className="ml-2">Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default CartButton;
