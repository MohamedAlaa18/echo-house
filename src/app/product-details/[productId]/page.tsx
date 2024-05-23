"use client";
import Breadcrumb from "@/app/_component/Breadcrumb";
import ProductApis from "@/app/_utils/ProductApis"
import { Product } from "@/app/types";
import { useEffect, useState } from "react";
import ProductBanner from "../_component/ProductBanner";
import ProdructInfo from "../_component/ProdructInfo";

interface ProductDetailsProps {
  params: { productId?: string };
}

function ProductDetails({ params }: ProductDetailsProps) {
  const [productList, setProductList] = useState<Product>();

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.productId]);

  const getProductById = () => {
    if (params?.productId !== undefined && !isNaN(Number(params.productId))) {
      ProductApis.getProductById(Number(params.productId)).then(res => {
        console.log(res.data.data)
      })
    }
  }

  return (
    <div className="px-10 md:px-28 py-8">
      <Breadcrumb />
      <div>
        <ProductBanner />
        <ProdructInfo />
      </div>
    </div>
  )
}

export default ProductDetails