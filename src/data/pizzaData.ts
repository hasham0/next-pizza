export type ProductTS = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
};
export const products: ProductTS[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/images/pizza-main.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/images/pizza-main.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/images/pizza-main.png",
    price: 500,
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/images/pizza-main.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/images/pizza-main.png",
    price: 500,
  },
];

export const toppings: Topping[] = [
  {
    id: "1",
    name: "Chicken",
    image: "/images/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "jelapeno",
    image: "/images/jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/images/cheese.png",
    price: 50,
    isAvailable: true,
  },
];
