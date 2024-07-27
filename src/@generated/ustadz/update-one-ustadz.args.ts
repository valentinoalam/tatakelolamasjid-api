import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzUpdateInput } from './ustadz-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';

@ArgsType()
export class UpdateOneUstadzArgs {

    @Field(() => UstadzUpdateInput, {nullable:false})
    @Type(() => UstadzUpdateInput)
    data!: UstadzUpdateInput;

    @Field(() => UstadzWhereUniqueInput, {nullable:false})
    @Type(() => UstadzWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;
}
