import React from "react";
import { ProductItemProps } from "@/app/types";
import Image from "next/image";
import { List } from 'lucide-react'
import Link from "next/link";

function ProductItem({ product }: ProductItemProps) {
    const imageUrl = product?.attributes?.banner?.data?.attributes?.url;

    return (
        <Link href={`/product-details/${product?.id}`}>
            <div className="rounded-lg border border-transparent hover:border-orange-400 hover:shadow-md hover:cursor-pointer transition ease-in-out duration-300">
                {imageUrl && (
                    <Image src={imageUrl} alt="product-banner" width={400} height={350} className="rounded-t-lg h-[170px] object-cover" />
                )}
                <div className="flex justify-between p-3 items-center bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                    <div>
                        <h2 className="text-[12px] font-medium line-clamp-1">
                            {product?.attributes?.title}
                        </h2>
                        <h2 className="text-[10px] text-gray-400 flex gap-1 items-center">
                            <List className="w-4 h-4" />{product?.attributes?.category}
                        </h2>
                    </div>
                    <h2>
                        {product?.attributes?.price} EGP
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
