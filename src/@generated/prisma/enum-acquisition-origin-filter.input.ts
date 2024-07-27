import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AcquisitionOrigin } from './acquisition-origin.enum';
import { NestedEnumAcquisitionOriginFilter } from './nested-enum-acquisition-origin-filter.input';

@InputType()
export class EnumAcquisitionOriginFilter {

    @Field(() => AcquisitionOrigin, {nullable:true})
    equals?: keyof typeof AcquisitionOrigin;

    @Field(() => [AcquisitionOrigin], {nullable:true})
    in?: Array<keyof typeof AcquisitionOrigin>;

    @Field(() => [AcquisitionOrigin], {nullable:true})
    notIn?: Array<keyof typeof AcquisitionOrigin>;

    @Field(() => NestedEnumAcquisitionOriginFilter, {nullable:true})
    not?: NestedEnumAcquisitionOriginFilter;
}
