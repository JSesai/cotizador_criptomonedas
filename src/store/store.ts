import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CryptoCurrency, Pair } from "../types";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService";

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[];
    fetchCriptos: () => Promise<void>;
    fetchData:(pair: Pair) => Promise<void>;

}


//en axios se puede hacer llamados a apis desde el store
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCriptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptocurrencies
        }))        
    },
    fetchData: async(pair) => {
        await fetchCurrentCryptoPrice(pair);
        
    }

})))