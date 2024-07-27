import * as z from "zod"
import * as imports from "../null"
import { CompleteMedia, RelatedMediaModel } from "./index"

export const ImageModel = z.object({
  id: z.string(),
  mediaId: z.string().nullish(),
  caption: z.string(),
  url: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteImage extends z.infer<typeof ImageModel> {
  container?: CompleteMedia | null
}

/**
 * RelatedImageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedImageModel: z.ZodSchema<CompleteImage> = z.lazy(() => ImageModel.extend({
  container: RelatedMediaModel.nullish(),
}))
