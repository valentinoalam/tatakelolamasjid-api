import * as z from "zod"
import * as imports from "../null"
import { TransactionType } from "@prisma/client"
import { CompleteAccount, RelatedAccountModel, CompleteVendor, RelatedVendorModel, CompletePaymentMethod, RelatedPaymentMethodModel } from "./index"

export const TransactionModel = z.object({
  id: z.string(),
  accountId: z.string(),
  vendorId: z.string(),
  paymentMethodId: z.string(),
  type: z.nativeEnum(TransactionType),
  amount: z.number().int(),
  description: z.string(),
  reference: z.string(),
  dtTrx: z.date(),
  notaUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  createdBy: z.string(),
  updatedBy: z.string(),
})

export interface CompleteTransaction extends z.infer<typeof TransactionModel> {
  account: CompleteAccount
  vendor: CompleteVendor
  paymentMethod: CompletePaymentMethod
}

/**
 * RelatedTransactionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTransactionModel: z.ZodSchema<CompleteTransaction> = z.lazy(() => TransactionModel.extend({
  account: RelatedAccountModel,
  vendor: RelatedVendorModel,
  paymentMethod: RelatedPaymentMethodModel,
}))
