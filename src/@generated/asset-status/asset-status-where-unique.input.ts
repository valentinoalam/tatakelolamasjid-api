import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetStatusWhereInput } from './asset-status-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AssetRelationFilter } from '../asset/asset-relation-filter.input';

@InputType()
export class AssetStatusWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AssetStatusWhereInput], {nullable:true})
    AND?: Array<AssetStatusWhereInput>;

    @Field(() => [AssetStatusWhereInput], {nullable:true})
    OR?: Array<AssetStatusWhereInput>;

    @Field(() => [AssetStatusWhereInput], {nullable:true})
    NOT?: Array<AssetStatusWhereInput>;

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

    @Field(() => AssetRelationFilter, {nullable:true})
    asset?: AssetRelationFilter;
}
