import * as z from "zod"
import * as imports from "../null"
import { CompleteUstadzEvent, RelatedUstadzEventModel } from "./index"

export const UstadzModel = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
})

export interface CompleteUstadz extends z.infer<typeof UstadzModel> {
  attendAs: CompleteUstadzEvent[]
}

/**
 * RelatedUstadzModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUstadzModel: z.ZodSchema<CompleteUstadz> = z.lazy(() => UstadzModel.extend({
  attendAs: RelatedUstadzEventModel.array(),
}))
