import * as z from "zod"
import * as imports from "../null"
import { AssetTypes, AcquisitionOrigin } from "@prisma/client"
import { CompleteAssetStatus, RelatedAssetStatusModel, CompleteAssetTags, RelatedAssetTagsModel } from "./index"

export const AssetModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  date_acquired: z.date(),
  economicLife: z.number().int(),
  qty: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  createdBy: z.string(),
  editedBy: z.string(),
  type: z.nativeEnum(AssetTypes),
  origin: z.nativeEnum(AcquisitionOrigin),
})

export interface CompleteAsset extends z.infer<typeof AssetModel> {
  AssetStatus: CompleteAssetStatus[]
  AssetTags: CompleteAssetTags[]
}

/**
 * RelatedAssetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetModel: z.ZodSchema<CompleteAsset> = z.lazy(() => AssetModel.extend({
  AssetStatus: RelatedAssetStatusModel.array(),
  AssetTags: RelatedAssetTagsModel.array(),
}))
