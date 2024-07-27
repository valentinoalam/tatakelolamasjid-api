import * as z from "zod"
import * as imports from "../null"
import { CompleteAsset, RelatedAssetModel, CompleteTag, RelatedTagModel } from "./index"

export const AssetTagsModel = z.object({
  id: z.string(),
  assetId: z.string(),
  tagId: z.string(),
})

export interface CompleteAssetTags extends z.infer<typeof AssetTagsModel> {
  asset: CompleteAsset
  tag: CompleteTag
}

/**
 * RelatedAssetTagsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetTagsModel: z.ZodSchema<CompleteAssetTags> = z.lazy(() => AssetTagsModel.extend({
  asset: RelatedAssetModel,
  tag: RelatedTagModel,
}))
