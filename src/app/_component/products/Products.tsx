"use client";
import ProductApis from "@/app/_utils/ProductApis";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";

const Products: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getRecentProducts();
  }, []);

  const getRecentProducts = async () => {
    try {
      const res = await ProductApis.getRecentProducts();
      setProductList(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="2xl:px-36 px-6">
      <h2 className="my-4 text-xl">Recent Products</h2>
      <ProductList productList={productList} />
    </div>
  );
};

export default Products;
