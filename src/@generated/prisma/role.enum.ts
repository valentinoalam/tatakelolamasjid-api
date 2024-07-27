import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    Admin = "Admin",
    Petugas = "Petugas",
    Member = "Member"
}


registerEnumType(Role, { name: 'Role', description: undefined })
