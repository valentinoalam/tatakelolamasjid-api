import * as z from "zod"
import * as imports from "../null"
import { CompleteAccount, RelatedAccountModel } from "./index"

export const BankAccountModel = z.object({
  id: z.string(),
  bankName: z.string(),
  accountNumber: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteBankAccount extends z.infer<typeof BankAccountModel> {
  Account: CompleteAccount[]
}

/**
 * RelatedBankAccountModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBankAccountModel: z.ZodSchema<CompleteBankAccount> = z.lazy(() => BankAccountModel.extend({
  Account: RelatedAccountModel.array(),
}))
