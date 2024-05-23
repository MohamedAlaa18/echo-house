export interface ProductAttribute {
    productTitle: string;
    productPrice: number;
    productDescription: string;
    productRating: number;
    productCategory: "men" | "women"
    productImage: {
        data: Array<{
            id: number | null | undefined;
            attributes: {
                url: string;
            };
        }>;
    };
}
export interface Product {
    id: string;
    attributes: ProductAttribute;
}
export interface ApiResponse {
    data: Product[];
}
export interface ProductsState {
    allProducts: Product[];
    menProducts: Product[];
    womenProducts: Product[];
    searchedProducts: Product[];
    category: string[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
export interface AppState {
    products: ProductsState;
}
export interface CartState {
    cartItems: CartItem[];
    cartState: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
export interface CartItem {
    item: Product;
    imageIndex: number;
    count: number;
}

export type Anchor = 'left' | 'right';