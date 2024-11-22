import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(true);

  const entrar = (email: string, senha: string) => {
    if (email === "123@gmail.com" && senha === "123")
      setUser("Informações do usuario");
    
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ entrar, logout, online: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
