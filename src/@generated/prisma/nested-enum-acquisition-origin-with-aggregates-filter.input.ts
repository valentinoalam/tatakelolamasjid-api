import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AcquisitionOrigin } from './acquisition-origin.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAcquisitionOriginFilter } from './nested-enum-acquisition-origin-filter.input';

@InputType()
export class NestedEnumAcquisitionOriginWithAggregatesFilter {

    @Field(() => AcquisitionOrigin, {nullable:true})
    equals?: keyof typeof AcquisitionOrigin;

    @Field(() => [AcquisitionOrigin], {nullable:true})
    in?: Array<keyof typeof AcquisitionOrigin>;

    @Field(() => [AcquisitionOrigin], {nullable:true})
    notIn?: Array<keyof typeof AcquisitionOrigin>;

    @Field(() => NestedEnumAcquisitionOriginWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAcquisitionOriginWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAcquisitionOriginFilter, {nullable:true})
    _min?: NestedEnumAcquisitionOriginFilter;

    @Field(() => NestedEnumAcquisitionOriginFilter, {nullable:true})
    _max?: NestedEnumAcquisitionOriginFilter;
}
