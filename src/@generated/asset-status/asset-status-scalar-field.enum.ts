import { registerEnumType } from '@nestjs/graphql';

export enum AssetStatusScalarFieldEnum {
    id = "id",
    assetId = "assetId",
    availableQty = "availableQty",
    totalQty = "totalQty",
    note = "note",
    updatedBy = "updatedBy",
    updatedAt = "updatedAt"
}


registerEnumType(AssetStatusScalarFieldEnum, { name: 'AssetStatusScalarFieldEnum', description: undefined })
