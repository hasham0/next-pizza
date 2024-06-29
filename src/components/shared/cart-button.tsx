"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { addToCart, removeFromCart } from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store/store";
import { useToast } from "../ui/use-toast";

type Props = {
  productID: string;
};

const CartButton = ({ productID }: Props) => {
  const { toast } = useToast();
  const dispatched = useAppDispatch();
  const totalCartItems = useAppSelector((state: RootState) => state.cart.items);
  const [itemCheck, setItemCheck] = useState<boolean>(false);

  useEffect(() => {
    const isItemExisted = totalCartItems.find((item) => item === productID);
    if (isItemExisted) {
      setItemCheck(true);
    }
  }, [itemCheck, productID, totalCartItems]);

  const handleCartItems = () => {
    dispatched(addToCart(productID));
    toast({
      variant: "default",
      title: "Item Added Successfully",
    });
  };

  const handleCartRemoveItems = () => {
    dispatched(removeFromCart(productID));
    toast({
      variant: "default",
      title: "Item Remove Successfully",
    });

    setItemCheck(false);
  };
  return (
    <div>
      <div className="mt-12 flex items-center justify-between">
        <span className="font-bold">₹400</span>
        {itemCheck ? (
          <>
            <Button variant={"destructive"} onClick={handleCartRemoveItems}>
              <Trash2 size={20} />
              <span className="ml-2">Remove from cart</span>
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleCartItems}>
              <ShoppingCart size={20} />
              <span className="ml-2">Add to cart</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartButton;
