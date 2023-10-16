import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductImage from '../public/p4.png'
const ProductCard = () => {
    return (
        <Link
            // href={`/product/${p.slug}`}
            href="/product/1"
            className="transform overflow-hidden bg-white duration-500 hover:scale-x-110 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                // src={p.thumbnail.data.attributes.url}
                // alt={p.name}
                src={ProductImage}
               alt="shoes"
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Air Jordan Golf</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        $ 200
                    </p>

                    {/* {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )} */}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
