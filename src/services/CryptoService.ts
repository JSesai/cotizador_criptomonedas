import axios from "axios";
import { CryptoCurrencyResposeSchema } from "../schema/crypo-schema";

export async function getCryptos() {
    const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'
    const { data: Data } = await axios.get(url);
    console.log(Data);
    const result = CryptoCurrencyResposeSchema.safeParse(Data)
    if (result.success) return result.data.Data.LIST;
}
