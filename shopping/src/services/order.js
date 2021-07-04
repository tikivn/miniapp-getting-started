import { get } from "./api";

const API_URL = "https://miniapp-demo.tala.xyz";

export const getOrder = (id) => get(`${API_URL}/orders/${id}`);
