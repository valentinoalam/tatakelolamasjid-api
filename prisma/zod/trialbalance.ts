import * as z from "zod"
import * as imports from "../null"
import { CompleteLedger, RelatedLedgerModel, CompleteTrialBalanceDetail, RelatedTrialBalanceDetailModel } from "./index"

export const TrialBalanceModel = z.object({
  id: z.string(),
  ledgerId: z.string(),
  periodStart: z.date(),
  periodEnd: z.date(),
  totalDebit: z.number().int(),
  totalCredit: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteTrialBalance extends z.infer<typeof TrialBalanceModel> {
  ledger: CompleteLedger
  TrialBalanceDetail: CompleteTrialBalanceDetail[]
}

/**
 * RelatedTrialBalanceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTrialBalanceModel: z.ZodSchema<CompleteTrialBalance> = z.lazy(() => TrialBalanceModel.extend({
  ledger: RelatedLedgerModel,
  TrialBalanceDetail: RelatedTrialBalanceDetailModel.array(),
}))
