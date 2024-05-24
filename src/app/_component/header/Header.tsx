import Image from "next/image";
import './header.scss';
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/_context/cartContext";
import { CartContextType } from "@/app/types";
import CartApis from "@/app/_utils/CartApis";

interface HeaderProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

function Header({ toggleTheme, theme }: HeaderProps) {
    const [isLoginIn, setIsLoginIn] = useState(false)
    const { user } = useUser();
    const cartContext = useContext(CartContext) as CartContextType;
    const { cart, setCart } = cartContext;

    useEffect(() => {
        setIsLoginIn(window?.location?.href.toString().includes('sign-in'))
    }, [])

    const getUserCartItems = () => {
        const userEmail = user?.primaryEmailAddress?.emailAddress || '';

        CartApis.getUserCartItems(userEmail).then((res: { data: { data: { id: any; attributes: { products: { data: any[]; }; }; }[]; }; }) => {
            console.log('response from cart items', res?.data?.data)
            res?.data?.data.forEach((cartItem: { id: any; attributes: { products: { data: any[]; }; }; }) => {
                setCart((oldCart) => [
                    ...oldCart,
                    {
                        id: cartItem.id,
                        product: cartItem?.attributes?.products?.data[0]
                    }
                ])
            })

        })
    }

    useEffect(() => {
        user && getUserCartItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return !isLoginIn && (
        <header className="bg-white dark:bg-gray-900">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Link className="block text-orange-600 dark:text-orange-300" href="/">
                    <span className="sr-only">Home</span>
                    <Image src='/logoipsum-327.svg' alt='logo' width={40} height={40} />
                </Link>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Explore
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Contact US
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="theme-switch-wrapper">
                            <label htmlFor="theme-btn">
                                <input type="checkbox" id="theme-btn" checked={theme === 'dark'} onChange={toggleTheme} />
                                <div className="slider-wrapper">
                                    <div className="theme-btn-slider"></div>
                                    <span className="star star-1"></span>
                                    <span className="star star-2"></span>
                                    <span className="star star-3"></span>
                                    <span className="star star-4"></span>
                                    <span className="star star-5"></span>
                                    <span className="star star-6"></span>
                                </div>
                            </label>
                        </div>

                        {!user ? <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-500 dark:hover:bg-orange-500"
                                href="/sign-in"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-600 transition hover:text-orange-500/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                Register
                            </a>
                        </div>
                            :
                            <div className="flex items-center gap-5">
                                <h2 className="flex gap-1 cursor-pointer"> <ShoppingCart /> ({Object.keys(cart).length})</h2>
                                <UserButton />
                            </div>
                        }

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
