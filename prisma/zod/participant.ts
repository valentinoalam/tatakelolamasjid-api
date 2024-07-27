import * as z from "zod"
import * as imports from "../null"
import { CompleteProfile, RelatedProfileModel, CompleteEmergencyContact, RelatedEmergencyContactModel, CompleteUser, RelatedUserModel, CompleteEvent, RelatedEventModel, CompleteFamilyMember, RelatedFamilyMemberModel } from "./index"

export const ParticipantModel = z.object({
  id: z.string(),
  userId: z.string(),
  eventId: z.string(),
  profileId: z.string(),
  emergencyId: z.string(),
  withFamily: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteParticipant extends z.infer<typeof ParticipantModel> {
  profile: CompleteProfile
  emergencyContact: CompleteEmergencyContact
  user: CompleteUser
  event: CompleteEvent
  member: CompleteFamilyMember[]
}

/**
 * RelatedParticipantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedParticipantModel: z.ZodSchema<CompleteParticipant> = z.lazy(() => ParticipantModel.extend({
  profile: RelatedProfileModel,
  emergencyContact: RelatedEmergencyContactModel,
  user: RelatedUserModel,
  event: RelatedEventModel,
  member: RelatedFamilyMemberModel.array(),
}))
