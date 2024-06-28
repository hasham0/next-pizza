import React from "react";
import { Button } from "../ui/button";
import { Topping } from "@/data/pizzaData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

type Props = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};

const ToppingCard = ({
  topping,
  selectedToppings,
  handleCheckBoxCheck,
}: Props) => {
  const isCurrentSelected = selectedToppings.some(
    (element) => element.id === topping.id,
  );
  return (
    <Button
      onClick={() => handleCheckBoxCheck(topping)}
      variant={"outline"}
      className={cn(
        "h-42 relative flex flex-col",
        isCurrentSelected ? "border-primary" : "",
      )}
    >
      <Image src={topping.image} width={80} height={80} alt={topping.name} />
      <h4>{topping.name}</h4>
      <p>&#8377;{topping.price}</p>
      {isCurrentSelected && (
        <CircleCheck className="absolute right-1 top-1 text-primary" />
      )}
    </Button>
  );
};

export default ToppingCard;
