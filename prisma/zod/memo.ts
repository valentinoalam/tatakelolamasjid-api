import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel } from "./index"

export const MemoModel = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  body: z.string(),
  is_done: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteMemo extends z.infer<typeof MemoModel> {
  user: CompleteUser
}

/**
 * RelatedMemoModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMemoModel: z.ZodSchema<CompleteMemo> = z.lazy(() => MemoModel.extend({
  user: RelatedUserModel,
}))
