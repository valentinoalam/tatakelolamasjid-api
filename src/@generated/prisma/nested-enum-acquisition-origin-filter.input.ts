import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AcquisitionOrigin } from './acquisition-origin.enum';

@InputType()
export class NestedEnumAcquisitionOriginFilter {

    @Field(() => AcquisitionOrigin, {nullable:true})
    equals?: keyof typeof AcquisitionOrigin;

    @Field(() => [AcquisitionOrigin], {nullable:true})
    in?: Array<keyof typeof AcquisitionOrigin>;

    @Field(() => [AcquisitionOrigin], {nullable:true})
    notIn?: Array<keyof typeof AcquisitionOrigin>;

    @Field(() => NestedEnumAcquisitionOriginFilter, {nullable:true})
    not?: NestedEnumAcquisitionOriginFilter;
}
