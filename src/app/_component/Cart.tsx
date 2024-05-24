import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../_context/cartContext';
import { CartContextType } from '../types';
import Link from 'next/link';

function Cart() {
    const cartContext = useContext(CartContext) as CartContextType;
    const { cart, setCart } = cartContext;

    return (
        <div className='h-[300px] w-[250px] bg-gray-100 dark:bg-gray-800 z-10 rounded-md border border-gray-200 dark:border-gray-700 shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {
                        cart.map((item) => (
                            <li key={item?.id} className="flex items-center gap-4">
                                <Image
                                    src={item?.product?.attributes?.banner?.data?.attributes?.url}
                                    alt="Basic Tee 6-Pack"
                                    width={100}
                                    height={100}
                                    className="rounded object-cover w-[65px] h-[45px]"
                                />

                                <div>
                                    <h3 className="text-sm text-gray-900 dark:text-gray-100 line-clamp-1">{item?.product?.attributes?.title}</h3>

                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600 dark:text-gray-400">
                                        <div>
                                            <dt className="inline">Category: </dt>
                                            <dd className="inline">{item?.product?.attributes?.category}</dd>
                                        </div>

                                        <div>
                                            <dt className="inline">Price: </dt>
                                            <dd className="inline">{item?.product?.attributes?.price} EGP</dd>
                                        </div>
                                    </dl>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div className="space-y-4 text-center">
                    <Link
                        href="/cart"
                        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 dark:text-gray-400 transition hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-600"
                    >
                        View my cart ({Object.keys(cart).length})
                    </Link>
                    <Link
                        href="#"
                        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
                    >
                        Continue shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;
