import { z } from 'zod';


export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})


export const currencyResponse = z.object({
    NAME: z.string(),
    SYMBOL: z.string()
})

export const CryptoCurrencyResposeSchema = z.object({
    Data: z.object({
        LIST: z.array(
            currencyResponse
        )

    })

});

export const CryptoCurrenciesResponseSchema = z.array(currencyResponse);

export const PairSchema = z.object({
    currency: z.string(),
    cryptoCurrency: z.string()
});

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})
