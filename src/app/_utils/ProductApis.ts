import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';
import { Product, ApiResponse } from '../types';

const getRecentProducts = (): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosClient.get('/products?populate=*');
};

const getProductById = (id: number): Promise<AxiosResponse<ApiResponse<Product>>> => {
    return axiosClient.get(`/products/${id}?populate=*`);
};

const getProductsByCategory = (category: string): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getRecentProducts,
    getProductById,
    getProductsByCategory,
};
