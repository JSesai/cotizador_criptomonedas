import { z } from 'zod';
import { currencyResponse, CurrencySchema, PairSchema } from "../schema/crypo-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof currencyResponse>

export type Pair = z.infer<typeof PairSchema>