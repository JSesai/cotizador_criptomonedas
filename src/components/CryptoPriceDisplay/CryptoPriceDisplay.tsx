import { useCryptoStore } from "../../store/store"
import Spinner from "../Spinner/Spinner";

export default function CryptoPriceDisplay() {
    const isLoading = useCryptoStore(state => state.loading);
    const { PRICE, CHANGEPCT24HOUR, HIGHDAY, IMAGEURL, LASTUPDATE, LOWDAY } = useCryptoStore((estate) => estate.result);
    if(isLoading) return <Spinner />
    if (!PRICE || !CHANGEPCT24HOUR || !HIGHDAY || !LASTUPDATE || !LOWDAY) return null;
    return (
        <div className="result-wrapper">
            <h2>cotizacion</h2>
            <div className="result">
                <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cryptomoneda" />

                <div>
                    <p>El precio es de: <span>{PRICE}</span> </p>
                    <p>El precio más alto del día: <span>{HIGHDAY}</span> </p>
                    <p>El precio más bajo del día: <span>{LOWDAY}</span> </p>
                    <p>Variación últimas 24 hrs: <span>{CHANGEPCT24HOUR}</span> </p>
                    <p>Última actualización: <span>{LASTUPDATE}</span> </p>                    
                </div>
            </div>
        </div>
    )
}
