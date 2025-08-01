

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";

function ShoppingCartBtn() {
  const { cartsLength } = useCart();
  return (
    <>
      <Button
        size={"icon"}
        variant={"ghost"}
        asChild
        className="relative"
        aria-label="shopping-cart"
      >
        <Link href={"/shopping/cart"} aria-label="shopping-cart">
          <ShoppingCart />
          {cartsLength() ? (
            <div className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-destructive">
              {cartsLength()}
            </div>
          ) : null}
        </Link>
      </Button>
    </>
  );
}

export default ShoppingCartBtn;
