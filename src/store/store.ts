import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CryptoCurrency, CryptoPrice, Pair } from "../types";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService";

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[];
    result: CryptoPrice;
    loading: boolean;
    fetchCriptos: () => Promise<void>;
    fetchData:(pair: Pair) => Promise<void>;
}


//en axios se puede hacer llamados a apis desde el store
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    loading: false,
    cryptocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    fetchCriptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptocurrencies
        }))        
    },
    fetchData: async(pair) => {
        set(()=> ({
            loading: true
        }));
        const result = await fetchCurrentCryptoPrice(pair);
        set(()=> ({
            result,
            loading: false
        }));
    }

})))