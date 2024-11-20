
import { produto } from "../types/types";
import api from "./api";

const URL = "";
export const getProduto = async (): Promise<[produto]> => {
  const { data } = await api.get("/produto");
  return data;
};

export const postProduto = async (
  novaProduto: Omit<produto, "id">
): Promise<produto> => {
  const { data } = await api.post("/tarefas", novaProduto);
  return data;
};

export const deleteProduto = async (id: number): Promise<produto> => {
  const { data } = await api.delete("/tarefas/" + id);
  return data;
};


