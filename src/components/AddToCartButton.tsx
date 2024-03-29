"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

// Component for cart button on product page
const AddToCartButton = ({product}: {product: Product}) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Button
      onClick={() => {
        addItem(product)
        setIsSuccess(true)
      }}
      size="lg"
      className="w-full"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
