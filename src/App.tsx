import CriptoSearchForm from "./components/CriptoSearchForm/CriptoSearchForm";

export default function App() {
  return (
    <div className="container">
      <h1 className="app-title">Cotizador de <span>criptomonedas</span> </h1>

      <div className="content">

        <CriptoSearchForm />

      </div>
    </div>
  )
}
