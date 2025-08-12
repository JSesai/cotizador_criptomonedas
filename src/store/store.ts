import axios from "axios";
import { create } from "zustand";
import { CryptoCurrencyResposeSchema } from "../schema/crypo-schema";

const getCryptos = async () => {
    const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'
    const { data: Data } = await axios.get(url);
    console.log(Data);
    const result = CryptoCurrencyResposeSchema.safeParse(Data)
    if (result.success) return result.data;


}


export const useCryptoStore = create((set) => ({
    cryptocurrencies: [],
    //en axios se puede hacer llamados a apis desde el store
    fetchCriptos: async () => {
        const cryptocurrencies = await getCryptos();
        console.log(cryptocurrencies);
        set(() => ({
            cryptocurrencies
        }))
        
    },

}))