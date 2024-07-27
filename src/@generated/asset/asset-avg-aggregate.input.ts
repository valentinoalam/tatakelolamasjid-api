import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssetAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    economicLife?: true;

    @Field(() => Boolean, {nullable:true})
    qty?: true;
}
