import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    emailAddress = "emailAddress",
    username = "username",
    hashedPassword = "hashedPassword",
    api_token = "api_token",
    isConfirmed = "isConfirmed",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    role = "role"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
