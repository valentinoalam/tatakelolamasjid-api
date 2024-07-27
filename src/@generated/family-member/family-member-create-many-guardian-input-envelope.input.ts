import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyMemberCreateManyGuardianInput } from './family-member-create-many-guardian.input';
import { Type } from 'class-transformer';

@InputType()
export class FamilyMemberCreateManyGuardianInputEnvelope {

    @Field(() => [FamilyMemberCreateManyGuardianInput], {nullable:false})
    @Type(() => FamilyMemberCreateManyGuardianInput)
    data!: Array<FamilyMemberCreateManyGuardianInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
