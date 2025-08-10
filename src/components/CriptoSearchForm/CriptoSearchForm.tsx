import { currencies } from "../../data";


export default function CriptoSearchForm() {
  return (
    <form className="form">

      <div className='field'>
        <label htmlFor="currency">Mondeda:</label>
        <select name="currency" id="currency">
            <option value="">-- Selecion --</option>
            {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>{currency.name}</option>
            ))}
        </select>

      </div>

      <div className='field'>
        <label htmlFor="criptoCurrency">Mondeda:</label>
        <select name="criptoCurrency" id="criptoCurrency">
            <option value="">-- Selecion --</option>
        </select>

      </div>

      <input type="submit" value="Cotizar" />
    </form>
  )
}
