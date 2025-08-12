import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm/CriptoSearchForm";
import { useCryptoStore } from "./store/store";

export default function App() {

  const fetchCriptos = useCryptoStore((state) => state.fetchCriptos);

  useEffect(()=>{
    fetchCriptos()
  },[]);
  
  return (
    <div className="container">
      <h1 className="app-title">Cotizador de <span>criptomonedas</span> </h1>

      <div className="content">

        <CriptoSearchForm />

      </div>
    </div>
  )
}
