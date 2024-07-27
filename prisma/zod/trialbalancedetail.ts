import * as z from "zod"
import * as imports from "../null"
import { CompleteAccount, RelatedAccountModel, CompleteTrialBalance, RelatedTrialBalanceModel } from "./index"

export const TrialBalanceDetailModel = z.object({
  id: z.string(),
  trialBalanceId: z.string(),
  accountId: z.string(),
  isDebit: z.boolean(),
  openingBalance: z.number().int(),
  closingBalance: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteTrialBalanceDetail extends z.infer<typeof TrialBalanceDetailModel> {
  account: CompleteAccount
  trialBalance: CompleteTrialBalance
}

/**
 * RelatedTrialBalanceDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTrialBalanceDetailModel: z.ZodSchema<CompleteTrialBalanceDetail> = z.lazy(() => TrialBalanceDetailModel.extend({
  account: RelatedAccountModel,
  trialBalance: RelatedTrialBalanceModel,
}))
