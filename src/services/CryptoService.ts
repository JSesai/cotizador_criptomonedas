import axios from "axios";
import { CryptoCurrencyResposeSchema, CryptoPriceSchema } from "../schema/crypo-schema";
import type { Pair } from "../types";

export async function getCryptos() {
    const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'
    const { data: Data } = await axios.get(url);
    const result = CryptoCurrencyResposeSchema.safeParse(Data)
    if (result.success) return result.data.Data.LIST;
}


export async function fetchCurrentCryptoPrice(pair: Pair) {
    console.log(pair);
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`;
    const { data: { DISPLAY } } = await axios.get(url);
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency]);
    if(result.success) return result.data;

}