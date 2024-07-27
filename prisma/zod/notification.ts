import * as z from "zod"
import * as imports from "../null"
import { NotificationStatus } from "@prisma/client"
import { CompleteUserNotification, RelatedUserNotificationModel } from "./index"

export const NotificationModel = z.object({
  id: z.string(),
  sender: z.string().nullish(),
  title: z.string(),
  message: z.string(),
  photoUrl: z.string().nullish(),
  dtCreated: z.date(),
  isReaded: z.boolean(),
  sentAt: z.date(),
  status: z.nativeEnum(NotificationStatus),
})

export interface CompleteNotification extends z.infer<typeof NotificationModel> {
  receiver: CompleteUserNotification[]
}

/**
 * RelatedNotificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedNotificationModel: z.ZodSchema<CompleteNotification> = z.lazy(() => NotificationModel.extend({
  receiver: RelatedUserNotificationModel.array(),
}))
