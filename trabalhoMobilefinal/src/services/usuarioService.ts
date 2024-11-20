import api from "./api";

const URL = "";
export const getUsuraio = async (): Promise<[]> => {
    const { data } = await api.get("/usuario");
    return data;
  };
  
  export const postUsuario = async (
    novaUsuario: Omit<usuario, "id">
  ): Promise<usuario> => {
    const { data } = await api.post("/usuario", novaUsuario);
    return data;
  };
  
  export const deleteUsuario = async (id: number): Promise<usuario> => {
    const { data } = await api.delete("/usuario/" + id);
    return data;
  };
  