import { useState } from "react";
import { currencies } from "../../data";
import { useCryptoStore } from "../../store/store";
import type { Pair } from "../../types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


export default function CriptoSearchForm() {

  const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies);
  const [pair, setPair] = useState<Pair>({ currency: '', cryptoCurrency: '' });
  const [error, setError] = useState('');
  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [target.name]: target.value
    })

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios.')
      return;
    }
    setError('');


  }

  return (
    <form className="form" onSubmit={handleSubmit}>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className='field'>
        <label htmlFor="currency">Mondeda:</label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
          <option value="">-- Selecion --</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>

      </div>

      <div className='field'>
        <label htmlFor="cryptoCurrency">Mondeda:</label>
        <select name="cryptoCurrency" id="cryptoCurrency" onChange={handleChange} value={pair.cryptoCurrency}>
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
