import { AddToCartPayload } from "../types";
import axiosClient from "./axiosClient";

const addToCart = (payload: AddToCartPayload) => axiosClient.post('/carts', payload);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addToCart,
};
