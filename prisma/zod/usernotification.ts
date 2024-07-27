import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteNotification, RelatedNotificationModel } from "./index"

export const UserNotificationModel = z.object({
  id: z.string(),
  userId: z.string(),
  notification_id: z.string(),
})

export interface CompleteUserNotification extends z.infer<typeof UserNotificationModel> {
  user: CompleteUser
  notif: CompleteNotification
}

/**
 * RelatedUserNotificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserNotificationModel: z.ZodSchema<CompleteUserNotification> = z.lazy(() => UserNotificationModel.extend({
  user: RelatedUserModel,
  notif: RelatedNotificationModel,
}))
