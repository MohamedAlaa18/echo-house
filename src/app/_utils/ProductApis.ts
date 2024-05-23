import { Product } from '../types';
import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';


const getRecentProducts = (): Promise<AxiosResponse<Product[]>> => {
    return axiosClient.get('/products?populate=*');
};

const getProductById = (id: number): Promise<AxiosResponse<Product>> => {
    return axiosClient.get(`/products/${id}?populate=*`);
};

const getProductsByCategory = (category: string): Promise<AxiosResponse<Product[]>> => {
    return axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getRecentProducts,
    getProductById,
    getProductsByCategory,
};
