import * as z from "zod"
import * as imports from "../null"
import { Period, WeekDay } from "@prisma/client"
import { CompleteTrialBalance, RelatedTrialBalanceModel } from "./index"

export const LedgerModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  reportPeriod: z.nativeEnum(Period),
  startWeekDay: z.nativeEnum(WeekDay),
})

export interface CompleteLedger extends z.infer<typeof LedgerModel> {
  TrialBalance: CompleteTrialBalance[]
}

/**
 * RelatedLedgerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLedgerModel: z.ZodSchema<CompleteLedger> = z.lazy(() => LedgerModel.extend({
  TrialBalance: RelatedTrialBalanceModel.array(),
}))
