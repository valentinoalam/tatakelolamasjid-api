import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzCreateInput } from './ustadz-create.input';
import { UstadzUpdateInput } from './ustadz-update.input';

@ArgsType()
export class UpsertOneUstadzArgs {

    @Field(() => UstadzWhereUniqueInput, {nullable:false})
    @Type(() => UstadzWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;

    @Field(() => UstadzCreateInput, {nullable:false})
    @Type(() => UstadzCreateInput)
    create!: UstadzCreateInput;

    @Field(() => UstadzUpdateInput, {nullable:false})
    @Type(() => UstadzUpdateInput)
    update!: UstadzUpdateInput;
}
