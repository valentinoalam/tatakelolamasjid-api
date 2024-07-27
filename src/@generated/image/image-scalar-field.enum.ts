import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    id = "id",
    mediaId = "mediaId",
    caption = "caption",
    url = "url",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
