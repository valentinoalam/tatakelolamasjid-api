import { registerEnumType } from '@nestjs/graphql';

export enum AccountCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AccountCategoryScalarFieldEnum, { name: 'AccountCategoryScalarFieldEnum', description: undefined })
