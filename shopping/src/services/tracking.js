import { get } from "./api";

const API_URL = "https://miniapp-demo.tala.xyz";

export const getTrackings = (id) => get(`${API_URL}/trackings/${id}`);
