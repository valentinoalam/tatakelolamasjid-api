import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteParticipant, RelatedParticipantModel } from "./index"

export const ProfileModel = z.object({
  id: z.string(),
  userId: z.string(),
  dtBirth: z.date(),
  isMan: z.boolean(),
  address: z.string(),
  domisili: z.string().nullish(),
  fullname: z.string(),
  phone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteProfile extends z.infer<typeof ProfileModel> {
  user: CompleteUser
  Participant: CompleteParticipant[]
}

/**
 * RelatedProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProfileModel: z.ZodSchema<CompleteProfile> = z.lazy(() => ProfileModel.extend({
  user: RelatedUserModel,
  Participant: RelatedParticipantModel.array(),
}))
