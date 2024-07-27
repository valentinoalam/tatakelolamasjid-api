import * as z from "zod"
import * as imports from "../null"
import { CompleteParticipant, RelatedParticipantModel } from "./index"

export const EmergencyContactModel = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  relationType: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteEmergencyContact extends z.infer<typeof EmergencyContactModel> {
  Participant: CompleteParticipant[]
}

/**
 * RelatedEmergencyContactModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEmergencyContactModel: z.ZodSchema<CompleteEmergencyContact> = z.lazy(() => EmergencyContactModel.extend({
  Participant: RelatedParticipantModel.array(),
}))
