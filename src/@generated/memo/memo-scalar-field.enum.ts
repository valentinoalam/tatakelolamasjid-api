import { registerEnumType } from '@nestjs/graphql';

export enum MemoScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    body = "body",
    is_done = "is_done",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MemoScalarFieldEnum, { name: 'MemoScalarFieldEnum', description: undefined })
