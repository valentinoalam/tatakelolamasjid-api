import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberWhereInput } from './family-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFamilyMemberArgs {

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    @Type(() => FamilyMemberWhereInput)
    where?: FamilyMemberWhereInput;
}
