import React from "react";
import ProductItem from "./ProductItem";
import { ProductListProps } from "@/app/types";

function ProductList({ productList }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {productList && productList.length > 0 ? (
        productList.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))
      ) : (
        null
      )}
    </div>
  );
}

export default ProductList;
