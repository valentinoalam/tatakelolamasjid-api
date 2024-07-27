import * as z from "zod"
import * as imports from "../null"
import { CompleteAsset, RelatedAssetModel } from "./index"

export const AssetStatusModel = z.object({
  id: z.string(),
  assetId: z.string(),
  availableQty: z.number().int(),
  totalQty: z.number().int(),
  note: z.string(),
  updatedBy: z.string(),
  updatedAt: z.date().nullish(),
})

export interface CompleteAssetStatus extends z.infer<typeof AssetStatusModel> {
  asset: CompleteAsset
}

/**
 * RelatedAssetStatusModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetStatusModel: z.ZodSchema<CompleteAssetStatus> = z.lazy(() => AssetStatusModel.extend({
  asset: RelatedAssetModel,
}))
