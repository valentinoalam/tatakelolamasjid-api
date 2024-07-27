import * as z from "zod"
import * as imports from "../null"
import { Role } from "@prisma/client"
import { CompleteUserNotification, RelatedUserNotificationModel, CompletePaymentMethod, RelatedPaymentMethodModel, CompleteMemo, RelatedMemoModel, CompleteProfile, RelatedProfileModel, CompletePosition, RelatedPositionModel, CompleteParticipant, RelatedParticipantModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  emailAddress: z.string(),
  username: z.string(),
  hashedPassword: z.string(),
  api_token: z.string().nullish(),
  isConfirmed: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  role: z.nativeEnum(Role),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  notification: CompleteUserNotification[]
  paymentMethod: CompletePaymentMethod[]
  memo: CompleteMemo[]
  profile?: CompleteProfile | null
  position?: CompletePosition | null
  Participant: CompleteParticipant[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  notification: RelatedUserNotificationModel.array(),
  paymentMethod: RelatedPaymentMethodModel.array(),
  memo: RelatedMemoModel.array(),
  profile: RelatedProfileModel.nullish(),
  position: RelatedPositionModel.nullish(),
  Participant: RelatedParticipantModel.array(),
}))
