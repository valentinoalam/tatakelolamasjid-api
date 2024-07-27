import { registerEnumType } from '@nestjs/graphql';

export enum AssetTypes {
    Fixed = "Fixed",
    NonFixed = "NonFixed",
    Current = "Current",
    NonCurrent = "NonCurrent"
}


registerEnumType(AssetTypes, { name: 'AssetTypes', description: undefined })
