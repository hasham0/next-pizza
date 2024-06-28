import ProductCard from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/pizzaData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <!-- hero image --> */}
      <section className="bg-white">
        <div className="container flex items-center justify-center py-24">
          {/* <!-- left side --> */}
          <div>
            <h1 className="leading-2 font-sans text-7xl font-black">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="mt-8 max-w-lg text-2xl leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 rounded-full px-6 py-7 text-lg font-bold">
              Get your pizza now
            </Button>
          </div>

          {/* <!-- right side --> */}
          <div>
            <Image
              alt="pizza-main"
              src={"/images/pizza-main.png"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      {/* <!-- category options --> */}
      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="mt-6 grid grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="mt-6 grid grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
