import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccountCategoryCountAggregate } from './account-category-count-aggregate.output';
import { AccountCategoryMinAggregate } from './account-category-min-aggregate.output';
import { AccountCategoryMaxAggregate } from './account-category-max-aggregate.output';

@ObjectType()
export class AggregateAccountCategory {

    @Field(() => AccountCategoryCountAggregate, {nullable:true})
    _count?: AccountCategoryCountAggregate;

    @Field(() => AccountCategoryMinAggregate, {nullable:true})
    _min?: AccountCategoryMinAggregate;

    @Field(() => AccountCategoryMaxAggregate, {nullable:true})
    _max?: AccountCategoryMaxAggregate;
}
