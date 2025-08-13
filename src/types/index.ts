import { z } from 'zod';
import { currencyResponse, CurrencySchema } from "../schema/crypo-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof currencyResponse>