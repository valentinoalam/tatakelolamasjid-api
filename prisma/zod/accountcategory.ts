import * as z from "zod"
import * as imports from "../null"

export const AccountCategoryModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})
