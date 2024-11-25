import { produto } from "../types/types";
import api from "./api";

export const getProduto = async (): Promise<produto[]> => {
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

export const updateProduto = async (
  produtoAtualizado: produto
): Promise<produto> => {
  const { data } = await api.put(
    `/produtos/${produtoAtualizado.id}`,
    produtoAtualizado
  );
  return data;
};
