import { produto } from "../types/types";
import api from "./api";

const URL = "";
export const getProduto = async (): Promise<[produto]> => {
  const { data } = await api.get("/produtos");
  return data;
};

export const postProduto = async (
  novaProduto: Omit<produto, "id">
): Promise<produto> => {
  const { data } = await api.post("/produtos", novaProduto);
  return data;
};

export const deleteProduto = async (id: number | string): Promise<produto> => {
  const { data } = await api.delete("/produtos/" + id);
  return data;
};
