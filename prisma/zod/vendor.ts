import * as z from "zod"
import * as imports from "../null"
import { CompleteTransaction, RelatedTransactionModel } from "./index"

export const VendorModel = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  businessField: z.string(),
  note: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteVendor extends z.infer<typeof VendorModel> {
  transaction: CompleteTransaction[]
}

/**
 * RelatedVendorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVendorModel: z.ZodSchema<CompleteVendor> = z.lazy(() => VendorModel.extend({
  transaction: RelatedTransactionModel.array(),
}))
