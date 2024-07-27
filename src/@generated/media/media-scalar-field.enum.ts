import { registerEnumType } from '@nestjs/graphql';

export enum MediaScalarFieldEnum {
    id = "id"
}


registerEnumType(MediaScalarFieldEnum, { name: 'MediaScalarFieldEnum', description: undefined })
