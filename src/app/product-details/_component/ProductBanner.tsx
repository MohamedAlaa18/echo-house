import { Product, ProductItemProps } from "@/app/types";
import Image from "next/image"

function ProductBanner({ product }: ProductItemProps) {
  const imageUrl = product?.attributes?.banner?.data?.attributes?.url;

  return (
    <div>
      {
        imageUrl ? (
          <Image src={imageUrl} alt="product-details-banner" width={400} height={400} className="rounded-lg" />
        ) : (
          <div className="w-[400px] h-[255px] bg-slate-200 rounded-lg animate-pulse" />
        )
      }
    </div>
  )
}

export default ProductBanner;
