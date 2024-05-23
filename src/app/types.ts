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
