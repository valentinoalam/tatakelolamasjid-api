import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteTransaction, RelatedTransactionModel } from "./index"

export const PaymentMethodModel = z.object({
  id: z.string(),
  userId: z.string(),
  jenis_pembayaran: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompletePaymentMethod extends z.infer<typeof PaymentMethodModel> {
  user: CompleteUser
  Transaction: CompleteTransaction[]
}

/**
 * RelatedPaymentMethodModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentMethodModel: z.ZodSchema<CompletePaymentMethod> = z.lazy(() => PaymentMethodModel.extend({
  user: RelatedUserModel,
  Transaction: RelatedTransactionModel.array(),
}))
