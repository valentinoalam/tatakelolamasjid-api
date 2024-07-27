import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzUpdateManyMutationInput } from './ustadz-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UstadzWhereInput } from './ustadz-where.input';

@ArgsType()
export class UpdateManyUstadzArgs {

    @Field(() => UstadzUpdateManyMutationInput, {nullable:false})
    @Type(() => UstadzUpdateManyMutationInput)
    data!: UstadzUpdateManyMutationInput;

    @Field(() => UstadzWhereInput, {nullable:true})
    @Type(() => UstadzWhereInput)
    where?: UstadzWhereInput;
}
