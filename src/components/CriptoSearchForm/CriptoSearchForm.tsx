import { currencies } from "../../data";
import { useCryptoStore } from "../../store/store";


export default function CriptoSearchForm() {

  const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies);

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
            {
              cryptocurrencies.map(cryptocurrency => (
                <option key={cryptocurrency.SYMBOL} value={cryptocurrency.SYMBOL}>{cryptocurrency.NAME}</option>
              ))
            }
        </select>

      </div>

      <input type="submit" value="Cotizar" />
    </form>
  )
}
