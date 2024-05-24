import { AddToCartPayload } from "../types";
import axiosClient from "./axiosClient";

const addToCart = (payload: AddToCartPayload) => axiosClient.post('/carts', payload);

const getUserCartItems = (email: string) => axiosClient.get(`carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)

const deleteCartItem = (id: number) => axiosClient.delete(`/carts/${id}`)
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addToCart,
    getUserCartItems,
    deleteCartItem
};
