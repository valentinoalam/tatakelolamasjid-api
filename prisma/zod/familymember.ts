import * as z from "zod"
import * as imports from "../null"
import { CompleteParticipant, RelatedParticipantModel } from "./index"

export const FamilyMemberModel = z.object({
  id: z.string(),
  participantId: z.string(),
  name: z.string(),
  information: z.string(),
  relationType: z.string(),
})

export interface CompleteFamilyMember extends z.infer<typeof FamilyMemberModel> {
  guardian: CompleteParticipant
}

/**
 * RelatedFamilyMemberModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFamilyMemberModel: z.ZodSchema<CompleteFamilyMember> = z.lazy(() => FamilyMemberModel.extend({
  guardian: RelatedParticipantModel,
}))
