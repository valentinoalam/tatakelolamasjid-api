import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUstadzArgs {

    @Field(() => UstadzWhereUniqueInput, {nullable:false})
    @Type(() => UstadzWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;
}