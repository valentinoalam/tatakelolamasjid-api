import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberUpdateManyMutationInput } from './family-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FamilyMemberWhereInput } from './family-member-where.input';

@ArgsType()
export class UpdateManyFamilyMemberArgs {

    @Field(() => FamilyMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => FamilyMemberUpdateManyMutationInput)
    data!: FamilyMemberUpdateManyMutationInput;

    @Field(() => FamilyMemberWhereInput, {nullable:true})
    @Type(() => FamilyMemberWhereInput)
    where?: FamilyMemberWhereInput;
}
