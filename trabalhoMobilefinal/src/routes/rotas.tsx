import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { RotasPrivadas } from "./RotasPrivadas";
import { RotasPublicas } from "./RotasPublicas";

export const Rotas = () => {
  const { online } = useContext(AuthContext);
  return <>{online ? <RotasPrivadas /> : <RotasPublicas />}</>;
};
