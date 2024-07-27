import { registerEnumType } from '@nestjs/graphql';

export enum AssetTagsScalarFieldEnum {
    id = "id",
    assetId = "assetId",
    tagId = "tagId"
}


registerEnumType(AssetTagsScalarFieldEnum, { name: 'AssetTagsScalarFieldEnum', description: undefined })
