import * as z from "zod"
import * as imports from "../null"
import { Period } from "@prisma/client"
import { CompleteParticipant, RelatedParticipantModel, CompletePosition, RelatedPositionModel, CompleteUstadzEvent, RelatedUstadzEventModel } from "./index"

export const EventModel = z.object({
  id: z.string(),
  name: z.string(),
  place: z.string(),
  dtStart: z.date(),
  dtEnd: z.date(),
  quota: z.number().int(),
  description: z.string(),
  heldPeriod: z.nativeEnum(Period),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  createdBy: z.string(),
})

export interface CompleteEvent extends z.infer<typeof EventModel> {
  participant: CompleteParticipant[]
  crews: CompletePosition[]
  speakers: CompleteUstadzEvent[]
}

/**
 * RelatedEventModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEventModel: z.ZodSchema<CompleteEvent> = z.lazy(() => EventModel.extend({
  participant: RelatedParticipantModel.array(),
  crews: RelatedPositionModel.array(),
  speakers: RelatedUstadzEventModel.array(),
}))
