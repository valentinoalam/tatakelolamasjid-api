import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyMemberScalarWhereInput } from './family-member-scalar-where.input';
import { Type } from 'class-transformer';
import { FamilyMemberUpdateManyMutationInput } from './family-member-update-many-mutation.input';

@InputType()
export class FamilyMemberUpdateManyWithWhereWithoutGuardianInput {

    @Field(() => FamilyMemberScalarWhereInput, {nullable:false})
    @Type(() => FamilyMemberScalarWhereInput)
    where!: FamilyMemberScalarWhereInput;

    @Field(() => FamilyMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => FamilyMemberUpdateManyMutationInput)
    data!: FamilyMemberUpdateManyMutationInput;
}
