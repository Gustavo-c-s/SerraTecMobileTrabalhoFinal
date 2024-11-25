import { usuario } from "../types/types";
import api from "./api";

export const getUsuraio = async (): Promise<usuario[]> => {
  const { data } = await api.get("/usuarios");
  return data;
};
export const getUsuraioLogin = async (
  email: string,
  senha: string
): Promise<usuario[]> => {
  const {data} = await api.get(`/usuarios?email=${email}&senha=${senha}`);

  return data;
};

export const postUsuario = async (
  novaUsuario: Omit<usuario, "id">
): Promise<usuario> => {
  const { data } = await api.post("/usuarios", novaUsuario);
  return data;
};

export const deleteUsuario = async (id: number): Promise<usuario> => {
  const { data } = await api.delete("/usuarios/" + id);
  return data;
};

export const updateUsuario = async (
  usuarioAtualizado: usuario
): Promise<usuario> => {
  const { data } = await api.put(
    `/usuarios/${usuarioAtualizado.id}`,
    usuarioAtualizado
  );
  return data;
};
