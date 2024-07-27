import { registerEnumType } from '@nestjs/graphql';

export enum AssetScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    date_acquired = "date_acquired",
    economicLife = "economicLife",
    qty = "qty",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    editedBy = "editedBy",
    type = "type",
    origin = "origin"
}


registerEnumType(AssetScalarFieldEnum, { name: 'AssetScalarFieldEnum', description: undefined })
