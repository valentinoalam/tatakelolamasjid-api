import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyMemberCreateManyInput } from './family-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFamilyMemberArgs {

    @Field(() => [FamilyMemberCreateManyInput], {nullable:false})
    @Type(() => FamilyMemberCreateManyInput)
    data!: Array<FamilyMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
