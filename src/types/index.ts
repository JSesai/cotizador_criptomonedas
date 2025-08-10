import { z } from 'zod';
import { CurrencySchema } from "../schema/crypo-schema";

export type Currency = z.infer<typeof CurrencySchema>