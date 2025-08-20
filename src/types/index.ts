import { z } from 'zod';
import { CryptoPriceSchema, currencyResponse, CurrencySchema, PairSchema } from "../schema/crypo-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof currencyResponse>

export type Pair = z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>