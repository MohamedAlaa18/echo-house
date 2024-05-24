export interface ProductDescriptionChild {
    text: string;
    type: string;
}

export interface ProductDescription {
    type: string;
    children: ProductDescriptionChild[];
}

export interface BannerAttributes {
    url: string;
}

export interface BannerData {
    id: number;
    attributes: BannerAttributes;
}

export interface Banner {
    data: BannerData;
}

export interface ProductAttribute {
    instantDelivery: boolean;
    title: string;
    description: ProductDescription[];
    price: number;
    category: string | null;
    banner: Banner;
    files: {
        data: null;
    };
}

export interface Product {
    id: string;
    attributes: ProductAttribute;
}

// The API response structure
export interface ApiResponse<T> {
    data: T;
}

export interface ApiError {
    message: string;
}

// The response types for fetching products
export type ProductItemFetch = ApiResponse<Product>;
export type ProductsItemFetch = ApiResponse<Product[]>;
export interface ProductItemProps {
    product?: Product;
}
export interface ProductListProps {
    productList: Product[];
}


export interface AddToCartPayload {
    data: {
      username: string;
      email: string;
      product: string[]; // Adjust the type based on the actual product ID type
    };
  }