type ProductTS = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
type ToppingTS = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

export type { ProductTS, ToppingTS };
