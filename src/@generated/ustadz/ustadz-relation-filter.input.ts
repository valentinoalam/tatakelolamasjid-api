import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';

@InputType()
export class UstadzRelationFilter {

    @Field(() => UstadzWhereInput, {nullable:true})
    is?: UstadzWhereInput;

    @Field(() => UstadzWhereInput, {nullable:true})
    isNot?: UstadzWhereInput;
}
