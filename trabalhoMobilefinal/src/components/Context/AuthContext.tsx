import { createContext, ReactNode, useState } from "react";
import { produto, usuario } from "../../types/types";

export const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [lista, setLista] = useState<produto[]>([]);
  const [user, setUser] = useState<any>(true);
  const [carregamento, setCarregamento] = useState(false);
  const entrar = (usuario: usuario) => {
    if (usuario) setUser(usuario);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        entrar,
        logout,
        online: !!user,
        user,
        lista,
        setLista,
        carregamento,
        setCarregamento,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
