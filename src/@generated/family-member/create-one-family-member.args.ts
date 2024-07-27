import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberCreateInput } from './family-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFamilyMemberArgs {

    @Field(() => FamilyMemberCreateInput, {nullable:false})
    @Type(() => FamilyMemberCreateInput)
    data!: FamilyMemberCreateInput;
}
