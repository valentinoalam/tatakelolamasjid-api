import * as z from "zod"
import * as imports from "../null"
import { AccountType } from "@prisma/client"
import { CompleteBankAccount, RelatedBankAccountModel, CompleteTransaction, RelatedTransactionModel, CompleteTrialBalanceDetail, RelatedTrialBalanceDetailModel } from "./index"

export const AccountModel = z.object({
  id: z.string(),
  bankAccId: z.string(),
  parentAccountId: z.string().nullish(),
  name: z.string(),
  type: z.nativeEnum(AccountType),
  description: z.string(),
  balance: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteAccount extends z.infer<typeof AccountModel> {
  bankAcc?: CompleteBankAccount | null
  parent?: CompleteAccount | null
  children: CompleteAccount[]
  Transaction: CompleteTransaction[]
  TrialBalanceDetail: CompleteTrialBalanceDetail[]
}

/**
 * RelatedAccountModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAccountModel: z.ZodSchema<CompleteAccount> = z.lazy(() => AccountModel.extend({
  bankAcc: RelatedBankAccountModel.nullish(),
  parent: RelatedAccountModel.nullish(),
  children: RelatedAccountModel.array(),
  Transaction: RelatedTransactionModel.array(),
  TrialBalanceDetail: RelatedTrialBalanceDetailModel.array(),
}))
