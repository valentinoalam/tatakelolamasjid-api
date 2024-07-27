import * as z from "zod"
import * as imports from "../null"
import { CompleteUstadz, RelatedUstadzModel, CompleteEvent, RelatedEventModel } from "./index"

export const UstadzEventModel = z.object({
  id: z.string(),
  ustadzId: z.string(),
  eventId: z.string(),
})

export interface CompleteUstadzEvent extends z.infer<typeof UstadzEventModel> {
  Ustadz: CompleteUstadz
  Event: CompleteEvent
}

/**
 * RelatedUstadzEventModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUstadzEventModel: z.ZodSchema<CompleteUstadzEvent> = z.lazy(() => UstadzEventModel.extend({
  Ustadz: RelatedUstadzModel,
  Event: RelatedEventModel,
}))
