import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteEvent, RelatedEventModel } from "./index"

export const PositionModel = z.object({
  id: z.string(),
  userId: z.string(),
  eventId: z.string().nullish(),
  name: z.string(),
  periode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompletePosition extends z.infer<typeof PositionModel> {
  user: CompleteUser
  event?: CompleteEvent | null
}

/**
 * RelatedPositionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPositionModel: z.ZodSchema<CompletePosition> = z.lazy(() => PositionModel.extend({
  user: RelatedUserModel,
  event: RelatedEventModel.nullish(),
}))
