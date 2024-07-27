import * as z from "zod"
import * as imports from "../null"
import { CompleteAssetTags, RelatedAssetTagsModel } from "./index"

export const TagModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteTag extends z.infer<typeof TagModel> {
  AssetTags: CompleteAssetTags[]
}

/**
 * RelatedTagModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTagModel: z.ZodSchema<CompleteTag> = z.lazy(() => TagModel.extend({
  AssetTags: RelatedAssetTagsModel.array(),
}))
