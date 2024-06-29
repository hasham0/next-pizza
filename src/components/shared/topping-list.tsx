"use client";
import React, { useState } from "react";
import ToppingCard from "./topping-card";
import { ToppingTS } from "@/types";
import { toppings } from "@/data/pizzaData";
type Props = {};

const ToppingList = (props: Props) => {
  const [selectedToppings, setSelectedToppings] = useState([toppings[0]]);
  const handleCheckBoxCheck = (topping: ToppingTS) => {
    const isAlreadyExists = selectedToppings.some(
      (element) => element.id === topping.id,
    );

    if (isAlreadyExists) {
      setSelectedToppings((prev) =>
        prev.filter((elm) => elm.id !== topping.id),
      );
      return;
    }

    setSelectedToppings((prev) => [...prev, topping]);
  };
  return (
    <section>
      <section className="mt-6">
        <h3>Extra toppings</h3>
        <div className="mt-2 grid grid-cols-3 gap-4">
          {toppings.map((topping: ToppingTS) => {
            return (
              <ToppingCard
                topping={topping}
                key={topping.id}
                selectedToppings={selectedToppings}
                handleCheckBoxCheck={handleCheckBoxCheck}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default ToppingList;
