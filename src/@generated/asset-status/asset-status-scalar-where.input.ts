import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class AssetStatusScalarWhereInput {

    @Field(() => [AssetStatusScalarWhereInput], {nullable:true})
    AND?: Array<AssetStatusScalarWhereInput>;

    @Field(() => [AssetStatusScalarWhereInput], {nullable:true})
    OR?: Array<AssetStatusScalarWhereInput>;

    @Field(() => [AssetStatusScalarWhereInput], {nullable:true})
    NOT?: Array<AssetStatusScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    assetId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    availableQty?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalQty?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    note?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updatedBy?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
