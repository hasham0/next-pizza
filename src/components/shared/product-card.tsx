import React from "react";
import { ProductTS } from "@/data/pizzaData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import Image from "next/image";
import ToppingList from "./topping-list";

type Props = {
  product: ProductTS;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div>
      {" "}
      <Card className="rounded-xl border-none">
        <CardHeader className="flex items-center justify-center">
          <Image
            alt="pizza-image"
            width={150}
            height={150}
            src={product.image}
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="mt-2">{product.description}</p>
        </CardContent>
        <CardFooter className="mt-4 flex items-center justify-between">
          <p>
            <span>From </span>
            <span className="font-bold">₹{product.price}</span>
          </p>

          <Dialog>
            <DialogTrigger className="rounded-full bg-orange-200 px-6 py-2 text-orange-500 shadow outline-none transition-all duration-150 ease-linear hover:bg-orange-300 hover:shadow-lg focus:outline-none">
              Choose
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0">
              <div className="flex">
                <div className="flex w-1/3 items-center justify-center rounded bg-white p-8">
                  <Image
                    src={"/images/pizza-main.png"}
                    width={450}
                    height={450}
                    alt={product.name}
                  />
                </div>
                <div className="w-2/3 p-8">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-1">{product?.description || ""}</p>

                  <div>
                    <h4 className="mt-6">Choose the size</h4>
                    <RadioGroup
                      defaultValue="small"
                      className="mt-2 grid grid-cols-3 gap-4"
                    >
                      <div>
                        <RadioGroupItem
                          value="small"
                          id="small"
                          className="peer sr-only"
                          aria-label="Small"
                        />
                        <Label
                          htmlFor="small"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Small
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="medium"
                          id="medium"
                          className="peer sr-only"
                          aria-label="Medium"
                        />
                        <Label
                          htmlFor="medium"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Medium
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="large"
                          id="large"
                          className="peer sr-only"
                          aria-label="Large"
                        />
                        <Label
                          htmlFor="large"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Large
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h4 className="mt-6">Choose the crust</h4>
                    <RadioGroup
                      defaultValue="thin"
                      className="mt-2 grid grid-cols-3 gap-4"
                    >
                      <div>
                        <RadioGroupItem
                          value="thin"
                          id="thin"
                          className="peer sr-only"
                          aria-label="Thin"
                        />
                        <Label
                          htmlFor="thin"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Thin
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="thick"
                          id="thick"
                          className="peer sr-only"
                          aria-label="Thick"
                        />
                        <Label
                          htmlFor="thick"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Thick
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <ToppingList />

                  <div className="mt-12 flex items-center justify-between">
                    <span className="font-bold">₹400</span>
                    <Button>
                      <ShoppingCart size={20} />
                      <span className="ml-2">Add to cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
