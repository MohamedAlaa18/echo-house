"use client"
import Breadcrumb from "@/app/_component/Breadcrumb";
import ProductApis from "@/app/_utils/ProductApis";
import { Product } from "@/app/types";
import { useEffect, useState, useCallback } from "react";
import ProductBanner from "../_component/ProductBanner";
import ProductInfo from "../_component/ProductInfo";
import ProductList from "@/app/_component/products/ProductList";
import { usePathname } from "next/navigation";

interface ProductDetailsProps {
  params: { productId?: string };
}

function ProductDetails({ params }: ProductDetailsProps) {
  const path = usePathname();

  const [productDetails, setProductDetails] = useState<Product>();
  const [productList, setProductList] = useState<Product[]>([]);

  const getProductById = useCallback(() => {
    if (params?.productId !== undefined && !isNaN(Number(params.productId))) {
      ProductApis.getProductById(Number(params.productId))
        .then(res => {
          setProductDetails(res.data.data);
          getProductsByCategory(res.data.data)
        })
        .catch(err => {
          console.error('Error fetching product details:', err);
        });
    }
  }, [params?.productId]);

  const getProductsByCategory = (product: Product) => {
    const category = product?.attributes?.category;
    if (category) {
      ProductApis.getProductsByCategory(category).then(res => {
        setProductList(res.data.data);
      }).catch(err => {
        console.error('Error fetching products by category:', err);
      });
    } else {
      console.log('Category is null or undefined');
    }
  }

  useEffect(() => {
    getProductById();
  }, [params?.productId, getProductById]);

  return (
    <div className="2xl:px-36 px-6 py-8">
      <Breadcrumb path={path} />
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">

        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />

      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetails;
