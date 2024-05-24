import { ProductItemProps } from "@/app/types";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "@/app/_utils/CartApis";
import { ApiError } from "next/dist/server/api-utils";
import { NextApiResponse } from "next";

function ProductInfo({ product }: ProductItemProps) {
  const { user } = useUser();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      router.push('/sign-in');
    } else {
      const data = {
        username: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        product: [product?.id]
      };
      CartApis.addToCart({ data }).then((res: NextApiResponse) => {
        console.log('The product was added successfully');
      }).catch((err: ApiError) => {
        console.log('Error', err);
      });
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">{product?.attributes?.category}</h2>
          <h2 className="text-[15px] mt-5">{product?.attributes?.description[0]?.children[0]?.text}</h2>
          <h2 className="text-[15px] text-gray-500 flex gap-2 mt-2 items-center">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className='w-5 h-5 text-green-500' />
            ) : (
              <AlertOctagon />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[32px] text-orange-400 mt-3">{product?.attributes?.price} EGP</h2>

          <button onClick={handleAddToCart} className="flex gap-2 items-center rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-500 dark:hover:bg-orange-500">
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
